import{l as o}from"./w3full.c5c6fd34.js";import{r as n,A as d}from"./AbstractPage.3fc6ca1f.js";import{C as c,v as h,o as g,w as v,e as m}from"./warning.b2dd8e6f.js";import"./_commonjsHelpers.4e997714.js";n("DisplayHcert",class extends d{constructor(a){super(a)}async enter(a){let t,r=!1,i="";try{t=await c.decodeHC1QR(a,!0),r=t[3]}catch(s){o.myerror("Error verifying credential",s),this.render(this.renderGeneralError(s));return}let e={result:"OK",message:T("The certificate is valid.")};r===!1?(e.result="ERROR",e.message=T("Signature validation failed. The certificate is not valid.")):r==="PRE"&&(e.result="WARNING",e.message=T("$warningmsg")),console.log(e),(r===!0||r==="PRE")&&(console.log("Additional verifications"),r=h(t),console.log(r),r!=!0&&(e.result="ERROR",e.message=T(r))),console.log(e);try{i=this.renderDetail(t,e)}catch(s){o.myerror("Error rendering credential",s),this.render(this.renderGeneralError(s));return}let l=this.html`
        ${i}
        <div class="sect-white">
            <button @click=${()=>this.gotoPage("ScanQrPage")} class="btn color-secondary hover-color-secondary
            w3-xlarge w3-round-xlarge">
            ${T("Verify another")}</button>
        </div>
        `;this.render(l)}renderGeneralError(a){return this.html`
            <div id="hcertFailed" class="w3-panel bkg-fail">
                <h3>Failed!</h3>
                <p>The credential has an invalid format.</p>
            </div>
            `}renderDetail(a,t){let r=a[1],i="Validated",e=g,l="bkg-success";return t.result==="WARNING"?(i="Warning",e=v,l="bkg-warning"):t.result==="ERROR"&&(i="Not Validated",e=m,l="bkg-error"),this.html`
            <div class="container">

                <div id="hcertWarning" class=${`w3-panel ${l}`}>
                    <img src=${e}  alt="" />
                    <h3>${T(i)}</h3>
                    <p>${t.message}</p>
                </div>

                <div class="section">
                    <div class="subsection">
                        <div class="etiqueta">${T("Surname and forename")}</div>
                        <div class="valor h4">${r.fullName}</div>
                    </div>
                    <div class="subsection">
                        <div class="etiqueta">${T("Date of birth")}</div>
                        <div class="valor h4">${r.dateOfBirth}</div>
                    </div>
                </div>
           
            </div>
        `}});
