import{h as o}from"./vendor.f8864ac5.js";import{A as d,l as n}from"./index.86574d5b.js";import{C as c,v as g,o as h,w as v,e as m}from"./warning.f108b091.js";import"./_commonjsHelpers.4e997714.js";class y extends d{constructor(i){super("DisplayHcert")}async enter(i){console.log("HCERT Enter",i);let a,r=!1,t="";try{a=await c.decodeHC1QR(i,!0),r=a[3]}catch(s){n.myerror("Error verifying credential",s),this.render(this.renderGeneralError(s));return}let e={result:"OK",message:T("The certificate is valid.")};r===!1?(e.result="ERROR",e.message=T("Signature validation failed. The certificate is not valid.")):r==="PRE"&&(e.result="WARNING",e.message=T("$warningmsg")),console.log(e),(r===!0||r==="PRE")&&(console.log("Additional verifications"),r=g(a),console.log(r),r!=!0&&(e.result="ERROR",e.message=T(r))),console.log(e);try{t=this.renderDetail(a,e)}catch(s){n.myerror("Error rendering credential",s),this.render(this.renderGeneralError(s));return}let l=o`
        ${t}
        <div class="sect-white">
            <button @click=${()=>this.gotoPage("ScanQrPage")} class="btn color-secondary hover-color-secondary
            w3-xlarge w3-round-xlarge">
            ${T("Verify another")}</button>
        </div>
        `;this.render(l)}renderGeneralError(i){return o`
            <div id="hcertFailed" class="w3-panel bkg-fail">
                <h3>Failed!</h3>
                <p>The credential has an invalid format.</p>
            </div>
            `}renderDetail(i,a){let r=i[1],t="Validated",e=h,l="bkg-success";return a.result==="WARNING"?(t="Warning",e=v,l="bkg-warning"):a.result==="ERROR"&&(t="Not Validated",e=m,l="bkg-error"),o`
            <div class="container">

                <div id="hcertWarning" class=${`w3-panel ${l}`}>
                    <img src=${e}  alt="" />
                    <h3>${T(t)}</h3>
                    <p>${a.message}</p>
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
        `}}export{y as default};
