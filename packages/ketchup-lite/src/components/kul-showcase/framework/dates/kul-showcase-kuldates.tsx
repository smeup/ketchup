import { Component, Element, Fragment, h } from '@stencil/core';
import { KUL_WRAPPER_ID } from '../../../../variables/GenericVariables';
import { DATES_DOC } from './kul-showcase-kuldates-data';

@Component({
    tag: 'kul-showcase-kuldates',
    styleUrl: 'kul-showcase-kuldates.scss',
    shadow: true,
})
export class KulShowcaseKuldates {
    /**
     * References the root HTML element of the component (<kul-showcase-kuldates>).
     */
    @Element() rootElement: HTMLKulShowcaseKuldatesElement;

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    render() {
        return (
            <Fragment>
                <div id={KUL_WRAPPER_ID}>
                    <kul-article kulData={DATES_DOC}></kul-article>
                </div>
            </Fragment>
        );
    }
}
