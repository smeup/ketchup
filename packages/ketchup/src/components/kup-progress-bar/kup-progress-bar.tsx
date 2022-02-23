import {
    Component,
    Element,
    forceUpdate,
    getAssetPath,
    h,
    Host,
    Method,
    Prop,
} from '@stencil/core';

import type { GenericObject, KupComponent } from '../../types/GenericTypes';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupProgressBarProps } from './kup-progress-bar-declarations';

@Component({
    tag: 'kup-progress-bar',
    styleUrl: 'kup-progress-bar.scss',
    shadow: true,
})
export class KupProgressBar {
    /**
     * References the root HTML element of the component (<kup-progress-bar>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Displays the label in the middle of the progress bar. It's the default for the radial variant and can't be changed.
     * @default true
     */
    @Prop() centeredLabel: boolean = true;
    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Flag to show or hide the progress bar's label.
     * @default false
     */
    @Prop() hideLabel: boolean = false;
    /**
     * Specifies an icon to replace the label.
     * @default null
     */
    @Prop() icon: string = null;
    /**
     * Specifies a text for the bar's label.
     * @default null
     */
    @Prop() label: string = null;
    /**
     * Radial version.
     * @default false
     */
    @Prop({ reflect: true }) isRadial: boolean = false;
    /**
     * The current value the progress bar must display.
     * @default 0
     */
    @Prop() value: number = 0;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupProgressBarProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupProgressBarProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    private createIconElement() {
        if (!this.icon) {
            return undefined;
        }

        if (
            this.icon.indexOf('.') > -1 ||
            this.icon.indexOf('/') > -1 ||
            this.icon.indexOf('\\') > -1
        ) {
            return (
                <span class="label kup-icon is-image">
                    <img src={this.icon}></img>
                </span>
            );
        } else {
            let svg: string = `url('${getAssetPath(
                `./assets/svg/${this.icon}.svg`
            )}') no-repeat center`;
            let iconStyle = {
                mask: svg,
                webkitMask: svg,
            };
            return <span style={iconStyle} class="label kup-icon"></span>;
        }
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        const root = this.rootElement.shadowRoot;

        if (root && this.isRadial) {
            let deg = this.value * 3.6 + 'deg';
            root.querySelector('.left-side').setAttribute(
                'style',
                'transform: rotate(' + deg + ')'
            );
        }
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        let componentClass: string = '';
        let pieClass: string = 'pie';
        let radialStyle = undefined;
        if (this.isRadial) {
            componentClass = 'pie-wrapper';
        } else {
            componentClass = 'progress-bar';
        }

        let labelStyle = undefined;

        const valueStyle = {
            width: `${this.value}%`,
        };

        if (!this.centeredLabel) {
            labelStyle = valueStyle;
            if (this.value > 2) {
                componentClass += ' text-color-on-primary';
            }
        } else if (this.value > 49) {
            componentClass += ' text-color-on-primary';
        }

        let label = null;
        if (this.icon) {
            label = this.createIconElement();
        } else {
            if (!this.hideLabel) {
                if (this.isRadial) {
                    if (this.label) {
                        label = <span class="label">{this.label}</span>;
                    } else {
                        label = (
                            <span class="label">
                                {this.value}
                                <span class="smaller">%</span>
                            </span>
                        );
                    }
                } else {
                    if (this.label) {
                        label = this.label;
                    } else {
                        label = this.value + '%';
                    }
                }
            }
        }

        if (this.value > 0) {
            pieClass += ' has-value';
            if (this.value > 50) {
                pieClass += ' is-more-than-half';
            } else {
                pieClass += ' is-less-than-half';
            }
        }

        let el: HTMLElement;
        if (this.isRadial) {
            el = (
                <div class={componentClass}>
                    {label}
                    <div class={pieClass}>
                        <div
                            style={radialStyle}
                            class="left-side half-circle"
                        ></div>
                        <div class="right-side half-circle"></div>
                    </div>
                    <div class="shadow"></div>
                </div>
            );
        } else {
            el = (
                <div class={componentClass}>
                    <div class="progress-bar-percentage" style={valueStyle}>
                        <span style={labelStyle}>{label}</span>
                    </div>
                </div>
            );
        }

        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>{el}</div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}
