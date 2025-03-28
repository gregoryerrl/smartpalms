// src/hooks.server.ts
import type {Handle} from "@sveltejs/kit";
import {db} from "$lib/server/db";
import {users} from "$lib/server/db/schema";
import {eq} from "drizzle-orm";

export const handle: Handle = async ({event, resolve}) => {
  // Handle CORS for external API endpoints
  if (
    event.url.pathname.startsWith("/api/access/authenticated") ||
    event.url.pathname.startsWith("/api/access/direct") ||
    // Keep old paths temporarily for backward compatibility
    event.url.pathname.startsWith("/api/lockers/external") ||
    event.url.pathname.startsWith("/api/access/external")
  ) {
    if (event.request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }

    const response = await resolve(event);
    const headers = new Headers(response.headers);
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }

  // Handle session for other routes
  const session = event.cookies.get("session");

  if (!session) {
    return await resolve(event);
  }

  const user = await db.query.users.findFirst({
    where: eq(users.id, session),
    columns: {
      id: true,
      email: true,
      name: true,
      type: true,
    },
  });

  if (user) {
    event.locals.user = {
      id: user.id,
      email: user.email,
      name: user.name,
      type: user.type,
    };
  }

  return await resolve(event);
};
