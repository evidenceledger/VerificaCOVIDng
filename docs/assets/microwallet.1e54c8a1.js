import{A as r}from"./abstractpage.653c245a.js";import"./index.ebd55170.js";class s extends r{constructor(t){super("MicroWallet")}async enter(){let t=this.html,e=new URLSearchParams(document.location.search.substring(1)).get("eudcc");if(e!==null){e=atob(e),console.log("EUDCC received:",e),await this.gotoPage("AskUserToStoreQR",e);return}let a=window.localStorage.getItem("MYEUDCC");if(a!==null){await this.gotoPage("DisplayMyHcert",a);return}this.render(t`
            <div id="hcertFailed" class="w3-panel bkg-fail">
                <h2>${T("There is no certificate.")}</h2>
            </div>
       `)}}new s;export{s as default};
