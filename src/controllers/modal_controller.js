import {Controller} from 'stimulus';
import M from 'materialize-css';

export default class extends Controller {
    static values = {
        opacity: Number,
        inDuration: Number,
        outDuration: Number,
        preventScrolling: Boolean,
        dismissible: Boolean,
        startingTop: String,
        endingTop: String
    }

    connect() {
        const opacity = this.hasOpacityValue ? this.opacityValue : undefined;
        const inDuration = this.hasInDurationValue ? this.inDurationValue : undefined;
        const outDuration = this.hasOutDurationValue ? this.outDurationValue : undefined;
        const preventScrolling = this.hasPreventScrollingValue ? this.preventScrollingValue : undefined;
        const dismissible = this.hasDismissibleValue ? this.dismissibleValue : undefined;
        const startingTop = this.hasStartingTopValue ? this.startingTopValue : undefined;
        const endingTop = this.hasEndingTopValue ? this.endingTopValue : undefined;

        const modalOptions = {
            opacity: opacity,
            inDuration: inDuration,
            outDuration: outDuration,
            preventScrolling: preventScrolling,
            dismissible: dismissible,
            startingTop: startingTop,
            endingTop: endingTop
        }
        this.instance = M.Modal.init(this.element, modalOptions);
    }

    disconnect() {
        if (this.instance != null) {
            this.instance.destroy();
        }
    }

    open(){
        this.instance.open();
    }

    close(){
        this.instance.destroy();
    }
}
