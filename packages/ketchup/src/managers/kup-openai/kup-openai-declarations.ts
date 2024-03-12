import { KupDataDataset } from '../kup-data/kup-data-declarations';

export interface KupOpenAIParameters {
    context?: string;
    dataset?: KupDataDataset;
    onFunClick?: (fun: string) => void;
}

export interface KupOpenAISessionInfo {
    context: string;
    fileId: string;
    threadId: string;
}
