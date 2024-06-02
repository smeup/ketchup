import { Component, Element, Fragment, h } from '@stencil/core';
import { KUL_WRAPPER_ID } from '../../../../variables/GenericVariables';
import { THEME_DATA } from './kul-showcase-kultheme-data';

@Component({
    tag: 'kul-showcase-kultheme',
    styleUrl: 'kul-showcase-kultheme.scss',
    shadow: true,
})
export class KulShowcaseKultheme {
    /**
     * References the root HTML element of the component (<kul-showcase-kultheme>).
     */
    @Element() rootElement: HTMLKulShowcaseKulthemeElement;

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    render() {
        return (
            <Fragment>
                <div id={KUL_WRAPPER_ID}>
                    <kul-article kulData={THEME_DATA}></kul-article>
                </div>
            </Fragment>
        );
    }
}
