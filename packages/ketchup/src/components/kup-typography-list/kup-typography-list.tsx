import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
    VNode,
    Watch,
} from '@stencil/core';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import {
    KupTypographyClickEventPayload,
    KupTypographyIconClickEventPayload,
    KupTypographyListProps,
} from './kup-typography-list-declarations';
import { getProps, setProps } from '../../utils/utils';
import { KupManager } from '../../managers/kup-manager/kup-manager-declarations';
import { kupManagerInstance } from '../../managers/kup-manager/kup-manager';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import {
    KupDataDataset,
    KupDataNode,
} from '../../managers/kup-data/kup-data-declarations';
import {
    FTypographyProps,
    FTypographyType,
} from '../../f-components/f-typography/f-typography-declarations';
import { FTypography } from '../../f-components/f-typography/f-typography';
import { componentWrapperId } from '../../variables/GenericVariables';
import { KupObj } from '../../managers/kup-objects/kup-objects-declarations';

@Component({
    tag: 'kup-typography-list',
    styleUrl: 'kup-typography-list.scss',
    shadow: true,
})
export class KupTypographyList {
    /**
     * References the root HTML element of the component (<kup-typography-list>).
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
     * @default FTypographyType.BODY_COMPACT
     */
    @Prop() type: FTypographyType = FTypographyType.BODY_COMPACT;
    /**
     * Props of the sub-components.
     * @default []
     */
    @Prop({ mutable: true }) data: KupDataNode[] = [];
    /**
     * This is the context of the text
     * @default null
     */
    @Prop() value: string = null;

    /**
     * Manage the toolbar icon. If true is visible, otherwise is not
     * @default null
     */
    @Prop() toolbar: boolean = false;
    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();
    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-typography-icon-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupIconClick: EventEmitter<KupTypographyIconClickEventPayload>;

    @Event({
        eventName: 'kup-typography-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    KupClick: EventEmitter<KupTypographyClickEventPayload>;

    onKupClick(index: string, subIndex: string): void {
        this.KupClick.emit({
            comp: this,
            id: this.rootElement.id,
            index: index,
            subIndex: subIndex,
            obj: this.getObjForEvent(index, subIndex),
        });
    }

    onKupIconClick(i: number, node: KupDataNode) {
        this.kupIconClick.emit({
            comp: this,
            id: this.rootElement.id,
            index: i,
            node: node,
        });
    }

    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('data')
    checkDataset(newData: KupDataNode[] | KupDataDataset) {
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
        return getProps(this, KupTypographyListProps, descriptions);
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
        setProps(this, KupTypographyListProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    private renderTypography(node: KupDataNode, index: number): VNode {
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
        const props: FTypographyProps = {
            value: data.value,
            type: data.type,
            toolbar: data.toolbar,
            onIconClick: () => this.onKupIconClick(data.i, data.node),
            onClick: () => this.onKupClick(data.i, data.node),
        };

        return <FTypography {...props} />;
    }

    private prepareDataFromTreeNode(
        node: KupDataNode,
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
        if (this.type != null) {
            data.type = this.type;
            console.log(this.type + 'and' + data.type);
        }
        if (this.toolbar != null) {
            data.toolbar = this.toolbar;
        }
        data.id = index.toString();
        return data;
    }

    private renderTypographys(): VNode[] {
        if (this.data == null || this.data.length < 1) {
            return null;
        }
        const columns: VNode[] = [];
        for (let i = 0; i < this.data.length; i++) {
            const node: KupDataNode = this.data[i];
            let b: VNode = null;
            b = this.renderTypography(node, i);
            if (b) {
                columns.push(b);
            }
        }
        return columns;
    }

    private getObjForEvent(index: string, subIndex: string): KupObj {
        let indexInt: number = Number(index);
        let subIndexInt: number = -1;
        if (subIndex != null && subIndex.trim() != '') {
            subIndexInt = Number(subIndex);
        }

        let tn: KupDataNode = this.data[indexInt];
        if (subIndexInt != -1) {
            return tn.children[subIndexInt].obj;
        }
        return tn.obj;
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
        const typograhy: VNode[] = this.renderTypographys();
        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <div class="typographies-wrapper">{typograhy}</div>
                </div>
            </Host>
        );
    }
    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}
