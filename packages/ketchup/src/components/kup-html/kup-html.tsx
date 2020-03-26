import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
    tag: 'kup-html',
    styleUrl: 'kup-html.scss',
    shadow: true,
})
export class KupHtml {
    /**
     * The label to show when button isButton is active
     */
    @Prop() label: string = 'Open in a new window';
    /**
     * If true, the kup-html takes the shape of a button
     */
    @Prop({
        reflect: true,
    })
    isButton: boolean = false;
    /**
     * The address which must be referenced by the iframe
     */
    @Prop() src: string = '';

    //-- Emitted --

    /**
     * When loading the frame has thrown an error
     */
    @Event({
        eventName: 'ketchupHtmlError',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    ketchupHtmlError: EventEmitter;

    onFrameError() {
        this.ketchupHtmlError.emit();
    }

    /**
     * When the iframe has been loaded
     */
    @Event({
        eventName: 'ketchupHtmlLoaded',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    ketchupHtmlLoaded: EventEmitter;

    onFrameLoaded() {
        this.ketchupHtmlLoaded.emit();
    }

    //---- Rendering functions ----
    render() {
        return !this.isButton ? (
            <iframe
                class="ketchup-frame"
                onError={this.onFrameError.bind(this)}
                onLoad={this.onFrameLoaded.bind(this)}
                src={this.src}
            />
        ) : (
            <a
                aria-label={this.label}
                href={this.src}
                rel="noopener"
                target="_blank"
            >
                <wup-button icon="open_in_new" label={this.label} />
            </a>
        );
    }
}
