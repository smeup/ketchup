import {
    KulPhotoframeEvent,
    KulPhotoframeProps,
    KulPhotoframePropsInterface,
} from '../../../src/components/kul-photoframe/kul-photoframe-declarations';
import { PHOTOFRAME_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/photoframe/kul-showcase-photoframe-declarations';

const photoframe = 'photoframe';
const photoframeCapitalized =
    photoframe.charAt(0).toUpperCase() + photoframe.slice(1);
const photoframeTag = 'kul-' + photoframe;

describe('Basic', () => {
    beforeEach(() => {
        cy.navigate(photoframe);
    });

    it(`Should check that all <${photoframeTag}> exist.`, () => {
        cy.checkComponentExamples(
            photoframeTag,
            new Set(PHOTOFRAME_EXAMPLES_KEYS)
        );
    });

    it(`Should check that the number of <${photoframeTag}> elements matches the number of examples.`, () => {
        cy.checkComponentExamplesNumber(Array.from(PHOTOFRAME_EXAMPLES_KEYS));
    });
});

describe('Events', () => {
    it(`load`, () => {
        const eventType: KulPhotoframeEvent = 'load';
        cy.checkReadyEvent(photoframe, eventType);
    });

    it(`ready`, () => {
        cy.checkReadyEvent(photoframe);
    });
});

describe('Methods', () => {
    beforeEach(() => {
        cy.navigate(photoframe);
    });

    it('getDebugInfo: check the structure of the returned object.', () => {
        cy.checkDebugInfo(photoframeTag);
    });

    it('getDebugInfo, refresh: check that renderCount has increased after refreshing.', () => {
        cy.checkRenderCountIncrease(photoframeTag);
    });

    it(`getProps: check keys against Kul${photoframeCapitalized}Props enum.`, () => {
        cy.checkProps(photoframeTag, KulPhotoframeProps);
    });

    it(`getProps: check keys against Kul${photoframeCapitalized}PropsInterface.`, () => {
        cy.checkPropsInterface(photoframeTag, {
            kulPlaceholder: null,
            kulStyle: null,
            kulThreshold: null,
            kulValue: null,
        } as Required<KulPhotoframePropsInterface>);
    });
});

describe('Props', () => {
    beforeEach(() => {
        cy.navigate(photoframe);
    });

    it('kulStyle: should check for the presence of a <style> element with id kup-style.', () => {
        cy.checkKulStyle();
    });
});
