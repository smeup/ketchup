import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
    tag: 'kup-modal',
    styleUrl: 'kup-modal.scss',
    shadow: true,
})
export class KupModal {
    @Prop({
        mutable: true,
        reflectToAttr: true,
    })
    public visible: boolean;

    @Prop()
    public header: string;

    @Event({
        eventName: 'kupModalCancel',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupModalCancel: EventEmitter;

    private handleCancelClick = () => {
        this.kupModalCancel.emit();
    };

    public render() {
        const { visible, header, handleCancelClick } = this;
        return (
            <div class={visible ? 'modal-wrapper visible' : 'modal-wrapper'}>
                <div class="modal">
                    <div class="modal-top">
                        <span class="modal-cancel" onClick={handleCancelClick}>
                            X
                        </span>
                    </div>
                    <div class="modal-header">
                        <span>{header}</span>
                    </div>
                    <div class="modal-content">
                        <slot />
                    </div>
                    <div class="modal-bottom"></div>
                </div>
            </div>
        );
    }
}
