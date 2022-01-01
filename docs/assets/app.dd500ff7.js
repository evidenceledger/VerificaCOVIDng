const E=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}};E();const h="modulepreload",u={},v="./",s=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${v}${r}`,r in u)return;u[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const n=document.createElement("link");if(n.rel=a?"stylesheet":h,a||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),a)return new Promise((p,y)=>{n.addEventListener("load",p),n.addEventListener("error",y)})})).then(()=>t())};var c={MAX_LOG_ENTRIES:100,logItems:[],next_item:0,mylog_entry(e,t,o){var r={timestamp:Date.now(),level:e,desc:t,item:o};if(this.logItems.length<this.MAX_LOG_ENTRIES){this.logItems.push(r);return}this.logItems[this.next_item]=r,this.next_item=this.next_item+1,this.next_item==this.MAX_LOG_ENTRIES&&(this.next_item=0)},log(e){{var t=Array.prototype.slice.call(arguments,1);console.log(e,t),this.mylog_entry("N",e,t)}},warn(e,...t){{let o=e;try{o=new Warning(e).stack}catch{}console.warn(o,...t),this.mylog_entry("W",o,...t)}},error(e,...t){let o=e;try{o=new Error(e).stack}catch{}console.error(o,...t),this.mylog_entry("E",o,...t)},olderror(e){var t=Array.prototype.slice.call(arguments,1);console.error(e,t),this.mylog_entry("E",e,t)},num_items(){return this.logItems.length<this.MAX_LOG_ENTRIES?this.logItems.length:this.MAX_LOG_ENTRIES},item(e){if(!(e>=this.num_items())){if(this.logItems.length<this.MAX_LOG_ENTRIES)return this.logItems[e];{let t=(this.next_item+e)%this.MAX_LOG_ENTRIES;return this.logItems[t]}}}};async function P(e){switch(e){case"ScanQrNativePage":await s(()=>import("./ScanQrNativePage.0782a78b.js"),["assets/ScanQrNativePage.0782a78b.js","assets/AbstractPage.91f3c767.js","assets/camerainfo.4311a7fd.js"]);break;case"IntroPage":await s(()=>import("./IntroPage.1b1b76e7.js"),["assets/IntroPage.1b1b76e7.js","assets/AbstractPage.91f3c767.js"]);break;case"Page404":await s(()=>import("./Page404.bb8262ae.js"),["assets/Page404.bb8262ae.js","assets/AbstractPage.91f3c767.js"]);break;case"ScanQrPage":await s(()=>import("./ScanQrPage.5ca643d9.js"),["assets/ScanQrPage.5ca643d9.js","assets/AbstractPage.91f3c767.js","assets/camerainfo.4311a7fd.js"]);break;case"Faqs":await s(()=>import("./Faqs.94b5acd8.js"),["assets/Faqs.94b5acd8.js","assets/AbstractPage.91f3c767.js"]);break;case"SelectLanguage":await s(()=>import("./SelectLanguage.a362fde3.js"),["assets/SelectLanguage.a362fde3.js","assets/AbstractPage.91f3c767.js"]);break;case"Help":await s(()=>import("./Help.4107a856.js"),["assets/Help.4107a856.js","assets/AbstractPage.91f3c767.js"]);break;case"DisplayHcert":await s(()=>import("./DisplayHcert.10f62502.js"),["assets/DisplayHcert.10f62502.js","assets/AbstractPage.91f3c767.js","assets/warning.98a897b8.js","assets/_commonjsHelpers.b8add541.js"]);break;case"DisplayMyHcert":await s(()=>import("./DisplayMyHcert.d92cec07.js"),["assets/DisplayMyHcert.d92cec07.js","assets/AbstractPage.91f3c767.js","assets/warning.98a897b8.js","assets/_commonjsHelpers.b8add541.js"]);break;case"MicroWallet":await s(()=>import("./MicroWallet.d125c397.js"),["assets/MicroWallet.d125c397.js","assets/AbstractPage.91f3c767.js"]);break;case"DisplayQR":await s(()=>import("./DisplayQR.20b6db8a.js"),["assets/DisplayQR.20b6db8a.js","assets/AbstractPage.91f3c767.js","assets/_commonjsHelpers.b8add541.js"]);break;case"SelectCamera":await s(()=>import("./SelectCamera.1d747836.js"),["assets/SelectCamera.1d747836.js","assets/AbstractPage.91f3c767.js","assets/camerainfo.4311a7fd.js"]);break;case"TermsOfUse":await s(()=>import("./TermsOfUse.4a4d8b80.js"),["assets/TermsOfUse.4a4d8b80.js","assets/AbstractPage.91f3c767.js","assets/legal.ec5a9509.js"]);break;case"PrivacyPolicy":await s(()=>import("./PrivacyPolicy.caaf83af.js"),["assets/PrivacyPolicy.caaf83af.js","assets/AbstractPage.91f3c767.js","assets/legal.ec5a9509.js"]);break;case"SWNotify":await s(()=>import("./SWNotify.e2ee1c3e.js"),["assets/SWNotify.e2ee1c3e.js","assets/AbstractPage.91f3c767.js"]);break;case"LogsPage":await s(()=>import("./LogsPage.4115aad1.js"),["assets/LogsPage.4115aad1.js","assets/AbstractPage.91f3c767.js"]);break}}var d=window.homePage;if(!d)throw"No homePage was set.";var g="Page404",l=null;function I(e,t){l||(l=new Map),l.set(e,t)}async function f(){document.getElementById("SplashScreen").style.display="none",d!=null&&await _(d)}window.goHome=f;async function _(e,t){console.log("Inside gotoPage:",e),await P(e),l.get(e)===void 0&&(c.error("Target page does not exist: ",e),t=e,e=g),window.history.pushState({pageName:e,pageData:t},`${e}`),await m(e,t,!1)}window.gotoPage=_;async function m(e,t,o){try{for(let[a,i]of l)i.domElem.style.display="none",a!==e&&i.exit&&await i.exit()}catch(a){c.error("Trying to call exit",a);return}let r=l.get(e);r===void 0&&(t=e,r=l.get(g)),window.scrollTo(0,0);try{r.enter?await r.enter(t,o):r.style.display="block"}catch(a){c.error("Calling enter()",a);return}}window.addEventListener("popstate",async function(e){var t=d,o=void 0,r=e.state;r!=null&&(t=r.pageName,o=r.pageData),await m(t,o,!0)});async function L(){let e=await fetch("./version.txt");if(!e.ok){c.error("fetch for version.txt failed");return}window.appVersion=await e.text(),window.localStorage.setItem("VERSION",appVersion),console.log("Version:",appVersion)}window.addEventListener("DOMContentLoaded",async e=>{L(),f()});window.addEventListener("load",async e=>{if(console.log("In production"),"serviceWorker"in navigator){const{Workbox:t}=await s(()=>import("./workbox-window.prod.es5.a2fa118e.js"),[]),o=new t("./sw.js");o.addEventListener("message",r=>{if(r.data.type==="CACHE_UPDATED"){const{updatedURL:a}=r.data.payload;console.log(`A newer version of ${a} is available!`)}}),o.addEventListener("activated",async r=>{r.isUpdate?(console.log("Service worker has been updated.",r),await w(!0)):(console.log("Service worker has been installed for the first time.",r),await w(!1))}),o.addEventListener("waiting",r=>{console.log("A new service worker has installed, but it can't activateuntil all tabs running the current version have fully unloaded.")}),o.register()}});async function w(e){console.log("Performing Upgrade"),_("SWNotify",{isUpdate:e})}export{s as _,f as a,_ as g,c as l,I as r};
