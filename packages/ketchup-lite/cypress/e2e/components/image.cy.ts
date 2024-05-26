import {
    KulImageProps,
    KulImagePropsInterface,
} from '../../../src/components/kul-image/kul-image-declarations';
import { IMAGE_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/image/kul-showcase-image-declarations';

const image = 'image';
const imageCapitalized = image.charAt(0).toUpperCase() + image.slice(1);
const imageTag = 'kul-' + image;

describe(imageTag, () => {
    beforeEach(() => {
        cy.navigate(image);
    });

    it(`common: should check that all <${imageTag}> exist`, () => {
        cy.checkComponentExamples(imageTag, new Set(IMAGE_EXAMPLES_KEYS));
    });

    it(`common: should check that the number of <${imageTag}> elements matches the number of examples`, () => {
        cy.checkComponentExamplesNumber(Array.from(IMAGE_EXAMPLES_KEYS));
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.checkDebugInfo(imageTag);
    });

    it('common: should check for the presence of a <style> element with id kup-style', () => {
        cy.checkKulStyle();
    });

    it(`common: should call getProps and check keys against Kul${imageCapitalized}Props enum`, () => {
        cy.checkProps(imageTag, KulImageProps);
    });

    it(`common: should call getProps and check keys against Kul${imageCapitalized}PropsInterface`, () => {
        cy.checkPropsInterface(imageTag, {
            kulBadgeProps: null,
            kulColor: null,
            kulShowSpinner: null,
            kulSizeX: null,
            kulSizeY: null,
            kulStyle: null,
            kulValue: null,
        } as Required<KulImagePropsInterface>);
    });

    it('common: should call getDebugInfo, refresh, and check that renderCount has increased', () => {
        cy.checkRenderCountIncrease(imageTag);
    });
});
