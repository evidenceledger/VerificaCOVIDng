import{r as a,A as s}from"./AbstractPage.18a62ded.js";import"./app.067879c9.js";a("MicroWallet",class extends s{constructor(t){super(t)}async enter(){let t=this.html,e=new URLSearchParams(document.location.search.substring(1)).get("eudcc");if(e!==null){e=atob(e),console.log("EUDCC received:",e),await this.gotoPage("AskUserToStoreQR",e);return}let r=window.localStorage.getItem("MYEUDCC");if(r!==null){await this.gotoPage("DisplayMyHcert",r);return}this.render(t`
            <div id="hcertFailed" class="w3-panel bkg-fail">
                <h2>${T("There is no certificate.")}</h2>
            </div>
       `)}});
