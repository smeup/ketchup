import {
    Component,
    Element,
    Event,
    EventEmitter,
    Prop,
    Watch
} from '@stencil/core'

@Component({
    tag: 'ketchup-radio',
    styleUrl: 'ketchup-radio.scss'
})
export class KetchupButton {
    @Element() ketchupButtonEl: HTMLElement

    @Prop() label: string;
    @Prop() direction: string = 'horizontal';

    //---- Validating props ----
    @Watch('direction')
    checkDirection(newVal: string) {
        if (!/horizontal|vertical/.test(newVal)) {
            throw new Error('ketchup-radio: direction must be horizontal or vertical.');
        }
    }

    @Event({
        eventName: 'btnClicked',
        composed: true,
        cancelable: true,
        bubbles: true
    })
    btnClicked: EventEmitter

    onBtnClickedHandler() {
        this.btnClicked.emit()
    }

    render() {
        return (
            <div
                //class={btnClass}
                //title={title}
                onClick={this.onBtnClickedHandler.bind(this)}
            >
                {this.label}
            </div>
        )
    }
}