import{S as a,i as s,s as e,e as r,h as t,E as c,c as l,a as o,d as g,j as n,F as m,b as i,f as u,g as f,G as h,t as d,l as v,H as $}from"../index-c5f7b890.js";import"./Tag.16451cea.js";import p from"./Tags.aac5c2a0.js";function b(a){let s,e,b,y,I,k,j,E,x,G,D;return G=new p({props:{tags:a[0].tags}}),{c(){s=r("div"),e=r("div"),y=t(),I=r("a"),k=r("img"),x=t(),c(G.$$.fragment),this.h()},l(a){s=l(a,"DIV",{class:!0,style:!0});var r=o(s);e=l(r,"DIV",{class:!0,style:!0}),o(e).forEach(g),y=n(r),I=l(r,"A",{href:!0});var t=o(I);k=l(t,"IMG",{class:!0,src:!0,alt:!0}),t.forEach(g),x=n(r),m(G.$$.fragment,r),r.forEach(g),this.h()},h(){i(e,"class","entry-background svelte-14i894u"),i(e,"style",b=`--background-image: url(${a[0].coverImage})`),i(k,"class","cover-image svelte-14i894u"),k.src!==(j=a[0].coverImage)&&i(k,"src",j),i(k,"alt","Game Cover"),i(I,"href",E=a[0].permalink),i(s,"class","entry svelte-14i894u"),i(s,"style","--border-color: "+a[1])},m(a,r){u(a,s,r),f(s,e),f(s,y),f(s,I),f(I,k),f(s,x),h(G,s,null),D=!0},p(a,[s]){(!D||1&s&&b!==(b=`--background-image: url(${a[0].coverImage})`))&&i(e,"style",b),(!D||1&s&&k.src!==(j=a[0].coverImage))&&i(k,"src",j),(!D||1&s&&E!==(E=a[0].permalink))&&i(I,"href",E);const r={};1&s&&(r.tags=a[0].tags),G.$set(r)},i(a){D||(d(G.$$.fragment,a),D=!0)},o(a){v(G.$$.fragment,a),D=!1},d(a){a&&g(s),$(G)}}}function y(a,s,e){let{game:r}=s;const t="tomato",c="rgb(13, 222, 156)",l="rgb(201, 209, 161)",o=r.tags.includes("playable")?c:r.tags.includes("crash")?t:l;return a.$$set=a=>{"game"in a&&e(0,r=a.game)},[r,o]}export default class extends a{constructor(a){super(),s(this,a,y,b,e,{game:0})}}
