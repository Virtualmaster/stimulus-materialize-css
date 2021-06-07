import {Controller} from 'stimulus';
import M from 'materialize-css';

export default class extends Controller {
    static values = {
        accordion: Boolean,
        inDuration: Number,
        outDuration: Number
    }

    connect() {
        const accordion = this.hasAccordionValue ? this.accordionValue : undefined;
        const inDuration = this.hasInDurationValue ? this.inDurationValue : undefined;
        const outDuration = this.hasOutDurationValue ? this.outDurationValue : undefined;

        const collapsibleOptions = {
            accordion: accordion,
            inDuration: inDuration,
            outDuration: outDuration
        };
        this.instance = M.Collapsible.init(this.element, collapsibleOptions);
    }

    disconnect() {
        if(this.instance != null) {
            this.instance.destroy();
        }
    }
}
