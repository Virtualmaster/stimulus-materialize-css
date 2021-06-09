import {Controller} from 'stimulus';
import M from 'materialize-css';

export default class extends Controller {
    static targets = ['tapTarget']

    connect(){
        const tapTargetOptions = {};
        this.instance = M.TapTarget.init(this.tapTargetTarget, tapTargetOptions);
    }

    open(){
        this.instance.open()
    }

    close(){
        this.instance.close()
    }

    toggle(){
        if(this.instance.isOpen){
            this.close()
        }else{
            this.open()
        }
    }

    disconnect(){
        if(this.instance != null){
            this.instance.destroy();
        }
    }
}
