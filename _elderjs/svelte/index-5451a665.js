function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function c(t,n,e,o){if(t){const r=u(t,n,e,o);return t[0](r)}}function u(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function a(t,n,e,o,r,s,i){const c=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,s);if(c){const r=u(n,e,o,i);t.p(r,c)}}function f(t){return null==t?"":t}function l(t,n,e=n){return t.set(e),n}function d(t,n){t.appendChild(n)}function p(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function g(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function m(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function y(){return $(" ")}function b(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function w(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function x(t,n,e){n in t?t[n]=e:w(t,n,e)}function _(t){return Array.from(t.childNodes)}function v(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){let n=0;const s=[];for(;n<r.attributes.length;){const t=r.attributes[n++];e[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)r.removeAttribute(s[t]);return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):m(n)}function k(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return $(n)}function E(t){return k(t," ")}function A(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function M(t,n){t.value=null==n?"":n}function S(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}let z,C;function N(){if(void 0===z){z=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){z=!0}}return z}function j(t,n){const e=getComputedStyle(t),o=(parseInt(e.zIndex)||0)-1;"static"===e.position&&(t.style.position="relative");const r=m("iframe");r.setAttribute("style",`display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: ${o};`),r.setAttribute("aria-hidden","true"),r.tabIndex=-1;const s=N();let i;return s?(r.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",i=b(window,"message",t=>{t.source===r.contentWindow&&n()})):(r.src="about:blank",r.onload=()=>{i=b(r.contentWindow,"resize",n)}),d(t,r),()=>{(s||i&&r.contentWindow)&&i(),h(r)}}function I(t){C=t}function O(){if(!C)throw new Error("Function called outside component initialization");return C}function L(t){O().$$.on_mount.push(t)}function P(){const t=O();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach(n=>{n.call(t,r)})}}}function T(t,n){O().$$.context.set(t,n)}function W(t){return O().$$.context.get(t)}const q=[],B=[],F=[],D=[],G=Promise.resolve();let H=!1;function J(){H||(H=!0,G.then(V))}function K(){return J(),G}function Q(t){F.push(t)}let R=!1;const U=new Set;function V(){if(!R){R=!0;do{for(let t=0;t<q.length;t+=1){const n=q[t];I(n),X(n.$$)}for(I(null),q.length=0;B.length;)B.pop()();for(let t=0;t<F.length;t+=1){const n=F[t];U.has(n)||(U.add(n),n())}F.length=0}while(q.length);for(;D.length;)D.pop()();H=!1,R=!1,U.clear()}}function X(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(Q)}}const Y=new Set;let Z;function tt(){Z={r:0,c:[],p:Z}}function nt(){Z.r||o(Z.c),Z=Z.p}function et(t,n){t&&t.i&&(Y.delete(t),t.i(n))}function ot(t,n,e,o){if(t&&t.o){if(Y.has(t))return;Y.add(t),Z.c.push(()=>{Y.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function rt(t,n){ot(t,1,1,()=>{n.delete(t.key)})}function st(t,n,e,o,r,s,i,c,u,a,f,l){let d=t.length,p=s.length,h=d;const g={};for(;h--;)g[t[h].key]=h;const m=[],$=new Map,y=new Map;for(h=p;h--;){const t=l(r,s,h),c=e(t);let u=i.get(c);u?o&&u.p(t,n):(u=a(c,t),u.c()),$.set(c,m[h]=u),c in g&&y.set(c,Math.abs(h-g[c]))}const b=new Set,w=new Set;function x(t){et(t,1),t.m(c,f),i.set(t.key,t),f=t.first,p--}for(;d&&p;){const n=m[p-1],e=t[d-1],o=n.key,r=e.key;n===e?(f=n.first,d--,p--):$.has(r)?!i.has(o)||b.has(o)?x(n):w.has(r)?d--:y.get(o)>y.get(r)?(w.add(o),x(n)):(b.add(r),d--):(u(e,i),d--)}for(;d--;){const n=t[d];$.has(n.key)||u(n,i)}for(;p;)x(m[p-1]);return m}function it(t){t&&t.c()}function ct(t,n){t&&t.l(n)}function ut(t,e,s){const{fragment:i,on_mount:c,on_destroy:u,after_update:a}=t.$$;i&&i.m(e,s),Q(()=>{const e=c.map(n).filter(r);u?u.push(...e):o(e),t.$$.on_mount=[]}),a.forEach(Q)}function at(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(n,r,s,i,c,u,a=[-1]){const f=C;I(n);const l=r.props||{},d=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:a,skip_bound:!1};let p=!1;if(d.ctx=s?s(n,l,(t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&c(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&function(t,n){-1===t.$$.dirty[0]&&(q.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e}):[],d.update(),p=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),r.target){if(r.hydrate){const t=_(r.target);d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();r.intro&&et(n.$$.fragment),ut(n,r.target,r.anchor),V()}I(f)}class lt{$destroy(){at(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{c as A,rt as B,K as C,B as D,it as E,ct as F,ut as G,at as H,g as I,f as J,A as K,W as L,i as M,T as N,l as O,M as P,P as Q,lt as S,_ as a,w as b,v as c,h as d,m as e,p as f,d as g,y as h,ft as i,E as j,k,x as l,et as m,t as n,ot as o,S as p,Q as q,j as r,s,$ as t,a as u,b as v,tt as w,st as x,nt as y,L as z};