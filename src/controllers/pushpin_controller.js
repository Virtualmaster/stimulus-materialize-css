import {Controller} from 'stimulus'
import M from 'materialize-css'

export default class extends Controller {
    static values = {
        top: Number,
        bottom: Number,
        offset: Number
    }

    connect() {
        const top = this.hasTopValue ? this.topValue : undefined;
        const bottom = this.hasBottomValue ? this.bottomValue : undefined;
        const offset = this.hasOffsetValue ? this.offsetValue : undefined;

        const pushpinOptions = {
            top: top,
            bottom: bottom,
            offset: offset
        }
        this.instance = M.Pushpin.init(this.element, pushpinOptions);
    }

    disconnect() {
        if (this.instance != null) {
            this.instance.destroy();
        }
    }
}
