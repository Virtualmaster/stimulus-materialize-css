import {Controller} from 'stimulus';
import M from 'materialize-css';

export default class extends Controller {
    static values = {
        alignment: String,
        autoTrigger: Boolean,
        constrainWidth: Boolean,
        coverTrigger: Boolean,
        closeOnClick: Boolean,
        hover: Boolean,
        inDuration: Number,
        outDuration: Number
    }

    connect(){
        const alignment = this.hasAlignmentValue ? this.alignmentValue : 'left';
        const autoTrigger = this.hasAutoTriggerValue ? this.autoTriggerValue : true;
        const constrainWidth = this.hasConstrainWidthValue ? this.constrainWidthValue : false;
        const coverTrigger = this.hasCoverTriggerValue ? this.coverTriggerValue : false;
        const closeOnClick = this.hasCloseOnClickValue ? this.closeOnClickValue : true;
        const hover = this.hasHoverValue ? this.hoverValue : false;
        const inDuration = this.hasInDurationValue ? this.inDurationValue : 150;
        const outDuration = this.hasOutDurationValue ? this.outDurationValue : 250;

        const dropdownOptions = {
            alignment: alignment,
            autoTrigger: autoTrigger,
            constrainWidth: constrainWidth,
            coverTrigger: coverTrigger,
            closeOnClick: closeOnClick,
            hover: hover,
            inDuration: inDuration,
            outDuration: outDuration,
            container: document.body
        };
        this.instance = M.Dropdown.init(this.element, dropdownOptions);
    }

    disconnect(){
        if(this.instance != null){
            this.instance.destroy();
        }
    }
}
