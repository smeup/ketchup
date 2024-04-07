import { Component, Element, Fragment, VNode, h } from '@stencil/core';
import { BUTTON_EXAMPLES } from './kul-showcase-button-data';
import { DynamicExampleManager } from '../../kul-showcase-utils';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

@Component({
    tag: 'kul-showcase-button',
    styleUrl: 'kul-showcase-button.scss',
    shadow: true,
})
export class KulShowcaseButton {
    /**
     * References the root HTML element of the component (<kul-button-showcase>).
     */
    @Element() rootElement: HTMLKulShowcaseButtonElement;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #dynamicExamples: HTMLKulButtonElement[] = [];
    #dynamicExampleManager = new DynamicExampleManager();
    #interval: NodeJS.Timeout;

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #prepExamples() {
        const elements: VNode[] = [];
        for (const key in BUTTON_EXAMPLES) {
            if (Object.prototype.hasOwnProperty.call(BUTTON_EXAMPLES, key)) {
                const category = BUTTON_EXAMPLES[key];
                const group: VNode[] = [];

                for (const key in category) {
                    if (Object.prototype.hasOwnProperty.call(category, key)) {
                        const props = category[key];
                        group.push(
                            <div class="example">
                                <div class="description">
                                    {props['data-description']}
                                </div>
                                <kul-button
                                    key={key}
                                    id={key}
                                    ref={(el) => {
                                        if (props['data-dynamic']) {
                                            this.#dynamicExamples.push(el);
                                        }
                                    }}
                                    {...props}
                                ></kul-button>
                            </div>
                        );
                    }
                }

                elements.push(
                    <div class="group-container">
                        <div class="group-title">{key}</div>
                        <div class="group">{group}</div>
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
                        case 'state-colors':
                            comp.className =
                                'hydrated ' +
                                this.#dynamicExampleManager.stateColors.get(
                                    comp.id
                                );
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
