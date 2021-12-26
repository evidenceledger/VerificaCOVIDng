import{A as s}from"./abstractpage.653c245a.js";import{a as l}from"./camerainfo.4311a7fd.js";import"./index.ebd55170.js";class c extends s{constructor(e){super("SelectCamera")}async enter(){let e=this.html;try{var t=await l();if(t.videoDevices.length==0){this.render(e`<p>No camera available</p>`);return}var r=t.videoDevices}catch{this.render(e`<p>No camera available</p>`);return}let i=e`
        <div class="container padding-16">

            <ul class="w3-ul w3-card-4">
            ${r.map(a=>e`
                <li class="bar">
                    <a @click=${()=>this.setCamera(a.deviceId)} href="javascript:void(0)">
                        <div class="bar-item" style="padding:8px;">
                            <div class="h5" style="vertical-align:middle;">${a.label}</div>
                        </div>
                    </a>
                </li>`)}
            </ul>

        </div>
        `;this.render(i)}async setCamera(e){console.log("Selecting camera",e),window.selectedCamera=e,localStorage.setItem("selectedCamera",e),window.history.back()}}new c;export{c as default};
