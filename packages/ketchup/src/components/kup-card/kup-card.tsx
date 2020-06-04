import {
    Component,
    Prop,
    Element,
    Host,
    Event,
    EventEmitter,
    h,
} from '@stencil/core';
import { ComponentCardElement } from './kup-card-declarations';
import * as layout from './layouts/kup-card-layouts';
import { errorLogging } from '../../utils/error-logging';

@Component({
    tag: 'kup-card',
    styleUrl: 'kup-card.scss',
    shadow: true,
})
export class KupCard {
    @Element() rootElement: HTMLElement;

    /**
     * Custom style to be passed to the component.
     */
    @Prop({ reflect: true }) customStyle: string = undefined;
    /**
     * The actual data of the card.
     */
    @Prop() data: ComponentCardElement = undefined;
    /**
     * Defines whether the card is a menu or not.
     */
    @Prop({ reflect: true }) isMenu: boolean = false;
    /**
     * Sets the layout of the card.
     */
    @Prop({ reflect: true }) layout: number = 1;
    /**
     * Sets the status of the menu, when false it's hidden otherwise it's visible.
     */
    @Prop({ reflect: true }) menuVisible: boolean = false;
    /**
     * The width of the card, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).
     */
    @Prop({ reflect: true }) sizeX: string = '100%';
    /**
     * The height of the card, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).
     */
    @Prop({ reflect: true }) sizeY: string = '100%';

    private elStyle = undefined;

    @Event({
        eventName: 'kupCardEvent',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupEvent: EventEmitter<{
        id: any;
        value: any;
        event: any;
    }>;

    //---- Methods ----

    onKupEvent(e) {
        console.log('something happened', e);

        this.kupEvent.emit({
            id: e.detail.id,
            value: e.detail,
            event: e,
        });
    }

    getLayout() {
        if (this.layout === 0) {
            let message = 'Layout not available, not rendering!';
            errorLogging(this.rootElement.tagName, message);
            return;
        }
        let method: string = 'create' + this.layout;
        let card = layout[method](this.data);

        return card;
    }

    //---- Lifecycle hooks ----

    componentDidLoad() {
        document.addEventListener('kupButtonClick', (e) => {
            this.onKupEvent(e);
        });
    }

    componentDidUnload() {
        document.removeEventListener('kupButtonClick', (e) => {
            this.onKupEvent(e);
        });
    }

    render() {
        if (!this.data || !this.layout) {
            let message = 'Data or layout missing, not rendering!';
            errorLogging(this.rootElement.tagName, message);
            return;
        }
        let wrapperClass = undefined;
        let customStyle = undefined;
        if (this.customStyle) {
            customStyle = <style>{this.customStyle}</style>;
        }
        this.elStyle = undefined;
        this.elStyle = {
            height: this.sizeY,
            width: this.sizeX,
        };

        if (this.isMenu) {
            wrapperClass = 'mdc-menu mdc-menu-surface';

            if (this.menuVisible) {
                wrapperClass += ' visible';
            }
        }

        let card = this.getLayout();

        return (
            <Host style={this.elStyle}>
                {customStyle}
                <div id="kup-component" class={wrapperClass}>
                    {card}
                </div>
            </Host>
        );
    }
}
