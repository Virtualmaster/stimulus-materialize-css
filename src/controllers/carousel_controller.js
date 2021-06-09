import {Controller} from 'stimulus';
import M from 'materialize-css';

export default class extends Controller {
    static values = {
        duration: Number,
        dist: Number,
        shift: Number,
        padding: Number,
        numVisible: Number,
        fullWidth: Boolean,
        indicators: Boolean,
        noWrap: Boolean
    }

    connect() {
        const duration = this.hasDurationValue ? this.durationValue : 200;
        const dist = this.hasDistValue ? this.distValue : -100;
        const shift = this.hasShiftValue ? this.shiftValue : 0;
        const padding = this.hasPaddingValue ? this.paddingValue : 0;
        const numVisible = this.hasNumVisibleValue ? this.numVisibleValue : 1;
        const fullWidth = this.hasFullWidthValue ? this.fullWidthValue : true;
        const indicators = this.hasIndicatorsValue ? this.indicatorsValue : true;
        const noWrap = this.hasNoWrapValue ? this.noWrapValue : true;

        const image = this.element.querySelector('img');
        if (image != null) {
            const carouselOptions = {
                duration: duration,
                dist: dist,
                shift: shift,
                padding: padding,
                numVisible: numVisible,
                fullWidth: fullWidth,
                indicators: indicators,
                noWrap: noWrap
            }

            if (image.complete) {
                this.instance = M.Carousel.init(this.element, carouselOptions);
            } else {
                image.addEventListener('load', () => {
                    this.instance = M.Carousel.init(this.element, carouselOptions)
                });
            }
        }
    }

    disconnect() {
        if (this.instance != null)
            this.instance.destroy();
    }
}