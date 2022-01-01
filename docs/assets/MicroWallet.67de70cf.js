import{r,A as s}from"./AbstractPage.6a4fa016.js";import"./app.8e748895.js";r("MicroWallet",class extends s{constructor(t){super(t)}async enter(){let t=this.html,e=new URLSearchParams(document.location.search.substring(1)).get("eudcc");if(e!==null){e=atob(e),console.log("EUDCC received:",e),await this.gotoPage("AskUserToStoreQR",e);return}let a=window.localStorage.getItem("MYEUDCC");if(a!==null){await this.gotoPage("DisplayMyHcert",a);return}this.render(t`
            <div id="hcertFailed" class="w3-panel bkg-fail">
                <h2>${T("There is no certificate.")}</h2>
            </div>
       `)}});
