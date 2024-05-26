import {
    KulSwitchProps,
    KulSwitchPropsInterface,
} from '../../../src/components/kul-switch/kul-switch-declarations';
import { SWITCH_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/switch/kul-showcase-switch-declarations';

const zwitch = 'switch';
const switchCapitalized = zwitch.charAt(0).toUpperCase() + zwitch.slice(1);
const switchTag = 'kul-' + zwitch;

describe(switchTag, () => {
    beforeEach(() => {
        cy.navigate(zwitch);
    });

    it(`common: should check that all <${switchTag}> exist`, () => {
        cy.checkComponentExamples(switchTag, new Set(SWITCH_EXAMPLES_KEYS));
    });

    it(`common: should check that the number of <${switchTag}> elements matches the number of examples`, () => {
        cy.checkComponentExamplesNumber(Array.from(SWITCH_EXAMPLES_KEYS));
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.checkDebugInfo(switchTag);
    });

    it('common: should check for the presence of a <style> element with id kup-style', () => {
        cy.checkKulStyle();
    });

    it(`common: should call getProps and check keys against Kul${switchCapitalized}Props enum`, () => {
        cy.checkProps(switchTag, KulSwitchProps);
    });

    it(`common: should call getProps and check keys against Kul${switchCapitalized}PropsInterface`, () => {
        cy.checkPropsInterface(switchTag, {
            kulDisabled: null,
            kulLabel: null,
            kulLeadingLabel: null,
            kulRipple: null,
            kulStyle: null,
            kulValue: null,
        } as Required<KulSwitchPropsInterface>);
    });

    it('common: should call getDebugInfo, refresh, and check that renderCount has increased', () => {
        cy.checkRenderCountIncrease(switchTag);
    });
});
