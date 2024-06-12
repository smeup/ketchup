import { Component, Element, Fragment, VNode, h } from '@stencil/core';
import { TOAST_DOC, TOAST_EXAMPLES } from './kul-showcase-toast-data';
import { ToastExample } from './kul-showcase-toast-declarations';
import { SHOWCASE_DYN_EXAMPLES } from '../../kul-showcase-utils';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';
import { KulDataCyAttributes } from '../../../../types/GenericTypes';

@Component({
    tag: 'kul-showcase-toast',
    styleUrl: 'kul-showcase-toast.scss',
    shadow: true,
})
export class KulShowcaseToast {
    /**
     * References the root HTML element of the component (<kul-showcase-toast>).
     */
    @Element() rootElement: HTMLKulShowcaseToastElement;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #dynamicExamples: HTMLKulToastElement[] = [];
    #dynamicExampleManager = SHOWCASE_DYN_EXAMPLES;
    #interval: NodeJS.Timeout;

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #prepExamples() {
        const elements: VNode[] = [];
        for (const key in TOAST_EXAMPLES) {
            if (Object.prototype.hasOwnProperty.call(TOAST_EXAMPLES, key)) {
                const props: ToastExample = TOAST_EXAMPLES[key];
                elements.push(
                    <div class="example" part="example">
                        <div class="description" part="description">
                            {props['data-description']}
                        </div>
                        <div class="comp-wrapper" part="comp-wrapper">
                            <kul-toast
                                key={key}
                                id={key}
                                ref={(el) => {
                                    if (el && props['data-dynamic']) {
                                        this.#dynamicExamples.push(el);
                                    }
                                }}
                                {...props}
                            ></kul-toast>
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
                <kul-article kulData={TOAST_DOC}></kul-article>
                <div class="examples-title" part="examples-title">
                    Examples
                </div>
                <div
                    class="grid"
                    data-cy={KulDataCyAttributes.SHOWCASE_GRID_WRAPPER}
                    part="grid"
                >
                    {this.#prepExamples()}
                </div>
            </Fragment>
        );
    }

    disconnectedCallback() {
        clearInterval(this.#interval);
    }
}
