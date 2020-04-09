import { Component, Prop, Element, Host, State, h } from '@stencil/core';
import { errorLogging } from '../../utils/error-logging';

@Component({
    tag: 'kup-icon',
    styleUrl: 'kup-icon.scss',
    shadow: true,
})
export class KupIcon {
    @Element() rootElement: HTMLElement;
    @State() resource: string = undefined;
    /**
     * The color of the icon, defaults to the main color of the app.
     */
    @Prop({ reflect: true }) color: string = 'var(--kup-icon-color)';

    /**
     * Custom style to be passed to the component.
     */
    @Prop({ reflect: true }) customStyle: string = undefined;

    /**
     * The width and height of the icon, defaults to 100%. They are bound together because icons should generally be squared.
     */
    @Prop({ reflect: true }) dimensions: string = '100%';

    /**
     * The name of the icon.
     */
    @Prop({ reflect: true }) name: string = undefined;

    /**
     * The type of the icon, defaults to "svg".
     */
    @Prop({ reflect: true }) type: string = 'svg';

    //---- Methods ----

    async fetchResource() {
        var res = 'assets/' + this.type + '/' + this.name + '.' + this.type;
        return fetch(res)
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
                errorLogging('kup-icon', message);
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
            errorLogging('kup-icon', message);
            this.resource = this.name;
            this.type = 'srcpath';
        } else {
            if (this.type === 'svg') {
                return this.fetchResource();
            } else {
                return (this.resource =
                    'assets/' + this.type + '/' + this.name + '.' + this.type);
            }
        }
    }

    render() {
        if (this.resource === undefined) {
            let message = 'Resource undefined, not rendering!';
            errorLogging('kup-icon', message);
            return;
        }
        let elStyle = {
            height: this.dimensions,
            width: this.dimensions,
            color: this.color,
            fill: this.color,
        };
        let el: string = this.resource;
        let customStyle = undefined;
        if (this.customStyle) {
            customStyle = <style>{this.customStyle}</style>;
        }
        if (this.type === 'svg') {
            return (
                <Host style={elStyle}>
                    {customStyle}
                    <div
                        id="kup-component"
                        innerHTML={el}
                        style={elStyle}
                    ></div>
                </Host>
            );
        } else {
            return (
                <Host style={elStyle}>
                    {customStyle}
                    <div id="kup-component" style={elStyle}>
                        <img style={elStyle} src={el}></img>
                    </div>
                </Host>
            );
        }
    }
}
