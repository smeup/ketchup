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
import { Gantt, GanttProps, Task } from '@sme.up/gantt-component';
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
    idCol: string = 'ID';

    @Prop()
    nameCol: string = 'NAME';

    @Prop()
    startCol: string = 'START';

    @Prop()
    secStartCol: string = 'SEC_START';

    @Prop()
    endCol: string = 'END';

    @Prop()
    secEndCol: string = 'SEC_END';

    @Prop()
    progrCol: string = 'PROGRESS';

    @Prop()
    disabledCol: string = 'PROGRESS';

    @Prop()
    typeCol: string = 'TYPE';

    @Prop()
    data: KupDataDataset;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #kupManager: KupManager = kupManagerInstance();

    #toTasks(data: KupDataDataset): Task[] {
        //debugger;
        const kupObjects: KupObjects = new KupObjects();
        let tasks: Task[] = data.rows?.map((value) => {
            const secondaryStart = value.cells[this.secStartCol]?.obj;
            const secondaryEnd = value.cells[this.secEndCol]?.obj;
            let task: Task = {
                id: value.cells[this.idCol].obj.k,
                name: value.cells[this.nameCol].obj.k,
                start: kupObjects
                    .parseDate(value.cells[this.startCol].obj)
                    .toDate(),
                end: kupObjects
                    .parseDate(value.cells[this.endCol].obj)
                    .toDate(),
                secondaryStart: secondaryStart
                    ? kupObjects
                          .parseDate(value.cells[this.secStartCol].obj)
                          .toDate()
                    : undefined,
                secondaryEnd: secondaryEnd
                    ? kupObjects
                          .parseDate(value.cells[this.secEndCol].obj)
                          .toDate()
                    : undefined,
                isDisabled: value.cells[this.disabledCol].obj.k.startsWith('S'),
                progress: stringToNumber(value.cells[this.progrCol].obj.k),
                type: value.cells[this.typeCol].obj.k as TaskType,
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
        const gantProps: GanttProps = {
            tasks: this.#toTasks(this.data),
        };

        // const plannerProps: PlannerProps = {
        //     commonProps: JSON.parse(
        //         '{"projects":[{"id":"1","name":"G456","customerCountry":"ISVAL S.P.A","startDate":"2021-10-25","endDate":"2023-07-04","secondaryStartDate":"2021-10-25","secondaryEndDate":"2023-03-07","type":"project","phases":[{"id":"P410           ","name":"P410           ","startDate":"2022-10-17","endDate":"2023-03-10","secondaryStartDate":"2022-11-07","secondaryEndDate":"2022-11-04","color":"#ED7D31","selectedColor":"#ED7D31","dependencies":[],"type":"phase"},{"id":"P420           ","name":"P420           ","startDate":"2022-11-21","endDate":"2023-03-10","secondaryStartDate":"2023-01-13","secondaryEndDate":"2022-11-11","color":"#FF0000","selectedColor":"#FF0000","dependencies":[],"type":"phase"},{"id":"P610           ","name":"P610           ","startDate":"2023-03-27","endDate":"2023-04-14","secondaryStartDate":"2023-03-01","secondaryEndDate":"2023-01-02","color":"#70AD47","selectedColor":"#70AD47","dependencies":["P410           "],"type":"phase"},{"id":"P620           ","name":"P620           ","startDate":"2023-03-27","endDate":"2023-04-14","secondaryStartDate":"2023-03-01","secondaryEndDate":"2022-11-30","color":"#C6E0B4","selectedColor":"#C6E0B4","dependencies":["P410           "],"type":"phase"},{"id":"P630           ","name":"P630           ","startDate":"2023-03-20","endDate":"2023-04-07","secondaryStartDate":"2023-03-01","secondaryEndDate":"2022-12-21","color":"#BDD7EE","selectedColor":"#BDD7EE","dependencies":["P410           "],"type":"phase"},{"id":"P710           ","name":"P710           ","startDate":"2023-04-17","endDate":"2023-04-28","secondaryStartDate":"2023-03-01","secondaryEndDate":"2023-01-10","color":"#FFFF00","selectedColor":"#FFFF00","dependencies":["P610           "],"type":"phase"},{"id":"P720           ","name":"P720           ","startDate":"2023-05-02","endDate":"2023-05-10","secondaryStartDate":"2023-03-01","secondaryEndDate":"2023-01-17","color":"#BDD7EE","selectedColor":"#BDD7EE","dependencies":["P710           "],"type":"phase"},{"id":"P730           ","name":"P730           ","startDate":"2023-05-17","endDate":"2023-05-30","secondaryStartDate":"2023-03-01","secondaryEndDate":"2023-01-31","color":"#F8CBAD","selectedColor":"#F8CBAD","dependencies":["P720           "],"type":"phase"},{"id":"P750           ","name":"P750           ","startDate":"2023-05-31","endDate":"2023-07-04","secondaryStartDate":"2023-03-01","secondaryEndDate":"2023-03-07","color":"#7030A0","selectedColor":"#7030A0","dependencies":["P730           "],"type":"phase"}]},{"id":"2","name":"G460","customerCountry":"ALBAN GIACOMO SPA","startDate":"2021-10-20","endDate":"2023-04-07","secondaryStartDate":"2021-10-20","secondaryEndDate":"2022-12-16","type":"project","phases":[]},{"id":"3","name":"G452","customerCountry":"RACCORPE DI PE ANGELO & C SNC","startDate":"2022-01-03","endDate":"2023-06-30","secondaryStartDate":"2022-01-03","secondaryEndDate":"2023-03-06","type":"project","phases":[]},{"id":"4","name":"G453","customerCountry":"RACCORPE DI PE ANGELO & C SNC","startDate":"2022-01-03","endDate":"2023-06-30","secondaryStartDate":"2022-01-03","secondaryEndDate":"2023-07-06","type":"project","phases":[]},{"id":"5","name":"G458","customerCountry":"IBP INSTALFITTINGS SP Z.O.O","startDate":"2021-11-02","endDate":"2023-04-04","secondaryStartDate":"2021-11-02","secondaryEndDate":"2022-10-19","type":"project","phases":[]},{"id":"6","name":"G462","customerCountry":"Catalina Cylinders","startDate":"2021-12-15","endDate":"2023-07-07","secondaryStartDate":"2021-12-15","secondaryEndDate":"2023-03-06","type":"project","phases":[]},{"id":"7","name":"G465","customerCountry":"CONBRACO INDUSTRIES INC.","startDate":"2021-12-08","endDate":"2023-07-07","secondaryStartDate":"2021-12-08","secondaryEndDate":"2023-02-17","type":"project","phases":[]},{"id":"8","name":"G466","customerCountry":"CONBRACO INDUSTRIES INC.","startDate":"2022-01-20","endDate":"2023-07-07","secondaryStartDate":"2022-01-20","secondaryEndDate":"2023-02-24","type":"project","phases":[]},{"id":"9","name":"G468","customerCountry":"CALEFFI S.P.A.","startDate":"2022-02-02","endDate":"2023-07-21","secondaryStartDate":"2022-02-02","secondaryEndDate":"2023-03-03","type":"project","phases":[]},{"id":"10","name":"G469","customerCountry":"CALEFFI S.P.A.","startDate":"2021-11-02","endDate":"2023-07-21","secondaryStartDate":"2021-11-02","secondaryEndDate":"2023-06-16","type":"project","phases":[]},{"id":"11","name":"G418","customerCountry":"BENDER ARMATUREN","startDate":"2022-01-20","endDate":"2023-10-06","secondaryStartDate":"2022-01-20","secondaryEndDate":"2023-01-20","type":"project","phases":[]},{"id":"12","name":"G471","customerCountry":"FAPIM SPA","startDate":"2022-02-21","endDate":"2023-07-28","secondaryStartDate":"2022-02-21","secondaryEndDate":"2023-02-27","type":"project","phases":[]},{"id":"13","name":"G472","customerCountry":"DOCOL METAIS SANITARIOS","startDate":"2022-04-02","endDate":"2023-09-29","secondaryStartDate":"2022-04-02","secondaryEndDate":"2023-05-12","type":"project","phases":[]},{"id":"14","name":"G474","customerCountry":"UPONOR GMBH","startDate":"2022-01-07","endDate":"2023-04-14","secondaryStartDate":"2022-01-07","secondaryEndDate":"2023-03-09","type":"project","phases":[]},{"id":"15","name":"G480","customerCountry":"ILME SPA","startDate":"2021-11-20","endDate":"2023-07-21","secondaryStartDate":"2021-11-20","secondaryEndDate":"2023-05-03","type":"project","phases":[]},{"id":"16","name":"G470","customerCountry":"GIACOMINI SPA","startDate":"2022-01-15","endDate":"2023-05-19","secondaryStartDate":"2022-01-15","secondaryEndDate":"2023-02-17","type":"project","phases":[]},{"id":"17","name":"G481","customerCountry":"MEC TO SRL","startDate":"2022-05-20","endDate":"2023-07-21","secondaryStartDate":"2022-05-20","secondaryEndDate":"2023-05-23","type":"project","phases":[]},{"id":"18","name":"G473","customerCountry":"RELIANCE WORLDWIDE CORP.","startDate":"2022-05-20","endDate":"2023-10-13","secondaryStartDate":"2022-05-20","secondaryEndDate":"2023-08-01","type":"project","phases":[]},{"id":"19","name":"G482","customerCountry":"ARCO-VALVULAS ARCO","startDate":"2022-03-15","endDate":"2023-09-08","secondaryStartDate":"2022-03-15","secondaryEndDate":"2023-03-27","type":"project","phases":[]},{"id":"20","name":"G483","customerCountry":"ARCO-VALVULAS ARCO","startDate":"2022-03-15","endDate":"2023-11-03","secondaryStartDate":"2022-03-15","secondaryEndDate":"2023-10-30","type":"project","phases":[]},{"id":"21","name":"G487","customerCountry":"Vitillo SpA","startDate":"2022-05-02","endDate":"2024-02-23","secondaryStartDate":"2022-05-02","secondaryEndDate":"2023-11-30","type":"project","phases":[]},{"id":"22","name":"G488","customerCountry":"Vitillo SpA","startDate":"2023-03-01","endDate":"2023-03-01","secondaryStartDate":"2023-03-01","secondaryEndDate":"2023-03-01","type":"project","phases":[]},{"id":"23","name":"G489","customerCountry":"Vitillo SpA","startDate":"2023-03-01","endDate":"2023-03-01","secondaryStartDate":"2023-03-01","secondaryEndDate":"2023-03-01","type":"project","phases":[]},{"id":"24","name":"G490","customerCountry":"Vitillo SpA","startDate":"2023-03-01","endDate":"2023-03-01","secondaryStartDate":"2023-03-01","secondaryEndDate":"2023-03-01","type":"project","phases":[]},{"id":"25","name":"G491","customerCountry":"Vitillo SpA","startDate":"2023-03-01","endDate":"2023-03-01","secondaryStartDate":"2023-03-01","secondaryEndDate":"2023-03-01","type":"project","phases":[]},{"id":"26","name":"G492","customerCountry":"AALBERTS IPS AMERICAS, INC","startDate":"2022-09-01","endDate":"2024-02-09","secondaryStartDate":"2022-09-01","secondaryEndDate":"2023-12-22","type":"project","phases":[]},{"id":"27","name":"G493","customerCountry":"AALBERTS IPS AMERICAS, INC","startDate":"2022-10-20","endDate":"2024-02-09","secondaryStartDate":"2022-10-20","secondaryEndDate":"2024-01-10","type":"project","phases":[]},{"id":"28","name":"G495","customerCountry":"OMB SALERI VENTILGAS SPA","startDate":"2022-04-15","endDate":"2024-01-26","secondaryStartDate":"2022-04-15","secondaryEndDate":"2023-11-07","type":"project","phases":[]},{"id":"29","name":"G496","customerCountry":"Cisa Spa","startDate":"2022-01-07","endDate":"2023-09-07","secondaryStartDate":"2022-01-07","secondaryEndDate":"2023-07-27","type":"project","phases":[]},{"id":"30","name":"G484","customerCountry":"LA.CAM Lavorazioni Camune S.r.l.","startDate":"2021-12-05","endDate":"2023-04-06","secondaryStartDate":"2021-12-05","secondaryEndDate":"2023-04-07","type":"project","phases":[]},{"id":"31","name":"G485","customerCountry":"BREMBO NANJING BRAKE SYSTEM CO.LTD.","startDate":"2022-02-25","endDate":"2024-01-16","secondaryStartDate":"2022-02-25","secondaryEndDate":"2023-10-16","type":"project","phases":[]},{"id":"32","name":"G497","customerCountry":"THE FORD METER BOX CO. INC.","startDate":"2022-09-02","endDate":"2024-01-19","secondaryStartDate":"2022-09-02","secondaryEndDate":"2023-12-05","type":"project","phases":[]},{"id":"33","name":"G498","customerCountry":"NIBCO INC.","startDate":"2022-11-02","endDate":"2024-03-29","secondaryStartDate":"2022-11-02","secondaryEndDate":"2024-02-07","type":"project","phases":[]},{"id":"34","name":"G477","customerCountry":"Vitillo SpA","startDate":"2022-05-02","endDate":"2023-07-28","secondaryStartDate":"2022-05-02","secondaryEndDate":"2023-06-06","type":"project","phases":[]},{"id":"35","name":"G478","customerCountry":"Vitillo SpA","startDate":"2022-05-02","endDate":"2023-12-01","secondaryStartDate":"2022-05-02","secondaryEndDate":"2023-11-17","type":"project","phases":[]},{"id":"36","name":"G479","customerCountry":"Vitillo SpA","startDate":"2022-05-02","endDate":"2024-07-05","secondaryStartDate":"2022-05-02","secondaryEndDate":"2024-06-26","type":"project","phases":[]},{"id":"37","name":"G486","customerCountry":"COMISA SpA","startDate":"2022-05-20","endDate":"2023-07-07","secondaryStartDate":"2022-05-20","secondaryEndDate":"2023-04-27","type":"project","phases":[]},{"id":"38","name":"G499","customerCountry":"Beck Manufacturing","startDate":"2022-09-15","endDate":"2024-05-03","secondaryStartDate":"2022-09-15","secondaryEndDate":"2024-01-24","type":"project","phases":[]},{"id":"39","name":"G501","customerCountry":"THE FORD METER BOX CO. INC.","startDate":"2022-09-02","endDate":"2024-05-31","secondaryStartDate":"2022-09-02","secondaryEndDate":"2024-04-16","type":"project","phases":[]},{"id":"40","name":"G502","customerCountry":"THE FORD METER BOX CO. INC.","startDate":"2022-09-02","endDate":"2024-05-31","secondaryStartDate":"2022-09-02","secondaryEndDate":"2024-05-24","type":"project","phases":[]},{"id":"41","name":"G504","customerCountry":"SWAGELOK COMPANY","startDate":"2022-10-20","endDate":"2024-05-24","secondaryStartDate":"2022-10-20","secondaryEndDate":"2024-04-22","type":"project","phases":[]},{"id":"42","name":"G507","customerCountry":"KONGSBERG AUTOMOTIVE AS","startDate":"2022-10-20","endDate":"2023-12-22","secondaryStartDate":"2022-10-20","secondaryEndDate":"2024-02-05","type":"project","phases":[]},{"id":"43","name":"G509","customerCountry":"PPT-Armature DD p.o.","startDate":"2022-11-15","endDate":"2023-12-22","secondaryStartDate":"2022-11-15","secondaryEndDate":"2024-02-02","type":"project","phases":[]},{"id":"44","name":"G503","customerCountry":"ISVAL S.P.A","startDate":"2022-10-17","endDate":"2024-02-23","secondaryStartDate":"2022-10-17","secondaryEndDate":"2023-11-20","type":"project","phases":[]},{"id":"45","name":"G510","customerCountry":"AYVAZ COMPAny","startDate":"2022-12-02","endDate":"2024-04-19","secondaryStartDate":"2022-12-02","secondaryEndDate":"2024-04-15","type":"project","phases":[]},{"id":"46","name":"G511","customerCountry":"ISIFLO AS, Norway","startDate":"2022-09-15","endDate":"2024-05-31","secondaryStartDate":"2022-09-15","secondaryEndDate":"2024-05-08","type":"project","phases":[]},{"id":"47","name":"G505","customerCountry":"CALEFFI S.P.A.","startDate":"2022-08-02","endDate":"2024-06-21","secondaryStartDate":"2022-08-02","secondaryEndDate":"2024-05-21","type":"project","phases":[]},{"id":"48","name":"G508","customerCountry":"Wonder SpA","startDate":"2022-11-14","endDate":"2024-03-22","secondaryStartDate":"2022-11-14","secondaryEndDate":"2024-03-01","type":"project","phases":[]},{"id":"49","name":"G494","customerCountry":"COMISA SpA","startDate":"2022-11-14","endDate":"2024-01-26","secondaryStartDate":"2022-11-14","secondaryEndDate":"2023-12-07","type":"project","phases":[]},{"id":"50","name":"G515","customerCountry":"THE FORD METER BOX CO. INC.","startDate":"2022-11-29","endDate":"2024-12-20","secondaryStartDate":"2022-11-29","secondaryEndDate":"2024-12-23","type":"project","phases":[]},{"id":"51","name":"G519","customerCountry":"THE FORD METER BOX CO. INC.","startDate":"2023-03-01","endDate":"2023-03-01","secondaryStartDate":"2023-03-01","secondaryEndDate":"2023-03-01","type":"project","phases":[]},{"id":"52","name":"G523","customerCountry":"SWAGELOK COMPANY","startDate":"2023-03-01","endDate":"2023-03-01","secondaryStartDate":"2023-03-01","secondaryEndDate":"2023-03-01","type":"project","phases":[]},{"id":"53","name":"G520","customerCountry":"Neuman Alluminium GmbH & Co","startDate":"2023-03-01","endDate":"2023-03-01","secondaryStartDate":"2023-03-01","secondaryEndDate":"2023-03-01","type":"project","phases":[]},{"id":"54","name":"G521","customerCountry":"SAINTE LIZAIGNE SAS","startDate":"2023-03-01","endDate":"2023-03-01","secondaryStartDate":"2023-03-01","secondaryEndDate":"2023-03-01","type":"project","phases":[]},{"id":"55","name":"G518","customerCountry":"RACCORPE DI PE ANGELO & C SNC","startDate":"2023-03-01","endDate":"2023-03-01","secondaryStartDate":"2023-03-01","secondaryEndDate":"2023-03-01","type":"project","phases":[]},{"id":"56","name":"G522","customerCountry":"Zoppelletto SpA","startDate":"2023-03-01","endDate":"2023-03-01","secondaryStartDate":"2023-03-01","secondaryEndDate":"2023-03-01","type":"project","phases":[]},{"id":"57","name":"G516","customerCountry":"RACCORPE DI PE ANGELO & C SNC","startDate":"2023-03-01","endDate":"2023-03-01","secondaryStartDate":"2023-03-01","secondaryEndDate":"2023-03-01","type":"project","phases":[]},{"id":"58","name":"G517","customerCountry":"RACCORPE DI PE ANGELO & C SNC","startDate":"2023-03-01","endDate":"2023-03-01","secondaryStartDate":"2023-03-01","secondaryEndDate":"2023-03-01","type":"project","phases":[]}],"timeUnit":"months","stylingOptions":{"listCellWidth":"297px","rowHeight":40,"barFill":90,"projectProgressColor":"#CBCBCB","projectProgressSelectedColor":"#CBCBCB","projectBackgroundColor":"#CBCBCB","projectBackgroundSelectedColor":"#CBCBCB","barProgressColor":"#A2A415","barProgressSelectedColor":"#A2A415","barBackgroundColor":"#A2A415","barBackgroundSelectedColor":"#A2A415"},"hideLabel":true,"showSecondaryDates":true,"ganttHeight":350,"hideDependencies":true}'
        //     ),
        // };

        const root = createRoot(
            this.rootElement.shadowRoot.getElementById(componentWrapperId)
        );
        //root.render(React.createElement(Planner, plannerProps));
        root.render(React.createElement(Gantt, gantProps));

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
