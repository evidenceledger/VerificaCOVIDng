if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const f=e=>a(e,r),n={module:{uri:r},exports:d,require:f};s[r]=Promise.all(i.map((e=>n[e]||f(e)))).then((e=>(c(...e),d)))}}define(["./workbox-873c5e43"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"63a30637dfaf54fda8fef38245d8c90b"},{url:"assets/_commonjsHelpers.4e997714.js",revision:"44790040f67d32cf5f050d4990db5e2f"},{url:"assets/abstractpage.653c245a.js",revision:"0dbfc42e5509881777221383a5f3c283"},{url:"assets/camerainfo.4311a7fd.js",revision:"93bafe32c785960857645bb5215d1aea"},{url:"assets/displayqr.d202a3b3.js",revision:"5547f67176205bd2225c9e0368859884"},{url:"assets/faqs.65dd8a0c.js",revision:"bf1299118cfba8d7c2356ccdb9e2afde"},{url:"assets/hcertpage.251907d0.js",revision:"4da63703247f723436ea83bc1bc5b6f9"},{url:"assets/help.76d7cb60.js",revision:"e2bce751e6ee3c4b09761aec4f4b9aed"},{url:"assets/i18.a606bd4d.js",revision:"d86f5919e93b39d147dfc9c584b6ea32"},{url:"assets/index.85b8ad63.css",revision:"07d46f3c5ad433af2c707cd6024c2365"},{url:"assets/index.ebd55170.js",revision:"8c4d7d879da9c76a9b97f36d356239e5"},{url:"assets/intropage.028ddc93.js",revision:"87b0172572ba7552682b1f3fe76628bb"},{url:"assets/legal.ec5a9509.js",revision:"7ac75348941987e46f960efebfaf9585"},{url:"assets/microwallet.1e54c8a1.js",revision:"a6b10400a33399350a77c4b4c0e20f56"},{url:"assets/myhcertpage.cdd6fd4f.js",revision:"2fdfbbc9bc63e553489f485d114301a8"},{url:"assets/page404.0a04d3c8.js",revision:"be6c71380cd194a77ebf31bf0345ece8"},{url:"assets/privacypolicy.6a409667.js",revision:"a6313ab6554bc424d5c99d3c45e57a54"},{url:"assets/scanqr.75c97f8d.js",revision:"f8a959a11a54de3f9353108d9491e972"},{url:"assets/selectcamera.3453aad2.js",revision:"aa7167118415789da152a254b437283d"},{url:"assets/swnotify.fc604bc6.js",revision:"48b4d389c401fae1297866b1d134b195"},{url:"assets/termsofuse.9e76a91f.js",revision:"82a477dcc336b1244b690485dba99f52"},{url:"assets/warning.03c9a936.js",revision:"5f8c428f651517eadff269138b16fae9"},{url:"assets/workbox-window.prod.es5.a2fa118e.js",revision:"336c20b8c52e7fe192657bd4f83e6a6f"},{url:"favicon.ico",revision:"0eb6a3e58fb0f61f080bfd48d9be4a2d"},{url:"icon-152.png",revision:"63a30637dfaf54fda8fef38245d8c90b"},{url:"icon-192.png",revision:"c896e58149355fd82cf8c41053bfcbc8"},{url:"icon-512.png",revision:"9a89e31d4c14fffe9a66a88236df507e"},{url:"index.html",revision:"d0c111d3b7c8922a71b84bf23ec016d6"},{url:"manifest.webmanifest",revision:"62287756331395d85c8aecab6dcb762d"},{url:"version.txt",revision:"a4113566b0a9da5e665ddd6982ae46f3"}],{})}));
//# sourceMappingURL=sw.js.map
