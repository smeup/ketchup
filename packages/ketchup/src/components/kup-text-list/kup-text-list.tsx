import {
    Component,
    Element,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
    VNode,
    Watch,
} from '@stencil/core';
import {
    FTextProps,
    FTextType,
} from '../../f-components/f-text/f-text-declarations';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import {
    KupTextListNode,
    KupTextListProps,
} from './kup-text-list-declarations';
import { setProps } from '../../utils/utils';
import { KupManager } from '../../managers/kup-manager/kup-manager-declarations';
import { kupManagerInstance } from '../../managers/kup-manager/kup-manager';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import { FText } from '../../f-components/f-text/f-text';
import { KupDataDataset } from '../../managers/kup-data/kup-data-declarations';

@Component({
    tag: 'kup-text-list',
    styleUrl: 'kup-text-list.scss',
    shadow: true,
})
export class KupTextList {
    /**
     * References the root HTML element of the component (<kup-text-list>).
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
     * Sets the sizing of the textfield
     * @default FTextType.HEADING1
     */
    @Prop() type: FTextType = FTextType.HEADING1;
    /**
     * Props of the sub-components.
     * @default []
     */
    @Prop({ mutable: true }) data: KupTextListNode[] = [];
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
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('data')
    checkDataset(newData: KupTextListNode[] | KupDataDataset) {
        if (!newData) {
            newData = [];
        }
        if ((newData as KupDataDataset).columns) {
            this.kupManager.debug.logMessage(
                this,
                'Detected KupDataDataset: converting rows to nodes.',
                KupDebugCategory.WARNING
            );
            const data = this.data as KupDataDataset;
            this.data = this.kupManager.data.row.toNode(data);
        }
    }

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
        let props: GenericObject = {};
        if (descriptions) {
            props = KupTextListProps;
        } else {
            for (const key in KupTextListProps) {
                if (
                    Object.prototype.hasOwnProperty.call(KupTextListProps, key)
                ) {
                    props[key] = this[key];
                }
            }
        }
        return props;
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
        setProps(this, KupTextListProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    private renderText(node: KupTextListNode, index: number): VNode {
        if (node === null) {
            this.kupManager.debug.logMessage(
                this,
                'Empty data text.',
                KupDebugCategory.WARNING
            );
            return null;
        }
        const data: GenericObject = this.prepareDataFromTreeNode(node, index);
        if (!data.value) {
            this.kupManager.debug.logMessage(
                this,
                'Empty text.',
                KupDebugCategory.WARNING
            );
            return null;
        }
        const props: FTextProps = {
            value: data.value,
            type: data.type,
        };

        return <FText {...props} />;
    }

    private prepareDataFromTreeNode(
        node: KupTextListNode,
        index: number
    ): GenericObject {
        const data: GenericObject = node.data != null ? { ...node.data } : {};

        if (this.customStyle != null && this.customStyle.trim() != '') {
            data.customStyle = this.customStyle;
        }
        if (data.value == null) {
            data.value = node.value;
        }
        if (!data.wrapperClass) {
            data.wrapperClass = '';
        }
        data.id = index.toString();
        return data;
    }

    private getKupListDataForChildren(
        children: KupTextListNode[]
    ): KupTextListNode[] {
        const ris: KupTextListNode[] = [];

        for (let i = 0; i < children.length; i++) {
            const tn: KupTextListNode = children[i];
            ris.push({
                icon: tn.icon,
                placeholderIcon: tn.placeholderIcon,
                id: i.toString(),
                value: tn.value,
            });
        }
        return ris;
    }

    private renderTexts(): VNode[] {
        if (this.data == null || this.data.length < 1) {
            return null;
        }
        const columns: VNode[] = [];
        for (let i = 0; i < this.data.length; i++) {
            const node: KupTextListNode = this.data[i];
            let b: VNode = null;
            b = this.renderText(node, i);
            if (b) {
                columns.push(b);
            }
        }
        return columns;
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.checkDataset(this.data);
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
        const text: VNode[] = this.renderTexts();
        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div>{text}</div>
            </Host>
        );
    }
    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}