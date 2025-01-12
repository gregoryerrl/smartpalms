import {
  T as Ze,
  G as $e,
  H as j,
  I as ge,
  p as et,
  au as tt,
  K as Pt,
  L as Ie,
  M as ce,
  N as ue,
  R as Q,
  aB as be,
  O as Te,
  P as ze,
  Q as rt,
  E as Ae,
  aC as je,
  aD as Ot,
  at as It,
  aE as jt,
  ax as nt,
  aj as ot,
  ai as st,
  aq as Gt,
  ah as Lt,
  aF as Re,
  aG as Ne,
  W as Vt,
  A as Ge,
  aH as at,
  aI as Ft,
  aJ as Bt,
  ao as Dt,
  J as Wt,
  aK as _e,
  q as Ht,
  aL as Ut,
  aM as Kt,
  aA as qt,
  v as it,
  w as $,
  y as lt,
  x as Le,
  g as ct,
  a4 as ut,
} from "./index-client.CvPjOW-w.js";
import {
  f as Jt,
  i as Xt,
  g as Ve,
  j as Yt,
  k as Qt,
  d as Zt,
  n as $t,
  l as er,
  c as ee,
  a as te,
  e as O,
} from "./disclose-version.CkmQrO1S.js";
import "./legacy.4sU8tFht.js";
import { i as dt } from "./lifecycle.DnaYePt7.js";
import {
  l as he,
  b as Z,
  i as tr,
  c as Fe,
  d as rr,
} from "./props.HYy-qROY.js";
import { d as ft, g as pt, w as nr, r as re } from "./index.CU3wpBA0.js";
import { a as or } from "./actions.ChP2t6HX.js";
function sr(e, t) {
  if (t) {
    const r = document.body;
    (e.autofocus = !0),
      Ze(() => {
        document.activeElement === r && e.focus();
      });
  }
}
function xn(e, t) {
  return t;
}
function ar(e, t, r, n) {
  for (var a = [], o = t.length, i = 0; i < o; i++) Ot(t[i].e, a, !0);
  var s = o > 0 && a.length === 0 && r !== null;
  if (s) {
    var l = r.parentNode;
    It(l), l.append(r), n.clear(), X(e, t[0].prev, t[o - 1].next);
  }
  jt(a, () => {
    for (var u = 0; u < o; u++) {
      var b = t[u];
      s || (n.delete(b.k), X(e, b.prev, b.next)), nt(b.e, !s);
    }
  });
}
function An(e, t, r, n, a, o = null) {
  var i = e,
    s = { flags: t, items: new Map(), first: null },
    l = (t & at) !== 0;
  if (l) {
    var u = e;
    i = j ? ce(ot(u)) : u.appendChild(st());
  }
  j && ge();
  var b = null,
    x = !1;
  $e(() => {
    var w = r(),
      y = et(w) ? w : w == null ? [] : tt(w),
      v = y.length;
    if (x && v === 0) return;
    x = v === 0;
    let p = !1;
    if (j) {
      var h = i.data === Pt;
      h !== (v === 0) && ((i = Ie()), ce(i), ue(!1), (p = !0));
    }
    if (j) {
      for (var c = null, f, E = 0; E < v; E++) {
        if (Q.nodeType === 8 && Q.data === Gt) {
          (i = Q), (p = !0), ue(!1);
          break;
        }
        var S = y[E],
          d = n(S, E);
        (f = bt(Q, s, c, null, S, d, E, a, t)), s.items.set(d, f), (c = f);
      }
      v > 0 && ce(Ie());
    }
    if (!j) {
      var m = Lt;
      ir(y, s, i, a, t, (m.f & be) !== 0, n);
    }
    o !== null &&
      (v === 0
        ? b
          ? Te(b)
          : (b = ze(() => o(i)))
        : b !== null &&
          rt(b, () => {
            b = null;
          })),
      p && ue(!0),
      r();
  }),
    j && (i = Q);
}
function ir(e, t, r, n, a, o, i, s) {
  var M, C, T, z;
  var l = (a & Ft) !== 0,
    u = (a & (Re | Ne)) !== 0,
    b = e.length,
    x = t.items,
    w = t.first,
    y = w,
    v,
    p = null,
    h,
    c = [],
    f = [],
    E,
    S,
    d,
    m;
  if (l)
    for (m = 0; m < b; m += 1)
      (E = e[m]),
        (S = i(E, m)),
        (d = x.get(S)),
        d !== void 0 &&
          ((M = d.a) == null || M.measure(), (h ?? (h = new Set())).add(d));
  for (m = 0; m < b; m += 1) {
    if (((E = e[m]), (S = i(E, m)), (d = x.get(S)), d === void 0)) {
      var B = y ? y.e.nodes_start : r;
      (p = bt(B, t, p, p === null ? t.first : p.next, E, S, m, n, a)),
        x.set(S, p),
        (c = []),
        (f = []),
        (y = p.next);
      continue;
    }
    if (
      (u && lr(d, E, m, a),
      d.e.f & be &&
        (Te(d.e),
        l &&
          ((C = d.a) == null || C.unfix(), (h ?? (h = new Set())).delete(d))),
      d !== y)
    ) {
      if (v !== void 0 && v.has(d)) {
        if (c.length < f.length) {
          var D = f[0],
            L;
          p = D.prev;
          var K = c[0],
            W = c[c.length - 1];
          for (L = 0; L < c.length; L += 1) Be(c[L], D, r);
          for (L = 0; L < f.length; L += 1) v.delete(f[L]);
          X(t, K.prev, W.next),
            X(t, p, K),
            X(t, W, D),
            (y = D),
            (p = W),
            (m -= 1),
            (c = []),
            (f = []);
        } else
          v.delete(d),
            Be(d, y, r),
            X(t, d.prev, d.next),
            X(t, d, p === null ? t.first : p.next),
            X(t, p, d),
            (p = d);
        continue;
      }
      for (c = [], f = []; y !== null && y.k !== S; )
        (o || !(y.e.f & be)) && (v ?? (v = new Set())).add(y),
          f.push(y),
          (y = y.next);
      if (y === null) continue;
      d = y;
    }
    c.push(d), (p = d), (y = d.next);
  }
  if (y !== null || v !== void 0) {
    for (var g = v === void 0 ? [] : tt(v); y !== null; )
      (o || !(y.e.f & be)) && g.push(y), (y = y.next);
    var k = g.length;
    if (k > 0) {
      var _ = a & at && b === 0 ? r : null;
      if (l) {
        for (m = 0; m < k; m += 1) (T = g[m].a) == null || T.measure();
        for (m = 0; m < k; m += 1) (z = g[m].a) == null || z.fix();
      }
      ar(t, g, _, x);
    }
  }
  l &&
    Ze(() => {
      var R;
      if (h !== void 0) for (d of h) (R = d.a) == null || R.apply();
    }),
    (Ae.first = t.first && t.first.e),
    (Ae.last = p && p.e);
}
function lr(e, t, r, n) {
  n & Re && je(e.v, t), n & Ne ? je(e.i, r) : (e.i = r);
}
function bt(e, t, r, n, a, o, i, s, l, u) {
  var b = (l & Re) !== 0,
    x = (l & Bt) === 0,
    w = b ? (x ? Vt(a) : Ge(a)) : a,
    y = l & Ne ? Ge(i) : i,
    v = { i: y, v: w, k: o, a: null, e: null, prev: r, next: n };
  try {
    return (
      (v.e = ze(() => s(e, w, y), j)),
      (v.e.prev = r && r.e),
      (v.e.next = n && n.e),
      r === null ? (t.first = v) : ((r.next = v), (r.e.next = v.e)),
      n !== null && ((n.prev = v), (n.e.prev = v.e)),
      v
    );
  } finally {
  }
}
function Be(e, t, r) {
  for (
    var n = e.next ? e.next.e.nodes_start : r,
      a = t ? t.e.nodes_start : r,
      o = e.e.nodes_start;
    o !== n;

  ) {
    var i = Dt(o);
    a.before(o), (o = i);
  }
}
function X(e, t, r) {
  t === null ? (e.first = r) : ((t.next = r), (t.e.next = r && r.e)),
    r !== null && ((r.prev = t), (r.e.prev = t && t.e));
}
function ke(e, t, r, n, a) {
  var s;
  j && ge();
  var o = (s = t.$$slots) == null ? void 0 : s[r],
    i = !1;
  o === !0 && ((o = t.children), (i = !0)),
    o === void 0 || o(e, i ? () => n : n);
}
function De(e, t, r, n, a, o) {
  let i = j;
  j && ge();
  var s,
    l,
    u = null;
  j && Q.nodeType === 1 && ((u = Q), ge());
  var b = j ? Q : e,
    x;
  $e(() => {
    const w = t() || null;
    var y = r || w === "svg" ? _e : null;
    w !== s &&
      (x &&
        (w === null
          ? rt(x, () => {
              (x = null), (l = null);
            })
          : w === l
            ? Te(x)
            : (nt(x), Ve(!1))),
      w &&
        w !== l &&
        (x = ze(() => {
          if (
            ((u = j
              ? u
              : y
                ? document.createElementNS(y, w)
                : document.createElement(w)),
            Jt(u, u),
            n)
          ) {
            j && Xt(w) && u.append(document.createComment(""));
            var v = j ? ot(u) : u.appendChild(st());
            j && (v === null ? ue(!1) : ce(v)), n(u, v);
          }
          (Ae.nodes_end = u), b.before(u);
        })),
      (s = w),
      s && (l = s),
      Ve(!0));
  }, Wt),
    i && (ue(!0), ce(b));
}
function gt(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++)
        e[t] && (r = gt(e[t])) && (n && (n += " "), (n += r));
    } else for (r in e) e[r] && (n && (n += " "), (n += r));
  return n;
}
function ht() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++)
    (e = arguments[r]) && (t = gt(e)) && (n && (n += " "), (n += t));
  return n;
}
function cr(e) {
  return typeof e == "object" ? ht(e) : (e ?? "");
}
function ur(e, t) {
  t
    ? e.hasAttribute("selected") || e.setAttribute("selected", "")
    : e.removeAttribute("selected");
}
function dr(e, t, r, n) {
  var a = e.__attributes ?? (e.__attributes = {});
  (j &&
    ((a[t] = e.getAttribute(t)),
    t === "src" ||
      t === "srcset" ||
      (t === "href" && e.nodeName === "LINK"))) ||
    (a[t] !== (a[t] = r) &&
      (t === "style" && "__styles" in e && (e.__styles = {}),
      t === "loading" && (e[Kt] = r),
      r == null
        ? e.removeAttribute(t)
        : typeof r != "string" && yt(e).includes(t)
          ? (e[t] = r)
          : e.setAttribute(t, r)));
}
function We(e, t, r, n, a = !1, o = !1, i = !1) {
  var s = t || {},
    l = e.tagName === "OPTION";
  for (var u in t) u in r || (r[u] = null);
  r.class && (r.class = cr(r.class));
  var b = yt(e),
    x = e.__attributes ?? (e.__attributes = {});
  for (const c in r) {
    let f = r[c];
    if (l && c === "value" && f == null) {
      (e.value = e.__value = ""), (s[c] = f);
      continue;
    }
    var w = s[c];
    if (f !== w) {
      s[c] = f;
      var y = c[0] + c[1];
      if (y !== "$$") {
        if (y === "on") {
          const E = {},
            S = "$$" + c;
          let d = c.slice(2);
          var v = er(d);
          if ((Yt(d) && ((d = d.slice(0, -7)), (E.capture = !0)), !v && w)) {
            if (f != null) continue;
            e.removeEventListener(d, s[S], E), (s[S] = null);
          }
          if (f != null)
            if (v) (e[`__${d}`] = f), Zt([d]);
            else {
              let m = function (B) {
                s[c].call(this, B);
              };
              s[S] = Qt(d, e, m, E);
            }
          else v && (e[`__${d}`] = void 0);
        } else if (c === "style" && f != null) e.style.cssText = f + "";
        else if (c === "autofocus") sr(e, !!f);
        else if (c === "__value" || (c === "value" && f != null))
          e.value = e[c] = e.__value = f;
        else if (c === "selected" && l) ur(e, f);
        else {
          var p = c;
          a || (p = $t(p));
          var h = p === "defaultValue" || p === "defaultChecked";
          if (f == null && !o && !h)
            if (((x[c] = null), p === "value" || p === "checked")) {
              let E = e;
              if (p === "value") {
                let S = E.defaultValue;
                E.removeAttribute(p), (E.defaultValue = S);
              } else {
                let S = E.defaultChecked;
                E.removeAttribute(p), (E.defaultChecked = S);
              }
            } else e.removeAttribute(c);
          else
            h || (b.includes(p) && (o || typeof f != "string"))
              ? (e[p] = f)
              : typeof f != "function" &&
                ((j && (p === "src" || p === "href" || p === "srcset")) ||
                  dr(e, p, f));
        }
        c === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return s;
}
var He = new Map();
function yt(e) {
  var t = He.get(e.nodeName);
  if (t) return t;
  He.set(e.nodeName, (t = []));
  for (var r, n = e, a = Element.prototype; a !== n; ) {
    r = Ut(n);
    for (var o in r) r[o].set && t.push(o);
    n = Ht(n);
  }
  return t;
}
function P(e, t) {
  var o;
  var r = (o = e.$$events) == null ? void 0 : o[t.type],
    n = et(r) ? r.slice() : r == null ? [] : [r];
  for (var a of n) a.call(this, t);
}
function fr(e) {
  return Object.keys(e).reduce(
    (t, r) => (e[r] === void 0 ? t : t + `${r}:${e[r]};`),
    "",
  );
}
fr({
  position: "absolute",
  opacity: 0,
  "pointer-events": "none",
  margin: 0,
  transform: "translateX(-100%)",
});
function _n(e) {
  if (e !== null) return "";
}
function Ue(e) {
  function t(r) {
    return r(e), () => {};
  }
  return { subscribe: t };
}
const pe = (e) =>
    new Proxy(e, {
      get(t, r, n) {
        return Reflect.get(t, r, n);
      },
      ownKeys(t) {
        return Reflect.ownKeys(t).filter((r) => r !== "action");
      },
    }),
  Ke = (e) => typeof e == "function";
pr("empty");
function pr(e, t) {
  const { stores: r, action: n, returned: a } = t ?? {},
    o = (() => {
      if (r && a)
        return ft(r, (s) => {
          const l = a(s);
          if (Ke(l)) {
            const u = (...b) =>
              pe({ ...l(...b), [`data-melt-${e}`]: "", action: n ?? Y });
            return (u.action = n ?? Y), u;
          }
          return pe({ ...l, [`data-melt-${e}`]: "", action: n ?? Y });
        });
      {
        const s = a,
          l = s == null ? void 0 : s();
        if (Ke(l)) {
          const u = (...b) =>
            pe({ ...l(...b), [`data-melt-${e}`]: "", action: n ?? Y });
          return (u.action = n ?? Y), Ue(u);
        }
        return Ue(pe({ ...l, [`data-melt-${e}`]: "", action: n ?? Y }));
      }
    })(),
    i = n ?? (() => {});
  return (i.subscribe = o.subscribe), i;
}
function kn(e) {
  const t = (o) => (o ? `${e}-${o}` : e),
    r = (o) => `data-melt-${e}${o ? `-${o}` : ""}`,
    n = (o) => `[data-melt-${e}${o ? `-${o}` : ""}]`;
  return {
    name: t,
    attribute: r,
    selector: n,
    getEl: (o) => document.querySelector(n(o)),
  };
}
const En = typeof document < "u",
  br = (e) => typeof e == "function";
function Cn(e) {
  return e instanceof Element;
}
function vt(e) {
  return e instanceof HTMLElement;
}
function gr(e) {
  return e !== null && typeof e == "object";
}
function hr(e) {
  return gr(e) && "subscribe" in e;
}
function yr(...e) {
  return (...t) => {
    for (const r of e) typeof r == "function" && r(...t);
  };
}
function Y() {}
function mt(e, t, r, n) {
  const a = Array.isArray(t) ? t : [t];
  return (
    a.forEach((o) => e.addEventListener(o, r, n)),
    () => {
      a.forEach((o) => e.removeEventListener(o, r, n));
    }
  );
}
function Sn(e, t, r, n) {
  const a = Array.isArray(t) ? t : [t];
  if (typeof r == "function") {
    const o = mr((i) => r(i));
    return (
      a.forEach((i) => e.addEventListener(i, o, n)),
      () => {
        a.forEach((i) => e.removeEventListener(i, o, n));
      }
    );
  }
  return () => void 0;
}
function vr(e) {
  const t = e.currentTarget;
  if (!vt(t)) return null;
  const r = new CustomEvent(`m-${e.type}`, {
    detail: { originalEvent: e },
    cancelable: !0,
  });
  return t.dispatchEvent(r), r;
}
function mr(e) {
  return (t) => {
    const r = vr(t);
    if (!(r != null && r.defaultPrevented)) return e(t);
  };
}
const wr = (e) => {
  try {
    qt(e);
  } catch {
    return e;
  }
};
function xr(e, ...t) {
  const r = {};
  for (const n of Object.keys(e)) t.includes(n) || (r[n] = e[n]);
  return r;
}
function wt(e) {
  return { ...e, get: () => pt(e) };
}
wt.writable = function (e) {
  const t = nr(e);
  let r = e;
  return {
    subscribe: t.subscribe,
    set(n) {
      t.set(n), (r = n);
    },
    update(n) {
      const a = n(r);
      t.set(a), (r = a);
    },
    get() {
      return r;
    },
  };
};
wt.derived = function (e, t) {
  const r = new Map(),
    n = () => {
      const o = Array.isArray(e) ? e.map((i) => i.get()) : e.get();
      return t(o);
    };
  return {
    get: n,
    subscribe: (o) => {
      const i = [];
      return (
        (Array.isArray(e) ? e : [e]).forEach((l) => {
          i.push(
            l.subscribe(() => {
              o(n());
            }),
          );
        }),
        o(n()),
        r.set(o, i),
        () => {
          const l = r.get(o);
          if (l) for (const u of l) u();
          r.delete(o);
        }
      );
    },
  };
};
const Ar = {
  ALT: "Alt",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CAPS_LOCK: "CapsLock",
  CONTROL: "Control",
  DELETE: "Delete",
  END: "End",
  ENTER: "Enter",
  ESCAPE: "Escape",
  F1: "F1",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  HOME: "Home",
  META: "Meta",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SHIFT: "Shift",
  SPACE: " ",
  TAB: "Tab",
  CTRL: "Control",
  ASTERISK: "*",
  A: "a",
  P: "p",
};
function _r(e, t) {
  let r;
  const n = ft(e, (o) => {
      r == null || r(), (r = t(o));
    }).subscribe(Y),
    a = () => {
      n(), r == null || r();
    };
  return wr(a), a;
}
re(void 0, (e) => {
  function t(n) {
    e(n), e(void 0);
  }
  return mt(document, "pointerup", t, { passive: !1, capture: !0 });
});
const kr = re(void 0, (e) => {
    function t(n) {
      n && n.key === Ar.ESCAPE && e(n), e(void 0);
    }
    return mt(document, "keydown", t, { passive: !1 });
  }),
  Mn = (e, t = {}) => {
    let r = Y;
    function n(a = {}) {
      r();
      const o = { enabled: !0, ...a },
        i = hr(o.enabled) ? o.enabled : re(o.enabled);
      r = yr(
        kr.subscribe((s) => {
          var u;
          if (!s || !pt(i)) return;
          const l = s.target;
          if (!(!vt(l) || l.closest("[data-escapee]") !== e)) {
            if ((s.preventDefault(), o.ignore)) {
              if (br(o.ignore)) {
                if (o.ignore(s)) return;
              } else if (
                Array.isArray(o.ignore) &&
                o.ignore.length > 0 &&
                o.ignore.some((b) => b && l === b)
              )
                return;
            }
            (u = o.handler) == null || u.call(o, s);
          }
        }),
        _r(i, (s) => {
          s ? (e.dataset.escapee = "") : delete e.dataset.escapee;
        }),
      );
    }
    return (
      n(t),
      {
        update: n,
        destroy() {
          e.removeAttribute("data-escapee"), r();
        },
      }
    );
  };
re(!1), re(!1), re(void 0);
const Er = {
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  preventDeselect: !1,
  numberOfMonths: 1,
  pagedNavigation: !1,
  weekStartsOn: 0,
  fixedWeeks: !1,
  calendarLabel: "Event Date",
  locale: "en",
  minValue: void 0,
  maxValue: void 0,
  disabled: !1,
  readonly: !1,
  weekdayFormat: "narrow",
};
({
  ...xr(
    Er,
    "isDateDisabled",
    "isDateUnavailable",
    "value",
    "locale",
    "disabled",
    "readonly",
    "minValue",
    "maxValue",
    "weekdayFormat",
  ),
});
function me(e, t) {
  const r = [];
  return (
    t.builders.forEach((n) => {
      const a = n.action(e);
      a && r.push(a);
    }),
    {
      destroy: () => {
        r.forEach((n) => {
          n.destroy && n.destroy();
        });
      },
    }
  );
}
function Cr(e) {
  const t = {};
  return (
    e.forEach((r) => {
      Object.keys(r).forEach((n) => {
        n !== "action" && (t[n] = r[n]);
      });
    }),
    t
  );
}
function Sr(e, t) {
  const r = he(t, ["children", "$$slots", "$$events", "$$legacy"]),
    n = he(r, ["href", "type", "builders", "el"]);
  it(t, !1);
  let a = Z(t, "href", 24, () => {}),
    o = Z(t, "type", 24, () => {}),
    i = Z(t, "builders", 24, () => []),
    s = Z(t, "el", 28, () => {});
  const l = { "data-button-root": "" };
  dt();
  var u = ee(),
    b = $(u);
  {
    var x = (y) => {
        var v = ee(),
          p = $(v);
        const h = ut(() => Cr(i()));
        De(
          p,
          () => (a() ? "a" : "button"),
          !1,
          (c, f) => {
            Fe(
              c,
              (m) => s(m),
              () => s(),
            ),
              or(
                c,
                (m, B) => (me == null ? void 0 : me(m, B)),
                () => ({ builders: i() }),
              );
            let E;
            Le(
              () =>
                (E = We(
                  c,
                  E,
                  {
                    type: a() ? void 0 : o(),
                    href: a(),
                    tabindex: "0",
                    ...ct(h),
                    ...n,
                    ...l,
                  },
                  void 0,
                  c.namespaceURI === _e,
                  c.nodeName.includes("-"),
                )),
            ),
              O("click", c, function (m) {
                P.call(this, t, m);
              }),
              O("change", c, function (m) {
                P.call(this, t, m);
              }),
              O("keydown", c, function (m) {
                P.call(this, t, m);
              }),
              O("keyup", c, function (m) {
                P.call(this, t, m);
              }),
              O("mouseenter", c, function (m) {
                P.call(this, t, m);
              }),
              O("mouseleave", c, function (m) {
                P.call(this, t, m);
              }),
              O("mousedown", c, function (m) {
                P.call(this, t, m);
              }),
              O("pointerdown", c, function (m) {
                P.call(this, t, m);
              }),
              O("mouseup", c, function (m) {
                P.call(this, t, m);
              }),
              O("pointerup", c, function (m) {
                P.call(this, t, m);
              });
            var S = ee(),
              d = $(S);
            ke(d, t, "default", {}), te(f, S);
          },
        ),
          te(y, v);
      },
      w = (y) => {
        var v = ee(),
          p = $(v);
        De(
          p,
          () => (a() ? "a" : "button"),
          !1,
          (h, c) => {
            Fe(
              h,
              (d) => s(d),
              () => s(),
            );
            let f;
            Le(
              () =>
                (f = We(
                  h,
                  f,
                  {
                    type: a() ? void 0 : o(),
                    href: a(),
                    tabindex: "0",
                    ...n,
                    ...l,
                  },
                  void 0,
                  h.namespaceURI === _e,
                  h.nodeName.includes("-"),
                )),
            ),
              O("click", h, function (d) {
                P.call(this, t, d);
              }),
              O("change", h, function (d) {
                P.call(this, t, d);
              }),
              O("keydown", h, function (d) {
                P.call(this, t, d);
              }),
              O("keyup", h, function (d) {
                P.call(this, t, d);
              }),
              O("mouseenter", h, function (d) {
                P.call(this, t, d);
              }),
              O("mouseleave", h, function (d) {
                P.call(this, t, d);
              }),
              O("mousedown", h, function (d) {
                P.call(this, t, d);
              }),
              O("pointerdown", h, function (d) {
                P.call(this, t, d);
              }),
              O("mouseup", h, function (d) {
                P.call(this, t, d);
              }),
              O("pointerup", h, function (d) {
                P.call(this, t, d);
              });
            var E = ee(),
              S = $(E);
            ke(S, t, "default", {}), te(c, E);
          },
        ),
          te(y, v);
      };
    tr(b, (y) => {
      i() && i().length ? y(x) : y(w, !1);
    });
  }
  te(e, u), lt();
}
var qe = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  V = (e) => !e || typeof e != "object" || Object.keys(e).length === 0,
  Mr = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function xt(e, t) {
  e.forEach(function (r) {
    Array.isArray(r) ? xt(r, t) : t.push(r);
  });
}
function At(e) {
  let t = [];
  return xt(e, t), t;
}
var _t = (...e) => At(e).filter(Boolean),
  kt = (e, t) => {
    let r = {},
      n = Object.keys(e),
      a = Object.keys(t);
    for (let o of n)
      if (a.includes(o)) {
        let i = e[o],
          s = t[o];
        Array.isArray(i) || Array.isArray(s)
          ? (r[o] = _t(s, i))
          : typeof i == "object" && typeof s == "object"
            ? (r[o] = kt(i, s))
            : (r[o] = s + " " + i);
      } else r[o] = e[o];
    for (let o of a) n.includes(o) || (r[o] = t[o]);
    return r;
  },
  Je = (e) => (!e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim());
const Pe = "-",
  Tr = (e) => {
    const t = Rr(e),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: n } = e;
    return {
      getClassGroupId: (i) => {
        const s = i.split(Pe);
        return s[0] === "" && s.length !== 1 && s.shift(), Et(s, t) || zr(i);
      },
      getConflictingClassGroupIds: (i, s) => {
        const l = r[i] || [];
        return s && n[i] ? [...l, ...n[i]] : l;
      },
    };
  },
  Et = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const r = e[0],
      n = t.nextPart.get(r),
      a = n ? Et(e.slice(1), n) : void 0;
    if (a) return a;
    if (t.validators.length === 0) return;
    const o = e.join(Pe);
    return (i = t.validators.find(({ validator: s }) => s(o))) == null
      ? void 0
      : i.classGroupId;
  },
  Xe = /^\[(.+)\]$/,
  zr = (e) => {
    if (Xe.test(e)) {
      const t = Xe.exec(e)[1],
        r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  },
  Rr = (e) => {
    const { theme: t, prefix: r } = e,
      n = { nextPart: new Map(), validators: [] };
    return (
      Pr(Object.entries(e.classGroups), r).forEach(([o, i]) => {
        Ee(i, n, o, t);
      }),
      n
    );
  },
  Ee = (e, t, r, n) => {
    e.forEach((a) => {
      if (typeof a == "string") {
        const o = a === "" ? t : Ye(t, a);
        o.classGroupId = r;
        return;
      }
      if (typeof a == "function") {
        if (Nr(a)) {
          Ee(a(n), t, r, n);
          return;
        }
        t.validators.push({ validator: a, classGroupId: r });
        return;
      }
      Object.entries(a).forEach(([o, i]) => {
        Ee(i, Ye(t, o), r, n);
      });
    });
  },
  Ye = (e, t) => {
    let r = e;
    return (
      t.split(Pe).forEach((n) => {
        r.nextPart.has(n) ||
          r.nextPart.set(n, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(n));
      }),
      r
    );
  },
  Nr = (e) => e.isThemeGetter,
  Pr = (e, t) =>
    t
      ? e.map(([r, n]) => {
          const a = n.map((o) =>
            typeof o == "string"
              ? t + o
              : typeof o == "object"
                ? Object.fromEntries(
                    Object.entries(o).map(([i, s]) => [t + i, s]),
                  )
                : o,
          );
          return [r, a];
        })
      : e,
  Or = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      r = new Map(),
      n = new Map();
    const a = (o, i) => {
      r.set(o, i), t++, t > e && ((t = 0), (n = r), (r = new Map()));
    };
    return {
      get(o) {
        let i = r.get(o);
        if (i !== void 0) return i;
        if ((i = n.get(o)) !== void 0) return a(o, i), i;
      },
      set(o, i) {
        r.has(o) ? r.set(o, i) : a(o, i);
      },
    };
  },
  Ct = "!",
  Ir = (e) => {
    const { separator: t, experimentalParseClassName: r } = e,
      n = t.length === 1,
      a = t[0],
      o = t.length,
      i = (s) => {
        const l = [];
        let u = 0,
          b = 0,
          x;
        for (let h = 0; h < s.length; h++) {
          let c = s[h];
          if (u === 0) {
            if (c === a && (n || s.slice(h, h + o) === t)) {
              l.push(s.slice(b, h)), (b = h + o);
              continue;
            }
            if (c === "/") {
              x = h;
              continue;
            }
          }
          c === "[" ? u++ : c === "]" && u--;
        }
        const w = l.length === 0 ? s : s.substring(b),
          y = w.startsWith(Ct),
          v = y ? w.substring(1) : w,
          p = x && x > b ? x - b : void 0;
        return {
          modifiers: l,
          hasImportantModifier: y,
          baseClassName: v,
          maybePostfixModifierPosition: p,
        };
      };
    return r ? (s) => r({ className: s, parseClassName: i }) : i;
  },
  jr = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let r = [];
    return (
      e.forEach((n) => {
        n[0] === "[" ? (t.push(...r.sort(), n), (r = [])) : r.push(n);
      }),
      t.push(...r.sort()),
      t
    );
  },
  Gr = (e) => ({ cache: Or(e.cacheSize), parseClassName: Ir(e), ...Tr(e) }),
  Lr = /\s+/,
  Vr = (e, t) => {
    const {
        parseClassName: r,
        getClassGroupId: n,
        getConflictingClassGroupIds: a,
      } = t,
      o = [],
      i = e.trim().split(Lr);
    let s = "";
    for (let l = i.length - 1; l >= 0; l -= 1) {
      const u = i[l],
        {
          modifiers: b,
          hasImportantModifier: x,
          baseClassName: w,
          maybePostfixModifierPosition: y,
        } = r(u);
      let v = !!y,
        p = n(v ? w.substring(0, y) : w);
      if (!p) {
        if (!v) {
          s = u + (s.length > 0 ? " " + s : s);
          continue;
        }
        if (((p = n(w)), !p)) {
          s = u + (s.length > 0 ? " " + s : s);
          continue;
        }
        v = !1;
      }
      const h = jr(b).join(":"),
        c = x ? h + Ct : h,
        f = c + p;
      if (o.includes(f)) continue;
      o.push(f);
      const E = a(p, v);
      for (let S = 0; S < E.length; ++S) {
        const d = E[S];
        o.push(c + d);
      }
      s = u + (s.length > 0 ? " " + s : s);
    }
    return s;
  };
