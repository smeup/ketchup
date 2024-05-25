import {
    KulPhotoframeProps,
    KulPhotoframePropsInterface,
} from '../../../src/components/kul-photoframe/kul-photoframe-declarations';
import { PHOTOFRAME_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/photoframe/kul-showcase-photoframe-declarations';

const photoframe = 'photoframe';
const photoframeCapitalized =
    photoframe.charAt(0).toUpperCase() + photoframe.slice(1);
const photoframeTag = 'kul-' + photoframe;

describe(photoframeTag, () => {
    beforeEach(() => {
        cy.navigate(photoframe);
    });

    it(`common: should check that all <${photoframeTag}> exist`, () => {
        cy.checkComponentExamples(
            photoframeTag,
            new Set(PHOTOFRAME_EXAMPLES_KEYS)
        );
    });

    it(`common: should check that the number of <${photoframeTag}> elements matches the number of examples`, () => {
        cy.checkComponentExamplesNumber(Array.from(PHOTOFRAME_EXAMPLES_KEYS));
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.checkDebugInfo(photoframeTag);
    });

    it('common: should check for the presence of at least 2 <style> elements within the shadow DOM', () => {
        cy.checkKulStyle();
    });

    it(`common: should call getProps and check keys against Kul${photoframeCapitalized}Props enum`, () => {
        cy.checkProps(photoframeTag, KulPhotoframeProps);
    });

    it(`common: should call getProps and check keys against Kul${photoframeCapitalized}PropsInterface`, () => {
        cy.checkPropsInterface(photoframeTag, {
            kulPlaceholder: null,
            kulStyle: null,
            kulThreshold: null,
            kulValue: null,
        } as Required<KulPhotoframePropsInterface>);
    });

    it('common: should call getDebugInfo, refresh, and check that renderCount has increased', () => {
        cy.checkRenderCountIncrease(photoframeTag);
    });
});
