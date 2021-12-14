import{A as s}from"./index.c7c00288.js";import{h as a}from"./vendor.f8864ac5.js";import{a as c}from"./camerainfo.4311a7fd.js";class m extends s{constructor(e){super("SelectCamera")}async enter(){console.log("Select camera");try{var e=await c();if(e.videoDevices.length==0){this.render(a`<p>No camera available</p>`);return}var t=e.videoDevices}catch{this.render(a`<p>No camera available</p>`);return}let i=a`
        <div class="container padding-16">

            <ul class="w3-ul w3-card-4">
            ${t.map(r=>a`
                <li class="bar">
                    <a @click=${()=>this.setCamera(r.deviceId)} href="javascript:void(0)">
                        <div class="bar-item" style="padding:8px;">
                            <div class="h5" style="vertical-align:middle;">${r.label}</div>
                        </div>
                    </a>
                </li>`)}
            </ul>

        </div>
        `;this.render(i)}async setCamera(e){console.log("Selecting camera",e),window.selectedCamera=e,localStorage.setItem("selectedCamera",e),window.history.back()}}export{m as default};
