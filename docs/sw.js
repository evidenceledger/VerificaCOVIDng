if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const b=e=>a(e,i),n={module:{uri:i},exports:r,require:b};s[i]=Promise.all(c.map((e=>n[e]||b(e)))).then((e=>(f(...e),r)))}}define(["./workbox-873c5e43"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"63a30637dfaf54fda8fef38245d8c90b"},{url:"assets/_commonjsHelpers.b8add541.js",revision:"96406dfb0ea69a132b2d6b989e4b5f11"},{url:"assets/AbstractPage.6a4fa016.js",revision:"596e642e1b961347f096b35539c987f1"},{url:"assets/app.8e748895.js",revision:"14c97babad6b81ea23730c01e807ff40"},{url:"assets/app.a34c572f.css",revision:"3eaa8f67563213d54e81f73fd01601a8"},{url:"assets/camerainfo.4311a7fd.js",revision:"93bafe32c785960857645bb5215d1aea"},{url:"assets/DisplayHcert.446b87e3.js",revision:"ebfb5eedc96c40fdbf8ca3b75a19c51c"},{url:"assets/DisplayMyHcert.a9f01557.js",revision:"a5880c607899476fca844eb2178b4333"},{url:"assets/DisplayQR.975093cc.js",revision:"b1f9f40cc7a2991852e5c8c8b81fac35"},{url:"assets/Faqs.49c5e41e.js",revision:"a4e7d1adf2f4de170b84eaaac5672bcf"},{url:"assets/Help.929ed828.js",revision:"02be98671cc01b591e1c3e4bf4a5beaa"},{url:"assets/IntroPage.6e917323.js",revision:"699f4d9fe163f2048305a346517bae3e"},{url:"assets/jsQR.3d2f64bb.js",revision:"262ac0505843296f4e319ef8658629f4"},{url:"assets/legal.ec5a9509.js",revision:"7ac75348941987e46f960efebfaf9585"},{url:"assets/LogsPage.5eb69610.js",revision:"d336e04e6d3952c64da62a9e6031868d"},{url:"assets/MicroWallet.67de70cf.js",revision:"9d17113ffe61c4d8c5cb0dbbebee5d36"},{url:"assets/Page404.9541be2a.js",revision:"6f0f74b4077b4551baa52ce3a78c0a6e"},{url:"assets/PrivacyPolicy.4ccf42f5.js",revision:"bba2d74c77405f268a63638d5c8bf649"},{url:"assets/ScanQrNativePage.686f57e0.js",revision:"2a90406d45818522e0e5b458802d7acc"},{url:"assets/ScanQrPage.daf9995b.js",revision:"434437f5e37cfab4e3aff2c1252b630b"},{url:"assets/SelectCamera.3d45ae1f.js",revision:"bf98760fa82c1ba9b80668508c33b495"},{url:"assets/SelectLanguage.5e20d3e3.js",revision:"8507873f28cc230d2cc8486db63bc938"},{url:"assets/SWNotify.8b49518d.js",revision:"a1f48fd4aaff4c1cb135389a16dae9ac"},{url:"assets/TermsOfUse.a831dbac.js",revision:"e230f38e8f99572c2ebed2146ceaea52"},{url:"assets/warning.1eba6900.js",revision:"953e787c6198c0a84978562c3e30183c"},{url:"assets/workbox-window.prod.es5.a2fa118e.js",revision:"336c20b8c52e7fe192657bd4f83e6a6f"},{url:"favicon.ico",revision:"0eb6a3e58fb0f61f080bfd48d9be4a2d"},{url:"icon-152.png",revision:"63a30637dfaf54fda8fef38245d8c90b"},{url:"icon-192.png",revision:"c896e58149355fd82cf8c41053bfcbc8"},{url:"icon-512.png",revision:"9a89e31d4c14fffe9a66a88236df507e"},{url:"index.html",revision:"229f98295ac456e31382f47b75c1b254"},{url:"manifest.webmanifest",revision:"62287756331395d85c8aecab6dcb762d"},{url:"version.txt",revision:"a29555f42d3f02773d2b228e6d83e2fb"},{url:"wallet.html",revision:"7b25c80709fe39034b5da296cef56ec8"}],{})}));
//# sourceMappingURL=sw.js.map
