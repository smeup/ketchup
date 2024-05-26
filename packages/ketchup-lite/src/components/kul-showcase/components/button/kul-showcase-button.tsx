import { Component, Element, Fragment, VNode, h } from '@stencil/core';
import { BUTTON_DOC, BUTTON_EXAMPLES } from './kul-showcase-button-data';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';
import { KulButtonStyling } from '../../../kul-button/kul-button-declarations';
import { ButtonExample } from './kul-showcase-button-declarations';
import { SHOWCASE_DYN_EXAMPLES } from '../../kul-showcase-utils';

@Component({
    tag: 'kul-showcase-button',
    styleUrl: 'kul-showcase-button.scss',
    shadow: true,
})
export class KulShowcaseButton {
    /**
     * References the root HTML element of the component (<kul-showcase-button>).
     */
    @Element() rootElement: HTMLKulShowcaseButtonElement;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #dynamicExamples: HTMLKulButtonElement[] = [];
    #dynamicExampleManager = SHOWCASE_DYN_EXAMPLES;
    #interval: NodeJS.Timeout;

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #prepExamples() {
        const elements: VNode[] = [];
        for (const k1 in BUTTON_EXAMPLES) {
            if (Object.prototype.hasOwnProperty.call(BUTTON_EXAMPLES, k1)) {
                const category: ButtonExample = BUTTON_EXAMPLES[k1];
                const group: VNode[] = [];

                for (const k2 in category) {
                    if (Object.prototype.hasOwnProperty.call(category, k2)) {
                        const props: ButtonExample = category[k2];
                        group.push(
                            <div class="example" part="example">
                                <div class="description" part="description">
                                    {props['data-description']}
                                </div>
                                <div class="comp-wrapper" part="comp-wrapper">
                                    <kul-button
                                        key={k1 + '-' + k2}
                                        id={k1 + '-' + k2}
                                        ref={(el) => {
                                            if (el && props['data-dynamic']) {
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
                            </div>
                        );
                    }
                }

                elements.push(
                    <div class="grid-container" part="grid-container">
                        <div class="grid-title" part="grid-title">
                            {k1}
                        </div>
                        <div class="grid" part="grid">
                            {group}
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
        return (
            <Fragment>
                <kul-article kulData={BUTTON_DOC}></kul-article>
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
