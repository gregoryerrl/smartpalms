var sn=Array.isArray,ln=Array.prototype.indexOf,Kn=Array.from,Wn=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,an=Object.getOwnPropertyDescriptors,Xn=Object.prototype,Zn=Array.prototype,un=Object.getPrototypeOf;function zn(t){return typeof t=="function"}const on=()=>{};function Jn(t){return t()}function At(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,gt=4,U=8,ft=16,A=32,J=64,rt=128,O=256,K=512,d=1024,S=2048,j=4096,C=8192,P=16384,fn=32768,xt=65536,Qn=1<<17,_n=1<<19,It=1<<20,wt=Symbol("$state"),te=Symbol("legacy props"),ne=Symbol("");function St(t){return t===this.v}function cn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Rt(t){return!cn(t,this.v)}function vn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function pn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function hn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function dn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ee(){throw new Error("https://svelte.dev/e/hydration_failed")}function re(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function se(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function le(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function En(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function wn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let B=!1;function ae(){B=!0}const ue=1,oe=2,ie=4,fe=8,_e=16,ce=1,ve=2,pe=4,he=8,de=16,Ee=1,we=2,ye=4,me=1,Te=2,yn="[",mn="[!",Tn="]",kt={},Ae=Symbol(),ge="http://www.w3.org/2000/svg";function _t(t,n){var e={f:0,v:t,reactions:null,equals:St,rv:0,wv:0};return e}function xe(t){return Ot(_t(t))}function An(t,n=!1){var r;const e=_t(t);return n||(e.equals=Rt),B&&u!==null&&u.l!==null&&((r=u.l).s??(r.s=[])).push(e),e}function Ie(t,n=!1){return Ot(An(t,n))}function Ot(t){return i!==null&&i.f&w&&(T===null?qn([t]):T.push(t)),t}function Dt(t,n){return i!==null&&ht()&&i.f&(w|ft)&&(T===null||!T.includes(t))&&wn(),gn(t,n)}function gn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Zt(),Nt(t,S),ht()&&o!==null&&o.f&d&&!(o.f&A)&&(h!==null&&h.includes(t)?(m(o,S),nt(o)):g===null?Fn([t]):g.push(t))),n}function Nt(t,n){var e=t.reactions;if(e!==null)for(var r=ht(),s=e.length,l=0;l<s;l++){var a=e[l],f=a.f;f&S||!r&&a===o||(m(a,n),f&(d|O)&&(f&w?Nt(a,j):nt(a)))}}function bt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let R=!1;function Se(t){R=t}let y;function L(t){if(t===null)throw bt(),kt;return y=t}function Re(){return L(D(y))}function ke(t){if(R){if(D(y)!==null)throw bt(),kt;y=t}}function Oe(t=1){if(R){for(var n=t,e=y;n--;)e=D(e);y=e}}function De(){for(var t=0,n=y;;){if(n.nodeType===8){var e=n.data;if(e===Tn){if(t===0)return n;t-=1}else(e===yn||e===mn)&&(t+=1)}var r=D(n);n.remove(),n=r}}var yt,Ct,Pt;function Ne(){if(yt===void 0){yt=window;var t=Element.prototype,n=Node.prototype;Ct=Et(n,"firstChild").get,Pt=Et(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function st(t=""){return document.createTextNode(t)}function lt(t){return Ct.call(t)}function D(t){return Pt.call(t)}function be(t,n){if(!R)return lt(t);var e=lt(y);if(e===null)e=y.appendChild(st());else if(n&&e.nodeType!==3){var r=st();return e==null||e.before(r),L(r),r}return L(e),e}function Ce(t,n){if(!R){var e=lt(t);return e instanceof Comment&&e.data===""?D(e):e}return y}function Pe(t,n=1,e=!1){let r=R?y:t;for(var s;n--;)s=r,r=D(r);if(!R)return r;var l=r==null?void 0:r.nodeType;if(e&&l!==3){var a=st();return r===null?s==null||s.after(a):r.before(a),L(a),a}return L(r),r}function qe(t){t.textContent=""}function xn(t){var n=w|S;o===null?n|=O:o.f|=It;var e=i!==null&&i.f&w?i:null;const r={children:null,ctx:u,deps:null,equals:St,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:e??o};return e!==null&&(e.children??(e.children=[])).push(r),r}function Fe(t){const n=xn(t);return n.equals=Rt,n}function qt(t){var n=t.children;if(n!==null){t.children=null;for(var e=0;e<n.length;e+=1){var r=n[e];r.f&w?ct(r):k(r)}}}function In(t){for(var n=t.parent;n!==null;){if(!(n.f&w))return n;n=n.parent}return null}function Ft(t){var n,e=o;z(In(t));try{qt(t),n=zt(t)}finally{z(e)}return n}function Lt(t){var n=Ft(t),e=(I||t.f&O)&&t.deps!==null?j:d;m(t,e),t.equals(n)||(t.v=n,t.wv=Zt())}function ct(t){qt(t),H(t,0),m(t,P),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Mt(t){o===null&&i===null&&hn(),i!==null&&i.f&O&&pn(),pt&&vn()}function Sn(t,n){var e=n.last;e===null?n.last=n.first=t:(e.next=t,t.prev=e,n.last=t)}function q(t,n,e,r=!0){var s=(t&J)!==0,l=o,a={ctx:u,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,wv:0};if(e){var f=N;try{mt(!0),V(a),a.f|=fn}catch(c){throw k(a),c}finally{mt(f)}}else n!==null&&nt(a);var _=e&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&It)===0;if(!_&&!s&&r&&(l!==null&&Sn(a,l),i!==null&&i.f&w)){var p=i;(p.children??(p.children=[])).push(a)}return a}function Le(t){const n=q(U,null,!1);return m(n,d),n.teardown=t,n}function Rn(t){Mt();var n=o!==null&&(o.f&A)!==0&&u!==null&&!u.m;if(n){var e=u;(e.e??(e.e=[])).push({fn:t,effect:o,reaction:i})}else{var r=Yt(t);return r}}function Me(t){return Mt(),vt(t)}function Ye(t){const n=q(J,t,!0);return(e={})=>new Promise(r=>{e.outro?Dn(n,()=>{k(n),r(void 0)}):(k(n),r(void 0))})}function Yt(t){return q(gt,t,!1)}function He(t,n){var e=u,r={effect:null,ran:!1};e.l.r1.push(r),r.effect=vt(()=>{t(),!r.ran&&(r.ran=!0,Dt(e.l.r2,!0),et(n))})}function Ue(){var t=u;vt(()=>{if(en(t.l.r2)){for(var n of t.l.r1){var e=n.effect;e.f&d&&m(e,j),F(e)&&V(e),n.ran=!1}t.l.r2.v=!1}})}function vt(t){return q(U,t,!0)}function je(t){return kn(t)}function kn(t,n=0){return q(U|ft|n,t,!0)}function Be(t,n=!0){return q(U|A,t,!0,n)}function Ht(t){var n=t.teardown;if(n!==null){const e=pt,r=i;Tt(!0),Z(null);try{n.call(null)}finally{Tt(e),Z(r)}}}function Ut(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var e=0;e<n.length;e+=1)ct(n[e])}}function jt(t,n=!1){var e=t.first;for(t.first=t.last=null;e!==null;){var r=e.next;k(e,n),e=r}}function On(t){for(var n=t.first;n!==null;){var e=n.next;n.f&A||k(n),n=e}}function k(t,n=!0){var e=!1;if((n||t.f&_n)&&t.nodes_start!==null){for(var r=t.nodes_start,s=t.nodes_end;r!==null;){var l=r===s?null:D(r);r.remove(),r=l}e=!0}jt(t,n&&!e),Ut(t),H(t,0),m(t,P);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Ht(t);var f=t.parent;f!==null&&f.first!==null&&Bt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Bt(t){var n=t.parent,e=t.prev,r=t.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),n!==null&&(n.first===t&&(n.first=r),n.last===t&&(n.last=e))}function Dn(t,n){var e=[];Vt(t,e,!0),Nn(e,()=>{k(t),n&&n()})}function Nn(t,n){var e=t.length;if(e>0){var r=()=>--e||n();for(var s of t)s.out(r)}else n()}function Vt(t,n,e){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const a of t.transitions)(a.is_global||e)&&n.push(a);for(var r=t.first;r!==null;){var s=r.next,l=(r.f&xt)!==0||(r.f&A)!==0;Vt(r,n,l?e:!1),r=s}}}function Ve(t){Gt(t,!0)}function Gt(t,n){if(t.f&C){F(t)&&V(t),t.f^=C;for(var e=t.first;e!==null;){var r=e.next,s=(e.f&xt)!==0||(e.f&A)!==0;Gt(e,s?n:!1),e=r}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const bn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let W=!1,X=!1,at=[],ut=[];function $t(){W=!1;const t=at.slice();at=[],At(t)}function Kt(){X=!1;const t=ut.slice();ut=[],At(t)}function Ge(t){W||(W=!0,queueMicrotask($t)),at.push(t)}function $e(t){X||(X=!0,bn(Kt)),ut.push(t)}function Cn(){W&&$t(),X&&Kt()}function Ke(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function Q(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Wt=0,Pn=1;let G=!1,$=Wt,M=!1,Y=null,N=!1,pt=!1;function mt(t){N=t}function Tt(t){pt=t}let x=[],b=0;let i=null;function Z(t){i=t}let o=null;function z(t){o=t}let T=null;function qn(t){T=t}let h=null,E=0,g=null;function Fn(t){g=t}let Xt=1,ot=0,I=!1,u=null;function Zt(){return++Xt}function ht(){return!B||u!==null&&u.l===null}function F(t){var p;var n=t.f;if(n&S)return!0;if(n&j){var e=t.deps,r=(n&O)!==0;if(e!==null){var s,l,a=(n&K)!==0,f=r&&o!==null&&!I,_=e.length;if(a||f){for(s=0;s<_;s++)l=e[s],(a||!((p=l==null?void 0:l.reactions)!=null&&p.includes(t)))&&(l.reactions??(l.reactions=[])).push(t);a&&(t.f^=K)}for(s=0;s<_;s++)if(l=e[s],F(l)&&Lt(l),l.wv>t.wv)return!0}(!r||o!==null&&!I)&&m(t,d)}return!1}function Ln(t,n){for(var e=n;e!==null;){if(e.f&rt)try{e.fn(t);return}catch{e.f^=rt}e=e.parent}throw G=!1,t}function Mn(t){return(t.f&P)===0&&(t.parent===null||(t.parent.f&rt)===0)}function tt(t,n,e,r){if(G){if(e===null&&(G=!1),Mn(n))throw t;return}e!==null&&(G=!0);{Ln(t,n);return}}function zt(t){var dt;var n=h,e=E,r=g,s=i,l=I,a=T,f=u,_=t.f;h=null,E=0,g=null,i=_&(A|J)?null:t,I=!N&&(_&O)!==0,T=null,u=t.ctx,ot++;try{var p=(0,t.fn)(),c=t.deps;if(h!==null){var v;if(H(t,E),c!==null&&E>0)for(c.length=E+h.length,v=0;v<h.length;v++)c[E+v]=h[v];else t.deps=c=h;if(!I)for(v=E;v<c.length;v++)((dt=c[v]).reactions??(dt.reactions=[])).push(t)}else c!==null&&E<c.length&&(H(t,E),c.length=E);return p}finally{h=n,E=e,g=r,i=s,I=l,T=a,u=f}}function Yn(t,n){let e=n.reactions;if(e!==null){var r=ln.call(e,t);if(r!==-1){var s=e.length-1;s===0?e=n.reactions=null:(e[r]=e[s],e.pop())}}e===null&&n.f&w&&(h===null||!h.includes(n))&&(m(n,j),n.f&(O|K)||(n.f^=K),H(n,0))}function H(t,n){var e=t.deps;if(e!==null)for(var r=n;r<e.length;r++)Yn(t,e[r])}function V(t){var n=t.f;if(!(n&P)){m(t,d);var e=o,r=u;o=t;try{n&ft?On(t):jt(t),Ut(t),Ht(t);var s=zt(t);t.teardown=typeof s=="function"?s:null,t.wv=Xt;var l=t.deps,a}catch(f){tt(f,t,e,r||t.ctx)}finally{o=e}}}function Jt(){if(b>1e3){b=0;try{dn()}catch(t){if(Y!==null)tt(t,Y,null);else throw t}}b++}function Qt(t){var n=t.length;if(n!==0){Jt();var e=N;N=!0;try{for(var r=0;r<n;r++){var s=t[r];s.f&d||(s.f^=d);var l=[];tn(s,l),Hn(l)}}finally{N=e}}}function Hn(t){var n=t.length;if(n!==0)for(var e=0;e<n;e++){var r=t[e];if(!(r.f&(P|C)))try{F(r)&&(V(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Bt(r):r.fn=null))}catch(s){tt(s,r,null,r.ctx)}}}function Un(){if(M=!1,b>1001)return;const t=x;x=[],Qt(t),M||(b=0,Y=null)}function nt(t){$===Wt&&(M||(M=!0,queueMicrotask(Un))),Y=t;for(var n=t;n.parent!==null;){n=n.parent;var e=n.f;if(e&(J|A)){if(!(e&d))return;n.f^=d}}x.push(n)}function tn(t,n){var e=t.first,r=[];t:for(;e!==null;){var s=e.f,l=(s&A)!==0,a=l&&(s&d)!==0,f=e.next;if(!a&&!(s&C))if(s&U){if(l)e.f^=d;else try{F(e)&&V(e)}catch(v){tt(v,e,null,e.ctx)}var _=e.first;if(_!==null){e=_;continue}}else s&gt&&r.push(e);if(f===null){let v=e.parent;for(;v!==null;){if(t===v)break t;var p=v.next;if(p!==null){e=p;continue t}v=v.parent}}e=f}for(var c=0;c<r.length;c++)_=r[c],n.push(_),tn(_,n)}function nn(t){var n=$,e=x;try{Jt();const s=[];$=Pn,x=s,M=!1,Qt(e);var r=t==null?void 0:t();return Cn(),(x.length>0||s.length>0)&&nn(),b=0,Y=null,r}finally{$=n,x=e}}async function We(){await Promise.resolve(),nn()}function en(t){var c;var n=t.f,e=(n&w)!==0;if(e&&n&P){var r=Ft(t);return ct(t),r}if(i!==null){T!==null&&T.includes(t)&&En();var s=i.deps;t.rv<ot&&(t.rv=ot,h===null&&s!==null&&s[E]===t?E++:h===null?h=[t]:h.push(t),g!==null&&o!==null&&o.f&d&&!(o.f&A)&&g.includes(t)&&(m(o,S),nt(o)))}else if(e&&t.deps===null)for(var l=t,a=l.parent,f=l;a!==null;)if(a.f&w){var _=a;f=_,a=_.parent}else{var p=a;(c=p.deriveds)!=null&&c.includes(f)||(p.deriveds??(p.deriveds=[])).push(f);break}return e&&(l=t,F(l)&&Lt(l)),t.v}function et(t){const n=i;try{return i=null,t()}finally{i=n}}const jn=-7169;function m(t,n){t.f=t.f&jn|n}function Xe(t){return rn().get(t)}function Ze(t,n){return rn().set(t,n),n}function rn(t){return u===null&&Q(),u.c??(u.c=new Map(Bn(u)||void 0))}function Bn(t){let n=t.p;for(;n!==null;){const e=n.c;if(e!==null)return e;n=n.p}return null}function ze(t,n=1){var e=en(t),r=n===1?e++:e--;return Dt(t,e),r}function Je(t,n=!1,e){u={p:u,c:null,e:null,m:!1,s:t,x:null,l:null},B&&!n&&(u.l={s:null,u:null,r1:[],r2:_t(!1)})}function Qe(t){const n=u;if(n!==null){const a=n.e;if(a!==null){var e=o,r=i;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];z(l.effect),Z(l.reaction),Yt(l.fn)}}finally{z(e),Z(r)}}u=n.p,n.m=!0}return{}}function tr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(wt in t)it(t);else if(!Array.isArray(t))for(let n in t){const e=t[n];typeof e=="object"&&e&&wt in e&&it(e)}}}function it(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let r in t)try{it(t[r],n)}catch{}const e=un(t);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=an(e);for(let s in r){const l=r[s].get;if(l)try{l.call(t)}catch{}}}}}function nr(t,n,e){if(t==null)return n(void 0),e&&e(void 0),on;const r=et(()=>t.subscribe(n,e));return r.unsubscribe?()=>r.unsubscribe():r}function Vn(t){u===null&&Q(),B&&u.l!==null?$n(u).m.push(t):Rn(()=>{const n=et(t);if(typeof n=="function")return n})}function er(t){u===null&&Q(),Vn(()=>()=>et(t))}function Gn(t,n,{bubbles:e=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:r})}function rr(){const t=u;return t===null&&Q(),(n,e,r)=>{var l;const s=(l=t.s.$$events)==null?void 0:l[n];if(s){const a=sn(s)?s.slice():[s],f=Gn(n,e,r);for(const _ of a)_.call(t.x,f);return!f.defaultPrevented}return!0}}function $n(t){var n=t.l;return n.u??(n.u={a:[],b:[],m:[]})}export{pe as $,Qe as A,je as B,Oe as C,xe as D,xt as E,Dt as F,sn as G,un as H,Xn as I,Zn as J,_t as K,se as L,Et as M,o as N,le as O,mn as P,De as Q,L as R,wt as S,Se as T,Ae as U,Ve as V,Ge as W,Le as X,An as Y,re as Z,Qn as _,Be as a,Rt as a0,A as a1,J as a2,z as a3,ce as a4,B as a5,ve as a6,he as a7,te as a8,Fe as a9,er as aA,He as aB,Ue as aC,Ie as aD,ge as aE,Ke as aF,C as aG,ue as aH,gn as aI,oe as aJ,Vt as aK,Nn as aL,ie as aM,fe as aN,_e as aO,$e as aP,ne as aQ,an as aR,ft as aS,fn as aT,Ee as aU,we as aV,ye as aW,ht as aX,rr as aY,ze as aa,zn as ab,de as ac,nn as ad,Wn as ae,Vn as af,We as ag,Z as ah,i as ai,st as aj,lt as ak,me as al,Te as am,Ne as an,yn as ao,D as ap,kt as aq,Tn as ar,bt as as,ee as at,qe as au,Kn as av,Ye as aw,k as ax,Xe as ay,Ze as az,kn as b,Re as c,y as d,Rn as e,u as f,et as g,R as h,At as i,en as j,tr as k,xn as l,Yt as m,vt as n,ae as o,Dn as p,on as q,Jn as r,cn as s,nr as t,Me as u,Pe as v,be as w,ke as x,Je as y,Ce as z};