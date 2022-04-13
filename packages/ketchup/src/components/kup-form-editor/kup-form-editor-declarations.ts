import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-form-editor component.
 * Used to export every prop in an object.
 */
export enum KupFormEditorProps {
    customStyle = 'Custom style of the component.',
    data = 'The data of the component.',
}

export interface KupFormEditorEventPayload extends KupEventPayload {
    data: KupForm;
}

/**
 * Extend html element properties for Form Editor
 */
export interface KupFormEditorElement extends HTMLDivElement {
    kupData: KupFormEditorData;
}

/**
 * Additional kupData for html element.
 */
export interface KupFormEditorData {
    section: KupSection;
    componnent?: KupComponent;
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
export interface KupWidget extends KupComponentEntity {
    config?: any;
    data?: any;
    dynamisms?: KupDynamismEntity[];
    options?: any;
}
export type KupComponent = KupForm | KupWidget;
export interface KupSection extends KupEntity {
    components?: KupComponent[];
    dim?: string;
    layout?: string;
    sections?: KupSection[];
}
