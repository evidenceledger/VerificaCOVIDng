import { AbstractPage, register } from './AbstractPage'
import { getPreferredVideoDevice } from '../components/camerainfo'

register("SelectCamera", class SelectCamera extends AbstractPage {

    constructor(id) {
        super(id)
    }

    async enter() {
        let html = this.html

        try {
            var preferredVideoDevices = await getPreferredVideoDevice()
            if (preferredVideoDevices.videoDevices.length == 0) {
                this.render(html`<p>No camera available</p>`)
                return;
            }
    
            var videoDevices = preferredVideoDevices.videoDevices
    
        } catch (error) {
            this.render(html`<p>No camera available</p>`)
            return;
    }

        let theHtml = html`
        <div class="container pd-16">

            <ul class="w3-ul w3-card-4">
            ${videoDevices.map((camera) =>

                html`
                <li class="bar">
                    <a @click=${()=>this.setCamera(camera.deviceId)} href="javascript:void(0)">
                        <div class="bar-item" style="padding:8px;">
                            <div class="h5" style="vertical-align:middle;">${camera.label}</div>
                        </div>
                    </a>
                </li>`
                
                )}
            </ul>

        </div>
        `
        this.render(theHtml)
    }

    async setCamera(l) {
        console.log("Selecting camera", l)
        window.selectedCamera = l
        localStorage.setItem("selectedCamera", l)
        window.history.back()
    }

})
