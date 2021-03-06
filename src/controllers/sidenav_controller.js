import {Controller} from 'stimulus'
import M from 'materialize-css'

export default class extends Controller {
    static values = {
        edge: String,
        draggable: Boolean,
        inDuration: Number,
        outDuration: Number,
        preventScrolling: Boolean
    }

    connect() {
        const edge = this.hasEdgeValue ? this.edgeValue : 'left';
        const draggable = this.hasDraggableValue ? this.draggableValue : true;
        const inDuration = this.hasInDurationValue ? this.inDurationValue : 250;
        const outDuration = this.hasOutDurationValue ? this.outDurationValue : 200;
        const preventScrolling = this.hasPreventScrollingValue ? this.preventScrollingValue : true;

        const sidenavOptions = {
            edge: edge,
            draggable: draggable,
            inDuration: inDuration,
            outDuration: outDuration,
            preventScrolling: preventScrolling
        }
        this.instance = M.Sidenav.init(this.element, sidenavOptions);
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
