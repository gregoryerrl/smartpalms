import { n as f, k as _, d as m, s as q } from "./index-client.CvPjOW-w.js";
const a = [];
function x(e, t) {
  return { subscribe: z(e, t).subscribe };
}
function z(e, t = f) {
  let n = null;
  const u = new Set();
  function i(r) {
    if (q(e, r) && ((e = r), n)) {
      const o = !a.length;
      for (const s of u) s[1](), a.push(s, e);
      if (o) {
        for (let s = 0; s < a.length; s += 2) a[s][0](a[s + 1]);
        a.length = 0;
      }
    }
  }
  function l(r) {
    i(r(e));
  }
  function b(r, o = f) {
    const s = [r, o];
    return (
      u.add(s),
      u.size === 1 && (n = t(i, l) || f),
      r(e),
      () => {
        u.delete(s), u.size === 0 && n && (n(), (n = null));
      }
    );
  }
  return { set: i, update: l, subscribe: b };
}
function k(e, t, n) {
  const u = !Array.isArray(e),
    i = u ? [e] : e;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const l = t.length < 2;
  return x(n, (b, r) => {
    let o = !1;
    const s = [];
    let d = 0,
      p = f;
    const y = () => {
        if (d) return;
        p();
        const c = t(u ? s[0] : s, b, r);
        l ? b(c) : (p = typeof c == "function" ? c : f);
      },
      h = i.map((c, g) =>
        _(
          c,
          (w) => {
            (s[g] = w), (d &= ~(1 << g)), o && y();
          },
          () => {
            d |= 1 << g;
          },
        ),
      );
    return (
      (o = !0),
      y(),
      function () {
        m(h), p(), (o = !1);
      }
    );
  });
}
function v(e) {
  return { subscribe: e.subscribe.bind(e) };
}
function B(e) {
  let t;
  return _(e, (n) => (t = n))(), t;
}
export { v as a, k as d, B as g, x as r, z as w };
