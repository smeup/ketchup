import { Component, Element, Fragment, h } from '@stencil/core';
import { KUL_WRAPPER_ID } from '../../../../variables/GenericVariables';
import { LANGUAGE_DATA } from './kul-showcase-kullanguage-data';

@Component({
    tag: 'kul-showcase-kullanguage',
    styleUrl: 'kul-showcase-kullanguage.scss',
    shadow: true,
})
export class KulShowcaseKullanguage {
    /**
     * References the root HTML element of the component (<kul-showcase-kullanguage>).
     */
    @Element() rootElement: HTMLKulShowcaseKullanguageElement;

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    render() {
        return (
            <Fragment>
                <div id={KUL_WRAPPER_ID}>
                    <kul-article kulData={LANGUAGE_DATA}></kul-article>
                </div>
            </Fragment>
        );
    }
}
