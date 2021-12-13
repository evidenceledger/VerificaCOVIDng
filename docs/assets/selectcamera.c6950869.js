import{A as s}from"./index.aae5c249.js";import{h as a}from"./vendor.f8864ac5.js";import{a as t}from"./camerainfo.bed069c7.js";class n extends s{constructor(e){super("SelectCamera")}async enter(){console.log("Select camera");let e=await t();if(console.log(e),!e){this.render(a`<p>No camera available</p>`);return}e.defaultPreferredCamera&&e.defaultPreferredCamera.label;let i=e.videoDevices,l=a`
        <div class="container padding-16">

            <ul class="w3-ul w3-card-4">
            ${i.map(r=>a`
                <li class="bar">
                    <a @click=${()=>this.setCamera(r.deviceId)} href="javascript:void(0)">
                        <div class="bar-item" style="padding:8px;">
                            <div class="h5" style="vertical-align:middle;">${r.label}</div>
                        </div>
                    </a>
                </li>`)}
            </ul>

        </div>
        `;this.render(l)}async setCamera(e){console.log("Selecting camera",e),window.selectedCamera=e,localStorage.setItem("selectedCamera",e),window.history.back()}}export{n as default};
