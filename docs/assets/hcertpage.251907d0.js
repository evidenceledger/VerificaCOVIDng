import{l as o}from"./index.ebd55170.js";import{A as n}from"./abstractpage.653c245a.js";import{C as d,v as c,o as h,w as g,e as v}from"./warning.03c9a936.js";import"./_commonjsHelpers.4e997714.js";class m extends n{constructor(s){super("DisplayHcert")}async enter(s){let t,r=!1,a="";try{t=await d.decodeHC1QR(s,!0),r=t[3]}catch(i){o.myerror("Error verifying credential",i),this.render(this.renderGeneralError(i));return}let e={result:"OK",message:T("The certificate is valid.")};r===!1?(e.result="ERROR",e.message=T("Signature validation failed. The certificate is not valid.")):r==="PRE"&&(e.result="WARNING",e.message=T("$warningmsg")),console.log(e),(r===!0||r==="PRE")&&(console.log("Additional verifications"),r=c(t),console.log(r),r!=!0&&(e.result="ERROR",e.message=T(r))),console.log(e);try{a=this.renderDetail(t,e)}catch(i){o.myerror("Error rendering credential",i),this.render(this.renderGeneralError(i));return}let l=this.html`
        ${a}
        <div class="sect-white">
            <button @click=${()=>this.gotoPage("ScanQrPage")} class="btn color-secondary hover-color-secondary
            w3-xlarge w3-round-xlarge">
            ${T("Verify another")}</button>
        </div>
        `;this.render(l)}renderGeneralError(s){return this.html`
            <div id="hcertFailed" class="w3-panel bkg-fail">
                <h3>Failed!</h3>
                <p>The credential has an invalid format.</p>
            </div>
            `}renderDetail(s,t){let r=s[1],a="Validated",e=h,l="bkg-success";return t.result==="WARNING"?(a="Warning",e=g,l="bkg-warning"):t.result==="ERROR"&&(a="Not Validated",e=v,l="bkg-error"),this.html`
            <div class="container">

                <div id="hcertWarning" class=${`w3-panel ${l}`}>
                    <img src=${e}  alt="" />
                    <h3>${T(a)}</h3>
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
        `}}new m;export{m as default};
