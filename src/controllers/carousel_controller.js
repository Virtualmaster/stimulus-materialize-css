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
        const duration = this.hasDurationValue ? this.durationValue : undefined;
        const dist = this.hasDistValue ? this.distValue : undefined;
        const shift = this.hasShiftValue ? this.shiftValue : undefined;
        const padding = this.hasPaddingValue ? this.paddingValue : undefined;
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
                M.Carousel.init(this.element, carouselOptions)
            } else {
                image.addEventListener('load', () => M.Carousel.init(this.element, carouselOptions))
            }
        }
    }

    disconnect() {
        const instance = M.Carousel.getInstance(this.element);
        if (instance != null) instance.destroy();
    }
}