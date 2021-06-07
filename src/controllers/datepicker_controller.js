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
        const autoClose = this.hasAutoCloseValue ? this.autoCloseValue : undefined;
        const format = this.hasFormatValue ? this.formatValue : undefined;
        const defaultDate = this.hasDefaultDateValue ? Date.parse(this.defaultDateValue) : undefined;
        const setDefaultDate = this.hasSetDefaultDateValue ? this.setDefaultDateValue : undefined;
        const disableWeekends = this.hasDisableWeekendsValue ? this.disableWeekendsValue : undefined;
        const firstDay = this.hasFirstDayValue ? this.firstDayValue : undefined;
        const minDate = this.hasMinDateValue ? Date.parse(this.minDateValue) : undefined;
        const maxDate = this.hasMaxDateValue ? Date.parse(this.maxDateValue) : undefined;
        const yearRange = this.hasYearRangeValue ? this.yearRangeValue : undefined;
        const isRTL = this.hasIsRTLValue ? this.isRTLValue : undefined;
        const showMonthAfterYear = this.hasShowMonthAfterYearValue ? this.showMonthAfterYearValue : undefined;
        const showDaysInNextAndPreviousMonths = this.hasShowDaysInNextAndPreviousMonthsValue ? this.showDaysInNextAndPreviousMonthsValue : undefined;
        const showClearBtn = this.hasShowClearBtnValue ? this.showClearBtnValue : undefined;
        const events = this.hasEventsValue ? this.eventsValue : undefined;

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
