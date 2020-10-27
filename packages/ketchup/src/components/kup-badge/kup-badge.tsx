import {
    Component,
    Element,
    Prop,
    Event,
    EventEmitter,
    h,
    State,
    Host,
    Method,
} from '@stencil/core';
import { logMessage } from '../../utils/debug-manager';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';

@Component({
    tag: 'kup-badge',
    styleUrl: 'kup-badge.scss',
    shadow: true,
})
export class KupBadge {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;

    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = undefined;
    /**
     * The data of the image displayed inside the badge.
     */
    @Prop() imageData: {} = undefined;
    /**
     * The text displayed inside the badge.
     */
    @Prop() text: string = undefined;

    private startTime: number = 0;
    private endTime: number = 0;
    private renderCount: number = 0;
    private renderStart: number = 0;
    private renderEnd: number = 0;

    @Event({
        eventName: 'kupBadgeClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        el: EventTarget;
    }>;

    //---- Methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    onKupClick(e: Event) {
        this.kupClick.emit({
            el: e.target,
        });
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.startTime = performance.now();
        setThemeCustomStyle(this);
    }

    componentDidLoad() {
        this.endTime = performance.now();
        let timeDiff: number = this.endTime - this.startTime;
        logMessage(this, 'Component ready after ' + timeDiff + 'ms.');
    }

    componentWillRender() {
        this.renderCount++;
        this.renderStart = performance.now();
    }

    componentDidRender() {
        this.renderEnd = performance.now();
        let timeDiff: number = this.renderEnd - this.renderStart;
        logMessage(
            this,
            'Render #' + this.renderCount + ' took ' + timeDiff + 'ms.'
        );
    }

    render() {
        if (this.text === undefined && this.imageData === undefined) {
            let message = 'Empty badge, not rendering!';
            logMessage(this, message, 'warning');
            return;
        }

        let imageEl: HTMLElement = undefined;

        const hostClass = {
            'handles-custom-style': true,
        };

        if (this.text === undefined && this.imageData !== undefined) {
            if (!this.imageData['sizeX']) {
                this.imageData['sizeX'] = '1rem';
            }
            if (!this.imageData['sizeY']) {
                this.imageData['sizeY'] = '1rem';
            }
            if (!this.imageData['color']) {
                this.imageData['color'] = 'var(--kup-text-on-main-color)';
            }
            imageEl = <kup-image {...this.imageData}></kup-image>;
        }

        return (
            <Host class={hostClass}>
                <style>{setCustomStyle(this)}</style>
                <div id="kup-component" onClick={(e) => this.onKupClick(e)}>
                    {this.text}
                    {imageEl}
                </div>
            </Host>
        );
    }
}
