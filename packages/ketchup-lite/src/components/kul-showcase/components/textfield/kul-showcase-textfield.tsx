import { Component, Element, Fragment, VNode, h } from '@stencil/core';
import {
    TEXTFIELD_DOC,
    TEXTFIELD_EXAMPLES,
} from './kul-showcase-textfield-data';
import { DynamicExampleManager } from '../../kul-showcase-utils';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';
import { TextfieldExample } from './kul-showcase-textfield-declarations';

@Component({
    tag: 'kul-showcase-textfield',
    styleUrl: 'kul-showcase-textfield.scss',
    shadow: true,
})
export class KulShowcaseTextfield {
    /**
     * References the root HTML element of the component (<kul-showcase-textfield>).
     */
    @Element() rootElement: HTMLKulShowcaseTextfieldElement;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #dynamicExamples: HTMLKulTextfieldElement[] = [];
    #dynamicExampleManager = new DynamicExampleManager();
    #interval: NodeJS.Timeout;

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #prepExamples() {
        const elements: VNode[] = [];
        for (const key in TEXTFIELD_EXAMPLES) {
            if (Object.prototype.hasOwnProperty.call(TEXTFIELD_EXAMPLES, key)) {
                const props: TextfieldExample = TEXTFIELD_EXAMPLES[key];
                elements.push(
                    <div class="example" part="example">
                        <div class="description" part="description">
                            {props['data-description']}
                        </div>
                        <div class="comp-wrapper" part="comp-wrapper">
                            <kul-textfield
                                key={key}
                                id={key}
                                ref={(el) => {
                                    if (props['data-dynamic']) {
                                        this.#dynamicExamples.push(el);
                                    }
                                }}
                                {...props}
                            ></kul-textfield>
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
                <kul-article kulData={TEXTFIELD_DOC}></kul-article>
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
