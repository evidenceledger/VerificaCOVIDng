import{l as n}from"./w3full.ce7e6cae.js";import{r as d,A as c}from"./AbstractPage.5c8880bf.js";import{C as h,v as g,o as m,w as v,e as u}from"./warning.35a27698.js";import"./_commonjsHelpers.4e997714.js";d("DisplayMyHcert",class extends c{constructor(t){super(t)}async enter(t){let i=this.html;if(t=window.localStorage.getItem("MYEUDCC"),t==null){this.render(i`
            <div id="hcertFailed" class="w3-panel bkg-fail">
                <h2>${T("There is no certificate.")}</h2>
            </div>
            `);return}let a,r=!1,l="";try{a=await h.decodeHC1QR(t,!0),r=a[3]}catch(s){n.myerror("Error verifying credential",s),this.render(this.renderGeneralError(s));return}let e={result:"OK",message:T("The certificate is valid.")};r===!1?(e.result="ERROR",e.message=T("Signature validation failed. The certificate is not valid.")):r==="PRE"&&(e.result="WARNING",e.message=T("$warningmsg")),console.log(e),(r===!0||r==="PRE")&&(console.log("Additional verifications"),r=g(a),console.log(r),r!=!0&&(e.result="ERROR",e.message=T(r))),console.log(e);try{l=this.renderDetail(a,e)}catch(s){n.myerror("Error rendering credential",s),this.render(this.renderGeneralError(s));return}let o=i`
        ${l}
        <div class="sect-white">
            <button @click=${()=>this.gotoPage("DisplayQR")} class="btn color-secondary hover-color-secondary
            w3-xlarge w3-round-xlarge">
            ${T("Display QR")}</button>
        </div>
        `;this.render(o)}renderGeneralError(t){return this.html`
            <div id="hcertFailed" class="w3-panel bkg-fail">
                <h3>Failed!</h3>
                <p>The credential has an invalid format.</p>
            </div>
            `}renderDetail(t,i){let a=this.html,r=t[1],l="Validated",e=m,o="bkg-success";return i.result==="WARNING"?(l="Warning",e=v,o="bkg-warning"):i.result==="ERROR"&&(l="Not Validated",e=u,o="bkg-error"),a`
            <div class="container">

                <div id="hcertWarning" class=${`w3-panel ${o}`}>
                    <img src=${e}  alt="" />
                    <h3>${T(l)}</h3>
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
        `}});
