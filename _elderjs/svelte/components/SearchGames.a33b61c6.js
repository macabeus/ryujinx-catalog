import{S as s,i as e,s as a,e as t,c as l,b as i,f as n,L as c,v as u,n as r,d,M as o}from"../index-867d81b8.js";function p(s){let e,a,o;return{c(){e=t("input"),this.h()},l(s){e=l(s,"INPUT",{placeholder:!0,class:!0}),this.h()},h(){i(e,"placeholder","Search"),i(e,"class","searchInput svelte-7pmgt2")},m(t,l){n(t,e,l),c(e,s[0]),a||(o=u(e,"input",s[2]),a=!0)},p(s,[a]){1&a&&e.value!==s[0]&&c(e,s[0])},i:r,o:r,d(s){s&&d(e),a=!1,o()}}}function h(s,e,a){let{allGames:t}=e;const l=o();let i="";return s.$$set=s=>{"allGames"in s&&a(1,t=s.allGames)},s.$$.update=()=>{if(3&s.$$.dirty)if(""===i)l("update",t);else{const s=t.filter(s=>s.title.includes(i));l("update",s)}},[i,t,function(){i=this.value,a(0,i)}]}export default class extends s{constructor(s){super(),e(this,s,h,p,a,{allGames:1})}}
