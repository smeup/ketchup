import {
    KulChatProps,
    KulChatPropsInterface,
} from '../../../src/components/kul-chat/kul-chat-declarations';
import { CHAT_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/chat/kul-showcase-chat-declarations';

const chat = 'chat';
const chatCapitalized = chat.charAt(0).toUpperCase() + chat.slice(1);
const chatTag = 'kul-' + chat;

describe('Basic', () => {
    beforeEach(() => {
        cy.navigate(chat);
    });

    it(`Should check that all <${chatTag}> exist.`, () => {
        cy.checkComponentExamples(chatTag, new Set(CHAT_EXAMPLES_KEYS));
    });

    it(`Should check that the number of <${chatTag}> elements matches the number of examples.`, () => {
        cy.checkComponentExamplesNumber(Array.from(CHAT_EXAMPLES_KEYS));
    });
});

describe('Events', () => {
    it(`ready`, () => {
        cy.checkReadyEvent(chat);
    });
});

describe('Methods', () => {
    beforeEach(() => {
        cy.navigate(chat);
    });

    it('getDebugInfo: check the structure of the returned object.', () => {
        cy.checkDebugInfo(chatTag);
    });

    it('getDebugInfo, refresh: check that renderCount has increased after refreshing.', () => {
        cy.checkRenderCountIncrease(chatTag);
    });

    it(`getProps: check keys against Kul${chatCapitalized}Props enum.`, () => {
        cy.checkProps(chatTag, KulChatProps);
    });

    it(`getProps: check keys against Kul${chatCapitalized}PropsInterface.`, () => {
        cy.checkPropsInterface(chatTag, {
            kulEndpointUrl: null,
            kulMaxTokens: null,
            kulPollingInterval: null,
            kulSeed: null,
            kulStyle: null,
            kulSystem: null,
            kulTemperature: null,
            kulValue: null,
        } as Required<KulChatPropsInterface>);
    });
});

describe('Props', () => {
    beforeEach(() => {
        cy.navigate(chat);
    });

    it('Should check for the presence of a <style> element with id kup-style.', () => {
        cy.checkKulStyle();
    });
});
