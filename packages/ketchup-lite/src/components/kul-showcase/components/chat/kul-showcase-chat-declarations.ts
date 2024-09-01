import { KulChatPropsInterface } from '../../../kul-chat/kul-chat-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const CHAT_EXAMPLES_KEYS = ['simple', 'style'] as const;

export interface ChatExample extends KulChatPropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

export type ChatData = {
    [K in (typeof CHAT_EXAMPLES_KEYS)[number]]: ChatExample;
};
