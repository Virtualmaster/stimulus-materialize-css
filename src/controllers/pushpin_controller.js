import {Controller} from 'stimulus'
import {getOffsetTop} from "../utils";
import M from 'materialize-css'

export default class extends Controller {
    connect() {
        const top = getOffsetTop(this.element);

        const pushpinOptions = {
            top: top
        }
        this.instance = M.Pushpin.init(this.element, pushpinOptions);
    }

    disconnect() {
        if (this.instance != null) {
            this.instance.destroy();
        }
    }
}
