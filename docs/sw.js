if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const d=e=>a(e,r),b={module:{uri:r},exports:c,require:d};s[r]=Promise.all(f.map((e=>b[e]||d(e)))).then((e=>(i(...e),c)))}}define(["./workbox-873c5e43"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"63a30637dfaf54fda8fef38245d8c90b"},{url:"assets/_commonjsHelpers.4e997714.js",revision:"44790040f67d32cf5f050d4990db5e2f"},{url:"assets/BrowserQRCodeReader.076087ed.js",revision:"16a8012231e031da9ba8e04c43150733"},{url:"assets/camerainfo.bed069c7.js",revision:"67d321b257500f7fb3f49ea965e9ab1a"},{url:"assets/displayqr.e9bfeab1.js",revision:"a26ae0d2d6dc0207177fe1f37c82eceb"},{url:"assets/faqs.ebdbad75.js",revision:"81921e679b861a6babb1029cd36d4f68"},{url:"assets/hcertpage.2f38266b.js",revision:"def39f3eaaee57c60cab590acdf43a5c"},{url:"assets/help.71260166.js",revision:"47132a66ab422c2fa29ff6f7ecb3fbcf"},{url:"assets/i18.5476d328.js",revision:"b5234c4100876dce6f2a59d7eff3d3fb"},{url:"assets/index.85b8ad63.css",revision:"07d46f3c5ad433af2c707cd6024c2365"},{url:"assets/index.86574d5b.js",revision:"2428d448fd52bebafc09ac0e7e653019"},{url:"assets/intropage.0b0381e7.js",revision:"56a36e8f9339832d6b12036df7ba4f46"},{url:"assets/legal.ec5a9509.js",revision:"7ac75348941987e46f960efebfaf9585"},{url:"assets/microwallet.15ab7ba3.js",revision:"72b2984a38714153c5f5d60620af7a9d"},{url:"assets/myhcertpage.7b684393.js",revision:"36615d046be9b95d9f3487dea580ff09"},{url:"assets/privacypolicy.49ac681e.js",revision:"4eb8cdb8ad6b4e02ae5bd3552dbbb15d"},{url:"assets/refreshkeys.1abfed51.js",revision:"b1611bb47bb8e908935de9dd4c3bceca"},{url:"assets/scanqr.bb00ac1f.js",revision:"7cb83c84ca0e5f9ffed1c8fc867510d6"},{url:"assets/selectcamera.acafe8d0.js",revision:"304ca9165582b8c3fa139848b8dd916f"},{url:"assets/swnotify.b88bd443.js",revision:"f5f265d671b5a387f79aa8d43b73ffaa"},{url:"assets/termsofuse.77a2820c.js",revision:"d5e7771b0735d4e16cdb2eba2188da65"},{url:"assets/vendor.f8864ac5.js",revision:"2b7ec518abe24372d40ea0c6a990c91e"},{url:"assets/warning.f108b091.js",revision:"5a1af609dba7d452b9d6e5b28885475d"},{url:"assets/workbox-window.prod.es5.a2fa118e.js",revision:"336c20b8c52e7fe192657bd4f83e6a6f"},{url:"favicon.ico",revision:"0eb6a3e58fb0f61f080bfd48d9be4a2d"},{url:"icon-152.png",revision:"63a30637dfaf54fda8fef38245d8c90b"},{url:"icon-192.png",revision:"c896e58149355fd82cf8c41053bfcbc8"},{url:"icon-512.png",revision:"9a89e31d4c14fffe9a66a88236df507e"},{url:"index.html",revision:"6afa112cbe05a914f56df601cc6c904b"},{url:"manifest.webmanifest",revision:"62287756331395d85c8aecab6dcb762d"},{url:"version.txt",revision:"e42845a0d8a86ec69c3697393262ec33"}],{})}));
//# sourceMappingURL=sw.js.map
