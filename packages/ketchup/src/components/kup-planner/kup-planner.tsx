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
    KupPlannerGanttTask,
    KupPlannerPhase,
    KupPlannerProps,
    KupPlannerTaskAction,
} from './kup-planner-declarations';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { KupDataDataset } from '../../managers/kup-data/kup-data-declarations';
import {
    GanttRow,
    GanttTask,
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
    data: KupDataDataset;

    @Prop()
    dataRaw: any;

    @Prop()
    phaseColorCol: string;

    @Prop()
    phaseColumns: string[];

    @Prop()
    phaseColParDep: string;

    @Prop()
    phaseDates: string[];

    @Prop()
    phaseIdCol: string;

    @Prop()
    phaseNameCol: string;

    @Prop()
    phasePrevDates: string[];

    @Prop()
    taskColumns: string[];

    @Prop()
    taskDates: string[];

    @Prop()
    taskIdCol: string;

    @Prop()
    taskNameCol: string;

    @Prop()
    taskPrevDates: string[];

    @Prop()
    titleMess: string;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kupManager: KupManager = kupManagerInstance();
    #rootPlanner;

    #renderReactPlannerElement() {
        this.#rootPlanner?.unmount();

        const componentWrapperElement =
            this.rootElement.shadowRoot.getElementById(componentWrapperId);

        if (componentWrapperElement) {
            this.#rootPlanner = createRoot(componentWrapperElement);
            this.#rootPlanner.render(
                React.createElement(Planner, this.plannerProps)
            );
        }
    }

    #toTasks(data: KupDataDataset): GanttTask[] {
        let tasks: GanttTask[] = data.rows?.map((value) => {
            let task: KupPlannerGanttTask = {
                taskRowId: value.id,
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

    #getTask(taskId: string): KupPlannerGanttTask {
        return (this.plannerProps.items as KupPlannerGanttTask[]).find(
            (task) => task.id == taskId
        );
    }

    #removePhases(taskId: string) {
        const task = this.#getTask(taskId);
        if (task) task.phases = undefined;
        this.plannerProps = { ...this.plannerProps };
    }

    /**
     *
     * @param nativeEvent
     * @returns true if caller must call onKupClick
     */
    #handleOnClickOnTask(nativeEvent: GanttRow): boolean {
        const task = this.#getTask(nativeEvent.id);
        if (task?.phases) {
            this.#removePhases(task.id);
        }
        return true;
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

    onKupClick(event: GanttRow, taskAction?: KupPlannerTaskAction) {
        this.kupClick.emit({
            comp: this,
            id: this.rootElement.id,
            value: event,
            taskAction: taskAction,
        });
    }

    @Event({
        eventName: 'kup-planner-date-change',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupDateChange: EventEmitter<KupPlannerEventPayload>;

    onKupDateChange(event: GanttRow) {
        this.kupDateChange.emit({
            comp: this,
            id: this.rootElement.id,
            value: event,
        });
    }

    @Event({
        eventName: 'kup-planner-ready',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupReady: EventEmitter<KupPlannerEventPayload>;

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
     * @param taskId
     * @param data - Matrix which contains project phases
     */
    @Method()
    async addPhases(taskId: string, data: KupDataDataset) {
        const task = this.#getTask(taskId);
        if (task) {
            task.phases = data.rows?.map((row) => {
                let phase: KupPlannerPhase = {
                    id: row.cells[this.phaseIdCol].value,
                    phaseRowId: row.id,
                    taskRowId: task.taskRowId,
                    name: row.cells[this.phaseNameCol].value,
                    startDate: row.cells[this.phaseDates[0]].value,
                    endDate: row.cells[this.phaseDates[1]].value,
                    secondaryStartDate: row.cells[this.phasePrevDates[0]].value,
                    secondaryEndDate: row.cells[this.phasePrevDates[1]].value,
                    type: 'phase',
                    color: row.cells[this.phaseColorCol].value,
                    valuesToShow: this.phaseColumns.map(
                        (col) => row.cells[col].value
                    ),
                };
                return phase;
            });
        }

        this.plannerProps = { ...this.plannerProps };
    }

    handleOnClick(nativeEvent: GanttRow) {
        console.log('handleOnClick', nativeEvent);
        switch (nativeEvent.type) {
            case 'task':
                const taskAction = (nativeEvent as KupPlannerGanttTask).phases
                    ? KupPlannerTaskAction.onClosing
                    : KupPlannerTaskAction.onOpening;
                if (this.#handleOnClickOnTask(nativeEvent)) {
                    this.onKupClick(nativeEvent, taskAction);
                }
                break;
            case 'phase':
                if (this.#handleOnClickOnPhase()) {
                    this.onKupClick(nativeEvent);
                }
                break;
        }
    }

    handleOnDateChange(nativeEvent: GanttRow) {
        console.log('handleOnDateChange', nativeEvent);
        this.onKupDateChange(nativeEvent);
    }

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.plannerProps = {
            title: this.titleMess,
            items: this.#toTasks(this.data),
            onClick: (nativeEvent) => this.handleOnClick(nativeEvent),
            onDateChange: (nativeEvent) => this.handleOnDateChange(nativeEvent),
        };

        this.#renderReactPlannerElement();
        this.kupReady.emit({
            comp: this,
            id: this.rootElement.id,
            value: undefined,
        });
        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#renderReactPlannerElement();
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
