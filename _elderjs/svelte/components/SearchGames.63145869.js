import{S as t,i as s,s as a,e,t as l,c as n,a as r,k as i,d as c,b as o,f as h,g,v as u,K as f,h as m,j as d,P as p,n as v,I as k,L as y,Q as G}from"../index-5451a665.js";import{t as w}from"../tagsFilter-86f4ad15.js";function $(t,s,a){const e=t.slice();return e[8]=s[a],e}function j(t){let s,a,m,d,p,v=t[8]+"";function k(){return t[4](t[8])}return{c(){s=e("button"),a=l(v),m=l(" ×"),this.h()},l(t){s=n(t,"BUTTON",{class:!0});var e=r(s);a=i(e,v),m=i(e," ×"),e.forEach(c),this.h()},h(){o(s,"class","tag svelte-w0mhkt")},m(t,e){h(t,s,e),g(s,a),g(s,m),d||(p=u(s,"click",k),d=!0)},p(s,e){t=s,1&e&&v!==(v=t[8]+"")&&f(a,v)},d(t){t&&c(s),d=!1,p()}}}function x(t){let s,a,l,i,f,y,G,w,x=t[0],F=[];for(let s=0;s<x.length;s+=1)F[s]=j($(t,x,s));return{c(){s=e("div"),a=e("img"),i=m();for(let t=0;t<F.length;t+=1)F[t].c();f=m(),y=e("input"),this.h()},l(t){s=n(t,"DIV",{class:!0});var e=r(s);a=n(e,"IMG",{src:!0,class:!0,alt:!0}),i=d(e);for(let t=0;t<F.length;t+=1)F[t].l(e);f=d(e),y=n(e,"INPUT",{placeholder:!0,class:!0}),e.forEach(c),this.h()},h(){a.src!==(l="/ryujinx-catalog/icons/magnifyingGlass.svg")&&o(a,"src","/ryujinx-catalog/icons/magnifyingGlass.svg"),o(a,"class","icon svelte-w0mhkt"),o(a,"alt","Search"),o(y,"placeholder","Search"),o(y,"class","searchInput svelte-w0mhkt"),o(s,"class","container svelte-w0mhkt")},m(e,l){h(e,s,l),g(s,a),g(s,i);for(let t=0;t<F.length;t+=1)F[t].m(s,null);g(s,f),g(s,y),p(y,t[1]),G||(w=u(y,"input",t[5]),G=!0)},p(t,[a]){if(5&a){let e;for(x=t[0],e=0;e<x.length;e+=1){const l=$(t,x,e);F[e]?F[e].p(l,a):(F[e]=j(l),F[e].c(),F[e].m(s,f))}for(;e<F.length;e+=1)F[e].d(1);F.length=x.length}2&a&&y.value!==t[1]&&p(y,t[1])},i:v,o:v,d(t){t&&c(s),k(F,t),G=!1,w()}}}function F(t,s,a){let{allGames:e}=s,{tagsFilter:l}=s;const{toggleTag:n}=y(w.key),r=t=>n(t),i=G();let c="";return t.$$set=t=>{"allGames"in t&&a(3,e=t.allGames),"tagsFilter"in t&&a(0,l=t.tagsFilter)},t.$$.update=()=>{if(11&t.$$.dirty)if(""===c&&0===l.length)i("update",e);else{const t=c.toLowerCase(),s=e.filter(s=>(0===l.length||l.every(t=>s.tags.includes(t)))&&(0===t.length||s.title.toLowerCase().includes(t)));i("update",s)}},[l,c,r,e,t=>r(t),function(){c=this.value,a(1,c)}]}export default class extends t{constructor(t){super(),s(this,t,F,x,a,{allGames:3,tagsFilter:0})}}
