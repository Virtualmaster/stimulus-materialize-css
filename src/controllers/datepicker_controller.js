import {Controller} from 'stimulus'
import M from 'materialize-css'

export default class extends Controller {
    static values = {
        autoClose: Boolean,
        format: String,
        defaultDate: String,
        setDefaultDate: Boolean,
        disableWeekends: Boolean,
        firstDay: Number,
        minDate: String,
        maxDate: String,
        yearRange: Array,
        isRTL: Boolean,
        showMonthAfterYear: Boolean,
        showDaysInNextAndPreviousMonths: Boolean,
        showClearBtn: Boolean,
        events: Array,
    }

    connect() {
        const autoClose = this.hasAutoCloseValue ? this.autoCloseValue : false;
        const format = this.hasFormatValue ? this.formatValue : 'mmm dd, yyyy';
        const defaultDate = this.hasDefaultDateValue ? Date.parse(this.defaultDateValue) : null;
        const setDefaultDate = this.hasSetDefaultDateValue ? this.setDefaultDateValue : false;
        const disableWeekends = this.hasDisableWeekendsValue ? this.disableWeekendsValue : false;
        const firstDay = this.hasFirstDayValue ? this.firstDayValue : 0;
        const minDate = this.hasMinDateValue ? Date.parse(this.minDateValue) : null;
        const maxDate = this.hasMaxDateValue ? Date.parse(this.maxDateValue) : null;
        const yearRange = this.hasYearRangeValue ? this.yearRangeValue : 10;
        const isRTL = this.hasIsRTLValue ? this.isRTLValue : false;
        const showMonthAfterYear = this.hasShowMonthAfterYearValue ? this.showMonthAfterYearValue : false;
        const showDaysInNextAndPreviousMonths = this.hasShowDaysInNextAndPreviousMonthsValue ? this.showDaysInNextAndPreviousMonthsValue : false;
        const showClearBtn = this.hasShowClearBtnValue ? this.showClearBtnValue : false;
        const events = this.hasEventsValue ? this.eventsValue : [];

        let dateValue = null
        const datePickerOptions = {
            autoClose: autoClose,
            format: format,
            defaultDate: defaultDate,
            setDefaultDate: setDefaultDate,
            disableWeekends: disableWeekends,
            firstDay: firstDay,
            minDate: minDate,
            maxDate: maxDate,
            yearRange: yearRange,
            isRTL: isRTL,
            showMonthAfterYear: showMonthAfterYear,
            showDaysInNextAndPreviousMonths: showDaysInNextAndPreviousMonths,
            showClearBtn: showClearBtn,
            events: events,
            container: document.body,
            onSelect: function () {
                dateValue = this.toString()
            }
        }

        this.instance = M.Datepicker.init(this.element, datePickerOptions);

        this.element.addEventListener("change", (event) => {
            if (dateValue)
                event.target.value = dateValue
        });
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
