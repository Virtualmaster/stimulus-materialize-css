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
        const opacity = this.hasOpacityValue ? this.opacityValue : 0.5;
        const inDuration = this.hasInDurationValue ? this.inDurationValue : 250;
        const outDuration = this.hasOutDurationValue ? this.outDurationValue : 250;
        const preventScrolling = this.hasPreventScrollingValue ? this.preventScrollingValue : true;
        const dismissible = this.hasDismissibleValue ? this.dismissibleValue : true;
        const startingTop = this.hasStartingTopValue ? this.startingTopValue : '4%';
        const endingTop = this.hasEndingTopValue ? this.endingTopValue : '10%';

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
