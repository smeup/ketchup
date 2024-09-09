import {
    Component,
    Element,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
} from '@stencil/core';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import { KupManager } from '../../managers/kup-manager/kup-manager-declarations';
import { kupManagerInstance } from '../../managers/kup-manager/kup-manager';
import { FTypography } from '../../f-components/f-typography/f-typography';
import {
    FTypographyProps,
    FTypographyType,
} from '../../f-components/f-typography/f-typography-declarations';
import { KupTypographyProps } from './kup-typography-declarations';
import { KupDataNode } from '../../managers/kup-data/kup-data-declarations';

@Component({
    tag: 'kup-typography',
    styleUrl: 'kup-typography.scss',
    shadow: true,
})
export class KupTypography {
    /**
     * References the root HTML element of the component (<kup-typography>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://smeup.github.io/ketchup/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Props of the sub-components.
     * @default []
     */
    @Prop({ mutable: true }) data: KupDataNode[] = [];
    /**
     * Manage the toolbar icon. If true is visible, otherwise is not
     * @default null
     */
    @Prop() toolbar: boolean = false;
    /**
     * Sets the sizing of the textfield
     * @default FTypographyType.BODY_COMPACT
     */
    @Prop() type: FTypographyType = FTypographyType.BODY_COMPACT;
    /**
     * This is the context of the text
     * @default null
     */
    @Prop() value: string = null;

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
        return getProps(this, KupTypographyProps, descriptions);
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
        setProps(this, KupTypographyProps, props);
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
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        const props: FTypographyProps = {
            value: this.value,
        };
        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <FTypography {...props} />
            </Host>
        );
    }
    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}
