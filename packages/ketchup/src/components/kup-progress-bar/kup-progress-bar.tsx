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
import { FProgressBar } from '../../f-components/f-progress-bar/f-progress-bar';
import { FProgressBarProps } from '../../f-components/f-progress-bar/f-progress-bar-declarations';

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
        const props: FProgressBarProps = {
            animated: this.rootElement.classList.contains('kup-animated')
                ? true
                : false,
            danger: this.rootElement.classList.contains('kup-danger')
                ? true
                : false,
            centeredLabel: this.centeredLabel,
            hideLabel: this.hideLabel,
            icon: this.icon,
            info: this.rootElement.classList.contains('kup-info')
                ? true
                : false,
            isRadial: this.isRadial,
            label: this.label,
            padded: this.rootElement.classList.contains('kup-padded')
                ? true
                : false,
            secondary: this.rootElement.classList.contains('kup-secondary')
                ? true
                : false,
            slim: this.rootElement.classList.contains('kup-slim')
                ? true
                : false,
            striped: this.rootElement.classList.contains('kup-striped')
                ? true
                : false,
            success: this.rootElement.classList.contains('kup-success')
                ? true
                : false,
            value: this.value,
            warning: this.rootElement.classList.contains('kup-warning')
                ? true
                : false,
        };

        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <FProgressBar {...props}></FProgressBar>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}
