if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let f={};const d=e=>a(e,c),n={module:{uri:c},exports:f,require:d};s[c]=Promise.all(i.map((e=>n[e]||d(e)))).then((e=>(r(...e),f)))}}define(["./workbox-873c5e43"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"63a30637dfaf54fda8fef38245d8c90b"},{url:"assets/_commonjsHelpers.b8add541.js",revision:"96406dfb0ea69a132b2d6b989e4b5f11"},{url:"assets/app.34bbd7ed.js",revision:"58c32a5b5985cd20567e9596afba5309"},{url:"assets/app.9e0c4928.css",revision:"fa9d07b7705d1f313f97170de31e1d58"},{url:"assets/camerainfo.4311a7fd.js",revision:"93bafe32c785960857645bb5215d1aea"},{url:"assets/DisplayHcert.6420cd8c.js",revision:"fa5edefe7c9b6bd1b4856bf145612d8e"},{url:"assets/DisplayMyHcert.6db8a77f.js",revision:"d1ec90cf41ec7bdca8b15e564e19ef71"},{url:"assets/DisplayQR.67d2a9c3.js",revision:"63e1e80c353796ddd695dfdf90e19835"},{url:"assets/Faqs.aa4bd9ab.js",revision:"53e818f5482393ea1320cd37bd0a5376"},{url:"assets/Help.d0121a32.js",revision:"9b9636a4a72ea29e11fb686e1804cc53"},{url:"assets/IntroPage.a31e933f.js",revision:"ef35e845bf5c66651be65131e6d5aa11"},{url:"assets/jsQR.3d2f64bb.js",revision:"262ac0505843296f4e319ef8658629f4"},{url:"assets/legal.ec5a9509.js",revision:"7ac75348941987e46f960efebfaf9585"},{url:"assets/LogsPage.49d483d5.js",revision:"24ed2c31ea12615cc62dc333f90be105"},{url:"assets/MicroWallet.be50424d.js",revision:"42d0a707b710857abc1b136377cc0ccc"},{url:"assets/Page404.a68f384d.js",revision:"6892d1c8a329baf5b04d2d4e8c472843"},{url:"assets/PrivacyPolicy.083f9bd2.js",revision:"97247d10c5de601293856f7c61e12d83"},{url:"assets/ScanQrNativePage.16dd27e1.js",revision:"4b989fd076195d431c076095274582f4"},{url:"assets/ScanQrPage.f12e1d0a.js",revision:"6688e3d7b98896aebb8b23bc092ec64f"},{url:"assets/SelectCamera.81a6ec79.js",revision:"3bac16f8f98eff147216983ecdaf411c"},{url:"assets/SelectLanguage.089be05d.js",revision:"ff480b68996039598a2d902ab00fa934"},{url:"assets/TermsOfUse.113404fa.js",revision:"8ca6e77a6b0ec6d70167181e1f6f1347"},{url:"assets/vendor.f8864ac5.js",revision:"2b7ec518abe24372d40ea0c6a990c91e"},{url:"assets/warning.e9fab506.js",revision:"7b060181287e6e034d43491ad855e5cb"},{url:"assets/workbox-window.prod.es5.a2fa118e.js",revision:"336c20b8c52e7fe192657bd4f83e6a6f"},{url:"favicon.ico",revision:"0eb6a3e58fb0f61f080bfd48d9be4a2d"},{url:"icon-152.png",revision:"63a30637dfaf54fda8fef38245d8c90b"},{url:"icon-192.png",revision:"c896e58149355fd82cf8c41053bfcbc8"},{url:"icon-512.png",revision:"9a89e31d4c14fffe9a66a88236df507e"},{url:"index.html",revision:"546f560167c630c2d9ad08f63932814d"},{url:"manifest.webmanifest",revision:"62287756331395d85c8aecab6dcb762d"},{url:"version.txt",revision:"d71d8176463cce512cbf8a9923425752"},{url:"wallet.html",revision:"f3a78ee1a5b36c64d075d85fb2b094f1"}],{})}));
//# sourceMappingURL=sw.js.map
