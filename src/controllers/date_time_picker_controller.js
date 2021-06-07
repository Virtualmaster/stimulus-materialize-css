import {Controller} from 'stimulus'
import M from 'materialize-css'

export default class extends Controller {
    static values = {
        datePickerOptions: Object,
        timePickerOptions: Object
    }

    connect() {
        let dateValue = null
        let timeValue = null

        const datePickerOptions = this.datePickerOptionsValue;
        datePickerOptions.onSelect = function () {
            dateValue = this.toString()
        };
        datePickerOptions.onClose = () => {
            if (this.element.value === '') {
                if (dateValue && timeValue) {
                    this.element.value = `${dateValue} ${timeValue}`
                }
                return;
            }

            const timePickerOptions = this.timePickerOptionsValue;
            timePickerOptions.onSelect = (hour, minute) => {
                timeValue = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            };
            timePickerOptions.onCloseEnd = () => {
                timepicker.destroy();
                this.element.blur();
            };
            timePickerOptions.container = document.body;

            const timepicker = M.Timepicker.init(this.element,  timePickerOptions);
            timepicker.open();
        };
        datePickerOptions.container = document.body;

        this.instance = M.Datepicker.init(this.element, datePickerOptions);

        this.element.addEventListener('change', () => {
            if (dateValue && timeValue) {
                this.element.value = `${dateValue} ${timeValue}`
            }
        });

        this.element.addEventListener('click', (event) => event.target.value = null);
    }

    disconnect() {
        if (this.instance != null) {
            this.instance.destroy();
        }
    }

    open() {
        this.instance.open();
    }

    close() {
        this.instance.close();
    }
}
