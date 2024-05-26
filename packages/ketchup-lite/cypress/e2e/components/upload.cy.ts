import {
    KulUploadProps,
    KulUploadPropsInterface,
} from '../../../src/components/kul-upload/kul-upload-declarations';
import { UPLOAD_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/upload/kul-showcase-upload-declarations';

const upload = 'upload';
const uploadCapitalized = upload.charAt(0).toUpperCase() + upload.slice(1);
const uploadTag = 'kul-' + upload;

describe(uploadTag, () => {
    beforeEach(() => {
        cy.navigate(upload);
    });

    it(`common: should check that all <${uploadTag}> exist`, () => {
        cy.checkComponentExamples(uploadTag, new Set(UPLOAD_EXAMPLES_KEYS));
    });

    it(`common: should check that the number of <${uploadTag}> elements matches the number of examples`, () => {
        cy.checkComponentExamplesNumber(Array.from(UPLOAD_EXAMPLES_KEYS));
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.checkDebugInfo(uploadTag);
    });

    it('common: should check for the presence of a <style> element with id kup-style', () => {
        cy.checkKulStyle();
    });

    it(`common: should call getProps and check keys against Kul${uploadCapitalized}Props enum`, () => {
        cy.checkProps(uploadTag, KulUploadProps);
    });

    it(`common: should call getProps and check keys against Kul${uploadCapitalized}PropsInterface`, () => {
        cy.checkPropsInterface(uploadTag, {
            kulLabel: null,
            kulRipple: null,
            kulStyle: null,
            kulValue: null,
        } as Required<KulUploadPropsInterface>);
    });

    it('common: should call getDebugInfo, refresh, and check that renderCount has increased', () => {
        cy.checkRenderCountIncrease(uploadTag);
    });
});
