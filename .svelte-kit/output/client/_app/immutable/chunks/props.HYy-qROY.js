import {
  S as I,
  t as k,
  z as ee,
  A as y,
  B as re,
  C as w,
  D as O,
  U as v,
  g as h,
  E as q,
  F as ne,
  q as se,
  p as ie,
  G as te,
  H as K,
  I as fe,
  J as ae,
  K as ue,
  L as le,
  M as ce,
  N as Y,
  O as M,
  P as U,
  Q as j,
  R as de,
  h as oe,
  i as _e,
  b as C,
  T as ve,
  V as pe,
  W as Q,
  n as G,
  k as be,
  X as he,
  Y as we,
  Z as Pe,
  _ as H,
  $ as ye,
  a0 as ge,
  a1 as Re,
  a2 as W,
  a3 as xe,
  f as Z,
  a4 as Ee,
  a5 as X,
  a6 as Ie,
  a7 as Oe,
  a8 as Se,
  a9 as $,
  aa as D,
} from "./index-client.CvPjOW-w.js";
function E(e, r = null, t) {
  if (typeof e != "object" || e === null || I in e) return e;
  const s = se(e);
  if (s !== k && s !== ee) return e;
  var i = new Map(),
    l = ie(e),
    p = y(0);
  l && i.set("length", y(e.length));
  var P;
  return new Proxy(e, {
    defineProperty(c, n, f) {
      (!("value" in f) ||
        f.configurable === !1 ||
        f.enumerable === !1 ||
        f.writable === !1) &&
        re();
      var u = i.get(n);
      return (
        u === void 0 ? ((u = y(f.value)), i.set(n, u)) : w(u, E(f.value, P)), !0
      );
    },
    deleteProperty(c, n) {
      var f = i.get(n);
      if (f === void 0) n in c && i.set(n, y(v));
      else {
        if (l && typeof n == "string") {
          var u = i.get("length"),
            a = Number(n);
          Number.isInteger(a) && a < u.v && w(u, a);
        }
        w(f, v), z(p);
      }
      return !0;
    },
    get(c, n, f) {
      var _;
      if (n === I) return e;
      var u = i.get(n),
        a = n in c;
      if (
        (u === void 0 &&
          (!a || ((_ = O(c, n)) != null && _.writable)) &&
          ((u = y(E(a ? c[n] : v, P))), i.set(n, u)),
        u !== void 0)
      ) {
        var d = h(u);
        return d === v ? void 0 : d;
      }
      return Reflect.get(c, n, f);
    },
    getOwnPropertyDescriptor(c, n) {
      var f = Reflect.getOwnPropertyDescriptor(c, n);
      if (f && "value" in f) {
        var u = i.get(n);
        u && (f.value = h(u));
      } else if (f === void 0) {
        var a = i.get(n),
          d = a == null ? void 0 : a.v;
        if (a !== void 0 && d !== v)
          return { enumerable: !0, configurable: !0, value: d, writable: !0 };
      }
      return f;
    },
    has(c, n) {
      var d;
      if (n === I) return !0;
      var f = i.get(n),
        u = (f !== void 0 && f.v !== v) || Reflect.has(c, n);
      if (
        f !== void 0 ||
        (q !== null && (!u || ((d = O(c, n)) != null && d.writable)))
      ) {
        f === void 0 && ((f = y(u ? E(c[n], P) : v)), i.set(n, f));
        var a = h(f);
        if (a === v) return !1;
      }
      return u;
    },
    set(c, n, f, u) {
      var R;
      var a = i.get(n),
        d = n in c;
      if (l && n === "length")
        for (var _ = f; _ < a.v; _ += 1) {
          var g = i.get(_ + "");
          g !== void 0 ? w(g, v) : _ in c && ((g = y(v)), i.set(_ + "", g));
        }
      a === void 0
        ? (!d || ((R = O(c, n)) != null && R.writable)) &&
          ((a = y(void 0)), w(a, E(f, P)), i.set(n, a))
        : ((d = a.v !== v), w(a, E(f, P)));
      var b = Reflect.getOwnPropertyDescriptor(c, n);
      if ((b != null && b.set && b.set.call(u, f), !d)) {
        if (l && typeof n == "string") {
          var S = i.get("length"),
            T = Number(n);
          Number.isInteger(T) && T >= S.v && w(S, T + 1);
        }
        z(p);
      }
      return !0;
    },
    ownKeys(c) {
      h(p);
      var n = Reflect.ownKeys(c).filter((a) => {
        var d = i.get(a);
        return d === void 0 || d.v !== v;
      });
      for (var [f, u] of i) u.v !== v && !(f in c) && n.push(f);
      return n;
    },
    setPrototypeOf() {
      ne();
    },
  });
}
function z(e, r = 1) {
  w(e, e.v + r);
}
function Ke(e, r, t = !1) {
  K && fe();
  var s = e,
    i = null,
    l = null,
    p = v,
    P = t ? ae : 0,
    c = !1;
  const n = (u, a = !0) => {
      (c = !0), f(a, u);
    },
    f = (u, a) => {
      if (p === (p = u)) return;
      let d = !1;
      if (K) {
        const _ = s.data === ue;
        !!p === _ && ((s = le()), ce(s), Y(!1), (d = !0));
      }
      p
        ? (i ? M(i) : a && (i = U(() => a(s))),
          l &&
            j(l, () => {
              l = null;
            }))
        : (l ? M(l) : a && (l = U(() => a(s))),
          i &&
            j(i, () => {
              i = null;
            })),
        d && Y(!0);
    };
  te(() => {
    (c = !1), r(n), c || f(null, null);
  }, P),
    K && (s = de);
}
function V(e, r) {
  return e === r || (e == null ? void 0 : e[I]) === r;
}
function qe(e = {}, r, t, s) {
  return (
    oe(() => {
      var i, l;
      return (
        _e(() => {
          (i = l),
            (l = []),
            C(() => {
              e !== t(...l) &&
                (r(e, ...l), i && V(t(...i), e) && r(null, ...i));
            });
        }),
        () => {
          ve(() => {
            l && V(t(...l), e) && r(null, ...l);
          });
        }
      );
    }),
    e
  );
}
let N = !1;
function Ce(e, r, t) {
  const s = t[r] ?? (t[r] = { store: null, source: Q(void 0), unsubscribe: G });
  if (s.store !== e)
    if ((s.unsubscribe(), (s.store = e ?? null), e == null))
      (s.source.v = void 0), (s.unsubscribe = G);
    else {
      var i = !0;
      (s.unsubscribe = be(e, (l) => {
        i ? (s.source.v = l) : w(s.source, l);
      })),
        (i = !1);
    }
  return h(s.source);
}
function Fe() {
  const e = {};
  return (
    pe(() => {
      for (var r in e) e[r].unsubscribe();
    }),
    e
  );
}
function Te(e) {
  var r = N;
  try {
    return (N = !1), [e(), N];
  } finally {
    N = r;
  }
}
const Ae = {
  get(e, r) {
    if (!e.exclude.includes(r)) return e.props[r];
  },
  set(e, r) {
    return !1;
  },
  getOwnPropertyDescriptor(e, r) {
    if (!e.exclude.includes(r) && r in e.props)
      return { enumerable: !0, configurable: !0, value: e.props[r] };
  },
  has(e, r) {
    return e.exclude.includes(r) ? !1 : r in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((r) => !e.exclude.includes(r));
  },
};
function Be(e, r, t) {
  return new Proxy({ props: e, exclude: r }, Ae);
}
const De = {
  get(e, r) {
    if (!e.exclude.includes(r))
      return h(e.version), r in e.special ? e.special[r]() : e.props[r];
  },
  set(e, r, t) {
    return (
      r in e.special ||
        (e.special[r] = me(
          {
            get [r]() {
              return e.props[r];
            },
          },
          r,
          X,
        )),
      e.special[r](t),
      $(e.version),
      !0
    );
  },
  getOwnPropertyDescriptor(e, r) {
    if (!e.exclude.includes(r) && r in e.props)
      return { enumerable: !0, configurable: !0, value: e.props[r] };
  },
  deleteProperty(e, r) {
    return e.exclude.includes(r) || (e.exclude.push(r), $(e.version)), !0;
  },
  has(e, r) {
    return e.exclude.includes(r) ? !1 : r in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((r) => !e.exclude.includes(r));
  },
};
function Ye(e, r) {
  return new Proxy({ props: e, exclude: r, special: {}, version: y(0) }, De);
}
const Ne = {
  get(e, r) {
    let t = e.props.length;
    for (; t--; ) {
      let s = e.props[t];
      if ((D(s) && (s = s()), typeof s == "object" && s !== null && r in s))
        return s[r];
    }
  },
  set(e, r, t) {
    let s = e.props.length;
    for (; s--; ) {
      let i = e.props[s];
      D(i) && (i = i());
      const l = O(i, r);
      if (l && l.set) return l.set(t), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, r) {
    let t = e.props.length;
    for (; t--; ) {
      let s = e.props[t];
      if ((D(s) && (s = s()), typeof s == "object" && s !== null && r in s)) {
        const i = O(s, r);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(e, r) {
    if (r === I || r === W) return !1;
    for (let t of e.props)
      if ((D(t) && (t = t()), t != null && r in t)) return !0;
    return !1;
  },
  ownKeys(e) {
    const r = [];
    for (let t of e.props) {
      D(t) && (t = t());
      for (const s in t) r.includes(s) || r.push(s);
    }
    return r;
  },
};
function Me(...e) {
  return new Proxy({ props: e }, Ne);
}
function J(e) {
  for (var r = q, t = q; r !== null && !(r.f & (we | Pe)); ) r = r.parent;
  try {
    return H(r), e();
  } finally {
    H(t);
  }
}
function me(e, r, t, s) {
  var B;
  var i = (t & Oe) !== 0,
    l = !ye || (t & ge) !== 0,
    p = (t & Re) !== 0,
    P = (t & Se) !== 0,
    c = !1,
    n;
  p ? ([n, c] = Te(() => e[r])) : (n = e[r]);
  var f = I in e || W in e,
    u =
      ((B = O(e, r)) == null ? void 0 : B.set) ??
      (f && p && r in e ? (o) => (e[r] = o) : void 0),
    a = s,
    d = !0,
    _ = !1,
    g = () => ((_ = !0), d && ((d = !1), P ? (a = C(s)) : (a = s)), a);
  n === void 0 && s !== void 0 && (u && l && xe(), (n = g()), u && u(n));
  var b;
  if (l)
    b = () => {
      var o = e[r];
      return o === void 0 ? g() : ((d = !0), (_ = !1), o);
    };
  else {
    var S = J(() => (i ? Z : Ee)(() => e[r]));
    (S.f |= he),
      (b = () => {
        var o = h(S);
        return o !== void 0 && (a = void 0), o === void 0 ? a : o;
      });
  }
  if (!(t & X)) return b;
  if (u) {
    var T = e.$$legacy;
    return function (o, x) {
      return arguments.length > 0
        ? ((!l || !x || T || c) && u(x ? b() : o), o)
        : b();
    };
  }
  var R = !1,
    F = !1,
    m = Q(n),
    A = J(() =>
      Z(() => {
        var o = b(),
          x = h(m);
        return R ? ((R = !1), (F = !0), x) : ((F = !1), (m.v = o));
      }),
    );
  return (
    i || (A.equals = Ie),
    function (o, x) {
      if (arguments.length > 0) {
        const L = x ? h(A) : l && p ? E(o) : o;
        return (
          A.equals(L) ||
            ((R = !0), w(m, L), _ && a !== void 0 && (a = L), C(() => h(A))),
          o
        );
      }
      return h(A);
    }
  );
}
export {
  Ce as a,
  me as b,
  qe as c,
  Me as d,
  Ke as i,
  Ye as l,
  E as p,
  Be as r,
  Fe as s,
};
