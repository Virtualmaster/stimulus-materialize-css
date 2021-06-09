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
        const html = this.hasHtmlValue ? this.htmlValue : '';
        const displayLength = this.hasDisplayLengthValue ? this.displayLengthValue : 4000;
        const inDuration = this.hasInDurationValue ? this.inDurationValue : 300;
        const outDuration = this.hasOutDurationValue ? this.outDurationValue : 375;
        const classes = this.hasClassesValue ? this.classesValue : '';
        const activationPercent = this.hasActivationPercentValue ? this.activationPercentValue : 0.8;

        this.toastOptions = {
            html: html,
            displayLength: displayLength,
            inDuration: inDuration,
            outDuration: outDuration,
            classes: classes,
            activationPercent: activationPercent
        }

        if(this.autoOpenValue){
            M.toast(this.toastOptions)
        }
    }

    show(){
        M.toast(this.toastOptions)
    }

}
