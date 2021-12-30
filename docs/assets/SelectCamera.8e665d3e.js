import{r as i,A as l}from"./AbstractPage.5c8880bf.js";import{a as c}from"./camerainfo.4311a7fd.js";import"./w3full.ce7e6cae.js";i("SelectCamera",class extends l{constructor(e){super(e)}async enter(){let e=this.html;try{var r=await c();if(r.videoDevices.length==0){this.render(e`<p>No camera available</p>`);return}var t=r.videoDevices}catch{this.render(e`<p>No camera available</p>`);return}let s=e`
        <div class="container pd-16">

            <ul class="w3-ul w3-card-4">
            ${t.map(a=>e`
                <li class="bar">
                    <a @click=${()=>this.setCamera(a.deviceId)} href="javascript:void(0)">
                        <div class="bar-item" style="padding:8px;">
                            <div class="h5" style="vertical-align:middle;">${a.label}</div>
                        </div>
                    </a>
                </li>`)}
            </ul>

        </div>
        `;this.render(s)}async setCamera(e){console.log("Selecting camera",e),window.selectedCamera=e,localStorage.setItem("selectedCamera",e),window.history.back()}});
