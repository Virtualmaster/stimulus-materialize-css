import {Controller} from 'stimulus'
import M from 'materialize-css'

export default class extends Controller{
    static values = {
        data: Object,
        limit: Number,
        minLength: Number
    }

    connect() {
        const data = this.hasDataValue ? this.dataValue : undefined;
        const limit = this.hasLimitValue ? this.limitValue : undefined;
        const minLength = this.hasMinLengthValue ? this.minLengthValue : undefined;

        const tabsOptions = {
            data: data,
            limit: limit,
            minLength: minLength
        }
        this.instance = M.Autocomplete.init(this.element, tabsOptions);
    }

    disconnect() {
        if (this.instance != null) {
            this.instance.destroy();
        }
    }

    open(){
        this.instance.open();
    }

    close(){
        this.instance.close();
    }
}
