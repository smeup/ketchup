import { Component, Element, Fragment, VNode, h } from '@stencil/core';
import { BADGE_DOC, BADGE_EXAMPLES } from './kul-showcase-badge-data';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';
import { BadgeExample } from './kul-showcase-badge-declarations';
import { SHOWCASE_DYN_EXAMPLES } from '../../kul-showcase-utils';
import { KulDataCyAttributes } from '../../../../types/GenericTypes';

@Component({
    tag: 'kul-showcase-badge',
    styleUrl: 'kul-showcase-badge.scss',
    shadow: true,
})
export class KulShowcaseBadge {
    /**
     * References the root HTML element of the component (<kul-showcase-badge>).
     */
    @Element() rootElement: HTMLKulShowcaseBadgeElement;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #dynamicExamples: HTMLKulBadgeElement[] = [];
    #dynamicExampleManager = SHOWCASE_DYN_EXAMPLES;
    #interval: NodeJS.Timeout;

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #prepExamples() {
        const elements: VNode[] = [];
        for (const key in BADGE_EXAMPLES) {
            if (Object.prototype.hasOwnProperty.call(BADGE_EXAMPLES, key)) {
                const props: BadgeExample = BADGE_EXAMPLES[key];
                elements.push(
                    <div class="example" part="example">
                        <div class="description" part="description">
                            {props['data-description']}
                        </div>
                        <div class="comp-wrapper" part="comp-wrapper">
                            <div class="badge-wrapper">
                                <div class="badge-anchor">Simple div</div>
                                <kul-badge
                                    key={key}
                                    id={key}
                                    ref={(el) => {
                                        if (el && props['data-dynamic']) {
                                            this.#dynamicExamples.push(el);
                                        }
                                    }}
                                    {...props}
                                ></kul-badge>
                            </div>
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
        return (
            <Fragment>
                <kul-article kulData={BADGE_DOC}></kul-article>
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
