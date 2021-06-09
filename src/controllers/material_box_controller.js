import {Controller} from 'stimulus';
import M from 'materialize-css';

export default class extends Controller {
    static targets = ['image']

    static values = {
        inDuration: Number,
        outDuration: Number
    }

    connect(){
        const inDuration = this.hasInDurationValue ? this.inDurationValue : 275;
        const outDuration = this.hasOutDurationValue ? this.outDurationValue : 200;

        const materialBoxOptions = {
            inDuration: inDuration,
            outDuration: outDuration
        }
        this.instance = M.Materialbox.init(this.imageTarget, materialBoxOptions);
    }

    disconnect(){
        if(this.instance != null){
            this.instance.destroy();
        }
    }
}
