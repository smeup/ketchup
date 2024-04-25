import { Component, Element, Fragment, VNode, h } from '@stencil/core';
import { IMAGE_DOC, IMAGE_EXAMPLES } from './kul-showcase-image-data';
import { DynamicExampleManager } from '../../kul-showcase-utils';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';
import { ImageExample } from './kul-showcase-image-declarations';

@Component({
    tag: 'kul-showcase-image',
    styleUrl: 'kul-showcase-image.scss',
    shadow: true,
})
export class KulShowcaseImage {
    /**
     * References the root HTML element of the component (<kul-showcase-image>).
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
                const props: ImageExample = IMAGE_EXAMPLES[key];
                elements.push(
                    <div class="example" part="example">
                        <div class="description" part="description">
                            {props['data-description']}
                        </div>
                        <div class="comp-wrapper" part="comp-wrapper">
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
                <kul-article kulData={IMAGE_DOC}></kul-article>
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
