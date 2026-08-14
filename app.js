function qs(selector){return document.querySelector(selector);}
function show(id){const el=qs("#"+id); if(el) el.classList.remove("hidden");}
function hide(id){const el=qs("#"+id); if(el) el.classList.add("hidden");}
function esc(value){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function makeRef(prefix){return prefix+"-"+Math.floor(10000+Math.random()*90000);}
function save(key,value){localStorage.setItem(key,JSON.stringify(value));}
function load(key){try{return JSON.parse(localStorage.getItem(key));}catch(e){return null;}}
function navActive(){const path=location.pathname; document.querySelectorAll("nav a").forEach(a=>{a.classList.toggle("active",path.endsWith(a.getAttribute("href")));});}
document.addEventListener("DOMContentLoaded",navActive);