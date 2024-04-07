import { Component, Element, Fragment, VNode, h } from '@stencil/core';
import { IMAGE_EXAMPLES } from './kul-showcase-image-data';
import { DynamicExampleManager } from '../../kul-showcase-utils';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

@Component({
    tag: 'kul-showcase-image',
    styleUrl: 'kul-showcase-image.scss',
    shadow: true,
})
export class KulShowcaseImage {
    /**
     * References the root HTML element of the component (<kul-image-showcase>).
     */
    @Element() rootElement: HTMLKulShowcaseImageElement;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #dynamicExamples: HTMLKulImageElement[] = [];
    #dynamicExampleManager = new DynamicExampleManager();
    #interval: NodeJS.Timeout;

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #prepExamples() {
        const elements: VNode[] = [];
        for (const key in IMAGE_EXAMPLES) {
            if (Object.prototype.hasOwnProperty.call(IMAGE_EXAMPLES, key)) {
                const props = IMAGE_EXAMPLES[key];
                elements.push(
                    <div class="example">
                        <div class="description">
                            {props['data-description']}
                        </div>
                        <kul-image
                            key={key}
                            id={key}
                            ref={(el) => {
                                if (props['data-dynamic']) {
                                    this.#dynamicExamples.push(el);
                                }
                            }}
                            {...props}
                        ></kul-image>
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
                        case 'positions':
                            comp.className =
                                'hydrated ' +
                                this.#dynamicExampleManager.position.get(
                                    comp.id
                                );
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
