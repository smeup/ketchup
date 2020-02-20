import { Component, Prop, Element, Host, getAssetPath, h } from '@stencil/core';

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
    @Prop({ reflect: true }) color: string = undefined;

    /**
     * The height of the icon, defaults to 100%.
     */
    @Prop({ reflect: true }) height: string = '100%';

    /**
     * The name of the icon.
     */
    @Prop({ reflect: true }) name: string = undefined;

    /**
     * The type of the icon, defaults to "svg".
     */
    @Prop({ reflect: true }) type: string = 'svg';

    /**
     * The width of the icon, defaults to 100%.
     */
    @Prop({ reflect: true }) width: string = '100%';

    /**
     * Used to set the public path to recover the assets.
     */
    @Prop({ reflect: true }) publicPath: string = '/build';

    private objectEl: any;

    //---- Methods ----

    setStyle() {
        let style: string = '';
        if (this.color) {
            style += ' color: ' + this.color + ';';
            style += ' fill: ' + this.color + ';';
        }
        if (this.height) {
            style += ' height: ' + this.height + ';';
        }
        if (this.width) {
            style += ' width: ' + this.width + ';';
        }

        if (this.objectEl.contentDocument.querySelector('svg')) {
            this.objectEl.contentDocument
                .querySelector('svg')
                .setAttribute('style', style);
        }
    }

    //---- Lifecycle hooks ----

    render() {
        let style = {
            height: this.height,
            width: this.width,
        };
        console.log(
            getAssetPath(
                `${this.publicPath}/assets/${this.type}/${this.name}.${this.type}`
            )
        );

        return (
            <Host>
                <div id="kup-component">
                    <object
                        style={style}
                        ref={(el) => (this.objectEl = el as any)}
                        data={getAssetPath(
                            `${this.publicPath}/assets/${this.type}/${this.name}.${this.type}`
                        )}
                        type="image/svg+xml"
                        onLoad={() => this.setStyle()}
                    ></object>
                </div>
            </Host>
        );
    }
}
