import { AbstractPage } from '../pages/abstractpage'
import { html } from 'uhtml';
import { getPreferredVideoDevice } from '../components/camerainfo'

export default class SelectCamera extends AbstractPage {

    constructor(id) {
        super("SelectCamera")
    }

    async enter() {
        console.log("Select camera")

        let preferredVideoDevices = await getPreferredVideoDevice()
        console.log(preferredVideoDevices)
        if (!preferredVideoDevices) {
            this.render(html`<p>No camera available</p>`)
            return;
        }

        let preferredLabel;
        if (preferredVideoDevices.defaultPreferredCamera) {
            preferredLabel = preferredVideoDevices.defaultPreferredCamera.label

        }
        let videoDevices = preferredVideoDevices.videoDevices

        let theHtml = html`
        <div class="container padding-16">

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

}
