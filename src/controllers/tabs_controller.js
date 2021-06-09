import {Controller} from 'stimulus'
import M from 'materialize-css'

export default class extends Controller{
    static values = {
        duration: Number,
        swipeable: Boolean,
        responsiveThreshold: Number
    }

    connect() {
        const duration = this.hasDurationValue ? this.durationValue : 300;
        const swipeable = this.hasSwipeableValue ? this.swipeableValue : false;
        const responsiveThreshold = this.hasResponsiveThresholdValue ? this.responsiveThresholdValue : Infinity;

        const tabsOptions = {
            duration: duration,
            swipeable: swipeable,
            responsiveThreshold: responsiveThreshold,
        }
        this.instance = M.Tabs.init(this.element, tabsOptions);
    }

    disconnect() {
        if (this.instance != null) {
            this.instance.destroy();
        }
    }

    updateTabIndicator(){
        this.instance.updateTabIndicator();
    }

    select(event){
        const target = event.currentTarget;
        this.instance.select(target.id);
    }
}
