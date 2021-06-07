import {Controller} from 'stimulus'
import M from 'materialize-css'

export default class extends Controller {
    static values = {
        html: String,
        displayLength: Number,
        inDuration: Number,
        outDuration: Number,
        classes: String,
        activationPercent: Number,
        autoOpen: Boolean
    }

    connect() {
        const html = this.hasHtmlValue ? this.htmlValue : undefined;
        const displayLength = this.hasDisplayLengthValue ? this.displayLengthValue : undefined;
        const inDuration = this.hasInDurationValue ? this.inDurationValue : undefined;
        const outDuration = this.hasOutDurationValue ? this.outDurationValue : undefined;
        const classes = this.hasClassesValue ? this.classesValue : undefined;
        const activationPercent = this.hasActivationPercentValue ? this.activationPercentValue : undefined;

        this.toastOptions = {
            html: html,
            displayLength: displayLength,
            inDuration: inDuration,
            outDuration: outDuration,
            classes: classes,
            activationPercent: activationPercent
        }

        if(this.autoOpenValue){
            M.Toast(this.toastOptions)
        }
    }

    show(){
        M.Toast(this.toastOptions)
    }

}
