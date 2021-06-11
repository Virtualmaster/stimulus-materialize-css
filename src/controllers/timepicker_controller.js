import {Controller} from 'stimulus'
import M from 'materialize-css'

export default class extends Controller {
    static values = {
        duration: Number,
        showClearBtn: Boolean,
        defaultTime: String,
        fromNow: Number,
        autoClose: Boolean,
        twelveHour: Boolean,
        vibrate: Boolean,
    }

    connect() {
        const duration = this.hasDurationValue ? this.durationValue : 350;
        const showClearBtn = this.hasShowClearBtnValue ? this.showClearBtnValue : false;
        const defaultTime = this.hasDefaultTimeValue ? this.defaultTimeValue : 'now';
        const fromNow = this.hasFromNowValue ? this.fromNowValue : 0;
        const autoClose = this.hasAutoCloseValue ? this.autoCloseValue : false;
        const twelveHour = this.hasTwelveHourValue ? this.twelveHourValue : false;
        const vibrate = this.hasVibrateValue ? this.vibrateValue : true;

        const timePickerOptions = {
            duration: duration,
            showClearBtn: showClearBtn,
            defaultTime: defaultTime,
            fromNow: fromNow,
            autoClose: autoClose,
            twelveHour: twelveHour,
            vibrate: vibrate,
            container: 'body'
        }

        this.instance = M.Timepicker.init(this.element, timePickerOptions);
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
