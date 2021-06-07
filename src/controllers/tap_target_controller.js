import {Controller} from 'stimulus';
import M from 'materialize-css';

export default class extends Controller {
    connect(){
        const tapTargetOptions = {};
        this.instance = M.TapTarget.init(this.element, tapTargetOptions);
    }

    disconnect(){
        if(this.instance != null){
            this.instance.destroy();
        }
    }
}
