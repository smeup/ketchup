import {
    KulTreeProps,
    KulTreePropsInterface,
} from '../../../src/components/kul-tree/kul-tree-declarations';
import { TREE_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/tree/kul-showcase-tree-declarations';

const tree = 'tree';
const treeCapitalized = tree.charAt(0).toUpperCase() + tree.slice(1);
const treeTag = 'kul-' + tree;

describe(treeTag, () => {
    beforeEach(() => {
        cy.navigate(tree);
    });

    it(`common: should check that all <${treeTag}> exist`, () => {
        cy.checkComponentExamples(treeTag, new Set(TREE_EXAMPLES_KEYS));
    });

    it(`common: should check that the number of <${treeTag}> elements matches the number of examples`, () => {
        cy.checkComponentExamplesNumber(Array.from(TREE_EXAMPLES_KEYS));
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.checkDebugInfo(treeTag);
    });

    it('common: should check for the presence of at least 2 <style> elements within the shadow DOM', () => {
        cy.checkKulStyle();
    });

    it(`common: should call getProps and check keys against Kul${treeCapitalized}Props enum`, () => {
        cy.checkProps(treeTag, KulTreeProps);
    });

    it(`common: should call getProps and check keys against Kul${treeCapitalized}PropsInterface`, () => {
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

    it('common: should call getDebugInfo, refresh, and check that renderCount has increased', () => {
        cy.checkRenderCountIncrease(treeTag);
    });
});
