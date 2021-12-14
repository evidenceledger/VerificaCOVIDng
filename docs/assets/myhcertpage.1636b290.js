import{h as d}from"./vendor.f8864ac5.js";import{A as n,l as o}from"./index.312fe7e0.js";import{C as c,v as h,o as g,w as v,e as f}from"./warning.e63323ff.js";import"./_commonjsHelpers.4e997714.js";class w extends n{constructor(a){super("DisplayMyHcert")}async enter(a){if(a=window.localStorage.getItem("MYEUDCC"),a==null){this.render(d`
            <div id="hcertFailed" class="w3-panel bkg-fail">
                <h2>${T("There is no certificate.")}</h2>
            </div>
            `);return}let i,r=!1,t="";try{i=await c.decodeHC1QR(a,!0),r=i[3]}catch(s){o.myerror("Error verifying credential",s),this.render(this.renderGeneralError(s));return}let e={result:"OK",message:T("The certificate is valid.")};r===!1?(e.result="ERROR",e.message=T("Signature validation failed. The certificate is not valid.")):r==="PRE"&&(e.result="WARNING",e.message=T("$warningmsg")),console.log(e),(r===!0||r==="PRE")&&(console.log("Additional verifications"),r=h(i),console.log(r),r!=!0&&(e.result="ERROR",e.message=T(r))),console.log(e);try{t=this.renderDetail(i,e)}catch(s){o.myerror("Error rendering credential",s),this.render(this.renderGeneralError(s));return}let l=d`
        ${t}
        <div class="sect-white">
            <button @click=${()=>this.gotoPage("DisplayQR")} class="btn color-secondary hover-color-secondary
            w3-xlarge w3-round-xlarge">
            ${T("Display QR")}</button>
        </div>
        `;this.render(l)}renderGeneralError(a){return d`
            <div id="hcertFailed" class="w3-panel bkg-fail">
                <h3>Failed!</h3>
                <p>The credential has an invalid format.</p>
            </div>
            `}renderDetail(a,i){let r=a[1],t="Validated",e=g,l="bkg-success";return i.result==="WARNING"?(t="Warning",e=v,l="bkg-warning"):i.result==="ERROR"&&(t="Not Validated",e=f,l="bkg-error"),d`
            <div class="container">

                <div id="hcertWarning" class=${`w3-panel ${l}`}>
                    <img src=${e}  alt="" />
                    <h3>${T(t)}</h3>
                    <p>${i.message}</p>
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
        `}}export{w as default};
