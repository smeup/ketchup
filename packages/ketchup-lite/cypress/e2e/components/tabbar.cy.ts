import {
    KulTabbarProps,
    KulTabbarPropsInterface,
} from '../../../src/components/kul-tabbar/kul-tabbar-declarations';
import { TABBAR_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/tabbar/kul-showcase-tabbar-declarations';

const tabbar = 'tabbar';
const tabbarCapitalized = tabbar.charAt(0).toUpperCase() + tabbar.slice(1);
const tabbarTag = 'kul-' + tabbar;

describe(tabbarTag, () => {
    beforeEach(() => {
        cy.navigate(tabbar);
    });

    it(`common: should check that all <${tabbarTag}> exist`, () => {
        cy.checkComponentExamples(tabbarTag, new Set(TABBAR_EXAMPLES_KEYS));
    });

    it(`common: should check that the number of <${tabbarTag}> elements matches the number of examples`, () => {
        cy.checkComponentExamplesNumber(Array.from(TABBAR_EXAMPLES_KEYS));
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.checkDebugInfo(tabbarTag);
    });

    it('common: should check for the presence of at least 2 <style> elements within the shadow DOM', () => {
        cy.checkKulStyle();
    });

    it(`common: should call getProps and check keys against Kul${tabbarCapitalized}Props enum`, () => {
        cy.checkProps(tabbarTag, KulTabbarProps);
    });

    it(`common: should call getProps and check keys against Kul${tabbarCapitalized}PropsInterface`, () => {
        cy.checkPropsInterface(tabbarTag, {
            kulData: null,
            kulRipple: null,
            kulStyle: null,
            kulValue: null,
        } as Required<KulTabbarPropsInterface>);
    });

    it('common: should call getDebugInfo, refresh, and check that renderCount has increased', () => {
        cy.checkRenderCountIncrease(tabbarTag);
    });
});
