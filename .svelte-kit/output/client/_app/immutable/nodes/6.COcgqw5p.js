import{a as s,t as z,b as i}from"../chunks/disclose-version.T6rPbwlf.js";import{i as G}from"../chunks/legacy.Dawxrsww.js";import{p as H,l as K,h as M,a as Q,s as t,g as c,b as m,c as o,n as l,t as R,r as d,m as u,i as U}from"../chunks/runtime.D1Gg6DO2.js";import{s as V}from"../chunks/render.5P34H023.js";import{p as W,i as X}from"../chunks/props.CI-ns3SY.js";import{L as v,I as p,B as Y,a as Z,A as ee}from"../chunks/Input.Dsvr9uOF.js";import{e as ae}from"../chunks/forms.r7BMjKyA.js";import{g as k}from"../chunks/entry.DSAGDIFt.js";var re=z('<div class="w-screen h-screen flex flex-col justify-center items-center bg-gray-50"><div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md"><h1 class="text-2xl font-bold text-center text-gray-900">Create an Account</h1> <!> <form method="POST" class="space-y-4"><div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <!></form> <p class="text-sm text-center text-gray-600">Already have an account? <a href="/" class="text-blue-600 hover:underline">Sign in</a></p></div></div>');function me(D,y){H(y,!1);let n=W(y,"form",8),w=u(""),b=u(""),P=u(""),A=u("");K(()=>(U(n()),k),()=>{var e;(e=n())!=null&&e.success&&k(n().location)}),M(),G();var f=re(),q=o(f),C=t(o(q),2);{var E=e=>{ee(e,{color:"red",class:"mt-4",children:(a,r)=>{l();var j=i();R(()=>V(j,n().error)),s(a,j)},$$slots:{default:!0}})};X(C,e=>{var a;(a=n())!=null&&a.error&&e(E)})}var _=t(C,2),$=o(_),B=o($);v(B,{for:"name",class:"mb-2",children:(e,a)=>{l();var r=i("Full Name");s(e,r)},$$slots:{default:!0}});var F=t(B,2);p(F,{type:"text",name:"name",id:"name",placeholder:"John Doe",required:!0,get value(){return c(w)},set value(e){m(w,e)},$$legacy:!0}),d($);var h=t($,2),I=o(h);v(I,{for:"email",class:"mb-2",children:(e,a)=>{l();var r=i("Email");s(e,r)},$$slots:{default:!0}});var J=t(I,2);p(J,{type:"email",name:"email",id:"email",placeholder:"name@company.com",required:!0,get value(){return c(b)},set value(e){m(b,e)},$$legacy:!0}),d(h);var g=t(h,2),L=o(g);v(L,{for:"password",class:"mb-2",children:(e,a)=>{l();var r=i("Password");s(e,r)},$$slots:{default:!0}});var N=t(L,2);p(N,{type:"password",name:"password",id:"password",placeholder:"••••••••",required:!0,get value(){return c(P)},set value(e){m(P,e)},$$legacy:!0}),d(g);var x=t(g,2),S=o(x);v(S,{for:"confirmPassword",class:"mb-2",children:(e,a)=>{l();var r=i("Confirm Password");s(e,r)},$$slots:{default:!0}});var O=t(S,2);p(O,{type:"password",name:"confirmPassword",id:"confirmPassword",placeholder:"••••••••",required:!0,get value(){return c(A)},set value(e){m(A,e)},$$legacy:!0}),d(x);var T=t(x,2);Y(T,{type:"submit",class:"w-full",children:(e,a)=>{l();var r=i("Create Account");s(e,r)},$$slots:{default:!0}}),d(_),Z(_,e=>{var a;return(a=ae)==null?void 0:a(e)}),l(2),d(q),d(f),s(D,f),Q()}export{me as component};
