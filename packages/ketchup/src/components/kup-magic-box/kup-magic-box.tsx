import {
    Component,
    Element,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
    State,
    VNode,
} from '@stencil/core';
import type { GenericObject, KupComponent } from '../../types/GenericTypes';
import { kupManagerInstance } from '../../managers/kup-manager/kup-manager';
import { KupListNode } from '../kup-list/kup-list-declarations';
import { FButtonStyling } from '../../f-components/f-button/f-button-declarations';
import { FImage } from '../../f-components/f-image/f-image';
import {
    KupMagicBoxProps,
    KupMagicBoxDisplay,
} from './kup-magic-box-declarations';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import { KupLanguageGeneric } from '../../managers/kup-language/kup-language-declarations';
import { KupThemeColorValues } from '../../managers/kup-theme/kup-theme-declarations';
import { getProps, setProps } from '../../utils/utils';
import { KupComboboxEventPayload } from '../kup-combobox/kup-combobox-declarations';
import { componentWrapperId } from '../../variables/GenericVariables';
import {
    kupDraggableColumnAttr,
    kupDraggableRowAttr,
    kupDropEvent,
    KupDropEventTypes,
} from '../../managers/kup-interact/kup-interact-declarations';
import {
    KupDataColumn,
    KupDataDataset,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';
import { KupTextFieldEventPayload } from '../kup-text-field/kup-text-field-declarations';

@Component({
    tag: 'kup-magic-box',
    styleUrl: 'kup-magic-box.scss',
    shadow: true,
})
export class KupMagicBox {
    /**
     * References the root HTML element of the component (<kup-magic-box>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * Data will be displayed using this component.
     * @default KupMagicBoxDisplay.DATATABLE
     */
    @State() display: KupMagicBoxDisplay = KupMagicBoxDisplay.DATATABLE;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Sets the data that will be used to display different components.
     * @default null
     */
    @Prop({ mutable: true }) data: KupDataDataset = null;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    private dragHandler: HTMLElement = null;
    private kupManager = kupManagerInstance();
    private textArea: HTMLKupTextFieldElement = null;
    private wrapperRef: HTMLElement = null;

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
        return getProps(this, KupMagicBoxProps, descriptions);
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
        setProps(this, KupMagicBoxProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    /**
     * Sets the props of the combobox used to switch view.
     * @returns {GenericObject} Combobox props.
     */
    private comboboxProps(): GenericObject {
        const listData: KupListNode[] = [];
        for (const key in KupMagicBoxDisplay) {
            if (Object.prototype.hasOwnProperty.call(KupMagicBoxDisplay, key)) {
                listData.push({
                    id: KupMagicBoxDisplay[key],
                    selected: false,
                    value: KupMagicBoxDisplay[key],
                });
            }
        }
        return {
            data: {
                'kup-list': {
                    data: listData,
                    id: 'kup-debug-theme-changer-list',
                },
                'kup-text-field': {
                    emitSubmitEventOnEnter: false,
                    inputType: 'text',
                    label: this.kupManager.language.translate(
                        KupLanguageGeneric.VIEW_AS
                    ),
                },
            },
            id: 'comp-switcher',
            initialValue: this.display,
            isSelect: true,
            ['onKup-combobox-itemclick']: (
                e: CustomEvent<KupComboboxEventPayload>
            ) => {
                this.display = e.detail.value;
            },
        };
    }
    /**
     * Sets the content window.
     * @returns {VNode[]} Virtual nodes of the content window.
     */
    private setContent(): VNode[] {
        const hasColumns: boolean = !!(
            this.data &&
            this.data.columns &&
            this.data.columns.length > 0
        );
        const content: VNode[] = [];
        const props: GenericObject = {};
        if (this.display === KupMagicBoxDisplay.JSON) {
            props.initialValue = this.data
                ? JSON.stringify(this.data, null, 2)
                : '';
            props.textArea = true;
            content.push(
                <kup-text-field
                    class="kup-full-width kup-full-height"
                    {...props}
                    ref={(el) => (this.textArea = el)}
                    onkup-textfield-input={(
                        e: CustomEvent<KupTextFieldEventPayload>
                    ) => {
                        try {
                            this.data = JSON.parse(e.detail.value);
                        } catch (error) {
                            this.data = {
                                columns: [{ name: 'ERROR', title: 'Error' }],
                                rows: [
                                    {
                                        cells: {
                                            ERROR: {
                                                value: 'Invalid JSON:' + error,
                                            },
                                        },
                                    },
                                ],
                            };
                        }
                    }}
                ></kup-text-field>
            );
        } else if (!hasColumns) {
            content.push(
                <div class="empty">
                    <FImage sizeY="100px" resource="move_to_inbox" />
                    <div class="empty-text">
                        {this.kupManager.language.translate(
                            KupLanguageGeneric.DROP_YOUR_DATA
                        )}
                    </div>
                </div>
            );
        } else {
            switch (this.display) {
                case KupMagicBoxDisplay.BOX:
                    props.data = this.data;
                    content.push(<kup-box {...props}></kup-box>);
                    break;
                case KupMagicBoxDisplay.BUTTON_LIST:
                    props.data = this.data;
                    content.push(
                        <kup-button-list {...props}></kup-button-list>
                    );
                    break;
                case KupMagicBoxDisplay.CHIP:
                    props.data = this.data;
                    content.push(<kup-chip {...props}></kup-chip>);
                    break;
                case KupMagicBoxDisplay.CHART:
                case KupMagicBoxDisplay.ECHART:
                    props.data = this.data;
                    props['series'] = [];
                    props['axis'] = null;
                    for (
                        let index = 0;
                        index < this.data.columns.length;
                        index++
                    ) {
                        const col: KupDataColumn = this.data.columns[index];
                        if (
                            (col.obj &&
                                this.kupManager.objects.isNumber(col.obj)) ||
                            props['axis'] !== null
                        ) {
                            if (this.display === KupMagicBoxDisplay.CHART) {
                                props['series'].push({
                                    code: col.name,
                                    decode: col.title,
                                });
                            } else {
                                props['series'].push(col.name);
                            }
                        } else {
                            props['axis'] = col.name;
                        }
                    }
                    if (props['series'].length === 0) {
                        this.kupManager.debug.logMessage(
                            this,
                            'Not enough numerical columns to display a chart!',
                            KupDebugCategory.WARNING
                        );
                    }
                    if (!props['axis']) {
                        this.kupManager.debug.logMessage(
                            this,
                            'No axis for the chart!',
                            KupDebugCategory.WARNING
                        );
                    }
                    if (this.display === KupMagicBoxDisplay.CHART) {
                        content.push(<kup-chart {...props}></kup-chart>);
                    } else {
                        content.push(<kup-echart {...props}></kup-echart>);
                    }
                    break;
                case KupMagicBoxDisplay.DATATABLE:
                    props.data = this.data;
                    props['autoFillMissingCells'] = true;
                    content.push(<kup-data-table {...props}></kup-data-table>);
                    break;
                case KupMagicBoxDisplay.TREE:
                    props.data = this.data;
                    content.push(
                        <kup-tree class="kup-full-width" {...props}></kup-tree>
                    );
                    break;
                default:
                    this.kupManager.debug.logMessage(
                        this,
                        'Display mode not supported (' + this.display + ')!',
                        KupDebugCategory.ERROR
                    );
                    return;
            }
        }
        return content;
    }
    /**
     * When a kup-drop event is received, the data will be updated.
     * @param {CustomEvent} e - kup-drop event.
     */
    private updateData(e: CustomEvent): void {
        {
            const data: KupDataDataset = { ...this.data };
            const column: KupDataColumn =
                e.detail.sourceElement && e.detail.sourceElement.column
                    ? e.detail.sourceElement.column
                    : null;
            const row: KupDataRow =
                e.detail.sourceElement && e.detail.sourceElement.row
                    ? e.detail.sourceElement.row
                    : null;
            if (column && column.name) {
                if (!data.columns) {
                    data.columns = [column];
                } else {
                    const columnExists: KupDataColumn = this.data.columns.find(
                        (x) => x.name === column.name
                    );
                    if (!columnExists) {
                        data.columns.push(column);
                    }
                }
            } else {
                this.kupManager.debug.logMessage(
                    this,
                    'Invalid column received.',
                    KupDebugCategory.WARNING
                );
            }
            if (row) {
                if (!data.rows) {
                    data.rows = [row];
                } else {
                    data.rows.push(row);
                }
            }
            this.data = data;
            if (this.data && this.textArea) {
                try {
                    this.textArea.setValue(JSON.stringify(this.data, null, 2));
                } catch (error) {
                    this.textArea.setValue('Invalid JSON:' + error);
                }
            }
        }
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.language.register(this);
        this.kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.rootElement.addEventListener(kupDropEvent, (e: CustomEvent) =>
            this.updateData(e)
        );
        this.dragHandler =
            this.rootElement.shadowRoot.querySelector('#drag-handle');
        this.kupManager.interact.dialogify(this.rootElement, this.dragHandler);
        this.kupManager.interact.dropzone(
            this.wrapperRef,
            {
                accept: `[${kupDraggableColumnAttr}],[${kupDraggableRowAttr}]`,
            },
            {
                dispatcher: this.rootElement,
                type: KupDropEventTypes.MAGICBOX,
            }
        );
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.kupManager.debug.logRender(this, true);
    }

    render() {
        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <div class="magic-box-wrapper">
                        <div class="actions" id="drag-handle">
                            <kup-combobox {...this.comboboxProps()} />
                            <kup-button
                                styling={FButtonStyling.FLAT}
                                icon="delete"
                                label="Reset"
                                onkup-button-click={() => {
                                    this.data = null;
                                }}
                            ></kup-button>
                            <kup-button
                                id="close-dialog"
                                customStyle={`:host{${KupThemeColorValues.PRIMARY}: var(${KupThemeColorValues.TITLE});}`}
                                icon="clear"
                                onkup-button-click={() => {
                                    this.kupManager.hideMagicBox();
                                }}
                            ></kup-button>
                        </div>
                        <div
                            class="content"
                            ref={(el) => (this.wrapperRef = el)}
                        >
                            {this.setContent()}
                        </div>
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.kupManager.interact.unregister([
            this.rootElement,
            this.wrapperRef,
        ]);
        this.kupManager.language.unregister(this);
        this.kupManager.theme.unregister(this);
    }
}
