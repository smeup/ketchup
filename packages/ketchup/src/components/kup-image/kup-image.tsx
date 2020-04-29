import {
    Component,
    Prop,
    Element,
    Host,
    State,
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
    @State() resource: string = undefined;

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

    async fetchResource() {
        let lcltime = new Date();
        let starttime = lcltime.getTime();
        //sessionStorage.setItem('pippo', 'pluto');

        var res = 'assets/' + this.type + '/' + this.name + '.' + this.type;
        var retValue = fetch(res)
            .then((response) => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('Icon( ' + res + ' ) was not loaded!');
                }
            })
            .then((text) => {
                this.resource = text;
            })
            .catch((error) => {
                let message = error;
                errorLogging('kup-image', message);
                this.resource = null;
            });
        lcltime = new Date();
        let endtime = lcltime.getTime();
        this.log('fetchResource', 'time spent [' + (endtime - starttime) + ']');
        return retValue;
    }

    log(methodName: string, msg: string) {
        errorLogging(
            'kup-image',
            methodName + '() ' + this.rootElement.id + ' - ' + msg,
            'log'
        );
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
            this.type = 'srcpath';
        } else {
            if (this.type === 'svg') {
                //return this.fetchResource();
                this.fetchResource();
                //return (this.resource =
                //    '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 48 48"><path d="M44 11.44l-9.19-7.71-2.57 3.06 9.19 7.71L44 11.44zM15.76 6.78l-2.57-3.06L4 11.43l2.57 3.06 9.19-7.71zM25 16h-3v12l9.49 5.71L33 31.24l-8-4.74V16zm-1.01-8C14.04 8 6 16.06 6 26s8.04 18 17.99 18S42 35.94 42 26 33.94 8 23.99 8zM24 40c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.26 14-14 14z"/></svg>');
            } else {
                //return (...);
                this.resource =
                    'assets/' + this.type + '/' + this.name + '.' + this.type;
            }
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

        if (this.type === 'svg') {
            return (
                <Host style={elStyle}>
                    {customStyle}
                    <div
                        id="kup-component"
                        innerHTML={el}
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
