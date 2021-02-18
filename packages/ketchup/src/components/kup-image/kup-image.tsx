import {
    Component,
    Event,
    EventEmitter,
    Prop,
    Element,
    Host,
    State,
    h,
    Method,
} from '@stencil/core';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';
import { logLoad, logMessage, logRender } from '../../utils/debug-manager';
import { imageCanvas } from './canvas/kup-image-canvas';
import { KupBadge } from '../kup-badge/kup-badge';
import { FImage } from '../../f-components/f-image/f-image';
import {
    FImageProps,
    FImageData,
} from '../../f-components/f-image/f-image-declarations';

@Component({
    tag: 'kup-image',
    assetsDirs: ['assets/svg'],
    styleUrl: 'kup-image.scss',
    shadow: true,
})
export class KupImage {
    @Element() rootElement: HTMLElement;

    //---- States ----

    @State() customStyleTheme: string = undefined;

    //---- Props ----

    /**
     * Sets the data of badges.
     */
    @Prop() badgeData: KupBadge[] = undefined;
    /**
     * The color of the icon, defaults to the CSS variable --kup-icon-color.
     */
    @Prop() color: string = 'var(--kup-icon-color)';
    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = undefined;
    /**
     * When present, the component will be drawn using CSS. Check the 'Drawing with CSS' section of the image showcase for more information.
     */
    @Prop() data: FImageData[] = undefined;
    /**
     * When set to true, a spinner will be displayed until the image finished loading. Not compatible with SVGs.
     */
    @Prop() feedback: boolean = false;
    /**
     * The image component will create a canvas element on which it's possible to draw. It's a temporary feature that will be fully replaced by CSS drawing in the future.
     */
    @Prop() isCanvas: boolean = false;
    /**
     * The resource used to fetch the image.
     */
    @Prop() resource: string = undefined;
    /**
     * The width of the icon, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).
     */
    @Prop() sizeX: string = '100%';
    /**
     * The height of the icon, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).
     */
    @Prop() sizeY: string = '100%';

    //---- Internal variables ----

    private isUrl: boolean = false;
    private imageCanvas: imageCanvas;
    canvas: HTMLCanvasElement;

    //---- Events ----

    @Event({
        eventName: 'kupImageClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        el: EventTarget;
    }>;

    onKupClick(e: Event) {
        this.kupClick.emit({
            el: e.target,
        });
    }

    //---- Public methods ----

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    //---- Private methods ----

    private renderCanvas(): HTMLDivElement {
        return (
            <div
                id="kup-component"
                onClick={(e) => this.onKupClick(e)}
                class="is-canvas"
            >
                <canvas ref={(el) => (this.canvas = el)}>
                    {this.resource}
                </canvas>
            </div>
        );
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        logLoad(this, false);
        setThemeCustomStyle(this);
    }

    componentDidLoad() {
        logLoad(this, true);
    }

    componentWillRender() {
        logRender(this, false);
        this.isUrl = false;
        if (this.resource) {
            if (
                this.resource.indexOf('.') > -1 ||
                this.resource.indexOf('/') > -1 ||
                this.resource.indexOf('\\') > -1
            ) {
                this.isUrl = true;
            }
        }
    }

    componentDidRender() {
        if (this.isCanvas && !this.imageCanvas) {
            this.imageCanvas = new imageCanvas();
        }
        if (this.isCanvas && this.resource) {
            this.canvas.height = this.canvas.clientHeight;
            this.canvas.width = this.canvas.clientWidth;
            this.imageCanvas.drawCanvas(this.resource, this.canvas);
        }
        logRender(this, true);
    }

    render() {
        let el: Element;
        let feedback: HTMLElement;
        let spinnerLayout: number;

        let props: FImageProps = {
            badgeData: this.badgeData,
            color: this.color,
            data: this.data,
            resource: this.resource,
            sizeX: this.sizeX,
            sizeY: this.sizeY,
        };

        let elStyle: {
            height: string;
            minHeight: string;
            width: string;
            minWidth: string;
        } = {
            height: props.sizeY,
            minHeight: props.sizeY,
            width: props.sizeX,
            minWidth: props.sizeX,
        };

        if (this.feedback && this.isUrl) {
            spinnerLayout = 14;
            feedback = (
                <div id="feedback" title="Image not loaded yet...">
                    <kup-spinner
                        dimensions="3px"
                        active
                        layout={spinnerLayout}
                    ></kup-spinner>
                </div>
            );
        }

        if (this.isCanvas) {
            el = this.renderCanvas();
        } else if (props.resource || props.data) {
            el = <FImage {...props}></FImage>;
        } else {
            let message = 'Resource undefined, not rendering!';
            logMessage(this, message, 'warning');
            return;
        }

        return (
            <Host style={elStyle}>
                <style>{setCustomStyle(this)}</style>
                {feedback}
                <div id="kup-component" onClick={(e) => this.onKupClick(e)}>
                    {el}
                </div>
            </Host>
        );
    }
}
