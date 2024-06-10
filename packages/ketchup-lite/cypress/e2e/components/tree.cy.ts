import {
    KulTreeEvent,
    KulTreeProps,
    KulTreePropsInterface,
} from '../../../src/components/kul-tree/kul-tree-declarations';
import { TREE_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/tree/kul-showcase-tree-declarations';
import { KulDataCyAttributes } from '../../../src/types/GenericTypes';

const tree = 'tree';
const treeCapitalized = tree.charAt(0).toUpperCase() + tree.slice(1);
const treeTag = 'kul-' + tree;

describe('Basic', () => {
    beforeEach(() => {
        cy.navigate(tree);
    });

    it(`Should check that all <${treeTag}> exist.`, () => {
        cy.checkComponentExamples(treeTag, new Set(TREE_EXAMPLES_KEYS));
    });

    it(`Should check that the number of <${treeTag}> elements matches the number of examples.`, () => {
        cy.checkComponentExamplesNumber(Array.from(TREE_EXAMPLES_KEYS));
    });
});

describe('Events', () => {
    it(`click`, () => {
        cy.navigate(tree);
        const eventType: KulTreeEvent = 'click';
        cy.checkEvent(tree, eventType);
        cy.get('@eventElement')
            .findCyElement(KulDataCyAttributes.NODE)
            .first()
            .click();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`kul-event`, () => {
        cy.navigate(tree);
        const eventType: KulTreeEvent = 'kul-event';
        cy.checkEvent(tree, eventType);
        cy.get('@eventElement')
            .findCyElement(KulDataCyAttributes.INPUT)
            .first()
            .focus();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`pointerdown`, () => {
        cy.navigate(tree);
        const eventType: KulTreeEvent = 'pointerdown';
        cy.checkEvent(tree, eventType);
        cy.get('@eventElement')
            .findCyElement(KulDataCyAttributes.NODE)
            .first()
            .click();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`ready`, () => {
        cy.checkReadyEvent(tree);
    });
});

describe('Methods', () => {
    beforeEach(() => {
        cy.navigate(tree);
    });

    it('getDebugInfo: check the structure of the returned object.', () => {
        cy.checkDebugInfo(treeTag);
    });

    it('getDebugInfo, refresh: check that renderCount has increased after refreshing.', () => {
        cy.checkRenderCountIncrease(treeTag);
    });

    it(`getProps: check keys against Kul${treeCapitalized}Props enum.`, () => {
        cy.checkProps(treeTag, KulTreeProps);
    });

    it(`getProps: check keys against Kul${treeCapitalized}PropsInterface.`, () => {
        cy.checkPropsInterface(treeTag, {
            kulAccordionLayout: null,
            kulData: null,
            kulFilter: null,
            kulInitialExpansionDepth: null,
            kulRipple: null,
            kulSelectable: null,
            kulStyle: null,
        } as Required<KulTreePropsInterface>);
    });
});

describe('Props', () => {
    beforeEach(() => {
        cy.navigate(tree);
    });

    it('kulStyle: should check for the presence of a <style> element with id kup-style.', () => {
        cy.checkKulStyle();
    });
});
