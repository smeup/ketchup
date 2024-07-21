import {
    KulImageEvent,
    KulImageProps,
    KulImagePropsInterface,
} from '../../../src/components/kul-image/kul-image-declarations';
import { IMAGE_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/image/kul-showcase-image-declarations';
import { KulDataCyAttributes } from '../../../src/types/GenericTypes';

const image = 'image';
const imageCapitalized = image.charAt(0).toUpperCase() + image.slice(1);
const imageTag = 'kul-' + image;

describe('Basic', () => {
    beforeEach(() => {
        cy.navigate(image);
    });

    it(`Should check that all <${imageTag}> exist.`, () => {
        cy.checkComponentExamples(imageTag, new Set(IMAGE_EXAMPLES_KEYS));
    });

    it(`Should check that the number of <${imageTag}> elements matches the number of examples.`, () => {
        cy.checkComponentExamplesNumber(Array.from(IMAGE_EXAMPLES_KEYS));
    });
});

describe('Events', () => {
    it(`click`, () => {
        cy.navigate(image);
        const eventType: KulImageEvent = 'click';
        cy.checkEvent(image, eventType);
        cy.get('@eventElement').click();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`load`, () => {
        const eventType: KulImageEvent = 'load';
        cy.checkReadyEvent(image, eventType);
    });

    it(`ready`, () => {
        cy.checkReadyEvent(image);
    });
});

describe('Methods', () => {
    beforeEach(() => {
        cy.navigate(image);
    });

    it('getDebugInfo: check the structure of the returned object.', () => {
        cy.checkDebugInfo(imageTag);
    });

    it('getDebugInfo, refresh: check that renderCount has increased after refreshing.', () => {
        cy.checkRenderCountIncrease(imageTag);
    });

    it(`getProps: check keys against Kul${imageCapitalized}Props enum.`, () => {
        cy.checkProps(imageTag, KulImageProps);
    });

    it(`getProps: check keys against Kul${imageCapitalized}PropsInterface.`, () => {
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
});

describe('Props', () => {
    beforeEach(() => {
        cy.navigate(image);
    });

    it('kulStyle: should check for the presence of a <style> element with id kup-style.', () => {
        cy.checkKulStyle();
    });
});
