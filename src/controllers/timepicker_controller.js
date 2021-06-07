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
        const duration = this.hasDurationValue ? this.durationValue : undefined;
        const showClearBtn = this.hasShowClearBtnValue ? this.showClearBtnValue : undefined;
        const defaultTime = this.hasDefaultTimeValue ? this.defaultTimeValue : undefined;
        const fromNow = this.hasFromNowValue ? this.fromNowValue : undefined;
        const autoClose = this.hasAutoCloseValue ? this.autoCloseValue : undefined;
        const twelveHour = this.hasTwelveHourValue ? this.twelveHourValue : undefined;
        const vibrate = this.hasVibrateValue ? this.vibrateValue : undefined;

        const timePickerOptions = {
            duration: duration,
            showClearBtn: showClearBtn,
            defaultTime: defaultTime,
            fromNow: fromNow,
            autoClose: autoClose,
            twelveHour: twelveHour,
            vibrate: vibrate,
            container: document.body
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
