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
        const indicators = this.hasIndicatorsValue ? this.indicatorsValue : undefined;
        const height = this.hasHeightValue ? this.heightValue : undefined;
        const duration = this.hasDurationValue ? this.durationValue : undefined;
        const interval = this.hasIntervalValue ? this.intervalValue : undefined;

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
