import { KupDataDataset } from '../kup-data/kup-data-declarations';

export interface KupOpenAIParameters {
    context?: string;
    dataset?: KupDataDataset;
}

export interface KupOpenAISessionInfo {
    fileId: string;
    threadId: string;
}
