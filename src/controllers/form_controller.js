import {Controller} from 'stimulus'
import M from 'materialize-css'

export default class extends Controller {
    refresh(){
        M.updateTextFields();
    }
}
