import { KulCodePropsInterface } from '../../../kul-code/kul-code-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

interface CodeExample extends KulCodePropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

interface CodeData {
    [index: string]: Partial<CodeExample>;
}

export const CODE_EXAMPLES: CodeData = {
    codeSimple: {
        ['data-description']: 'Simple code component',
        kulValue:
            "const dom = document.documentElement;\ndom.ketchupLiteInit = {\n   theme: { name: 'night' },\n};",
    },
    codeStyle: {
        ['data-description']: 'Code with custom style',
        ['data-dynamic']: 'custom',
    },
};
