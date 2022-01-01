import{l as o}from"./app.0ab7b43d.js";import{r as d,A as n}from"./AbstractPage.5982b473.js";import{C as c,v as m,o as g,w as h,e as v}from"./warning.b979bc71.js";import"./_commonjsHelpers.b8add541.js";var f="HC1:NCFOXN%TSMAHN-H%WKPL9/BP:BCP6M-AH0VC1ROT$SD PO%I$TQ3.P:.IO6T+6NNO4*J8OX4W$C2VLWLIVO5ON1: B.T1RTOF:P ZPEX9Z0QTU1B+HON1MU9%*JJR3Z+INTICZUKSR*LA/CJ6IAXPMHQ1*P1TU19UEOQ1OH6CN5ILGBUHSHA.W2YJ2/E2VZ1W6A8C9IEP2SAC/9B95ZE9Q$95:UENEUW66469366JDO$9KZ56DE/.QC$Q3J62:6LZ6O59++9-G9+E93ZMV70- CC8C90JK.A+ C/8DXEDKG0CGJ5AL5:4/60O3P:XRUVI/E2$4JY/K0:S6QNROF GVV378.GTGV /KH-KVLV5KN+*431TF68UXD-I69NTCW4HKLT*QGTA W7G 7N31BUUSS1SC5X%06W0H*OVIUH$AA2A PK7+O8ZEBPJT8IDBSQ7O574J98%.BWUN*7K:JVR%DAQOU/CZ$9N$LN0G$X8G+MJNRFNB4CRDMA 203F2.3";d("DisplayHcert",class extends n{constructor(s){super(s)}async enter(s){let t,r=!1,a="";s=f;try{t=await c.decodeHC1QR(s,!0),r=t[3]}catch(i){o.error("Error verifying credential",i),this.render(this.renderGeneralError(i));return}let e={result:"OK",message:T("The certificate is valid.")};r===!1?(e.result="ERROR",e.message=T("Signature validation failed. The certificate is not valid.")):r==="PRE"&&(e.result="WARNING",e.message=T("$warningmsg")),console.log(e),(r===!0||r==="PRE")&&(console.log("Additional verifications"),r=m(t),console.log(r),r!=!0&&(e.result="ERROR",e.message=T(r))),console.log(e);try{a=this.renderDetail(t,e)}catch(i){o.error("Error rendering credential",i),this.render(this.renderGeneralError(i));return}let l=this.html`
        <div class="text-center">

            ${a}

            <button class="btn-primary" @click=${()=>this.gotoPage("ScanQrPage")}>
            ${T("Verify another")}</button>

        </div>
        `;this.render(l)}renderGeneralError(s){return this.html`
            <div id="hcertFailed" class="w3-panel bg-fail">
                <h3>Failed!</h3>
                <p>The credential has an invalid format.</p>
            </div>
            `}renderDetail(s,t){let r=s[1],a="Validated",e=g,l="bg-success";return t.result==="WARNING"?(a="Warning",e=h,l="bg-warning"):t.result==="ERROR"&&(a="Not Validated",e=v,l="bg-error"),this.html`

        <div class=${`py-3 mb-3 shadow-lg ${l}`}>
            <div class="flex justify-center">
                <img class="mr-2" src=${e}  alt="" />
                <h3 class="my-auto text-xl font-bold ml-2">${T(a)}</h3>                
            </div>
            <p class="text-lg">${t.message}</p>
        </div>

        <div class="mb-5">
            <div class="subsection">
                <div class="etiqueta">${T("Surname and forename")}</div>
                <div class="text-xl font-semibold">${r.fullName}</div>
            </div>
            <div class="subsection">
                <div class="etiqueta">${T("Date of birth")}</div>
                <div class="text-xl font-semibold">${r.dateOfBirth}</div>
            </div>
        </div>
           
        `}});
