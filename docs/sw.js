if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let f={};const d=e=>c(e,r),o={module:{uri:r},exports:f,require:d};s[r]=Promise.all(a.map((e=>o[e]||d(e)))).then((e=>(i(...e),f)))}}define(["./workbox-873c5e43"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"63a30637dfaf54fda8fef38245d8c90b"},{url:"assets/_commonjsHelpers.4e997714.js",revision:"44790040f67d32cf5f050d4990db5e2f"},{url:"assets/BrowserQRCodeReader.076087ed.js",revision:"16a8012231e031da9ba8e04c43150733"},{url:"assets/camerainfo.bed069c7.js",revision:"67d321b257500f7fb3f49ea965e9ab1a"},{url:"assets/displayqr.e1861086.js",revision:"87951087508263e6304fa3142331d278"},{url:"assets/faqs.49570946.js",revision:"eb49d05fe77608530e17ac4b7ce960c5"},{url:"assets/hcertpage.edaf0ac8.js",revision:"69d2fed8948136cd26f1ce89ec987b15"},{url:"assets/help.81b266ab.js",revision:"1f4b854f6c253e3cb90cb13a87b7df67"},{url:"assets/i18.ec487ad1.js",revision:"c3cf788edc4e3fea5c4998f0c1232951"},{url:"assets/index.85b8ad63.css",revision:"07d46f3c5ad433af2c707cd6024c2365"},{url:"assets/index.cceea1d8.js",revision:"f483b0996cfb33a2362726e1ef3b2fc3"},{url:"assets/intropage.0eef2917.js",revision:"00ba3c3884a07d739cd83f99b47b5428"},{url:"assets/legal.ec5a9509.js",revision:"7ac75348941987e46f960efebfaf9585"},{url:"assets/microwallet.37812520.js",revision:"7ec7ce92617561f4b05ab9b49124232f"},{url:"assets/myhcertpage.a8c43df2.js",revision:"b7752c4cd1384175a2cd82e06064c212"},{url:"assets/privacypolicy.bc5a86d2.js",revision:"79a30cb21dcffab5eef898558982e3b4"},{url:"assets/refreshkeys.0fa4d658.js",revision:"bf0f4991061e317c00b6f1f58584d54e"},{url:"assets/scanqr.42dbfd5f.js",revision:"c5304ddc1618370475c8f17c981ed288"},{url:"assets/selectcamera.8b89655c.js",revision:"a343fa22d6ecb1de0c63a3b7685c9ab2"},{url:"assets/swnotify.58a4bdff.js",revision:"db8503206ce7eda63213af79946baa9d"},{url:"assets/termsofuse.6d628750.js",revision:"e4f9942b12ce4287783603c3d79d7ef9"},{url:"assets/vendor.f8864ac5.js",revision:"2b7ec518abe24372d40ea0c6a990c91e"},{url:"assets/warning.2fc444c8.js",revision:"205898328c0fb6f0ecc82e68097ad4ad"},{url:"assets/workbox-window.prod.es5.a2fa118e.js",revision:"336c20b8c52e7fe192657bd4f83e6a6f"},{url:"favicon.ico",revision:"0eb6a3e58fb0f61f080bfd48d9be4a2d"},{url:"icon-152.png",revision:"63a30637dfaf54fda8fef38245d8c90b"},{url:"icon-192.png",revision:"c896e58149355fd82cf8c41053bfcbc8"},{url:"icon-512.png",revision:"9a89e31d4c14fffe9a66a88236df507e"},{url:"index.html",revision:"247192ae28f485c7af547f409becbbc0"},{url:"manifest.webmanifest",revision:"62287756331395d85c8aecab6dcb762d"},{url:"version.txt",revision:"f6ae704cd152de884d5b6209046647ec"}],{})}));
//# sourceMappingURL=sw.js.map
