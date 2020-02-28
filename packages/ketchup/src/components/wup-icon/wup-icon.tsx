import {
    Component,
    Prop,
    Element,
    Host,
    State,
    Watch,
    getAssetPath,
    h,
} from '@stencil/core';

@Component({
    tag: 'wup-icon',
    styleUrl: 'wup-icon.scss',
    shadow: true,
    assetsDirs: ['assets'],
})
export class WupIcon {
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

    @Watch('resource')
    rerenderIcon() {
        this.render();
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        var res = getAssetPath(`assets/${this.type}/${this.name}.${this.type}`);
        fetch(res)
            .then((file) => file.text())
            .then((text) => {
                this.resource = text;
            })
            .catch(console.error.bind(console));
    }

    componentWillUpdate() {
        var res = getAssetPath(`assets/${this.type}/${this.name}.${this.type}`);
        fetch(res)
            .then((file) => file.text())
            .then((text) => {
                this.resource = text;
            })
            .catch(console.error.bind(console));
    }

    render() {
        if (!this.resource) {
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
            el = el.replace('height="48"', 'height="100%"');
            el = el.replace('width="48"', 'width="100%"');
            el = el.replace('fill="#010101"', '');

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
