import CarouselController from './controllers/carousel_controller';
import CollapsibleController from './controllers/collapsible_controller';
import DropdownController from './controllers/dropdown_controller';
import TapTargetController from './controllers/tap_target_controller';
import MaterialBoxController from './controllers/material_box_controller';
import SliderController from './controllers/slider_controller';
import ModalController from './controllers/modal_controller';
import ParallaxController from './controllers/parallax_controller';
import PushpinController from './controllers/pushpin_controller';
import ScrollspyController from './controllers/scrollspy_controller';
import SidenavController from './controllers/sidenav_controller';
import TabsController from './controllers/tabs_controller';
import ToastController from './controllers/toast_controller';
import TooltipController from './controllers/tooltip_controller';
import AutocompleteController from './controllers/autocomplete_controller';
import DatepickerController from './controllers/datepicker_controller';
import TimepickerController from './controllers/timepicker_controller';
import DateTimePickerController from './controllers/date_time_picker_controller';
import FormController from './controllers/form_controller';

export function registerAll(application) {
    application.register('materialize--carousel', CarouselController);
    application.register('materialize--collapsible', CollapsibleController);
    application.register('materialize--dropdown', DropdownController);
    application.register('materialize--tap-target', TapTargetController);
    application.register('materialize--material-box', MaterialBoxController);
    application.register('materialize--slider', SliderController);
    application.register('materialize--modal', ModalController);
    application.register('materialize--parallax', ParallaxController);
    application.register('materialize--pushpin', PushpinController);
    application.register('materialize--scrollspy', ScrollspyController);
    application.register('materialize--sidenav', SidenavController);
    application.register('materialize--tabs', TabsController);
    application.register('materialize--toast', ToastController);
    application.register('materialize--tooltip', TooltipController);
    application.register('materialize--autocomplete', AutocompleteController);
    application.register('materialize--datepicker', DatepickerController);
    application.register('materialize--timepicker', TimepickerController);
    application.register('materialize--date-time-picker', DateTimePickerController);
    application.register('materialize--form', FormController);
}
