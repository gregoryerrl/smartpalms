import * as server from '../entries/pages/register/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.DEgY_DHt.js","_app/immutable/chunks/disclose-version.I8z8isMk.js","_app/immutable/chunks/runtime.YJoNIFdn.js","_app/immutable/chunks/legacy.Bazr9neG.js","_app/immutable/chunks/render.5dsiK0Wy.js","_app/immutable/chunks/props.dI44a9Jc.js","_app/immutable/chunks/index-client.CgcAdTEg.js","_app/immutable/chunks/Input.6ZEBkJfS.js","_app/immutable/chunks/forms.ww5sfZn7.js","_app/immutable/chunks/entry.-R9MIhTf.js"];
export const stylesheets = [];
export const fonts = [];