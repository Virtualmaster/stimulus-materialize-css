import {Controller} from 'stimulus'
import M from 'materialize-css'

export default class extends Controller {
    static values = {
        exitDelay: Number,
        enterDelay: Number,
        html: String,
        margin: Number,
        inDuration: Number,
        outDuration: Number,
        position: String,
        transitionMovement: Number
    }

    connect() {
        const exitDelay = this.hasExitDelayValue ? this.exitDelayValue : 0;
        const enterDelay = this.hasEnterDelayValue ? this.enterDelayValue : 200;
        const html = this.hasHtmlValue ? this.htmlValue : null;
        const margin = this.hasMarginValue ? this.marginValue : 5;
        const inDuration = this.hasInDurationValue ? this.inDurationValue : 300;
        const outDuration = this.hasOutDurationValue ? this.outDurationValue : 250;
        const position = this.hasPositionValue ? this.positionValue : 'bottom';
        const transitionMovement = this.hasTransitionMovementValue ? this.transitionMovementValue : 10;

        const tooltipOptions = {
            exitDelay: exitDelay,
            enterDelay: enterDelay,
            html: html,
            margin: margin,
            inDuration: inDuration,
            outDuration: outDuration,
            position: position,
            transitionMovement: transitionMovement
        }
        this.instance = M.Tooltip.init(this.element, tooltipOptions);
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
        this.instance.close();
    }
}
