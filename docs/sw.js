if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let f={};const d=e=>a(e,c),o={module:{uri:c},exports:f,require:d};s[c]=Promise.all(i.map((e=>o[e]||d(e)))).then((e=>(r(...e),f)))}}define(["./workbox-873c5e43"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"63a30637dfaf54fda8fef38245d8c90b"},{url:"assets/_commonjsHelpers.4e997714.js",revision:"44790040f67d32cf5f050d4990db5e2f"},{url:"assets/BrowserQRCodeReader.076087ed.js",revision:"16a8012231e031da9ba8e04c43150733"},{url:"assets/camerainfo.bed069c7.js",revision:"67d321b257500f7fb3f49ea965e9ab1a"},{url:"assets/displayqr.e74b3908.js",revision:"7f6571cb9da1b0c79b1906f9dcde88cc"},{url:"assets/faqs.2f5bac1a.js",revision:"2f709012d217f6897921ef76b665103a"},{url:"assets/hcertpage.8caed486.js",revision:"047c1ba2e4a234ab4764f2834413b831"},{url:"assets/help.b1881cdf.js",revision:"db72a48468b65f4168eefd901ba35ae8"},{url:"assets/i18.384f9af2.js",revision:"0eb6ec57de71894867b167f289499e56"},{url:"assets/index.85b8ad63.css",revision:"07d46f3c5ad433af2c707cd6024c2365"},{url:"assets/index.90173e4d.js",revision:"fe99f9e739544ca71754ed31ce20517a"},{url:"assets/intropage.92ca7d40.js",revision:"b035ba3f18eb7b5852954339add8e905"},{url:"assets/legal.ec5a9509.js",revision:"7ac75348941987e46f960efebfaf9585"},{url:"assets/microwallet.c8fe09ab.js",revision:"8d6d07ef4586ae64bb83f0cbfacb7e91"},{url:"assets/myhcertpage.1bd075cc.js",revision:"0e684d8c93502d67c9ae9c76d35dc01c"},{url:"assets/privacypolicy.3fffb430.js",revision:"79ae1b9e07775f44d6b0b414e1de5d83"},{url:"assets/refreshkeys.7e8ac3e6.js",revision:"be413fda6793b13f77d7e755e817eb93"},{url:"assets/scanqr.b49d2754.js",revision:"cd9c02a8245ff51988e2a6745d3e345f"},{url:"assets/selectcamera.600ba328.js",revision:"a4f4f126c35268235bcef347b945f0e7"},{url:"assets/swnotify.779916b7.js",revision:"7dfc0c52161096da0d28992981380e38"},{url:"assets/termsofuse.afc483a9.js",revision:"88fef1d0603499ee0dfc9596c09da636"},{url:"assets/vendor.f8864ac5.js",revision:"2b7ec518abe24372d40ea0c6a990c91e"},{url:"assets/warning.af5c0163.js",revision:"92cdb74ac8656f6da2527e377368ea95"},{url:"assets/workbox-window.prod.es5.a2fa118e.js",revision:"336c20b8c52e7fe192657bd4f83e6a6f"},{url:"favicon.ico",revision:"0eb6a3e58fb0f61f080bfd48d9be4a2d"},{url:"icon-152.png",revision:"63a30637dfaf54fda8fef38245d8c90b"},{url:"icon-192.png",revision:"c896e58149355fd82cf8c41053bfcbc8"},{url:"icon-512.png",revision:"9a89e31d4c14fffe9a66a88236df507e"},{url:"index.html",revision:"a40cdb05a6c3d53ed7785e57c09c9973"},{url:"manifest.webmanifest",revision:"62287756331395d85c8aecab6dcb762d"},{url:"version.txt",revision:"d27d6fa8af62d8414060051638b9cd87"}],{})}));
//# sourceMappingURL=sw.js.map
