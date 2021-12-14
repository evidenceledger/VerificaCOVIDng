import{A as t}from"./index.6ba975c4.js";import{h as a}from"./vendor.f8864ac5.js";import{a as c}from"./camerainfo.bed069c7.js";class m extends t{constructor(e){super("SelectCamera")}async enter(){console.log("Select camera");let e=await c();if(console.log(e),e.videoDevices.length==0){this.render(a`<p>No camera available</p>`);return}let s=e.videoDevices,r=a`
        <div class="container padding-16">

            <ul class="w3-ul w3-card-4">
            ${s.map(i=>a`
                <li class="bar">
                    <a @click=${()=>this.setCamera(i.deviceId)} href="javascript:void(0)">
                        <div class="bar-item" style="padding:8px;">
                            <div class="h5" style="vertical-align:middle;">${i.label}</div>
                        </div>
                    </a>
                </li>`)}
            </ul>

        </div>
        `;this.render(r)}async setCamera(e){console.log("Selecting camera",e),window.selectedCamera=e,localStorage.setItem("selectedCamera",e),window.history.back()}}export{m as default};
