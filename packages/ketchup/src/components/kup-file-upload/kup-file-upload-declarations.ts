import { KupEventPayload } from '../../types/GenericTypes';

export enum KupFileUploadProps {
    customStyle = 'Custom style of the component.',
    data = 'Actual data of the input file upload.',
}

export interface KupFileUploadEventPayload extends KupEventPayload {
    files: File[];
}
export interface KupFileUploadChangeEventPayload extends KupEventPayload {
    value: string;
}
