import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
    tag: 'kup-chip',
    styleUrl: 'kup-chip.scss',
    shadow: true,
})
export class KupChip {
    @Prop({ reflect: true })
    closable = false;

    @Prop({ reflect: true })
    disabled = false;

    @Event()
    close: EventEmitter;

    // ---- Listeners ----
    private onCloseClicked() {
        if (!this.disabled) {
            this.close.emit();
        }
    }

    render() {
        let close = null;
        if (this.closable) {
            close = (
                <svg
                    version="1.1"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    aria-hidden="false"
                    onClick={() => this.onCloseClicked()}
                >
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
            );
        }

        const chipClass = {
            disabled: this.disabled,
        };

        return (
            <span
                id="chip"
                class={chipClass}
                tabindex="0"
                aria-disabled={this.disabled ? 'true' : 'false'}
            >
                <span id="content">
                    <slot />
                    {close}
                </span>
            </span>
        );
    }
}
