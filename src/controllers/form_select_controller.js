import {Controller} from 'stimulus'
import M from 'materialize-css'

export default class extends Controller {
    static values = {
        classes: String,
        dropdownOptions: Object
    }

    connect() {
        this.init();
    }

    disconnect() {
        this.destroy();
    }

    init(){
        const classes = this.hasClassesValue ? this.classesValue : undefined;
        const dropdownOptions = this.hasDropdownOptionsValue ? this.dropdownOptionsValue : {};
        dropdownOptions.container = document.body;

        const formSelectOptions = {
            classes: classes,
            dropdownOptions: dropdownOptions
        }

        this.instance = M.FormSelect.init(this.element, formSelectOptions);
    }

    destroy(){
        if (this.instance != null) {
            this.instance.destroy();
        }
    }

    refresh(){
        this.destroy();
        this.init();
    }
}
