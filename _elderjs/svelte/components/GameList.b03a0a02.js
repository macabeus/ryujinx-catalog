import{S as t,i as e,s,e as n,h as l,c as a,a as i,j as o,d as r,l as c,f as h,g,u as f,m,o as u,p,q as d,r as $,v,w as T,x as y,y as E,z as x,A as w,t as H,k as I,B as L,C as V,D as S,E as b,F as j,b as N,G as A,H as R,I as M}from"../index-5451a665.js";import"../tagsFilter-86f4ad15.js";import"./Tag.7283c2eb.js";import"./Tags.80b2c190.js";import k from"./GameTeaser.24482c00.js";function B(t,e,s){const n=t.slice();return n[23]=e[s],n}const D=t=>({item:16&t}),O=t=>({item:t[23].data});function U(t,e){let s,p,d;const $=e[13].default,v=w($,e,e[12],O),T=v||function(t){let e;return{c(){e=H("Missing template")},l(t){e=I(t,"Missing template")},m(t,s){h(t,e,s)},d(t){t&&r(e)}}}();return{key:t,first:null,c(){s=n("svelte-virtual-list-row"),T&&T.c(),p=l(),this.h()},l(t){s=a(t,"SVELTE-VIRTUAL-LIST-ROW",{class:!0});var e=i(s);T&&T.l(e),p=o(e),e.forEach(r),this.h()},h(){c(s,"class","svelte-6oopgv"),this.first=s},m(t,e){h(t,s,e),T&&T.m(s,null),g(s,p),d=!0},p(t,e){v&&v.p&&4112&e&&f(v,$,t,t[12],e,D,O)},i(t){d||(m(T,t),d=!0)},o(t){u(T,t),d=!1},d(t){t&&r(s),T&&T.d(t)}}}function q(t){let e,s,l,o,f,x,w=[],H=new Map,I=t[4];const V=t=>t[23].index;for(let e=0;e<I.length;e+=1){let s=B(t,I,e),n=V(s);H.set(n,w[e]=U(n,s))}return{c(){e=n("svelte-virtual-list-viewport"),s=n("svelte-virtual-list-contents");for(let t=0;t<w.length;t+=1)w[t].c();this.h()},l(t){e=a(t,"SVELTE-VIRTUAL-LIST-VIEWPORT",{style:!0,class:!0});var n=i(e);s=a(n,"SVELTE-VIRTUAL-LIST-CONTENTS",{style:!0,class:!0});var l=i(s);for(let t=0;t<w.length;t+=1)w[t].l(l);l.forEach(r),n.forEach(r),this.h()},h(){p(s,"padding-top",t[5]+"px"),p(s,"padding-bottom",t[6]+"px"),c(s,"class","svelte-6oopgv"),p(e,"height",t[0]),c(e,"class","svelte-6oopgv"),d(()=>t[16].call(e))},m(n,a){h(n,e,a),g(e,s);for(let t=0;t<w.length;t+=1)w[t].m(s,null);t[14](s),t[15](e),l=$(e,t[16].bind(e)),o=!0,f||(x=v(e,"scroll",t[7]),f=!0)},p(t,[n]){if(4112&n){const e=t[4];T(),w=y(w,n,V,1,t,e,H,s,L,U,null,B),E()}(!o||32&n)&&p(s,"padding-top",t[5]+"px"),(!o||64&n)&&p(s,"padding-bottom",t[6]+"px"),(!o||1&n)&&p(e,"height",t[0])},i(t){if(!o){for(let t=0;t<I.length;t+=1)m(w[t]);o=!0}},o(t){for(let t=0;t<w.length;t+=1)u(w[t]);o=!1},d(s){s&&r(e);for(let t=0;t<w.length;t+=1)w[t].d();t[14](null),t[15](null),l(),f=!1,x()}}}function C(t,e,s){let n,l,a,i,o,r,{$$slots:c={},$$scope:h}=e,{items:g}=e,{height:f="100%"}=e,{itemHeight:m}=e,{start:u=0}=e,{end:p=0}=e,d=[],$=0,v=0,T=0;return x(()=>{n=a.getElementsByTagName("svelte-virtual-list-row"),s(19,o=!0)}),t.$$set=t=>{"items"in t&&s(10,g=t.items),"height"in t&&s(0,f=t.height),"itemHeight"in t&&s(11,m=t.itemHeight),"start"in t&&s(8,u=t.start),"end"in t&&s(9,p=t.end),"$$scope"in t&&s(12,h=t.$$scope)},t.$$.update=()=>{1792&t.$$.dirty&&s(4,i=g.slice(u,p).map((t,e)=>({index:e+u,data:t}))),527368&t.$$.dirty&&o&&async function(t,e,a){const{scrollTop:i}=l;await V();let o=v-i,c=u;for(;o<e&&c<t.length;){let t=n[c-u];t||(s(9,p=c+1),await V(),t=n[c-u]);o+=d[c]=a||t.offsetHeight,c+=1}s(9,p=c);const h=t.length-p;r=(v+o)/p,s(6,T=h*r),d.length=t.length}(g,$,m)},[f,l,a,$,i,v,T,async function(){const{scrollTop:t}=l,e=u;for(let t=0;t<n.length;t+=1)d[u+t]=m||n[t].offsetHeight;let a=0,i=0;for(;a<g.length;){const e=d[a]||r;if(i+e>t){s(8,u=a),s(5,v=i);break}i+=e,a+=1}for(;a<g.length&&(i+=d[a]||r,a+=1,!(i>t+$)););s(9,p=a);const o=g.length-p;for(r=i/p;a<g.length;)d[a++]=r;if(s(6,T=o*r),u<e){await V();let s=0,a=0;for(let t=u;t<e;t+=1)n[t-u]&&(s+=d[t],a+=m||n[t-u].offsetHeight);const i=a-s;l.scrollTo(0,t+i)}},u,p,g,m,h,c,function(t){S[t?"unshift":"push"](()=>{a=t,s(2,a)})},function(t){S[t?"unshift":"push"](()=>{l=t,s(1,l)})},function(){$=this.offsetHeight,s(3,$)}]}class F extends t{constructor(t){super(),e(this,t,C,q,s,{items:10,height:0,itemHeight:11,start:8,end:9})}}var G=(t,e)=>{const s=Math.ceil(t.length/e);return[...Array(s)].map((s,n)=>t.slice(e*n,e+e*n))};function W(t,e,s){const n=t.slice();return n[2]=e[s],n}function z(t){let e;return{c(){e=H("No game to list. Try changing your search.")},l(t){e=I(t,"No game to list. Try changing your search.")},m(t,s){h(t,e,s)},d(t){t&&r(e)}}}function P(t){let e,s;return e=new k({props:{game:t[2]}}),{c(){b(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,n){A(e,t,n),s=!0},p(t,s){const n={};2&s&&(n.game=t[2]),e.$set(n)},i(t){s||(m(e.$$.fragment,t),s=!0)},o(t){u(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function J(t){let e,s,l=t[1],o=[];for(let e=0;e<l.length;e+=1)o[e]=P(W(t,l,e));const c=t=>u(o[t],1,1,()=>{o[t]=null});return{c(){e=n("div");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){e=a(t,"DIV",{class:!0});var s=i(e);for(let t=0;t<o.length;t+=1)o[t].l(s);s.forEach(r),this.h()},h(){N(e,"class","row svelte-1qd3goa")},m(t,n){h(t,e,n);for(let t=0;t<o.length;t+=1)o[t].m(e,null);s=!0},p(t,s){if(2&s){let n;for(l=t[1],n=0;n<l.length;n+=1){const a=W(t,l,n);o[n]?(o[n].p(a,s),m(o[n],1)):(o[n]=P(a),o[n].c(),m(o[n],1),o[n].m(e,null))}for(T(),n=l.length;n<o.length;n+=1)c(n);E()}},i(t){if(!s){for(let t=0;t<l.length;t+=1)m(o[t]);s=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)u(o[t]);s=!1},d(t){t&&r(e),M(o,t)}}}function K(t){let e,s,c,g,f=0===t[0].length&&z();return c=new F({props:{height:"calc(100vh - 150px)",itemHeight:325,items:G(t[0],Q),class:"container",$$slots:{default:[J,({item:t})=>({1:t}),({item:t})=>t?2:0]},$$scope:{ctx:t}}}),{c(){f&&f.c(),e=l(),s=n("div"),b(c.$$.fragment),this.h()},l(t){f&&f.l(t),e=o(t),s=a(t,"DIV",{class:!0});var n=i(s);j(c.$$.fragment,n),n.forEach(r),this.h()},h(){N(s,"class","container")},m(t,n){f&&f.m(t,n),h(t,e,n),h(t,s,n),A(c,s,null),g=!0},p(t,[s]){0===t[0].length?f||(f=z(),f.c(),f.m(e.parentNode,e)):f&&(f.d(1),f=null);const n={};1&s&&(n.items=G(t[0],Q)),34&s&&(n.$$scope={dirty:s,ctx:t}),c.$set(n)},i(t){g||(m(c.$$.fragment,t),g=!0)},o(t){u(c.$$.fragment,t),g=!1},d(t){f&&f.d(t),t&&r(e),t&&r(s),R(c)}}}const Q=4;function X(t,e,s){let{games:n}=e;return t.$$set=t=>{"games"in t&&s(0,n=t.games)},[n]}export default class extends t{constructor(t){super(),e(this,t,X,K,s,{games:0})}}