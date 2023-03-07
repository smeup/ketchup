import {
    Component,
    Element,
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
import { KupPlannerProps } from './kup-planner-declarations';
import { getProps, setProps, stringToNumber } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { KupDataDataset } from '../../managers/kup-data/kup-data-declarations';
import { KupObjects } from '../../managers/kup-objects/kup-objects';
import {
    GanttRow,
    Phase,
    Planner,
    PlannerProps,
    Project,
} from '@sme.up/gantt-component';
//import { TaskType } from '@sme.up/gantt-component/dist/types/public-types';
import ReactDOM from 'react-dom';
import { TaskType } from '@sme.up/gantt-component/dist/types/public-types';

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
    onClick: Function;

    @Prop()
    dataRaw: any;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kupManager: KupManager = kupManagerInstance();
    #rootPlanner;

    #addPlannerComponent() {
        // TODO destroy before
        this.#rootPlanner = createRoot(
            this.rootElement.shadowRoot.getElementById(componentWrapperId)
        );

        this.#rootPlanner.render(
            React.createElement(Planner, this.plannerProps)
        );
    }

    #toProjects(data: KupDataDataset): Phase[] {
        let projects: Phase[] = data.rows?.map((value) => {
            let project: Phase = {
                id: value.cells[this.taskIdCol].value,
                name: value.cells[this.taskNameCol].value,
                startDate: value.cells[this.taskDates[0]].value,
                endDate: value.cells[this.taskDates[1]].value,
                secondaryStartDate: value.cells[this.taskPrevDates[0]].value,
                secondaryEndDate: value.cells[this.taskPrevDates[1]].value,
                type: 'project',
                valuesToShow: this.taskColumns.map(
                    (col) => value.cells[col].value
                ),
            };
            return project;
        });
        return projects;
    }

    @Method()
    async addPhases(projectName: string, data: KupDataDataset) {
        const updatedProps: PlannerProps = { ...this.plannerProps };

        const project = (updatedProps.items as Project[]).find(
            (project) => project.name == projectName
        );

        if (project) {
            project.phases = data.rows?.map((value) => {
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
        this.plannerProps = updatedProps;
        //this.refresh();
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

    handleOnClick(row: GanttRow) {
        if (this.onClick) this.onClick(row);
    }

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.plannerProps = {
            title: this.titleMess,
            items: this.#toProjects(this.data),
            onClick: (row) => this.handleOnClick(row),
        };

        this.#addPlannerComponent();

        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#addPlannerComponent();
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
