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
    /**
     * Following default props and elements common to all widgets
     */
    @Element() rootElement: HTMLElement;

    /**
     * The color of the icon, defaults to the main color of the app.
     */
    @Prop({ reflect: true }) color: string = 'var(--kup-icon-color)';

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

    /**
     * The resource loaded.
     */
    @State() resource: string = undefined;
    @Watch('resource')
    rerenderIcon() {
        this.render();
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        var res = getAssetPath(`assets/${this.type}/${this.name}.${this.type}`);
        console.log(res);
        fetch(res)
            .then((file) => file.text())
            .then((text) => {
                this.resource = text;
            })
            .catch(console.error.bind(console));
    }

    componentWillUpdate() {
        this.resource = undefined;
        var res = getAssetPath(`assets/${this.type}/${this.name}.${this.type}`);
        fetch(res)
            .then((file) => file.text())
            .then((text) => {
                this.resource = text;
            })
            .catch(console.error.bind(console));
    }

    render() {
        let elStyle = {
            height: this.dimensions,
            width: this.dimensions,
            color: this.color,
            fill: this.color,
        };
        if (!this.resource) {
            return;
        }
        let el: string = this.resource;
        el = el.replace('height="48"', 'height="100%"');
        el = el.replace('width="48"', 'width="100%"');

        return (
            <Host style={elStyle}>
                <div id="kup-component" innerHTML={el} style={elStyle}></div>
            </Host>
        );
    }
}
