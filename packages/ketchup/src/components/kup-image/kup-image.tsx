import {
    Component,
    Prop,
    Element,
    Host,
    Event,
    EventEmitter,
    h,
} from '@stencil/core';
import { Badge } from './kup-image-declarations';
import { errorLogging } from '../../utils/error-logging';
import { imageCanvas } from './canvas/kup-image-canvas';

@Component({
    tag: 'kup-image',
    styleUrl: 'kup-image.scss',
    shadow: true,
})
export class KupImage {
    @Element() rootElement: HTMLElement;

    /**
     * Sets the data of badges.
     */
    @Prop() badgeData: Badge[] = undefined;
    /**
     * The color of the icon, defaults to the main color of the app.
     */
    @Prop({ reflect: true }) color: string = 'var(--kup-icon-color)';
    /**
     * Custom style to be passed to the component.
     */
    @Prop({ reflect: true }) customStyle: string = undefined;
    /**
     * When set to true, a spinner will be displayed until the image finished loading. Not compatible with SVGs.
     */
    @Prop({ reflect: true }) feedback: boolean = false;
    /**
     * The image component will create a canvas element on which it's possible to draw. Instructions will be added to this page in the future.
     */
    @Prop({ reflect: true }) isCanvas: boolean = false;
    /**
     * The name of the icon. It can also contain an URL or a path.
     */
    @Prop({ reflect: true }) name: string = undefined;
    /**
     * The width of the icon, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).
     */
    @Prop({ reflect: true }) sizeX: string = '100%';
    /**
     * The height of the icon, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).
     */
    @Prop({ reflect: true }) sizeY: string = '100%';
    /**
     * The type of the icon, defaults to "svg".
     */
    @Prop({ reflect: true }) type: string = 'svg';

    private resource: string = undefined;
    private isUrl: boolean = false;
    private imageCanvas: imageCanvas;
    canvas: HTMLCanvasElement;

    @Event({
        eventName: 'kupImageClick',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<{
        el: EventTarget;
    }>;

    @Event({
        eventName: 'kupImageLoad',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupLoad: EventEmitter<{
        el: EventTarget;
    }>;

    //---- Methods ----

    onKupClick(e: Event) {
        this.kupClick.emit({
            el: e.target,
        });
    }

    onKupLoad(e: Event) {
        if (this.feedback) {
            if (this.rootElement.shadowRoot !== undefined) {
                let spinner = this.rootElement.shadowRoot.querySelector(
                    '#feedback'
                );
                spinner.remove();
            }
        }
        this.kupLoad.emit({
            el: e.target,
        });
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        if (this.isCanvas) {
            this.imageCanvas = new imageCanvas();
        }
    }

    componentDidRender() {
        if (this.isCanvas && this.resource) {
            this.canvas.height = this.canvas.clientHeight;
            this.canvas.width = this.canvas.clientWidth;
            this.imageCanvas.drawCanvas(this.resource, this.canvas);
        }
    }

    componentWillRender() {
        this.isUrl = false;
        if (this.name === undefined || this.name === '' || this.name === null) {
            this.resource = undefined;
        } else if (this.isCanvas) {
            this.resource = this.name;
        } else if (
            this.name.indexOf('.') > -1 ||
            this.name.indexOf('/') > -1 ||
            this.name.indexOf('\\') > -1
        ) {
            this.isUrl = true;
            this.resource = this.name;
        } else {
            this.resource =
                'assets/' + this.type + '/' + this.name + '.' + this.type;
        }
    }

    render() {
        if (this.resource === undefined) {
            let message = 'Resource undefined, not rendering!';
            errorLogging('kup-image', message);
            return;
        }

        let elStyle = {
            height: this.sizeY,
            width: this.sizeX,
        };
        let el: string = this.resource;
        let spinnerLayout: number;
        let feedback: HTMLElement;
        let customStyle = undefined;
        if (this.customStyle) {
            customStyle = <style>{this.customStyle}</style>;
        }

        let badgeCollection = [];
        if (this.badgeData) {
            badgeCollection = this.badgeData.map((badge) => {
                return (
                    <kup-badge
                        imageData={badge.imageData}
                        text={badge.text}
                        position={badge.position}
                    />
                );
            });
        }

        if (this.feedback) {
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
            return (
                <Host style={elStyle}>
                    {customStyle}
                    <div id="kup-component" onClick={(e) => this.onKupClick(e)}>
                        <canvas ref={(el) => (this.canvas = el)}>
                            {this.resource}
                        </canvas>
                    </div>
                    {...badgeCollection}
                </Host>
            );
        } else if (this.type === 'svg' && !this.isUrl) {
            let str = `url(${this.resource}) no-repeat center`;
            let elStyleSVG = {
                mask: str,
                background: this.color,
                webkitMask: str,
            };
            return (
                <Host style={elStyle}>
                    {customStyle}
                    <div
                        id="kup-component"
                        style={elStyleSVG}
                        onClick={(e) => this.onKupClick(e)}
                    ></div>
                    {...badgeCollection}
                </Host>
            );
        } else {
            return (
                <Host style={elStyle}>
                    {customStyle}
                    <div id="kup-component">
                        {feedback}
                        <img
                            style={elStyle}
                            src={el}
                            onClick={(e) => this.onKupClick(e)}
                            onLoad={(e) => this.onKupLoad(e)}
                        ></img>
                    </div>
                    {...badgeCollection}
                </Host>
            );
        }
    }
}
