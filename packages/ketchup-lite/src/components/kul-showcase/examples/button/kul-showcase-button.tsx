import { Component, Element, Fragment, VNode, h } from '@stencil/core';
import { BUTTON_EXAMPLES } from './kul-showcase-button-data';
import { DynamicExampleManager } from '../../kul-showcase-utils';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';
import { KulButtonStyling } from '../../../kul-button/kul-button-declarations';

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
        for (const k1 in BUTTON_EXAMPLES) {
            if (Object.prototype.hasOwnProperty.call(BUTTON_EXAMPLES, k1)) {
                const category = BUTTON_EXAMPLES[k1];
                const group: VNode[] = [];

                for (const k2 in category) {
                    if (Object.prototype.hasOwnProperty.call(category, k2)) {
                        const props = category[k2];
                        group.push(
                            <div class="example">
                                <div class="description">
                                    {props['data-description']}
                                </div>
                                <kul-button
                                    key={k2}
                                    id={k2}
                                    ref={(el) => {
                                        if (props['data-dynamic']) {
                                            this.#dynamicExamples.push(el);
                                        }
                                    }}
                                    {...props}
                                    kulStyling={k1 as KulButtonStyling}
                                >
                                    {props.kulShowSpinner ? (
                                        <kul-spinner
                                            kulDimensions="2px"
                                            kul-active={true}
                                            slot="spinner"
                                        ></kul-spinner>
                                    ) : undefined}
                                </kul-button>
                            </div>
                        );
                    }
                }

                elements.push(
                    <div class="group-container">
                        <div class="group-title">{k1}</div>
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
