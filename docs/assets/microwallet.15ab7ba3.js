import{h as a}from"./vendor.f8864ac5.js";import{A as o}from"./index.86574d5b.js";class l extends o{constructor(r){super("MicroWallet")}async enter(){let e=new URLSearchParams(document.location.search.substring(1)).get("eudcc");if(e!==null){e=atob(e),console.log("EUDCC received:",e),await this.gotoPage("AskUserToStoreQR",e);return}let t=window.localStorage.getItem("MYEUDCC");if(t!==null){await this.gotoPage("DisplayMyHcert",t);return}this.render(a`
            <div id="hcertFailed" class="w3-panel bkg-fail">
                <h2>${T("There is no certificate.")}</h2>
            </div>
       `)}}export{l as default};
