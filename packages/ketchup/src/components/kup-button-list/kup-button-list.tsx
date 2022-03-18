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
    State,
    VNode,
    Watch,
} from '@stencil/core';
import type { GenericObject, KupComponent } from '../../types/GenericTypes';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { FButton } from '../../f-components/f-button/f-button';
import {
    FButtonProps,
    FButtonStyling,
} from '../../f-components/f-button/f-button-declarations';
import {
    KupButtonListClickEventPayload,
    KupButtonListNode,
    KupButtonListProps,
} from './kup-button-list-declarations';
import { KupListNode } from '../kup-list/kup-list-declarations';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import { componentWrapperId } from '../../variables/GenericVariables';
import { setProps } from '../../utils/utils';
import { KupDropdownButtonEventPayload } from '../kup-dropdown-button/kup-dropdown-button-declarations';
import { KupObj } from '../../managers/kup-objects/kup-objects-declarations';
import { KupDataDataset } from '../../managers/kup-data/kup-data-declarations';

@Component({
    tag: 'kup-button-list',
    styleUrl: 'kup-button-list.scss',
    shadow: true,
})
export class KupButtonList {
    /**
     * References the root HTML element of the component (<kup-button-list>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * The id of the selected button.
     * @default ""
     */
    @State() selected: string = '';

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/
    /**
     * Number of columns.
     * @default 0
     */
    @Prop() columns: number = 0;
    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Props of the sub-components.
     * @default []
     */
    @Prop({ mutable: true }) data: KupButtonListNode[] = [];
    /**
     * When set to true, the sub-components are disabled.
     * @default false
     */
    @Prop() disabled: boolean = false;
    /**
     * When set to true, highlights the selected button with the secondary color of KupTheme.
     * @default true
     */
    @Prop() showSelection: boolean = true;
    /**
     * Defines the style of the buttons. Available styles are "flat", "outlined" and "raised" (which is the default).
     * @default FButtonStyling.RAISED
     */
    @Prop({ reflect: true }) styling: FButtonStyling = FButtonStyling.RAISED;

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
        eventName: 'kup-buttonlist-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupButtonListClickEventPayload>;

    onKupClick(index: string, subIndex: string): void {
        this.selected = index;
        this.kupClick.emit({
            comp: this,
            id: this.rootElement.id,
            index: index,
            subIndex: subIndex,
            obj: this.getObjForEvent(index, subIndex),
        });
    }

