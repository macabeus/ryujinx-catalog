import{S as a,i as s,s as e,C as t,a as r,e as m,D as n,d as i,c as l,b as o,f as $,G as f,E as c,h as p,t as d,k as g,F as G}from"../index-cae74326.js";import h from"./GameList.f88de498.js";import"./Tag.75e34738.js";import"./Tags.d807fff5.js";import"./GameTeaser.07404b3d.js";import u from"./SearchGames.d0cd604a.js";function j(a){let s,e,j,b,x,T;return s=new u({props:{allGames:a[0]}}),s.$on("update",a[2]),x=new h({props:{games:a[1]}}),{c(){t(s.$$.fragment),e=r(),j=m("div"),b=r(),t(x.$$.fragment),this.h()},l(a){n(s.$$.fragment,a),e=i(a),j=l(a,"DIV",{class:!0}),o(j).forEach($),b=i(a),n(x.$$.fragment,a),this.h()},h(){f(j,"class","spacing svelte-1ibj1i4")},m(a,t){c(s,a,t),p(a,e,t),p(a,j,t),p(a,b,t),c(x,a,t),T=!0},p(a,[e]){const t={};1&e&&(t.allGames=a[0]),s.$set(t);const r={};2&e&&(r.games=a[1]),x.$set(r)},i(a){T||(d(s.$$.fragment,a),d(x.$$.fragment,a),T=!0)},o(a){g(s.$$.fragment,a),g(x.$$.fragment,a),T=!1},d(a){G(s,a),a&&$(e),a&&$(j),a&&$(b),G(x,a)}}}function b(a,s,e){let{allGames:t}=s,r=t;return a.$$set=a=>{"allGames"in a&&e(0,t=a.allGames)},[t,r,a=>{e(1,r=a.detail)}]}export default class extends a{constructor(a){super(),s(this,a,b,j,e,{allGames:0})}}
