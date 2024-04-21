import { Component, Element, Fragment, VNode, h } from '@stencil/core';
import { SPINNER_DOC, SPINNER_EXAMPLES } from './kul-showcase-spinner-data';

@Component({
    tag: 'kul-showcase-spinner',
    styleUrl: 'kul-showcase-spinner.scss',
    shadow: true,
})
export class KulShowcaseSpinner {
    /**
     * References the root HTML element of the component (<kul-showcase-spinner>).
     */
    @Element() rootElement: HTMLKulShowcaseSpinnerElement;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #interval: NodeJS.Timeout;

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #prepExamples() {
        const elements: VNode[] = [];
        // Iterate over each example category in SPINNER_EXAMPLES
        for (const k1 in SPINNER_EXAMPLES) {
            if (Object.prototype.hasOwnProperty.call(SPINNER_EXAMPLES, k1)) {
                const type = SPINNER_EXAMPLES[k1];

                // Iterate over each spinner type
                for (const k2 in type) {
                    if (Object.prototype.hasOwnProperty.call(type, k2)) {
                        const layout = type[k2];
                        const layoutWrapper: VNode[] = [];

                        // Iterate over each layout number
                        for (const k3 in layout) {
                            if (
                                Object.prototype.hasOwnProperty.call(layout, k3)
                            ) {
                                const props = layout[k3];
                                layoutWrapper.push(
                                    <div class="example" part="example">
                                        <div
                                            class="description"
                                            part="description"
                                        >
                                            {props['data-description']}
                                        </div>
                                        <div
                                            class="comp-wrapper"
                                            part="comp-wrapper"
                                        >
                                            <kul-spinner
                                                key={k3}
                                                id={k3}
                                                {...props}
                                            ></kul-spinner>
                                        </div>
                                    </div>
                                );
                            }
                        }
                        elements.push(
                            <div class="grid-container" part="grid-container">
                                <div class="grid-title" part="grid-title">
                                    {k1} (Layout {k2})
                                </div>
                                <div class="grid" part="grid">
                                    {layoutWrapper}
                                </div>
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

    render() {
        return (
            <Fragment>
                <kul-article kulData={SPINNER_DOC}></kul-article>
                <div data-cy="wrapper">{this.#prepExamples()}</div>
            </Fragment>
        );
    }

    disconnectedCallback() {
        clearInterval(this.#interval);
    }
}
