import {Controller} from 'stimulus';
import M from 'materialize-css';

export default class extends Controller {
    static values = {
        inDuration: Number,
        outDuration: Number
    }

    connect(){
        const inDuration = this.hasInDurationValue ? this.inDurationValue : undefined;
        const outDuration = this.hasOutDurationValue ? this.outDurationValue : undefined;

        const materialBoxOptions = {
            inDuration: inDuration,
            outDuration: outDuration
        }
        this.instance = M.Materialbox.init(this.element, materialBoxOptions);
    }

    disconnect(){
        if(this.instance != null){
            this.instance.destroy();
        }
    }
}
