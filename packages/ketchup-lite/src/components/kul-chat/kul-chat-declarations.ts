export interface KulChatChoice {
    index: number;
    message: KulChatChoiceMessage;
    finish_reason: string;
}
export interface KulChatChoiceMessage {
    role: string;
    content: string;
    tool_calls?: unknown[];
}

export interface KulChatCompletionChoice {
    choice: KulChatChoice;
}

export interface KulChatCompletionObject {
    id: string;
    object: string;
    created: number;
    model: string;
    usage: KulChatUsage;
    choices: KulChatCompletionChoice[];
}

export type KulChatEvent = 'ready';

export type KulChatHistory = KulChatChoiceMessage[];

export enum KulChatProps {
    kulEndpointUrl = 'URL of the endpoint where the LLM is hosted',
    kulMaxTokens = "Maximum number of tokens allowed in the LLM's answer",
    kulSeed = "Seed value for the LLM's answer generation",
    kulStyle = 'Custom style of the component',
    kulSystem = 'System message for the LLM',
    kulTemperature = 'Sets the creative boundaries of the LLM',
    kulValue = 'Initial history of the chat',
}

export interface KulChatPropsInterface {
    kulEndpointUrl?: string;
    kulMaxTokens?: number;
    kulSeed?: number;
    kulStyle?: string;
    kulSystem?: string;
    kulTemperature?: number;
    kulValue?: KulChatState[];
}

export interface KulChatSendArguments {
    history: KulChatHistory;
    max_tokens: number;
    seed: number;
    system: string;
    temperature: number;
    url: string;
}

export type KulChatState = 'connecting' | 'listening' | 'offline' | 'ready';

export interface KulChatUsage {
    usage: KulChatUsageTokens;
}

export interface KulChatUsageTokens {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
}
