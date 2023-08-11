import {
    Component,
    Prop,
    Event,
    h,
    EventEmitter,
    Element,
    VNode,
    Host,
} from '@stencil/core';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import {
    KupDashListColumn,
    KupDashListData,
    KupDashListClickEventPayload,
} from './kup-dash-list-declarations';
import { KupCardData, KupCardFamily } from '../kup-card/kup-card-declarations';
import { KupComponent } from '../../types/GenericTypes';
import { componentWrapperId } from '../../variables/GenericVariables';

@Component({
    tag: 'kup-dash-list',
    styleUrl: 'kup-dash-list.scss',
    shadow: true,
})
export class KupDashList {
    /**
     * References the root HTML element of the component (<kup-dash-list>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Sets the number of columns.
     * @default 1
     */
    @Prop()
    columnsNumber = 1;
    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Sets the number of columns.
     * @default 1
     */
    @Prop()
    data: KupDashListData = null;
    /**
     * Sets whether the component occupies all available width.
     * @default true
     */
    @Prop()
    fullWidth = true;
    /**
     * Sets whether the dash elements are placed horizontally or not.
     * @default false
     */
    @Prop()
    horizontal = false;
    /**
     * Sets whether a single dash is clickable or not.
     * @default false
     */
    @Prop()
    isClickable = false;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kupManager: KupManager = kupManagerInstance();

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-dashlist-click',
        composed: true,
        cancelable: true,
        bubbles: true,
    })
    kupDashListClickEvent: EventEmitter<KupDashListClickEventPayload>;

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.#kupManager.debug.logLoad(this, true);
    }

    componentDidRender() {
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        if (!this.data || !this.data.columns || !this.data.columns.length) {
            return;
        }
        const content: VNode[] = [];

        let decvalueCol: KupDashListColumn,
            descrCol: KupDashListColumn,
            iconCol: KupDashListColumn,
            groupCol: KupDashListColumn,
            iconcolorCol: KupDashListColumn,
            intvalueCol: KupDashListColumn,
            layoutCol: KupDashListColumn,
            measureCol: KupDashListColumn,
            textcolorCol: KupDashListColumn,
            valueCol: KupDashListColumn,
            valuecolorCol: KupDashListColumn;

        for (let index = 0; index < this.data.columns.length; index++) {
            const column = this.data.columns[index];
            if (column.dashListOption) {
                switch (column.dashListOption) {
                    case 'decvalue':
                        decvalueCol = column;
                        break;
                    case 'descr':
                        descrCol = column;
                        break;
                    case 'group':
                        groupCol = column;
                        break;
                    case 'icon':
                        iconCol = column;
                        break;
                    case 'iconcolor':
                        iconcolorCol = column;
                        break;
                    case 'intvalue':
                        intvalueCol = column;
                        break;
                    case 'layout':
                        layoutCol = column;
                        break;
                    case 'measure':
                        measureCol = column;
                        break;
                    case 'textcolor':
                        textcolorCol = column;
                        break;
                    case 'value':
                        valueCol = column;
                        break;
                    case 'valuecolor':
                        valuecolorCol = column;
                        break;
                }
            }
        }

        for (let index = 0; index < this.data.rows.length; index++) {
            const row = this.data.rows[index];
            const data: KupCardData = {
                color: [],
                image: [],
                text: [],
            };
            const layout =
                layoutCol && row.cells[layoutCol.name].value
                    ? parseInt(row.cells[layoutCol.name].value)
                    : 1;
            const card: VNode = (
                <kup-card
                    data={data}
                    layoutFamily={KupCardFamily.SCALABLE}
                    layoutNumber={layout}
                    key={index}
                    onKup-card-click={() => {
                        if (this.isClickable) {
                            this.kupDashListClickEvent.emit({
                                comp: this,
                                id: this.rootElement.id,
                                index,
                                row: row,
                            });
                        }
                    }}
                    slot={index.toString()}
                ></kup-card>
            );
            const loadData = (
                col: KupDashListColumn,
                prop: string,
                index: number
            ) => {
                if (col) {
                    const value = row.cells[col.name]?.value;
                    if (value) {
                        data[prop][index] =
                            prop === 'color'
                                ? this.#kupManager.theme.colorCheck(value)
                                      .hexColor
                                : value;
                    }
                }
            };
            switch (layout) {
                case 1:
                    loadData(textcolorCol, 'color', 0);
                    loadData(valuecolorCol, 'color', 1);
                    loadData(descrCol, 'text', 0);
                    loadData(valueCol, 'text', 1);
                    break;
                case 2:
                    loadData(iconcolorCol, 'color', 0);
                    loadData(valuecolorCol, 'color', 1);
                    loadData(iconCol, 'image', 0);
                    loadData(intvalueCol, 'text', 0);
                    loadData(measureCol, 'text', 1);
                    loadData(decvalueCol, 'text', 2);
                    break;
                case 3:
                    loadData(valuecolorCol, 'color', 0);
                    loadData(textcolorCol, 'color', 1);
                    loadData(valueCol, 'text', 0);
                    loadData(descrCol, 'text', 1);
                    break;
                case 4:
                    loadData(iconcolorCol, 'color', 0);
                    loadData(valuecolorCol, 'color', 1);
                    loadData(textcolorCol, 'color', 2);
                    loadData(iconCol, 'image', 0);
                    loadData(intvalueCol, 'text', 0);
                    loadData(measureCol, 'text', 1);
                    loadData(decvalueCol, 'text', 2);
                    loadData(descrCol, 'text', 3);
                    break;
                case 5:
                    loadData(iconcolorCol, 'color', 0);
                    loadData(textcolorCol, 'color', 1);
                    loadData(valuecolorCol, 'color', 2);
                    loadData(iconCol, 'image', 0);
                    loadData(descrCol, 'text', 0);
                    loadData(valueCol, 'text', 1);
                    break;
                case 6:
                    loadData(iconcolorCol, 'color', 0);
                    loadData(valuecolorCol, 'color', 1);
                    loadData(textcolorCol, 'color', 2);
                    loadData(iconCol, 'image', 0);
                    loadData(valueCol, 'text', 0);
                    loadData(descrCol, 'text', 1);
                    break;
                case 7:
                    loadData(iconcolorCol, 'color', 0);
                    loadData(valuecolorCol, 'color', 1);
                    loadData(textcolorCol, 'color', 2);
                    loadData(iconCol, 'image', 0);
                    loadData(valueCol, 'text', 0);
                    loadData(descrCol, 'text', 1);
                    break;
                case 8:
                    loadData(iconcolorCol, 'color', 0);
                    loadData(valuecolorCol, 'color', 1);
                    loadData(textcolorCol, 'color', 2);
                    loadData(iconCol, 'image', 0);
                    loadData(valueCol, 'text', 0);
                    loadData(descrCol, 'text', 1);
                    break;
            }
            content.push(card);
        }

        return (
            <Host>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <kup-grid
                        class={`${this.fullWidth ? 'kup-full-width' : ''}`}
                        columns={this.columnsNumber}
                        singleLine={this.horizontal}
                    >
                        {content}
                    </kup-grid>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.theme.unregister(this);
    }
}
