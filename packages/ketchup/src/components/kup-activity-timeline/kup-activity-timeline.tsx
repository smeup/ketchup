import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    Fragment,
    h,
    Host,
    Method,
    Prop,
    State,
    VNode,
} from '@stencil/core';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { KupDataDataset } from '../../managers/kup-data/kup-data-declarations';
import { componentWrapperId } from '../../variables/GenericVariables';
import {
    GenericObject,
    KupComponent,
    KupEventPayload,
} from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import {
    KupActivityTimelineDatapoint,
    KupActivityTimelineActivity,
    KupActivityTimelineAction,
    KupActivityTimelineData,
    KupActivityTimelineProps,
    KupActivityTimelineClickEventPayload,
} from './kup-activity-timeline-declarations';
import { FImage } from '../../f-components/f-image/f-image';
import { getCellValueForDisplay } from '../../utils/cell-utils';
import { SortObject } from '../kup-data-table/kup-data-table-declarations';
import { sortRows } from '../kup-data-table/kup-data-table-helper';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';

@Component({
    tag: 'kup-activity-timeline',
    styleUrl: 'kup-activity-timeline.scss',
    shadow: true,
})
export class KupActivityTimeline {
    /**
     * References the root HTML element of the component (<kup-activity-timeline>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    @State()
    timeline: KupActivityTimelineDatapoint[] = [];

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     *  Dataset containing the activities list.
     * @default null
     */
    @Prop() data: KupDataDataset;

    /**
     *  Columns containing dates.
     * @default null
     */
    @Prop() dateColumn: string;

    /**
     * Defines the current sorting options.
     */
    @Prop() sort: Array<SortObject> = [];

    /**
     *  Columns containing times.
     * @default null
     */
    @Prop() timeColumn: string;
    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kupManager: KupManager = kupManagerInstance();

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Generic click event on activity.
     */
    @Event({
        eventName: 'kup-activitytimeline-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupActivityTimelineClickEventPayload>;

    /**
     * Generic right click event on activity.
     */
    @Event({
        eventName: 'kup-activitytimeline-contextmenu',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupContextMenu: EventEmitter<KupActivityTimelineClickEventPayload>;

    /**
     * Triggered when the component is ready.
     */
    @Event({
        eventName: 'kup-activitytimeline-ready',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupReady: EventEmitter<KupEventPayload>;

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
        return getProps(this, KupActivityTimelineProps, descriptions);
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
        setProps(this, KupActivityTimelineProps, props);
    }

    /*-------------------------------------------------*/
    /*          P r i v a t e   M e t h o d s          */
    /*-------------------------------------------------*/

    #toTimeline(data: KupDataDataset): KupActivityTimelineDatapoint[] {
        const { columns, rows } = data;
        const dateColumn = columns.find((col) => col.name === this.dateColumn);
        const timeColumn = columns.find((col) => col.name === this.timeColumn);

        if (!dateColumn || !timeColumn) return [];

        const activitiesByDate = sortRows(rows, this.sort).reduce(
            (acc, row) => {
                const date = getCellValueForDisplay(
                    dateColumn,
                    row.cells[dateColumn.name]
                );
                const time = getCellValueForDisplay(
                    timeColumn,
                    row.cells[timeColumn.name]
                );
                const key = `${date} ${time}`;

                acc[key] = acc[key] || [];
                acc[key].push({
                    columns: columns
                        .filter((col) => col.visible !== false)
                        .map((col) => ({
                            title: col.title,
                            value: getCellValueForDisplay(
                                col,
                                row.cells[col.name]
                            ),
                            columnName: col.name,
                            rowId: row.id,
                        })),
                } as KupActivityTimelineActivity);

                return acc;
            },
            {}
        );

        return Object.entries(activitiesByDate).map(([date, activities]) => ({
            date,
            activities,
        }));
    }

    getActivity(activityData: KupActivityTimelineData) {
        return {
            column: this.data.columns.find(
                (column) => column.name === activityData.columnName
            ),
            row: this.data.rows.find((row) => row.id === activityData.rowId),
        };
    }

    onActivityClick(event: UIEvent, activityData: KupActivityTimelineData) {
        this.kupClick.emit({
            comp: this,
            id: this.rootElement.id,
            details: {
                ...this.getActivity(activityData),
                originalEvent: event,
                type: KupActivityTimelineAction.onClick,
            },
        });
    }

    onActivityContextMenu(
        event: UIEvent,
        activityData: KupActivityTimelineData
    ) {
        this.kupContextMenu.emit({
            comp: this,
            id: this.rootElement.id,
            details: {
                ...this.getActivity(activityData),
                originalEvent: event,
                type: KupActivityTimelineAction.onRightClick,
            },
        });
    }

    activityItem(activity: KupActivityTimelineActivity) {
        return (
            <div class="atm-row">
                {activity.columns.map((column: KupActivityTimelineData) => (
                    <div class="atm-col">
                        <div class="atm-inner-col">
                            <h3>{column.title}:</h3>
                        </div>
                        <div
                            class="atm-inner-col"
                            onClick={(e) => {
                                e.stopPropagation();
                                this.onActivityClick(e, column);
                            }}
                            onContextMenu={(e) => {
                                this.onActivityContextMenu(e, column);
                            }}
                        >
                            <p>{column.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    calendarIcon(): VNode {
        return (
            <FImage
                color="white"
                resource={'calendar'}
                wrapperClass="activity-timeline-item__icon"
                sizeX="20px"
                sizeY="32px"
            />
        );
    }
    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.kupReady.emit({
            comp: this,
            id: this.rootElement.id,
        });
        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        const emptyData = Boolean(!this.data?.columns || !this.data?.rows);
        if (emptyData) {
            this.#kupManager.debug.logMessage(
                this,
                'Empty data.',
                KupDebugCategory.WARNING
            );
            return;
        }

        this.timeline = this.#toTimeline(this.data);
        return (
            <Host>
                <style>
                    {this.#kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    <div
                        key={this.rootElement.id}
                        class="kup-activity-timeline"
                        onContextMenu={(e) => {
                            e.preventDefault();
                        }}
                    >
                        {this.timeline.map(
                            (timeline: KupActivityTimelineDatapoint) => (
                                <div class="atm-container" key={timeline.date}>
                                    <div class="atm-event">
                                        <div class="atm-icon-wrapper">
                                            <div class="atm-thumb">
                                                {this.calendarIcon()}
                                            </div>
                                        </div>
                                        <div class="atm-content">
                                            <div>
                                                <h3>
                                                    <span>{timeline.date}</span>
                                                </h3>
                                            </div>
                                            {timeline.activities.map(
                                                (
                                                    activity: KupActivityTimelineActivity
                                                ) => (
                                                    <Fragment>
                                                        {this.activityItem(
                                                            activity
                                                        )}
                                                    </Fragment>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.theme.unregister(this);
    }
}
