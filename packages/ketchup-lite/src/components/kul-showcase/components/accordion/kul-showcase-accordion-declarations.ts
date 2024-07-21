import { KulAccordionPropsInterface } from '../../../kul-accordion/kul-accordion-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const ACCORDION_EXAMPLES_KEYS = ['simple', 'style'] as const;

export interface AccordionExample extends KulAccordionPropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

export type AccordionData = {
    [K in (typeof ACCORDION_EXAMPLES_KEYS)[number]]: AccordionExample;
};
