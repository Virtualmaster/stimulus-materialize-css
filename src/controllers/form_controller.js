import {Controller} from 'stimulus'
import M from 'materialize-css'

export default class extends Controller {
    static targets = ['textArea', 'formSelect', 'chips']
    static values = {
        selectOptions: Object,
        chipsOptions: Object
    }

    connect() {
        this.characterCounters = []
        this.textAreaTargets.forEach(textArea => {
            if (textArea.dataset.characterCounter != null)
                this.characterCounters.push(M.CharacterCounter.init(textArea));
        })
        this.initSelects();
        this.initChips();
    }

    refresh() {
        M.updateTextFields();
        this.textAreaTargets.forEach(textArea => {
            M.textareaAutoResize(textArea)
        })
        this.destroySelects();
        this.initSelects();
        this.initChips();
        this.destroyChips();
    }

    disconnect() {
        this.characterCounters.forEach(instance => {
            instance.destroy();
        })
        this.destroySelects();
        this.destroyChips();
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

    initChips(){
        this.chipsInstances = []
        this.chipsTargets.forEach(chips => {
            this.chipsInstances.push(M.Chips.init(chips, this.chipsOptionsValue));
        })
    }

    destroyChips(){
        this.chipsInstances.forEach(instance => {
            instance.destroy();
        });
    }
}
