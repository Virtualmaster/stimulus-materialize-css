import {Controller} from 'stimulus';
import M from 'materialize-css';

export default class extends Controller {
    static values = {
        responsiveThreshold: Number
    }

    connect() {
        const responsiveThreshold = this.hasResponsiveThresholdValue ? this.responsiveThresholdValue : undefined;

        const parallaxOptions = {
            responsiveThreshold: responsiveThreshold
        }
        this.instance = M.Parallax.init(this.element, parallaxOptions);
    }

    disconnect() {
        if (this.instance != null) {
            this.instance.destroy();
        }
    }
}
