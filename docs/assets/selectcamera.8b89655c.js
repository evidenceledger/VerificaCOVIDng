import{A as r}from"./index.cceea1d8.js";import{h as t}from"./vendor.f8864ac5.js";import{a as s}from"./camerainfo.bed069c7.js";class m extends r{constructor(e){super("SelectCamera")}async enter(){console.log("Select camera"),alert("Selecting camera");try{var e=await s();if(alert(e.videoDevices.length),console.log(e),e.videoDevices.length==0){this.render(t`<p>No camera available</p>`);return}var l=e.videoDevices}catch(a){alert(a)}let c=t`
        <div class="container padding-16">

            <ul class="w3-ul w3-card-4">
            ${l.map(a=>t`
                <li class="bar">
                    <a @click=${()=>this.setCamera(a.deviceId)} href="javascript:void(0)">
                        <div class="bar-item" style="padding:8px;">
                            <div class="h5" style="vertical-align:middle;">${a.label}</div>
                        </div>
                    </a>
                </li>`)}
            </ul>

        </div>
        `;this.render(c)}async setCamera(e){console.log("Selecting camera",e),window.selectedCamera=e,localStorage.setItem("selectedCamera",e),window.history.back()}}export{m as default};
