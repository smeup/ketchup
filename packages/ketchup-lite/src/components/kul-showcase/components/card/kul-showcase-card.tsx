import { Component, Element, Fragment, VNode, h } from '@stencil/core';
import { CARD_DOC, CARD_EXAMPLES } from './kul-showcase-card-data';
import { DynamicExampleManager } from '../../kul-showcase-utils';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';
import { CardExample } from './kul-showcase-card-declarations';

@Component({
    tag: 'kul-showcase-card',
    styleUrl: 'kul-showcase-card.scss',
    shadow: true,
})
export class KulShowcaseCard {
    /**
     * References the root HTML element of the component (<kul-showcase-card>).
     */
    @Element() rootElement: HTMLKulShowcaseCardElement;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #dynamicExamples: HTMLKulCardElement[] = [];
    #dynamicExampleManager = new DynamicExampleManager();
    #interval: NodeJS.Timeout;

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #prepExamples() {
        const elements: VNode[] = [];
        for (const k1 in CARD_EXAMPLES) {
            if (Object.prototype.hasOwnProperty.call(CARD_EXAMPLES, k1)) {
                const layout: CardExample = CARD_EXAMPLES[k1];
                const layoutWrapper: VNode[] = [];

                for (const k2 in layout) {
                    if (Object.prototype.hasOwnProperty.call(layout, k2)) {
                        const props: CardExample = layout[k2];
                        layoutWrapper.push(
                            <div class="example" part="example">
                                <div class="description" part="description">
                                    {props['data-description']}
                                </div>
                                <div class="comp-wrapper" part="comp-wrapper">
                                    <kul-card
                                        key={k2}
                                        id={k1 + '-' + k2}
                                        ref={(el) => {
                                            if (props['data-dynamic']) {
                                                this.#dynamicExamples.push(el);
                                            }
                                        }}
                                        {...props}
                                    ></kul-card>
                                </div>
                            </div>
                        );
                    }
                }
                elements.push(
                    <div class="grid-container" part="grid-container">
                        <div class="grid-title" part="grid-title">
                            Layout {k1}
                        </div>
                        <div class="grid" part="grid">
                            {layoutWrapper}
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
                <kul-article kulData={CARD_DOC}></kul-article>
                <div class="examples-title" part="examples-title">
                    Examples
                </div>
                <div data-cy="wrapper">{this.#prepExamples()}</div>
            </Fragment>
        );
    }

    disconnectedCallback() {
        clearInterval(this.#interval);
    }
}
