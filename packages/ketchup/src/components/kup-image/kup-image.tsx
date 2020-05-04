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

    componentWillRender() {
        if (
            this.name.indexOf('.') > -1 ||
            this.name.indexOf('/') > -1 ||
            this.name.indexOf('\\') > -1
        ) {
            let message =
                'Detected an src img path for icon with name(' +
                this.name +
                ')! Overriding "svg" with "srcpath".';
            errorLogging('kup-image', message);
            this.resource = this.name;
            this.isUrl = true;
        } else {
            this.isUrl = false;
            this.resource =
                'assets/' + this.type + '/' + this.name + '.' + this.type;
            /*
            if (this.type === 'svg') {
                this.resource = getSvg(this.name);
                let fetchedSVG = document.documentElement['kupSVG'];
                if (!fetchedSVG) {
                    let message = 'Creating SVG resource on HTML element.';
                    errorLogging('kup-image', message);
                    document.documentElement['kupSVG'] = {};
                    fetchedSVG = document.documentElement['kupSVG'];
                }
                if (fetchedSVG[this.name]) {
                    this.resource = fetchedSVG[this.name];
                } else {
                    var res =
                        'assets/' +
                        this.type +
                        '/' +
                        this.name +
                        '.' +
                        this.type;
                    return fetch(res)
                        .then((response) => {
                            if (response.ok) {
                                return response.text();
                            } else {
                                throw new Error(
                                    'Icon( ' + res + ' ) was not loaded!'
                                );
                            }
                        })
                        .then((text) => {
                            this.resource = text;
                            let svgs = document.documentElement['kupSVG'];
                            if (svgs) {
                                let message =
                                    'Loading SVG resource on HTML element(' +
                                    this.name +
                                    ').';
                                errorLogging('kup-image', message);
                                svgs[this.name] = this.resource;
                            } else {
                                document.documentElement['kupSVG'] = {
                                    [this.name]: this.resource,
                                };
                            }
                        })
                        .catch((error) => {
                            let message = error;
                            errorLogging('kup-image', message);
                        });
                }
            } else {
                this.resource =
                    'assets/' + this.type + '/' + this.name + '.' + this.type;
            }
            */
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
            color: this.color,
            fill: this.color,
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

        if (this.type === 'svg' && !this.isUrl) {
            let str = `url(${this.resource}) no-repeat center`;
            let elStyle = {
                height: this.sizeY,
                width: this.sizeX,
                mask: str,
                background: this.color,
                webkitMask: str,
            };

            return (
                <Host style={elStyle}>
                    {customStyle}
                    <div
                        id="kup-component"
                        style={elStyle}
                        onClick={(e) => this.onKupClick(e)}
                    ></div>
                    {...badgeCollection}
                </Host>
            );
        } else {
            return (
                <Host style={elStyle}>
                    {customStyle}
                    <div id="kup-component" style={elStyle}>
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
