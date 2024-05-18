import { Component, Element, Fragment, VNode, h } from '@stencil/core';
import {
    TEXTFIELD_DOC,
    TEXTFIELD_EXAMPLES,
} from './kul-showcase-textfield-data';
import { DynamicExampleManager } from '../../kul-showcase-utils';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';
import { KulTextfieldStyling } from '../../../kul-textfield/kul-textfield-declarations';
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
        for (const k1 in TEXTFIELD_EXAMPLES) {
            if (Object.prototype.hasOwnProperty.call(TEXTFIELD_EXAMPLES, k1)) {
                const category: TextfieldExample = TEXTFIELD_EXAMPLES[k1];
                const group: VNode[] = [];

                for (const k2 in category) {
                    if (Object.prototype.hasOwnProperty.call(category, k2)) {
                        const props: TextfieldExample = category[k2];
                        group.push(
                            <div class="example" part="example">
                                <div class="description" part="description">
                                    {props['data-description']}
                                </div>
                                <div class="comp-wrapper" part="comp-wrapper">
                                    <kul-textfield
                                        key={k1 + '-' + k2}
                                        id={k1 + '-' + k2}
                                        ref={(el) => {
                                            if (props['data-dynamic']) {
                                                this.#dynamicExamples.push(el);
                                            }
                                        }}
                                        {...props}
                                        kulStyling={k1 as KulTextfieldStyling}
                                    ></kul-textfield>
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
                <kul-article kulData={TEXTFIELD_DOC}></kul-article>
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
