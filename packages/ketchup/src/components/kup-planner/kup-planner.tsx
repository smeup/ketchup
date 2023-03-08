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
} from '@stencil/core';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { GenericObject } from '../../types/GenericTypes';
import {
    KupPlannerEventPayload,
    KupPlannerProps,
} from './kup-planner-declarations';
import { getProps, setProps, stringToNumber } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { KupDataDataset } from '../../managers/kup-data/kup-data-declarations';
import { KupObjects } from '../../managers/kup-objects/kup-objects';
import {
    GanttRow,
    GanttTask,
    Phase,
    Planner,
    PlannerProps,
} from '@sme.up/gantt-component';

@Component({
    tag: 'kup-planner',
    styleUrl: 'kup-planner.scss',
    shadow: true,
})
export class KupPlanner {
    /**
     * References the root HTML element of the component (<kup-planner>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * The value of the component.
     * @default ""
     */

    @State()
    plannerProps: PlannerProps;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop()
    customStyle: string = '';

    @Prop()
    taskIdCol: string;

    @Prop()
    taskNameCol: string;

    @Prop()
    taskDates: string[];

    @Prop()
    taskPrevDates: string[];

    @Prop()
    taskColumns: string[];

    @Prop()
    phaseIdCol: string;

    @Prop()
    phaseNameCol: string;

    @Prop()
    phaseDates: string[];

    @Prop()
    phasePrevDates: string[];

    @Prop()
    phaseColumns: string[];

    @Prop()
    phaseColorCol: string;

    @Prop()
    phaseColParDep: string;

    @Prop()
    titleMess: string;

    @Prop()
    data: KupDataDataset;

    @Prop()
    dataRaw: any;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kupManager: KupManager = kupManagerInstance();
    #rootPlanner;

    #createReactPlannerElement() {
        this.#rootPlanner = createRoot(
            this.rootElement.shadowRoot.getElementById(componentWrapperId)
        );
        this.#rootPlanner.render(
            React.createElement(Planner, this.plannerProps)
        );
    }

    #toTasks(data: KupDataDataset): GanttTask[] {
        let tasks: GanttTask[] = data.rows?.map((value) => {
            let task: GanttTask = {
                id: value.cells[this.taskIdCol].value,
                name: value.cells[this.taskNameCol].value,
                startDate: value.cells[this.taskDates[0]].value,
                endDate: value.cells[this.taskDates[1]].value,
                secondaryStartDate: value.cells[this.taskPrevDates[0]].value,
                secondaryEndDate: value.cells[this.taskPrevDates[1]].value,
                type: 'task',
                valuesToShow: this.taskColumns.map(
                    (col) => value.cells[col].value
                ),
            };
            return task;
        });
        return tasks;
    }

    #getTask(taskName: string): GanttTask {
        return (this.plannerProps.items as GanttTask[]).find(
            (task) => task.name == taskName
        );
    }

    #removePhases(taskName: string) {
        const task = this.#getTask(taskName);

        if (task) task.phases = undefined;

        this.plannerProps = { ...this.plannerProps };
    }

    /**
     *
     * @param row
     * @returns true if caller must call onKupClick
     */
    #handleOnClickOnTask(row: GanttRow): boolean {
        const task = this.#getTask(row.name);
        if (task?.phases) {
            this.#removePhases(row.name);
            return false;
        } else {
            return true;
        }
    }

    /**
     *
     * @param row
     * @returns true if caller must call onKupClick
     */
    #handleOnClickOnPhase(): boolean {
        return true;
    }

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-planner-click',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupClick: EventEmitter<KupPlannerEventPayload>;

    onKupClick(row: GanttRow) {
        this.kupClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: row,
        });
    }

    @Event({
        eventName: 'kup-planner-date-change',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDateChange: EventEmitter<KupPlannerEventPayload>;

    onKupDateChange(row: GanttRow) {
        this.kupDateChange.emit({
            comp: this,
            id: this.rootElement.id,
            value: row,
        });
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
        return getProps(this, KupPlannerProps, descriptions);
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
        setProps(this, KupPlannerProps, props);
    }

    /**
     * Add a list of phases to the project
     * @param taskName
     * @param data - Matrix which contains project phases
     */
    @Method()
    async addPhases(taskName: string, data: KupDataDataset) {
        const task = this.#getTask(taskName);

        if (task) {
            task.phases = data.rows?.map((value) => {
                let phase: Phase = {
                    id: value.cells[this.phaseIdCol].value,
                    name: value.cells[this.phaseNameCol].value,
                    startDate: value.cells[this.phaseDates[0]].value,
                    endDate: value.cells[this.phaseDates[1]].value,
                    secondaryStartDate:
                        value.cells[this.phasePrevDates[0]].value,
                    secondaryEndDate: value.cells[this.phasePrevDates[1]].value,
                    type: 'phase',
                    color: value.cells[this.phaseColorCol].value,
                    valuesToShow: this.taskColumns.map(
                        (col) => value.cells[col].value
                    ),
                };
                return phase;
            });
        }

        this.plannerProps = { ...this.plannerProps };
    }

    handleOnClick(row: GanttRow) {
        console.log('handleOnClick', row);
        switch (row.type) {
            case 'task':
                if (this.#handleOnClickOnTask(row)) {
                    this.onKupClick(row);
                }
                break;
            case 'phase':
                if (this.#handleOnClickOnPhase()) {
                    this.onKupClick(row);
                }
                break;
        }
    }

    handleOnDateChange(row: GanttRow) {
        console.log('handleOnDateChange', row);
        this.onKupDateChange(row);
    }

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.plannerProps = {
            title: this.titleMess,
            items: this.#toTasks(this.data),
            onClick: (row) => this.handleOnClick(row),
            onDateChange: (row) => this.handleOnDateChange(row),
        };

        this.#createReactPlannerElement();
        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#createReactPlannerElement();
    }

    componentDidRender() {
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        return (
            <Host>
                <div id={componentWrapperId}></div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.theme.unregister(this);
    }
}
