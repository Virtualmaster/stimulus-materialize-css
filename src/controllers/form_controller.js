import {Controller} from 'stimulus'
import M from 'materialize-css'

export default class extends Controller {
    static targets = ['textArea', 'formSelect']
    static values = {
        selectOptions: Object
    }

    connect() {
        this.characterCounters = []
        this.textAreaTargets.forEach(textArea => {
            if (textArea.dataset.characterCounter != null)
                this.characterCounters.push(M.CharacterCounter.init(textArea));
        })
        this.initSelects();
    }

    refresh() {
        M.updateTextFields();
        this.textAreaTargets.forEach(textArea => {
            M.textareaAutoResize(textArea)
        })
        this.destroySelects();
        this.initSelects();
    }

    disconnect() {
        this.characterCounters.forEach(instance => {
            instance.destroy();
        })
        this.destroySelects();
    }

    initSelects(){
        this.formSelects = []
        this.formSelectTargets.forEach(formSelect => {
            this.formSelects.push(M.FormSelect.init(formSelect, this.selectOptionsValue));
        })
    }

    destroySelects(){
        this.formSelects.forEach(instance => {
            instance.destroy();
        })
    }
}