function Fr() {
  let e = 0,
    t,
    r,
    n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = St(t)) && (n && (n += " "), (n += r));
  return n;
}
const St = (e) => {
  if (typeof e == "string") return e;
  let t,
    r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = St(e[n])) && (r && (r += " "), (r += t));
  return r;
};
function Ce(e, ...t) {
  let r,
    n,
    a,
    o = i;
  function i(l) {
    const u = t.reduce((b, x) => x(b), e());
    return (r = Gr(u)), (n = r.cache.get), (a = r.cache.set), (o = s), s(l);
  }
  function s(l) {
    const u = n(l);
    if (u) return u;
    const b = Vr(l, r);
    return a(l, b), b;
  }
  return function () {
    return o(Fr.apply(null, arguments));
  };
}
const N = (e) => {
    const t = (r) => r[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  Mt = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Br = /^\d+\/\d+$/,
  Dr = new Set(["px", "full", "screen"]),
  Wr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Hr =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Ur = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Kr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  qr =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  H = (e) => ne(e) || Dr.has(e) || Br.test(e),
  q = (e) => oe(e, "length", tn),
  ne = (e) => !!e && !Number.isNaN(Number(e)),
  we = (e) => oe(e, "number", ne),
  se = (e) => !!e && Number.isInteger(Number(e)),
  Jr = (e) => e.endsWith("%") && ne(e.slice(0, -1)),
  A = (e) => Mt.test(e),
  J = (e) => Wr.test(e),
  Xr = new Set(["length", "size", "percentage"]),
  Yr = (e) => oe(e, Xr, Tt),
  Qr = (e) => oe(e, "position", Tt),
  Zr = new Set(["image", "url"]),
  $r = (e) => oe(e, Zr, nn),
  en = (e) => oe(e, "", rn),
  ae = () => !0,
  oe = (e, t, r) => {
    const n = Mt.exec(e);
    return n
      ? n[1]
        ? typeof t == "string"
          ? n[1] === t
          : t.has(n[1])
        : r(n[2])
      : !1;
  },
  tn = (e) => Hr.test(e) && !Ur.test(e),
  Tt = () => !1,
  rn = (e) => Kr.test(e),
  nn = (e) => qr.test(e),
  Se = () => {
    const e = N("colors"),
      t = N("spacing"),
      r = N("blur"),
      n = N("brightness"),
      a = N("borderColor"),
      o = N("borderRadius"),
      i = N("borderSpacing"),
      s = N("borderWidth"),
      l = N("contrast"),
      u = N("grayscale"),
      b = N("hueRotate"),
      x = N("invert"),
      w = N("gap"),
      y = N("gradientColorStops"),
      v = N("gradientColorStopPositions"),
      p = N("inset"),
      h = N("margin"),
      c = N("opacity"),
      f = N("padding"),
      E = N("saturate"),
      S = N("scale"),
      d = N("sepia"),
      m = N("skew"),
      B = N("space"),
      D = N("translate"),
      L = () => ["auto", "contain", "none"],
      K = () => ["auto", "hidden", "clip", "visible", "scroll"],
      W = () => ["auto", A, t],
      g = () => [A, t],
      k = () => ["", H, q],
      _ = () => ["auto", ne, A],
      M = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      C = () => ["solid", "dashed", "dotted", "double", "none"],
      T = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      z = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      R = () => ["", "0", A],
      I = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      G = () => [ne, A];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [ae],
        spacing: [H, q],
        blur: ["none", "", J, A],
        brightness: G(),
        borderColor: [e],
        borderRadius: ["none", "", "full", J, A],
        borderSpacing: g(),
        borderWidth: k(),
        contrast: G(),
        grayscale: R(),
        hueRotate: G(),
        invert: R(),
        gap: g(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Jr, q],
        inset: W(),
        margin: W(),
        opacity: G(),
        padding: g(),
        saturate: G(),
        scale: G(),
        sepia: R(),
        skew: G(),
        space: g(),
        translate: g(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", A] }],
        container: ["container"],
        columns: [{ columns: [J] }],
        "break-after": [{ "break-after": I() }],
        "break-before": [{ "break-before": I() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...M(), A] }],
        overflow: [{ overflow: K() }],
        "overflow-x": [{ "overflow-x": K() }],
        "overflow-y": [{ "overflow-y": K() }],
        overscroll: [{ overscroll: L() }],
        "overscroll-x": [{ "overscroll-x": L() }],
        "overscroll-y": [{ "overscroll-y": L() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [p] }],
        "inset-x": [{ "inset-x": [p] }],
        "inset-y": [{ "inset-y": [p] }],
        start: [{ start: [p] }],
        end: [{ end: [p] }],
        top: [{ top: [p] }],
        right: [{ right: [p] }],
        bottom: [{ bottom: [p] }],
        left: [{ left: [p] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", se, A] }],
        basis: [{ basis: W() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", A] }],
        grow: [{ grow: R() }],
        shrink: [{ shrink: R() }],
        order: [{ order: ["first", "last", "none", se, A] }],
        "grid-cols": [{ "grid-cols": [ae] }],
        "col-start-end": [{ col: ["auto", { span: ["full", se, A] }, A] }],
        "col-start": [{ "col-start": _() }],
        "col-end": [{ "col-end": _() }],
        "grid-rows": [{ "grid-rows": [ae] }],
        "row-start-end": [{ row: ["auto", { span: [se, A] }, A] }],
        "row-start": [{ "row-start": _() }],
        "row-end": [{ "row-end": _() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", A] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", A] }],
        gap: [{ gap: [w] }],
        "gap-x": [{ "gap-x": [w] }],
        "gap-y": [{ "gap-y": [w] }],
        "justify-content": [{ justify: ["normal", ...z()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...z(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...z(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [f] }],
        px: [{ px: [f] }],
        py: [{ py: [f] }],
        ps: [{ ps: [f] }],
        pe: [{ pe: [f] }],
        pt: [{ pt: [f] }],
        pr: [{ pr: [f] }],
        pb: [{ pb: [f] }],
        pl: [{ pl: [f] }],
        m: [{ m: [h] }],
        mx: [{ mx: [h] }],
        my: [{ my: [h] }],
        ms: [{ ms: [h] }],
        me: [{ me: [h] }],
        mt: [{ mt: [h] }],
        mr: [{ mr: [h] }],
        mb: [{ mb: [h] }],
        ml: [{ ml: [h] }],
        "space-x": [{ "space-x": [B] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [B] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", A, t] }],
        "min-w": [{ "min-w": [A, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              A,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [J] },
              J,
            ],
          },
        ],
        h: [{ h: [A, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [A, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [A, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [A, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", J, q] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              we,
            ],
          },
        ],
        "font-family": [{ font: [ae] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              A,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", ne, we] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              H,
              A,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", A] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", A] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [c] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [c] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...C(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", H, q] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", H, A] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: g() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              A,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", A] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [c] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...M(), Qr] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Yr] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              $r,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [v] }],
        "gradient-via-pos": [{ via: [v] }],
        "gradient-to-pos": [{ to: [v] }],
        "gradient-from": [{ from: [y] }],
        "gradient-via": [{ via: [y] }],
        "gradient-to": [{ to: [y] }],
        rounded: [{ rounded: [o] }],
        "rounded-s": [{ "rounded-s": [o] }],
        "rounded-e": [{ "rounded-e": [o] }],
        "rounded-t": [{ "rounded-t": [o] }],
        "rounded-r": [{ "rounded-r": [o] }],
        "rounded-b": [{ "rounded-b": [o] }],
        "rounded-l": [{ "rounded-l": [o] }],
        "rounded-ss": [{ "rounded-ss": [o] }],
        "rounded-se": [{ "rounded-se": [o] }],
        "rounded-ee": [{ "rounded-ee": [o] }],
        "rounded-es": [{ "rounded-es": [o] }],
        "rounded-tl": [{ "rounded-tl": [o] }],
        "rounded-tr": [{ "rounded-tr": [o] }],
        "rounded-br": [{ "rounded-br": [o] }],
        "rounded-bl": [{ "rounded-bl": [o] }],
        "border-w": [{ border: [s] }],
        "border-w-x": [{ "border-x": [s] }],
        "border-w-y": [{ "border-y": [s] }],
        "border-w-s": [{ "border-s": [s] }],
        "border-w-e": [{ "border-e": [s] }],
        "border-w-t": [{ "border-t": [s] }],
        "border-w-r": [{ "border-r": [s] }],
        "border-w-b": [{ "border-b": [s] }],
        "border-w-l": [{ "border-l": [s] }],
        "border-opacity": [{ "border-opacity": [c] }],
        "border-style": [{ border: [...C(), "hidden"] }],
        "divide-x": [{ "divide-x": [s] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [s] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [c] }],
        "divide-style": [{ divide: C() }],
        "border-color": [{ border: [a] }],
        "border-color-x": [{ "border-x": [a] }],
        "border-color-y": [{ "border-y": [a] }],
        "border-color-s": [{ "border-s": [a] }],
        "border-color-e": [{ "border-e": [a] }],
        "border-color-t": [{ "border-t": [a] }],
        "border-color-r": [{ "border-r": [a] }],
        "border-color-b": [{ "border-b": [a] }],
        "border-color-l": [{ "border-l": [a] }],
        "divide-color": [{ divide: [a] }],
        "outline-style": [{ outline: ["", ...C()] }],
        "outline-offset": [{ "outline-offset": [H, A] }],
        "outline-w": [{ outline: [H, q] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: k() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [c] }],
        "ring-offset-w": [{ "ring-offset": [H, q] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", J, en] }],
        "shadow-color": [{ shadow: [ae] }],
        opacity: [{ opacity: [c] }],
        "mix-blend": [{ "mix-blend": [...T(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": T() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [r] }],
        brightness: [{ brightness: [n] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", J, A] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [b] }],
        invert: [{ invert: [x] }],
        saturate: [{ saturate: [E] }],
        sepia: [{ sepia: [d] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [r] }],
        "backdrop-brightness": [{ "backdrop-brightness": [n] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [b] }],
        "backdrop-invert": [{ "backdrop-invert": [x] }],
        "backdrop-opacity": [{ "backdrop-opacity": [c] }],
        "backdrop-saturate": [{ "backdrop-saturate": [E] }],
        "backdrop-sepia": [{ "backdrop-sepia": [d] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              A,
            ],
          },
        ],
        duration: [{ duration: G() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", A] }],
        delay: [{ delay: G() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", A] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [se, A] }],
        "translate-x": [{ "translate-x": [D] }],
        "translate-y": [{ "translate-y": [D] }],
        "skew-x": [{ "skew-x": [m] }],
        "skew-y": [{ "skew-y": [m] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              A,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              A,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": g() }],
        "scroll-mx": [{ "scroll-mx": g() }],
        "scroll-my": [{ "scroll-my": g() }],
        "scroll-ms": [{ "scroll-ms": g() }],
        "scroll-me": [{ "scroll-me": g() }],
        "scroll-mt": [{ "scroll-mt": g() }],
        "scroll-mr": [{ "scroll-mr": g() }],
        "scroll-mb": [{ "scroll-mb": g() }],
        "scroll-ml": [{ "scroll-ml": g() }],
        "scroll-p": [{ "scroll-p": g() }],
        "scroll-px": [{ "scroll-px": g() }],
        "scroll-py": [{ "scroll-py": g() }],
        "scroll-ps": [{ "scroll-ps": g() }],
        "scroll-pe": [{ "scroll-pe": g() }],
        "scroll-pt": [{ "scroll-pt": g() }],
        "scroll-pr": [{ "scroll-pr": g() }],
        "scroll-pb": [{ "scroll-pb": g() }],
        "scroll-pl": [{ "scroll-pl": g() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", A] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [H, q, we] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  on = (
    e,
    {
      cacheSize: t,
      prefix: r,
      separator: n,
      experimentalParseClassName: a,
      extend: o = {},
      override: i = {},
    },
  ) => {
    le(e, "cacheSize", t),
      le(e, "prefix", r),
      le(e, "separator", n),
      le(e, "experimentalParseClassName", a);
    for (const s in i) sn(e[s], i[s]);
    for (const s in o) an(e[s], o[s]);
    return e;
  },
  le = (e, t, r) => {
    r !== void 0 && (e[t] = r);
  },
  sn = (e, t) => {
    if (t) for (const r in t) le(e, r, t[r]);
  },
  an = (e, t) => {
    if (t)
      for (const r in t) {
        const n = t[r];
        n !== void 0 && (e[r] = (e[r] || []).concat(n));
      }
  },
  ln = (e, ...t) =>
    typeof e == "function" ? Ce(Se, e, ...t) : Ce(() => on(Se(), e), ...t),
  zt = Ce(Se);
var cn = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
  Rt = (e) => e || void 0,
  de = (...e) => Rt(At(e).filter(Boolean).join(" ")),
  xe = null,
  U = {},
  Me = !1,
  ie =
    (...e) =>
    (t) =>
      t.twMerge
        ? ((!xe || Me) &&
            ((Me = !1),
            (xe = V(U)
              ? zt
              : ln({
                  ...U,
                  extend: {
                    theme: U.theme,
                    classGroups: U.classGroups,
                    conflictingClassGroupModifiers:
                      U.conflictingClassGroupModifiers,
                    conflictingClassGroups: U.conflictingClassGroups,
                    ...U.extend,
                  },
                }))),
          Rt(xe(de(e))))
        : de(e),
  Qe = (e, t) => {
    for (let r in t)
      e.hasOwnProperty(r) ? (e[r] = de(e[r], t[r])) : (e[r] = t[r]);
    return e;
  },
  un = (e, t) => {
    let {
        extend: r = null,
        slots: n = {},
        variants: a = {},
        compoundVariants: o = [],
        compoundSlots: i = [],
        defaultVariants: s = {},
      } = e,
      l = { ...cn, ...t },
      u =
        r != null && r.base
          ? de(r.base, e == null ? void 0 : e.base)
          : e == null
            ? void 0
            : e.base,
      b = r != null && r.variants && !V(r.variants) ? kt(a, r.variants) : a,
      x =
        r != null && r.defaultVariants && !V(r.defaultVariants)
          ? { ...r.defaultVariants, ...s }
          : s;
    !V(l.twMergeConfig) &&
      !Mr(l.twMergeConfig, U) &&
      ((Me = !0), (U = l.twMergeConfig));
    let w = V(r == null ? void 0 : r.slots),
      y = V(n)
        ? {}
        : {
            base: de(
              e == null ? void 0 : e.base,
              w && (r == null ? void 0 : r.base),
            ),
            ...n,
          },
      v = w
        ? y
        : Qe(
            { ...(r == null ? void 0 : r.slots) },
            V(y) ? { base: e == null ? void 0 : e.base } : y,
          ),
      p = V(r == null ? void 0 : r.compoundVariants)
        ? o
        : _t(r == null ? void 0 : r.compoundVariants, o),
      h = (f) => {
        if (V(b) && V(n) && w)
          return ie(
            u,
            f == null ? void 0 : f.class,
            f == null ? void 0 : f.className,
          )(l);
        if (p && !Array.isArray(p))
          throw new TypeError(
            `The "compoundVariants" prop must be an array. Received: ${typeof p}`,
          );
        if (i && !Array.isArray(i))
          throw new TypeError(
            `The "compoundSlots" prop must be an array. Received: ${typeof i}`,
          );
        let E = (g, k, _ = [], M) => {
            let C = _;
            if (typeof k == "string")
              C = C.concat(
                Je(k)
                  .split(" ")
                  .map((T) => `${g}:${T}`),
              );
            else if (Array.isArray(k))
              C = C.concat(k.reduce((T, z) => T.concat(`${g}:${z}`), []));
            else if (typeof k == "object" && typeof M == "string") {
              for (let T in k)
                if (k.hasOwnProperty(T) && T === M) {
                  let z = k[T];
                  if (z && typeof z == "string") {
                    let R = Je(z);
                    C[M]
                      ? (C[M] = C[M].concat(
                          R.split(" ").map((I) => `${g}:${I}`),
                        ))
                      : (C[M] = R.split(" ").map((I) => `${g}:${I}`));
                  } else
                    Array.isArray(z) &&
                      z.length > 0 &&
                      (C[M] = z.reduce((R, I) => R.concat(`${g}:${I}`), []));
                }
            }
            return C;
          },
          S = (g, k = b, _ = null, M = null) => {
            var C;
            let T = k[g];
            if (!T || V(T)) return null;
            let z =
              (C = M == null ? void 0 : M[g]) != null
                ? C
                : f == null
                  ? void 0
                  : f[g];
            if (z === null) return null;
            let R = qe(z),
              I =
                (Array.isArray(l.responsiveVariants) &&
                  l.responsiveVariants.length > 0) ||
                l.responsiveVariants === !0,
              G = x == null ? void 0 : x[g],
              F = [];
            if (typeof R == "object" && I)
              for (let [ve, Oe] of Object.entries(R)) {
                let Nt = T[Oe];
                if (ve === "initial") {
                  G = Oe;
                  continue;
                }
                (Array.isArray(l.responsiveVariants) &&
                  !l.responsiveVariants.includes(ve)) ||
                  (F = E(ve, Nt, F, _));
              }
            let fe = R != null && typeof R != "object" ? R : qe(G),
              ye = T[fe || "false"];
            return typeof F == "object" && typeof _ == "string" && F[_]
              ? Qe(F, ye)
              : F.length > 0
                ? (F.push(ye), _ === "base" ? F.join(" ") : F)
                : ye;
          },
          d = () => (b ? Object.keys(b).map((g) => S(g, b)) : null),
          m = (g, k) => {
            if (!b || typeof b != "object") return null;
            let _ = new Array();
            for (let M in b) {
              let C = S(M, b, g, k),
                T = g === "base" && typeof C == "string" ? C : C && C[g];
              T && (_[_.length] = T);
            }
            return _;
          },
          B = {};
        for (let g in f) f[g] !== void 0 && (B[g] = f[g]);
        let D = (g, k) => {
            var _;
            let M =
              typeof (f == null ? void 0 : f[g]) == "object"
                ? { [g]: (_ = f[g]) == null ? void 0 : _.initial }
                : {};
            return { ...x, ...B, ...M, ...k };
          },
          L = (g = [], k) => {
            let _ = [];
            for (let { class: M, className: C, ...T } of g) {
              let z = !0;
              for (let [R, I] of Object.entries(T)) {
                let G = D(R, k)[R];
                if (Array.isArray(I)) {
                  if (!I.includes(G)) {
                    z = !1;
                    break;
                  }
                } else {
                  let F = (fe) => fe == null || fe === !1;
                  if (F(I) && F(G)) continue;
                  if (G !== I) {
                    z = !1;
                    break;
                  }
                }
              }
              z && (M && _.push(M), C && _.push(C));
            }
            return _;
          },
          K = (g) => {
            let k = L(p, g);
            if (!Array.isArray(k)) return k;
            let _ = {};
            for (let M of k)
              if (
                (typeof M == "string" && (_.base = ie(_.base, M)(l)),
                typeof M == "object")
              )
                for (let [C, T] of Object.entries(M)) _[C] = ie(_[C], T)(l);
            return _;
          },
          W = (g) => {
            if (i.length < 1) return null;
            let k = {};
            for (let { slots: _ = [], class: M, className: C, ...T } of i) {
              if (!V(T)) {
                let z = !0;
                for (let R of Object.keys(T)) {
                  let I = D(R, g)[R];
                  if (
                    I === void 0 ||
                    (Array.isArray(T[R]) ? !T[R].includes(I) : T[R] !== I)
                  ) {
                    z = !1;
                    break;
                  }
                }
                if (!z) continue;
              }
              for (let z of _) (k[z] = k[z] || []), k[z].push([M, C]);
            }
            return k;
          };
        if (!V(n) || !w) {
          let g = {};
          if (typeof v == "object" && !V(v))
            for (let k of Object.keys(v))
              g[k] = (_) => {
                var M, C;
                return ie(
                  v[k],
                  m(k, _),
                  ((M = K(_)) != null ? M : [])[k],
                  ((C = W(_)) != null ? C : [])[k],
                  _ == null ? void 0 : _.class,
                  _ == null ? void 0 : _.className,
                )(l);
              };
          return g;
        }
        return ie(
          u,
          d(),
          L(p),
          f == null ? void 0 : f.class,
          f == null ? void 0 : f.className,
        )(l);
      },
      c = () => {
        if (!(!b || typeof b != "object")) return Object.keys(b);
      };
    return (
      (h.variantKeys = c()),
      (h.extend = r),
      (h.base = u),
      (h.slots = v),
      (h.variants = b),
      (h.defaultVariants = x),
      (h.compoundSlots = i),
      (h.compoundVariants = p),
      h
    );
  };
const dn = un({
  base: "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border-input bg-background hover:bg-accent hover:text-accent-foreground border",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: { variant: "default", size: "default" },
});
function fn(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function pn(...e) {
  return zt(ht(e));
}
const Tn = (e, t = { y: -8, x: 0, start: 0.95, duration: 150 }) => {
  const r = getComputedStyle(e),
    n = r.transform === "none" ? "" : r.transform,
    a = (i, s, l) => {
      const [u, b] = s,
        [x, w] = l;
      return ((i - u) / (b - u)) * (w - x) + x;
    },
    o = (i) =>
      Object.keys(i).reduce(
        (s, l) => (i[l] === void 0 ? s : s + `${l}:${i[l]};`),
        "",
      );
  return {
    duration: t.duration ?? 200,
    delay: 0,
    css: (i) => {
      const s = a(i, [0, 1], [t.y ?? 5, 0]),
        l = a(i, [0, 1], [t.x ?? 0, 0]),
        u = a(i, [0, 1], [t.start ?? 0.95, 1]);
      return o({
        transform: `${n} translate3d(${l}px, ${s}px, 0) scale(${u})`,
        opacity: i,
      });
    },
    easing: fn,
  };
};
function zn(e, t) {
  const r = he(t, ["children", "$$slots", "$$events", "$$legacy"]),
    n = he(r, ["class", "variant", "size", "builders"]);
  it(t, !1);
  let a = Z(t, "class", 8, void 0),
    o = Z(t, "variant", 8, "default"),
    i = Z(t, "size", 8, "default"),
    s = Z(t, "builders", 24, () => []);
  dt();
  var l = ut(() => pn(dn({ variant: o(), size: i(), className: a() })));
  Sr(
    e,
    rr(
      {
        get builders() {
          return s();
        },
        get class() {
          return ct(l);
        },
        type: "button",
      },
      () => n,
      {
        $$events: {
          click(u) {
            P.call(this, t, u);
          },
          keydown(u) {
            P.call(this, t, u);
          },
        },
        children: (u, b) => {
          var x = ee(),
            w = $(x);
          ke(w, t, "default", {}), te(u, x);
        },
        $$slots: { default: !0 },
      },
    ),
  ),
    lt();
}
export {
  dn as A,
  zn as B,
  We as a,
  P as b,
  pn as c,
  vt as d,
  An as e,
  br as f,
  Cn as g,
  yr as h,
  xn as i,
  mt as j,
  fr as k,
  _r as l,
  pr as m,
  Y as n,
  xr as o,
  kn as p,
  Sn as q,
  _n as r,
  ke as s,
  En as t,
  Mn as u,
  Ar as v,
  wt as w,
  De as x,
  Tn as y,
  dr as z,
};
