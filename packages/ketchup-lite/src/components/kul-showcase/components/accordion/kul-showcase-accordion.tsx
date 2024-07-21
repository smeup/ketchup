import { Component, Element, Fragment, VNode, h } from '@stencil/core';
import {
    ACCORDION_DOC,
    ACCORDION_EXAMPLES,
} from './kul-showcase-accordion-data';
import { SHOWCASE_DYN_EXAMPLES } from '../../kul-showcase-utils';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';
import { AccordionExample } from './kul-showcase-accordion-declarations';

@Component({
    tag: 'kul-showcase-accordion',
    styleUrl: 'kul-showcase-accordion.scss',
    shadow: true,
})
export class KulShowcaseAccordion {
    /**
     * References the root HTML element of the component (<kul-showcase-accordion>).
     */
    @Element() rootElement: HTMLKulShowcaseAccordionElement;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #dynamicExamples: HTMLKulAccordionElement[] = [];
    #dynamicExampleManager = SHOWCASE_DYN_EXAMPLES;
    #interval: NodeJS.Timeout;

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #prepExamples() {
        const elements: VNode[] = [];
        for (const key in ACCORDION_EXAMPLES) {
            if (Object.prototype.hasOwnProperty.call(ACCORDION_EXAMPLES, key)) {
                const props: AccordionExample = ACCORDION_EXAMPLES[key];
                elements.push(
                    <div class="example" part="example">
                        <div class="description" part="description">
                            {props['data-description']}
                        </div>
                        <div class="comp-wrapper" part="comp-wrapper">
                            <kul-accordion
                                key={key}
                                id={key}
                                ref={(el) => {
                                    if (el && props['data-dynamic']) {
                                        this.#dynamicExamples.push(el);
                                    }
                                }}
                                {...props}
                            >
                                <slot slot={'0'}>
                                    <div class="slot-content">First slot</div>
                                </slot>
                                <slot slot={'1'}>
                                    <div class="slot-content">Second slot</div>
                                </slot>
                                <slot slot={'2'}>
                                    <div class="slot-content">Third slot</div>
                                </slot>
                            </kul-accordion>
                        </div>
                    </div>
                );
            }
        }
        return elements;
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentDidLoad() {
        if (this.#dynamicExamples.length > 0) {
            this.#interval = setInterval(() => {
                this.#dynamicExamples.forEach((comp) => {
                    switch (
                        comp.dataset.dynamic as KulShowcaseDynamicExampleType
                    ) {
                        case 'custom':
                            comp.kulStyle =
                                this.#dynamicExampleManager.custom.get(comp.id);
                            break;
                    }
                });
            }, 500);
        }
    }

    render() {
        return (
            <Fragment>
                <kul-article kulData={ACCORDION_DOC}></kul-article>
                <div class="examples-title" part="examples-title">
                    Examples
                </div>
                <div class="grid" data-cy="wrapper" part="grid">
                    {this.#prepExamples()}
                </div>
            </Fragment>
        );
    }

    disconnectedCallback() {
        clearInterval(this.#interval);
    }
}
