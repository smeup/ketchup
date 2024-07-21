import {
    KulUploadEvent,
    KulUploadProps,
    KulUploadPropsInterface,
} from '../../../src/components/kul-upload/kul-upload-declarations';
import { UPLOAD_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/upload/kul-showcase-upload-declarations';
import { KulDataCyAttributes } from '../../../src/types/GenericTypes';

const upload = 'upload';
const uploadCapitalized = upload.charAt(0).toUpperCase() + upload.slice(1);
const uploadTag = 'kul-' + upload;

describe('Basic', () => {
    beforeEach(() => {
        cy.navigate(upload);
    });

    it(`Should check that all <${uploadTag}> exist.`, () => {
        cy.checkComponentExamples(uploadTag, new Set(UPLOAD_EXAMPLES_KEYS));
    });

    it(`Should check that the number of <${uploadTag}> elements matches the number of examples.`, () => {
        cy.checkComponentExamplesNumber(Array.from(UPLOAD_EXAMPLES_KEYS));
    });
});

describe('Events', () => {
    it(`pointerdown`, () => {
        cy.navigate(upload);
        const eventType: KulUploadEvent = 'pointerdown';
        cy.checkEvent(upload, eventType);
        cy.get('@eventElement').click();
        cy.getCyElement(KulDataCyAttributes.CHECK).should('exist');
    });

    it(`ready`, () => {
        cy.checkReadyEvent(upload);
    });
});

describe('Methods', () => {
    beforeEach(() => {
        cy.navigate(upload);
    });

    it('getDebugInfo: check the structure of the returned object.', () => {
        cy.checkDebugInfo(uploadTag);
    });

    it('getDebugInfo, refresh: check that renderCount has increased after refreshing.', () => {
        cy.checkRenderCountIncrease(uploadTag);
    });

    it(`getProps: check keys against Kul${uploadCapitalized}Props enum.`, () => {
        cy.checkProps(uploadTag, KulUploadProps);
    });

    it(`getProps: check keys against Kul${uploadCapitalized}PropsInterface.`, () => {
        cy.checkPropsInterface(uploadTag, {
            kulLabel: null,
            kulRipple: null,
            kulStyle: null,
            kulValue: null,
        } as Required<KulUploadPropsInterface>);
    });
});

describe('Props', () => {
    beforeEach(() => {
        cy.navigate(upload);
    });

    it('Should check for the presence of a <style> element with id kup-style.', () => {
        cy.checkKulStyle();
    });
});
