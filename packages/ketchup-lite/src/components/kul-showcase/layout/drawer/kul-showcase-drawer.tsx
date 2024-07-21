import { Component, Element, Fragment, VNode, h } from '@stencil/core';
import { DRAWER_DOC, DRAWER_EXAMPLES } from './kul-showcase-drawer-data';
import { DrawerExample } from './kul-showcase-drawer-declarations';
import { KulDataCyAttributes } from '../../../../types/GenericTypes';

@Component({
    tag: 'kul-showcase-drawer',
    styleUrl: 'kul-showcase-drawer.scss',
    shadow: true,
})
export class KulShowcaseDrawer {
    /**
     * References the root HTML element of the component (<kul-showcase-drawer>).
     */
    @Element() rootElement: HTMLKulShowcaseDrawerElement;

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #prepExamples() {
        const elements: VNode[] = [];
        for (const key in DRAWER_EXAMPLES) {
            if (Object.prototype.hasOwnProperty.call(DRAWER_EXAMPLES, key)) {
                const props: DrawerExample = DRAWER_EXAMPLES[key];
                elements.push(
                    <div class="example" part="example">
                        <div class="description" part="description">
                            {props['data-description']}
                        </div>
                        <div class="comp-wrapper" part="comp-wrapper">
                            <iframe
                                key={key}
                                id={key}
                                {...props.iframeProps}
                            ></iframe>
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

    render() {
        return (
            <Fragment>
                <kul-article kulData={DRAWER_DOC}></kul-article>
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
}
