import {Controller} from 'stimulus';
import M from 'materialize-css';

export default class extends Controller {
    static values = {
        indicators: Boolean,
        height: Number,
        duration: Number,
        interval: Number
    }

    connect(){
        const indicators = this.hasIndicatorsValue ? this.indicatorsValue : true;
        const height = this.hasHeightValue ? this.heightValue : 400;
        const duration = this.hasDurationValue ? this.durationValue : 500;
        const interval = this.hasIntervalValue ? this.intervalValue : 6000;

        const sliderOptions = {
            indicators: indicators,
            height: height,
            duration: duration,
            interval: interval
        }
        this.instance = M.Slider.init(this.element, sliderOptions)
    }

    disconnect(){
        if(this.instance != null){
            this.instance.destroy();
        }
    }
}
