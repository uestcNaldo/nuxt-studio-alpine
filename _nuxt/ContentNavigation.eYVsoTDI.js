import{u as f}from"./asyncData.LzyWWHRa.js";import{l as v,a9 as p,_ as g,d,aw as l,H as h,m as _,U as w,ab as y,M as r,D as C}from"./entry.PW40O_fD.js";import{q as P,w as m,e as $,s as N,j}from"./query.r8c0nhke.js";import{u as T}from"./preview.4hTvy1tD.js";const D=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=P(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${$(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(N())return(await g(()=>import("./client-db.n7S-akPz.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:j(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=w();return{navigation:n}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=y(),{navigation:a}=e,s=o=>r(C,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),Q=E;export{Q as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.n7S-akPz.js","./entry.PW40O_fD.js","./entry.FrbZ-CPD.css","./slugify.vo-Be8Wd.js","./query.r8c0nhke.js","./preview.4hTvy1tD.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
