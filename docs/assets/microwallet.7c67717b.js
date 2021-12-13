import{h as r}from"./vendor.f8864ac5.js";import{A as o}from"./index.aae5c249.js";class l extends o{constructor(a){super("MicroWallet")}async enter(){let e=new URLSearchParams(document.location.search.substring(1)).get("eudcc");if(e!==null){e=atob(e),console.log("EUDCC received:",e),await this.gotoPage("AskUserToStoreQR",e);return}let t=window.localStorage.getItem("MYEUDCC");if(t!==null){await this.gotoPage("DisplayMyHcert",t);return}this.render(r`
            <div id="hcertFailed" class="w3-panel bkg-fail">
                <h2>${T("There is no certificate.")}</h2>
            </div>
       `)}}export{l as default};
