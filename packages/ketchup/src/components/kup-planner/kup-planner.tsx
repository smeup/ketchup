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
import { Gantt, Task, GanttProps } from 'gantt-task-react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { KupDataDataset } from '../../managers/kup-data/kup-data-declarations';
import { KupObjects } from '../../managers/kup-objects/kup-objects';
import { TaskType } from 'gantt-task-react/dist/types/public-types';

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
    @State() value: string = '';

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

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kupManager: KupManager = kupManagerInstance();

    #toTasks(data: KupDataDataset): Task[] {
        const kupObjects: KupObjects = new KupObjects();
        let tasks: Task[] = data.rows?.map((value) => {
            let task: Task = {
                id: value.cells['ID'].obj.k,
                name: value.cells['NAME'].obj.k,
                start: kupObjects.parseDate(value.cells['START'].obj).toDate(),
                end: kupObjects.parseDate(value.cells['END'].obj).toDate(),
                isDisabled: value.cells['DISABLED'].obj.k.startsWith('S'),
                progress: stringToNumber(value.cells['PROGRESS'].obj.k),
                type: value.cells['TYPE'].obj.k as TaskType,
            };
            return task;
        });

        return tasks;
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

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.theme.register(this);
    }

    componentDidLoad() {
        const tasks = this.#toTasks(this.data);

        const ganttProps: GanttProps = {
            tasks: tasks,
        };

        const root = createRoot(
            this.rootElement.shadowRoot.getElementById(componentWrapperId)
        );
        root.render(React.createElement(Gantt, ganttProps));

        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
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
