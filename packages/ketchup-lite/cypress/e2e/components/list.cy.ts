import { KulDataDataset } from '../../../src/components';
import {
    KulListEvent,
    KulListProps,
    KulListPropsInterface,
} from '../../../src/components/kul-list/kul-list-declarations';
import { LIST_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/list/kul-showcase-list-declarations';
import { KulDataCyAttributes } from '../../../src/types/GenericTypes';

const list = 'list';
const listCapitalized = list.charAt(0).toUpperCase() + list.slice(1);
const listTag = 'kul-' + list;

describe('Basic', () => {
    beforeEach(() => {
        cy.navigate(list);
    });

    it(`Should check that all <${listTag}> exist.`, () => {
        cy.checkComponentExamples(listTag, new Set(LIST_EXAMPLES_KEYS));
    });

    it(`Should check that the number of <${listTag}> elements matches the number of examples.`, () => {
        cy.checkComponentExamplesNumber(Array.from(LIST_EXAMPLES_KEYS));
    });
});

describe('Events', () => {
    it(`blur`, () => {
        cy.navigate(list);
        const eventType: KulListEvent = 'blur';
        cy.checkEvent(list, eventType);
        cy.get('@eventElement')
            .findCyElement(KulDataCyAttributes.NODE)
            .first()
            .focus()
            .blur();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`click`, () => {
        cy.navigate(list);
        const eventType: KulListEvent = 'click';
        cy.checkEvent(list, eventType);
        cy.get('@eventElement')
            .findCyElement(KulDataCyAttributes.NODE)
            .first()
            .click();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it('delete', () => {
        cy.navigate(list);
        const eventType: KulListEvent = 'delete';
        cy.checkEvent(list, eventType);

        cy.get(`${listTag}#enableDeletion`)
            .shadow()
            .find('.list-item')
            .first()
            .trigger('mouseover');

        cy.get(`${listTag}#enableDeletion`)
            .findCyElement(KulDataCyAttributes.BUTTON)
            .first()
            .click({ force: true });

        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`focus`, () => {
        cy.navigate(list);
        const eventType: KulListEvent = 'focus';
        cy.checkEvent(list, eventType);
        cy.get('@eventElement')
            .findCyElement(KulDataCyAttributes.NODE)
            .first()
            .focus();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`ready`, () => {
        cy.checkReadyEvent(list);
    });
});

describe('Methods', () => {
    beforeEach(() => {
        cy.navigate(list);
    });

    it('getDebugInfo: check the structure of the returned object.', () => {
        cy.checkDebugInfo(listTag);
    });

    it('getDebugInfo, refresh: check that renderCount has increased after refreshing.', () => {
        cy.checkRenderCountIncrease(listTag);
    });

    it(`getProps: check keys against Kul${listCapitalized}Props enum.`, () => {
        cy.checkProps(listTag, KulListProps);
    });

    it(`getProps: check keys against Kul${listCapitalized}PropsInterface.`, () => {
        cy.checkPropsInterface(listTag, {
            kulData: null,
            kulEnableDeletions: null,
            kulNavigation: null,
            kulRipple: null,
            kulSelectable: null,
            kulStyle: null,
        } as Required<KulListPropsInterface>);
    });
});

describe('Props', () => {
    beforeEach(() => {
        cy.navigate(list);
    });

    it(`kulEnableDeletion: should check for the presence of deletion buttons and that their click actually removes the item from the dataset.`, () => {
        cy.get('@kulComponentShowcase')
            .find(`${listTag}#enableDeletion`)
            .invoke('prop', 'kulData')
            .then((initialKulData: KulDataDataset) => {
                const initialCopy = JSON.parse(JSON.stringify(initialKulData));

                console.log(
                    'Initial dataset length:',
                    initialKulData.nodes.length
                );

                cy.get('@kulComponentShowcase')
                    .find(`${listTag}#enableDeletion`)
                    .shadow()
                    .find('.list-item')
                    .first()
                    .trigger('mouseover');

                cy.get('@kulComponentShowcase')
                    .find(`${listTag}#enableDeletion`)
                    .findCyElement(KulDataCyAttributes.BUTTON)
                    .first()
                    .click({ force: true });

                cy.get('@kulComponentShowcase')
                    .find(`${listTag}#enableDeletion`)
                    .invoke('prop', 'kulData')
                    .then((finalKulData: KulDataDataset) => {
                        const delta =
                            initialCopy.nodes.length -
                            finalKulData.nodes.length;
                        console.log('Delta:', delta);

                        assert(
                            delta === 1,
                            `One item was not removed from the dataset. Expected difference: 1, Actual difference: ${delta}`
                        );
                    });
            });
    });

    it('kulStyle: should check for the presence of a <style> element with id kup-style.', () => {
        cy.checkKulStyle();
    });
});
