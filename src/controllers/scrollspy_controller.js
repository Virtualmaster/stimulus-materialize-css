import {Controller} from 'stimulus'
import M from 'materialize-css'

export default class extends Controller {
    static values = {
        throttle: Number,
        scrollOffset: Number,
        activeClass: String
    }

    connect() {
        const throttle = this.hasThrottleValue ? this.throttleValue : 100;
        const scrollOffset = this.hasScrollOffsetValue ? this.scrollOffsetValue : 200;
        const activeClass = this.hasActiveClassValue ? this.activeClassValue : 'active';

        const scrollspyOptions = {
            throttle: throttle,
            scrollOffset: scrollOffset,
            activeClass: activeClass
        }
        this.instance = M.ScrollSpy.init(this.element, scrollspyOptions);
    }

    disconnect() {
        if (this.instance != null) {
            this.instance.destroy();
        }
    }
}