    onDropDownItemClick(e: CustomEvent, index: string): void {
        this.selected = index;
        this.onKupClick(index, e.detail.value);
    }

    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('data')
    checkDataset(newData: KupButtonListNode[] | KupDataDataset) {
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
            props = KupButtonListProps;
        } else {
            for (const key in KupButtonListProps) {
                if (
                    Object.prototype.hasOwnProperty.call(
                        KupButtonListProps,
                        key
                    )
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
        setProps(this, KupButtonListProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    private renderButton(node: KupButtonListNode, index: number): VNode {
        if (node === null) {
            this.kupManager.debug.logMessage(
                this,
                'Empty data button.',
                KupDebugCategory.WARNING
            );
            return null;
        }
        const data: GenericObject = this.prepareDataFromTreeNode(node, index);
        if (!data.label && !data.icon) {
            this.kupManager.debug.logMessage(
                this,
                'Empty button.',
                KupDebugCategory.WARNING
            );
            return null;
        }
        const props: FButtonProps = {
            checked: data.checked,
            disabled: data.disabled,
            fullHeight: data.fullHeight,
            fullWidth: data.fullWidth,
            icon: data.icon,
            iconOff: data.iconOff,
            id: data.id,
            label: data.label,
            large: data.large,
            shaped: data.shaped,
            styling: data.styling,
            toggable: data.toggable,
            trailingIcon: data.trailingIcon,
            title: data.title,
            wrapperClass: this.rootElement.className + ' ' + data.wrapperClass,
            onClick: () => this.onKupClick(data.id, '-1'),
        };
        return <FButton {...props} />;
    }

    private renderDropdownButton(
        node: KupButtonListNode,
        index: number
    ): VNode {
        if (node === null) {
            this.kupManager.debug.logMessage(
                this,
                'Empty data dropdown button.',
                KupDebugCategory.WARNING
            );
            return null;
        }
        const data: GenericObject = this.prepareDataFromTreeNode(node, index);
        if (!data.label && !data.icon && !node?.data.dropdownOnly) {
            this.kupManager.debug.logMessage(
                this,
                'Empty dropdown button.',
                KupDebugCategory.WARNING
            );
            return null;
        }
        data.data = {
            'kup-list': {
                data: this.getKupListDataForChildren(node.children),
                showIcons: true,
            },
        };
        return (
            <kup-dropdown-button
                class={this.rootElement.className + ' ' + data.wrapperClass}
                {...data}
                onkup-dropdownbutton-click={() =>
                    this.onKupClick(index.toString(), '-1')
                }
                onkup-dropdownbutton-itemclick={(
                    e: CustomEvent<KupDropdownButtonEventPayload>
                ) => this.onDropDownItemClick(e, index.toString())}
            />
        );
    }

    private prepareDataFromTreeNode(
        node: KupButtonListNode,
        index: number
    ): GenericObject {
        const data: GenericObject = node.data != null ? { ...node.data } : {};

        if (this.customStyle != null && this.customStyle.trim() != '') {
            data.customStyle = this.customStyle;
        }
        if (this.disabled == true || node.disabled == true) {
            data.disabled = true;
        }
        if (this.styling != null && this.styling.trim() != '') {
            data.styling = this.styling;
        }
        if (data.icon == null) {
            data.icon = node.icon;
        }
        if (data.label == null) {
            data.label = node.value;
        }
        data.fullHeight = this.rootElement.classList.contains('kup-full-height')
            ? true
            : false;
        data.fullWidth = this.rootElement.classList.contains('kup-full-width')
            ? true
            : false;
        data.id = index.toString();
        data.large = this.rootElement.classList.contains('kup-large')
            ? true
            : false;
        data.pulsating = this.rootElement.classList.contains('kup-pulsating')
            ? true
            : false;
        data.shaped = this.rootElement.classList.contains('kup-shaped')
            ? true
            : false;
        data.slim = this.rootElement.classList.contains('kup-slim')
            ? true
            : false;
        if (!data.wrapperClass) {
            data.wrapperClass = '';
        }
        if (this.selected == data.id) {
            data.wrapperClass = data.wrapperClass + ' selected';
        }

        return data;
    }

    private getKupListDataForChildren(
        children: KupButtonListNode[]
    ): KupListNode[] {
        const ris: KupListNode[] = [];

        for (let i = 0; i < children.length; i++) {
            const tn: KupButtonListNode = children[i];
            ris.push({ icon: tn.icon, id: i.toString(), value: tn.value });
        }
        return ris;
    }

    private getObjForEvent(index: string, subIndex: string): KupObj {
        let indexInt: number = Number(index);
        let subIndexInt: number = -1;
        if (subIndex != null && subIndex.trim() != '') {
            subIndexInt = Number(subIndex);
        }

        let tn: KupButtonListNode = this.data[indexInt];
        if (subIndexInt != -1) {
            return tn.children[subIndexInt].obj;
        }
        return tn.obj;
    }

    private renderButtons(): VNode[] {
        if (this.data == null || this.data.length < 1) {
            return null;
        }
        const columns: VNode[] = [];
        for (let i = 0; i < this.data.length; i++) {
            const node: KupButtonListNode = this.data[i];
            let b: VNode = null;
            if (node.children != null && node.children.length > 0) {
                b = this.renderDropdownButton(node, i);
            } else {
                b = this.renderButton(node, i);
            }
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
        const buttons: VNode[] = this.renderButtons();
        let nrOfColumns: number = this.columns;
        if (this.data != null && this.data.length > 0 && nrOfColumns <= 0) {
            nrOfColumns = this.data.length;
        }

        const hostStyle: GenericObject = {
            '--kup_buttonlist_grid_columns': `repeat(${nrOfColumns}, auto)`,
        };

        const classObj: Record<string, boolean> = {
            'button-list--container': true,
            'show-selection':
                this.showSelection && this.selected ? true : false,
        };

        return (
            <Host style={hostStyle}>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <div class={classObj}>{buttons}</div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.theme.unregister(this);
    }
}
