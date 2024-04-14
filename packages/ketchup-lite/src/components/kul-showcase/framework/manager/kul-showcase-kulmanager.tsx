import { Component, Element, Fragment, h } from '@stencil/core';
import { KUL_WRAPPER_ID } from '../../../../variables/GenericVariables';
import { MANAGER_DATA } from './kul-showcase-kulmanager-data';

@Component({
    tag: 'kul-showcase-kulmanager',
    styleUrl: 'kul-showcase-kulmanager.scss',
    shadow: true,
})
export class KulShowcaseKulmanager {
    /**
     * References the root HTML element of the component (<kul-showcase-kulmanager>).
     */
    @Element() rootElement: HTMLKulShowcaseKulmanagerElement;

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    render() {
        return (
            <Fragment>
                <div id={KUL_WRAPPER_ID}>
                    <kul-article kulData={MANAGER_DATA}></kul-article>
                </div>
            </Fragment>
        );
    }
}
