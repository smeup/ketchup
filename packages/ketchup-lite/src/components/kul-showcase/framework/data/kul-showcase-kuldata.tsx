import { Component, Element, Fragment, h } from '@stencil/core';
import { KUL_WRAPPER_ID } from '../../../../variables/GenericVariables';
import { DATA_DATA } from './kul-showcase-kuldata-data';

@Component({
    tag: 'kul-showcase-kuldata',
    styleUrl: 'kul-showcase-kuldata.scss',
    shadow: true,
})
export class KulShowcaseKuldata {
    /**
     * References the root HTML element of the component (<kul-showcase-kuldata>).
     */
    @Element() rootElement: HTMLKulShowcaseKuldataElement;

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    render() {
        return (
            <Fragment>
                <div id={KUL_WRAPPER_ID}>
                    <kul-article kulData={DATA_DATA}></kul-article>
                </div>
            </Fragment>
        );
    }
}
