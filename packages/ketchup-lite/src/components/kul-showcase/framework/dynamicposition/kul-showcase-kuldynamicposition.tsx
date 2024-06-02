import { Component, Element, Fragment, h } from '@stencil/core';
import { KUL_WRAPPER_ID } from '../../../../variables/GenericVariables';
import { DYNAMIC_POSITION_DATA } from './kul-showcase-kuldynamicposition-data';

@Component({
    tag: 'kul-showcase-kuldynamicposition',
    styleUrl: 'kul-showcase-kuldynamicposition.scss',
    shadow: true,
})
export class KulShowcaseKuldynamicposition {
    /**
     * References the root HTML element of the component (<kul-showcase-kuldynamicposition>).
     */
    @Element() rootElement: HTMLKulShowcaseKuldynamicpositionElement;

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    render() {
        return (
            <Fragment>
                <div id={KUL_WRAPPER_ID}>
                    <kul-article kulData={DYNAMIC_POSITION_DATA}></kul-article>
                </div>
            </Fragment>
        );
    }
}
