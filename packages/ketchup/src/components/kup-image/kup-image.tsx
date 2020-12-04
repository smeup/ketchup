import {
    Component,
    Prop,
    Element,
    JSX,
    Host,
    Event,
    getAssetPath,
    EventEmitter,
    State,
    h,
    Method,
} from '@stencil/core';
import { CssDraw } from './kup-image-declarations';
import { logLoad, logMessage, logRender } from '../../utils/debug-manager';
import { imageCanvas } from './canvas/kup-image-canvas';
import { setThemeCustomStyle, setCustomStyle } from '../../utils/theme-manager';
import { KupBadge } from '../kup-badge/kup-badge';

@Component({
    tag: 'kup-image',
    assetsDirs: ['assets'],
    styleUrl: 'kup-image.scss',
    shadow: true,
})
export class KupImage {
    @Element() rootElement: HTMLElement;
    @State() customStyleTheme: string = undefined;

    /**
     * Sets the data of badges.
     */
    @Prop() badgeData: KupBadge[] = undefined;
    /**
     * The color of the icon, defaults to the main color of the app.
     */
    @Prop() color: string = 'var(--kup-icon-color)';
    /**
     * Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = undefined;
    /**
     * When present, the component will be drawn using CSS. Check the 'Drawing with CSS' section of the image showcase for more information.
     */
    @Prop() data: CssDraw[] = undefined;
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

    private isUrl: boolean = false;
    private elStyle = undefined;
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

    @Method()
    async refreshCustomStyle(customStyleTheme: string) {
        this.customStyleTheme = customStyleTheme;
    }

    onKupClick(e: Event) {
        this.kupClick.emit({
            el: e.target,
        });
    }

    onKupLoad(e: Event) {
        if (this.feedback && this.isUrl) {
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

    renderCanvas() {
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

    renderFromResource() {
        let svgMask: string = undefined;
        let svgStyle: any = undefined;
        let image: Element = undefined;
        let url: string = getAssetPath(`./assets/svg/${this.resource}.svg`);

        if (!this.isUrl) {
            svgMask = `url('${url}') no-repeat center`;
            svgStyle = {
                mask: svgMask,
                background: this.color,
                webkitMask: svgMask,
            };
        } else {
            image = (
                <img
                    style={this.elStyle}
                    src={this.resource}
                    onLoad={(e) => this.onKupLoad(e)}
                ></img>
            );
        }

        return (
            <div
                id="kup-component"
                class="is-resource"
                style={svgStyle}
                onClick={(e) => this.onKupClick(e)}
            >
                {image}
            </div>
        );
    }

    renderFromData() {
        const cssDraw = this.data;
        let steps: JSX.Element[] = [];
        let leftProgression: number = 0;

        for (let i = 0; i < this.data.length; i++) {
            let drawStep: JSX.Element = undefined;

            if (!cssDraw[i].shape) {
                cssDraw[i].shape = 'bar';
            }
            if (!cssDraw[i].color) {
                cssDraw[i].color = 'transparent';
            }
            if (!cssDraw[i].height) {
                cssDraw[i].height = '100%';
            }
            if (!cssDraw[i].width) {
                cssDraw[i].width = '100%';
            }

            let stepId: string = 'step-' + i;
            let stepClass: string = 'css-step bottom-aligned';
            let stepStyle: any = {
                backgroundColor: cssDraw[i].color,
                left: leftProgression + '%',
                height: cssDraw[i].height,
                width: cssDraw[i].width,
            };

            leftProgression += parseFloat(cssDraw[i].width);

            drawStep = (
                <span id={stepId} class={stepClass} style={stepStyle}></span>
            );
            steps.push(drawStep);
        }

        return (
            <div
                id="kup-component"
                class="is-css"
                onClick={(e) => this.onKupClick(e)}
            >
                {steps}
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
        let el: Element = undefined;
        let feedback: HTMLElement = undefined;
        let spinnerLayout: number = undefined;
        this.elStyle = {
            height: this.sizeY,
            minHeight: this.sizeY,
            width: this.sizeX,
            minWidth: this.sizeX,
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

        let badgeCollection: KupBadge[] = [];
        if (this.badgeData) {
            for (let index = 0; index < this.badgeData.length; index++) {
                badgeCollection.push(<kup-badge {...this.badgeData[index]} />);
            }
        }

        if (this.isCanvas) {
            el = this.renderCanvas();
        } else if (this.resource) {
            el = this.renderFromResource();
        } else if (this.data) {
            el = this.renderFromData();
        } else {
            let message = 'Resource undefined, not rendering!';
            logMessage(this, message, 'warning');
            return;
        }

        return (
            <Host style={this.elStyle}>
                <style>{setCustomStyle(this)}</style>
                {feedback}
                {el}
                {...badgeCollection}
            </Host>
        );
    }
}
