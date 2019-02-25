import {
    Component,
    Element,
    Event,
    EventEmitter,
    Prop,
    Watch
} from '@stencil/core'

@Component({
    tag: 'ketchup-button',
    styleUrl: 'ketchup-button.scss'
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
    @Prop() borderColor: string
    @Prop() align: string
    @Prop() btnStyle: any = {}

    @Event({
        eventName: 'btnClicked',
        composed: true,
        cancelable: true,
        bubbles: true
    })
    btnClicked: EventEmitter

    @Watch('borderColor')
    onBorderColorChange(newValue: string, oldValue: string) {
        if (newValue === oldValue) {
            return
        }

        if (this.transparent && this.borderColor) {
            const btnStyle = this.ketchupButtonEl.querySelector('button').style
            btnStyle.borderColor = this.borderColor
            btnStyle.color = this.borderColor
        }
    }

    @Watch('btnStyle')
    onStyleChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return
        }

        const btnStyle = this.ketchupButtonEl.querySelector('button').style
        if (newValue.fontName) {
            btnStyle.fontFamily = newValue.fontName
        } else {
            btnStyle.fontFamily = 'inherit'
        }

        if (newValue.fontColor) {
            btnStyle.color = newValue.fontColor
        }

        if (newValue.bold) {
            btnStyle.fontWeight = 'bold'
        } else {
            btnStyle.fontWeight = 'inherit'
        }
    }

    onBtnClickedHandler() {
        this.btnClicked.emit()
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
            icon = <span class={'button-icon ' + this.iconClass} />
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

        return (
            <button
                class={btnClass}
                title={title}
                onClick={this.onBtnClickedHandler.bind(this)}
            >
                {icon}
                {btnLabel}
            </button>
        )
    }
}