import { Component, Element, Fragment, VNode, h } from '@stencil/core';
import { CARD_EXAMPLES } from './kul-showcase-card-data';
import { DynamicExampleManager } from '../../kul-showcase-utils';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

@Component({
    tag: 'kul-showcase-card',
    styleUrl: 'kul-showcase-card.scss',
    shadow: true,
})
export class KulShowcaseCard {
    /**
     * References the root HTML element of the component (<kul-card-showcase>).
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
        // Iterate over each example category in CARD_EXAMPLES
        for (const k1 in CARD_EXAMPLES) {
            if (Object.prototype.hasOwnProperty.call(CARD_EXAMPLES, k1)) {
                const family = CARD_EXAMPLES[k1];

                // Iterate over each card's layout family
                for (const k2 in family) {
                    if (Object.prototype.hasOwnProperty.call(family, k2)) {
                        const layout = family[k2];
                        const layoutWrapper: VNode[] = [];

                        // Iterate over each family's layout numbers
                        for (const k3 in layout) {
                            if (
                                Object.prototype.hasOwnProperty.call(layout, k3)
                            ) {
                                const props = layout[k3];
                                layoutWrapper.push(
                                    <div class="example">
                                        <div class="description">
                                            {props['data-description']}
                                        </div>
                                        <kul-card
                                            key={k3}
                                            id={k3}
                                            ref={(el) => {
                                                if (props['data-dynamic']) {
                                                    this.#dynamicExamples.push(
                                                        el
                                                    );
                                                }
                                            }}
                                            {...props}
                                        ></kul-card>
                                    </div>
                                );
                            }
                        }
                        elements.push(
                            <div class="group-container">
                                <div class="group-title">
                                    Layout {k1} {k2}
                                </div>
                                <div class="group">{layoutWrapper}</div>
                            </div>
                        );
                    }
                }
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
        return <Fragment>{this.#prepExamples()}</Fragment>;
    }

    disconnectedCallback() {
        clearInterval(this.#interval);
    }
}
