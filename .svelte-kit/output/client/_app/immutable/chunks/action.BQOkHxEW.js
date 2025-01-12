import { p as g, q as w, t as O } from "./index-client.CvPjOW-w.js";
const P = [];
function C(t, n = !1) {
  return m(t, new Map(), "", P);
}
function m(t, n, r, u, f = null) {
  if (typeof t == "object" && t !== null) {
    var i = n.get(t);
    if (i !== void 0) return i;
    if (t instanceof Map) return new Map(t);
    if (t instanceof Set) return new Set(t);
    if (g(t)) {
      var e = Array(t.length);
      n.set(t, e), f !== null && n.set(f, e);
      for (var c = 0; c < t.length; c += 1) {
        var S = t[c];
        c in t && (e[c] = m(S, n, r, u));
      }
      return e;
    }
    if (w(t) === O) {
      (e = {}), n.set(t, e), f !== null && n.set(f, e);
      for (var _ in t) e[_] = m(t[_], n, r, u);
      return e;
    }
    if (t instanceof Date) return structuredClone(t);
    if (typeof t.toJSON == "function") return m(t.toJSON(), n, r, u, t);
  }
  if (t instanceof EventTarget) return t;
  try {
    return structuredClone(t);
  } catch {
    return t;
  }
}
const s = (t) => "mount" in t,
  M = (t) => "open" in t,
  J = (t, n) => {
    var r, u;
    return (
      s(n)
        ? (r = n.mount) == null || r.call(n, t, n.props)
        : M(n) && ((u = n.open) == null || u.call(n, n.props)),
      {
        update: ({ props: f }) => {
          var i;
          s(n) &&
            ((i = n.updateProps) == null || i.call(n, { node: t, props: f }));
        },
        destroy: () => {
          var f, i;
          s(n)
            ? (f = n.unmount) == null || f.call(n, t)
            : M(n) && ((i = n.close) == null || i.call(n));
        },
      }
    );
  };
export { J as c, C as s };
