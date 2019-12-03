import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
    tag: 'kup-chip-knowledge',
    styleUrl: 'kup-chip-knowledge.scss',
    shadow: true,
})
export class kupChipKnowledge {
    @Prop({ reflect: true }) name: string;

    @Prop({ attribute: 'img-url' }) imgUrl: string = '';
    @Prop() label: string;
    @Prop({ attribute: 'disabled' }) disabled?: boolean = false;
    @Prop({ attribute: 'closable', reflect: true }) closeable?: boolean = false;

    chip: HTMLInputElement;

    @Event({
        eventName: 'kupChipKnowledgeClose',
        cancelable: true,
        bubbles: false,
    })
    kupChipKnowledgeClose: EventEmitter;

    @Event({
        eventName: 'kupChipKnowledgeClick',
        cancelable: true,
    })
    kupChipKnowledgeClick: EventEmitter;

    // ---- Listeners ----
    private onCloseClicked(ev: Event) {
        alert('onCloseClicked');
        this.chip.style.display = 'none';
        this.kupChipKnowledgeClose.emit();
        ev.stopPropagation();
    }

    private onClick(ev: Event) {
        alert('onClick');
        this.kupChipKnowledgeClick.emit();
        ev.stopPropagation();
    }

    render() {
        let image = null;
        if (this.imgUrl && this.imgUrl != '') {
            var styleImg = { display: 'inline' };
            image = (
                <img
                    src={this.imgUrl}
                    alt={this.imgUrl}
                    title={this.imgUrl}
                    width="96"
                    height="96"
                    style={styleImg}
                />
            );
        }
        let close = null;
        if (this.closeable) {
            var closeButtonClassName = 'closebtn_disabled';
            if (!this.disabled) {
                closeButtonClassName = 'closebtn';
            }
            close = (
                <span
                    class={closeButtonClassName}
                    onClick={
                        !this.disabled ? (ev) => this.onCloseClicked(ev) : null
                    }
                >
                    &times;
                </span>
            );
        }

        return (
            <div
                id={name}
                class="kup-chip-knowledge"
                ref={(el) => (this.chip = el as HTMLInputElement)}
                onClick={!this.disabled ? (ev) => this.onClick(ev) : null}
            >
                {image}
                {this.label}
                {close}
            </div>
        );
    }
}
