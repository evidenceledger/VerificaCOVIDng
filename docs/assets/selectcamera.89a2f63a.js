import{A as s}from"./index.21f6afec.js";import{h as t}from"./vendor.f8864ac5.js";import{a as c}from"./camerainfo.5d042dd2.js";class m extends s{constructor(a){super("SelectCamera")}async enter(){console.log("Select camera"),alert("Selecting camera");try{var a=await c();if(alert(`${a}`),console.log(a),a.videoDevices.length==0){this.render(t`<p>No camera available</p>`);return}var l=a.videoDevices}catch(e){alert(e)}let r=t`
        <div class="container padding-16">

            <ul class="w3-ul w3-card-4">
            ${l.map(e=>t`
                <li class="bar">
                    <a @click=${()=>this.setCamera(e.deviceId)} href="javascript:void(0)">
                        <div class="bar-item" style="padding:8px;">
                            <div class="h5" style="vertical-align:middle;">${e.label}</div>
                        </div>
                    </a>
                </li>`)}
            </ul>

        </div>
        `;this.render(r)}async setCamera(a){console.log("Selecting camera",a),window.selectedCamera=a,localStorage.setItem("selectedCamera",a),window.history.back()}}export{m as default};
