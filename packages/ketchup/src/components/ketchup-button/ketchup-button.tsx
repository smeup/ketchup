import {
    Component,
    Element,
    Event,
    EventEmitter,
    Prop
} from '@stencil/core'

@Component({
    tag: 'ketchup-button',
    styleUrl: 'ketchup-button.scss',
    shadow: true
})
export class KetchupButton {
    @Element() ketchupButtonEl: HTMLElement

    @Prop() flat = false
    @Prop() label: string
    @Prop() buttonClass: string
    @Prop() iconClass: string
    @Prop() fillspace = false
    @Prop() showtext = true
    @Prop() showicon = true
    @Prop() rounded = false
    @Prop() textmode: string
    @Prop() transparent = false
    @Prop() align: string
    @Prop() iconUrl =
        'https://cdn.materialdesignicons.com/3.2.89/css/materialdesignicons.min.css'

    @Event({
        eventName: 'ketchupButtonClicked',
        composed: true,
        cancelable: true,
        bubbles: true
    })
    ketchupButtonClicked: EventEmitter<{
        id: string;
    }>;

    onBtnClickedHandler() {
        this.ketchupButtonClicked.emit({id: this.ketchupButtonEl.dataset.id})
    }

    _isHint() {
        return 'Hint' === this.textmode
    }

    render() {
        let btnLabel = null
        if (
            (!this._isHint() || (this._isHint() && this.flat)) &&
            this.showtext &&
            this.label
        ) {
            btnLabel = <span class="button-text">{this.label}</span>
        }

        let icon = null
        if (this.showicon && this.iconClass) {
            icon = <span class={'button-icon ' + this.iconClass}/>
        }

        let btnClass = ''
        if (this.flat) {
            btnClass = 'flat-btn'
        } else {
            if (this.buttonClass) {
                btnClass += this.buttonClass
            }

            if (this.rounded) {
                btnClass += ' rounded'
            }

            if (this.transparent) {
                btnClass += ' transparent'
            }
        }

        if (this.fillspace) {
            btnClass += ' fillspace'
        }

        if (this.align) {
            if ('right' === this.align) {
                btnClass += ' align-right'
            } else if ('left' === this.align) {
                btnClass += ' align-left'
            }
        }

        btnClass = btnClass.trim()

        let title = ''
        if ('Hint' === this.textmode) {
            title = this.label
        }

        // TODO: check if the div element can be removed by passing JSX an array of elements
        return [
            <link href={this.iconUrl} rel="stylesheet" type="text/css"/>,
            <button
                class={btnClass}
                title={title}
                onClick={() => this.onBtnClickedHandler()}
            >
                {icon}
                {btnLabel}
            </button>
        ]
    }
}
