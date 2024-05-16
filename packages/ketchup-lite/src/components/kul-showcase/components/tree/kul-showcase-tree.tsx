import { Component, Element, Fragment, VNode, h } from '@stencil/core';
import { TREE_DOC, TREE_EXAMPLES } from './kul-showcase-tree-data';
import { DynamicExampleManager } from '../../kul-showcase-utils';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';
import { TreeExample } from './kul-showcase-tree-declarations';

@Component({
    tag: 'kul-showcase-tree',
    styleUrl: 'kul-showcase-tree.scss',
    shadow: true,
})
export class KulShowcaseTree {
    /**
     * References the root HTML element of the component (<kul-showcase-tree>).
     */
    @Element() rootElement: HTMLKulShowcaseTreeElement;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #dynamicExamples: HTMLKulTreeElement[] = [];
    #dynamicExampleManager = new DynamicExampleManager();
    #interval: NodeJS.Timeout;

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #prepExamples() {
        const elements: VNode[] = [];
        for (const key in TREE_EXAMPLES) {
            if (Object.prototype.hasOwnProperty.call(TREE_EXAMPLES, key)) {
                const props: TreeExample = TREE_EXAMPLES[key];
                elements.push(
                    <div class="example" part="example">
                        <div class="description" part="description">
                            {props['data-description']}
                        </div>
                        <div class="comp-wrapper" part="comp-wrapper">
                            <kul-tree
                                key={key}
                                id={key}
                                ref={(el) => {
                                    if (props['data-dynamic']) {
                                        this.#dynamicExamples.push(el);
                                    }
                                }}
                                {...props}
                            ></kul-tree>
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
                <kul-article kulData={TREE_DOC}></kul-article>
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
