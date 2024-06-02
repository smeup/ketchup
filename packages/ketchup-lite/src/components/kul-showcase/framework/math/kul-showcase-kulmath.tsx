import { Component, Element, Fragment, h } from '@stencil/core';
import { KUL_WRAPPER_ID } from '../../../../variables/GenericVariables';
import { MATH_DATA } from './kul-showcase-kulmath-data';

@Component({
    tag: 'kul-showcase-kulmath',
    styleUrl: 'kul-showcase-kulmath.scss',
    shadow: true,
})
export class KulShowcaseKulmath {
    /**
     * References the root HTML element of the component (<kul-showcase-kulmath>).
     */
    @Element() rootElement: HTMLKulShowcaseKulmathElement;

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    render() {
        return (
            <Fragment>
                <div id={KUL_WRAPPER_ID}>
                    <kul-article kulData={MATH_DATA}></kul-article>
                </div>
            </Fragment>
        );
    }
}
