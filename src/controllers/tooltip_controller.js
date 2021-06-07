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
        const exitDelay = this.hasExitDelayValue ? this.exitDelayValue : undefined;
        const enterDelay = this.hasEnterDelayValue ? this.enterDelayValue : undefined;
        const html = this.hasHtmlValue ? this.htmlValue : undefined;
        const margin = this.hasMarginValue ? this.marginValue : undefined;
        const inDuration = this.hasInDurationValue ? this.inDurationValue : undefined;
        const outDuration = this.hasOutDurationValue ? this.outDurationValue : undefined;
        const position = this.hasPositionValue ? this.positionValue : undefined;
        const transitionMovement = this.hasTransitionMovementValue ? this.transitionMovementValue : undefined;

        const tabsOptions = {
            exitDelay: exitDelay,
            enterDelay: enterDelay,
            html: html,
            margin: margin,
            inDuration: inDuration,
            outDuration: outDuration,
            position: position,
            transitionMovement: transitionMovement
        }
        this.instance = M.Tooltip.init(this.element, tabsOptions);
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
