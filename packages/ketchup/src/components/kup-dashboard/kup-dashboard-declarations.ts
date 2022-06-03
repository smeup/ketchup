import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-dashboard component.
 * Used to export every prop in an object.
 */
export enum KupDashboardProps {
    customStyle = 'Custom style of the component.',
    data = 'The data of the component.',
    enableDesign = 'When set to true, the component is in design mode and it is draggable.',
}

export interface KupDashboardEventPayload extends KupEventPayload {
    data: KupForm;
}

export interface KupDataDashboard extends KupForm {}

/**
 * Extend html element properties for Form Editor
 */
export interface KupDashboardElement extends HTMLDivElement {
    kupData: KupDashboardData;
}

/**
 * Additional kupData for html element.
 */
export interface KupDashboardData {
    parent?: KupForm | KupSection;
    form?: KupForm;
    section?: KupSection;
}

export interface KupVariableEntity {
    name: string;
    type?: string;
    value: string;
}
export interface KupDynamismEntity {
    event: string;
    exec?: string;
    targets?: string[];
    variables?: KupVariableEntity[];
}
export interface KupEntity {
    id: string;
    loaded: boolean;
}
export interface KupComponentEntity extends KupEntity {
    fun: string;
    evaluatedFun?: string;
    title: string;
    type: string; //KupShape
    variables?: KupVariableEntity[];
    timer?: ReturnType<typeof setTimeout>;
}

export interface KupForm extends KupComponentEntity {
    layout: string;
    sections: KupSection[];
}

export interface KupSection extends KupEntity {
    dim?: string;
    layout?: string;
    sections?: KupSection[];
}
