import {
    Component,
    Element,
    Host,
    Prop,
    h,
    VNode,
    State,
    Method,
} from '@stencil/core';
import type { GenericObject } from '../../types/GenericTypes';
import type { KupChart } from '../kup-chart/kup-chart';
import type { KupDataTable } from '../kup-data-table/kup-data-table';
import { DropHandlers, setKetchupDroppable } from '../../utils/drag-and-drop';
import {
    KupManager,
    kupManagerInstance,
} from '../../utils/kup-manager/kup-manager';
import {
    Column,
    KupDataTableRowDragType,
    Row,
} from '../kup-data-table/kup-data-table-declarations';
import { FButtonStyling } from '../../f-components/f-button/f-button-declarations';
import { isNumber } from '../../utils/object-utils';
import { FImage } from '../../f-components/f-image/f-image';

@Component({
    tag: 'kup-magic-box',
    styleUrl: 'kup-magic-box.scss',
    shadow: true,
})
export class KupLazy {
    @Element() rootElement: HTMLElement;

    @State() display: string = null;
    /**
     * The component-specific CSS set by the current Ketch.UP theme.
     * @default ""
     */
    @State() customStyleTheme: string = '';

    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * Sets the data of the component to be lazy loaded.
     */
    @Prop() data: { columns: Column[]; rows: Row[] } = null;

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();

    /**
     * This method is invoked by the theme manager.
     * Whenever the current Ketch.UP theme changes, every component must be re-rendered with the new component-specific customStyle.
     * @param customStyleTheme - Contains current theme's component-specific CSS.
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     * @see https://ketchup.smeup.com/ketchup-showcase/#/theming
     */
    @Method()
    async themeChangeCallback(customStyleTheme: string): Promise<void> {
        this.customStyleTheme = customStyleTheme;
    }

    updateData(e: CustomEvent) {
        {
            console.log('Updating...');
            let data: { columns: Column[]; rows: Row[] } = { ...this.data };
            let column: Column =
                e.detail.sourceElement && e.detail.sourceElement.column
                    ? e.detail.sourceElement.column
                    : null;
            let row: Row =
                e.detail.sourceElement && e.detail.sourceElement.row
                    ? e.detail.sourceElement.row
                    : null;
            if (column && column.name) {
                if (!data.columns) {
                    data.columns = [column];
                } else {
                    const columnExists: Column = this.data.columns.find(
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
                    'warning'
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
        }
    }

    //---- Lifecycle hooks ----

    componentWillLoad() {
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.rootElement.addEventListener('kup-drop', (e: CustomEvent) =>
            this.updateData(e)
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
        const hasColumns: boolean = !!(
            this.data &&
            this.data.columns &&
            this.data.columns.length > 0
        );
        const hasRows: boolean = !!(
            this.data &&
            this.data.rows &&
            this.data.rows.length > 0
        );
        const handlers: DropHandlers = {
            // Had to define leave and over, otherwise drop wasn't working.
            onDragLeave: () => {},
            onDragOver: () => {
                return true;
            },
            onDrop: () => {
                return KupDataTableRowDragType;
            },
        };

        let content: VNode[] = [];
        if (!hasColumns && !hasRows) {
            content.push(
                <div class="empty">
                    <FImage sizeY="100px" resource="move_to_inbox" />
                    <div class="empty-text">Drop your data here.</div>
                </div>
            );
        } else if (!this.display) {
            if (hasColumns) {
                for (let index = 0; index < this.data.columns.length; index++) {
                    content.push(
                        <div class="column">
                            {JSON.stringify(this.data.columns[index])}
                        </div>
                    );
                }
            }
            if (hasRows) {
                for (let index = 0; index < this.data.rows.length; index++) {
                    content.push(
                        <div class="row">
                            {JSON.stringify(this.data.rows[index])}
                        </div>
                    );
                }
            }
        } else {
            let props: GenericObject = {};
            switch (this.display) {
                case 'box':
                    props['data'] = this.data;
                    content.push(<kup-box {...props}></kup-box>);
                    break;
                case 'chart':
                case 'echart':
                    props['data'] = this.data;
                    props['series'] = [];
                    for (
                        let index = 0;
                        index < this.data.columns.length;
                        index++
                    ) {
                        const col: Column = this.data.columns[index];
                        if (col.obj && isNumber(col.obj)) {
                            props['series'].push({
                                code: col.name,
                                decode: col.title,
                            });
                        } else {
                            props['axis'] = col.name;
                        }
                    }
                    if (props['series'].length === 0) {
                        this.kupManager.debug.logMessage(
                            this,
                            'Not enough numerical columns to display a chart!',
                            'warning'
                        );
                    }
                    if (!props['axis']) {
                        this.kupManager.debug.logMessage(
                            this,
                            'No axis for the chart!',
                            'warning'
                        );
                    }
                    if (this.display === 'chart') {
                        content.push(<kup-chart {...props}></kup-chart>);
                    } else {
                        //Echart series broken?
                        props['series'] = null;
                        content.push(<kup-echart {...props}></kup-echart>);
                    }
                    break;
                case 'datatable':
                    props['data'] = this.data;
                    content.push(<kup-data-table {...props}></kup-data-table>);
                    break;
                default:
                    this.kupManager.debug.logMessage(
                        this,
                        'Display mode not supported (' + this.display + ')!',
                        'warning'
                    );
                    return;
            }
        }

        return (
            <Host>
                <style>{this.kupManager.theme.setCustomStyle(this)}</style>
                <div id="kup-component">
                    <div
                        class="magic-box-wrapper"
                        {...setKetchupDroppable(
                            handlers,
                            [KupDataTableRowDragType],
                            this.rootElement,
                            {
                                row: null,
                                cell: null,
                                column: null,
                                id: this.rootElement.id,
                            }
                        )}
                    >
                        <div class="actions">
                            <kup-button
                                label="Box"
                                onKupButtonClick={() => (this.display = 'box')}
                            ></kup-button>
                            <kup-button
                                label="Chart"
                                onKupButtonClick={() =>
                                    (this.display = 'chart')
                                }
                            ></kup-button>
                            <kup-button
                                label="EChart"
                                onKupButtonClick={() =>
                                    (this.display = 'echart')
                                }
                            ></kup-button>
                            <kup-button
                                label="Table"
                                onKupButtonClick={() =>
                                    (this.display = 'datatable')
                                }
                            ></kup-button>
                            <kup-button
                                styling={FButtonStyling.FLAT}
                                label="Data"
                                onKupButtonClick={() => (this.display = null)}
                            ></kup-button>
                            <kup-button
                                styling={FButtonStyling.FLAT}
                                label="Clear"
                                onKupButtonClick={() => {
                                    this.data = null;
                                    this.display = null;
                                }}
                            ></kup-button>
                        </div>
                        <div class="content">{content}</div>
                    </div>
                </div>
            </Host>
        );
    }

    componentDidUnload() {
        this.kupManager.theme.unregister(this);
    }
}
