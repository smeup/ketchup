import { Component, Element, Fragment, h } from '@stencil/core';
import { KUL_WRAPPER_ID } from '../../../../variables/GenericVariables';

@Component({
    tag: 'kul-showcase-debug',
    styleUrl: 'kul-showcase-debug.scss',
    shadow: true,
})
export class KulShowcaseDebug {
    /**
     * References the root HTML element of the component (<kul-showcase-debug>).
     */
    @Element() rootElement: HTMLKulShowcaseDebugElement;

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    render() {
        return (
            <Fragment>
                <div id={KUL_WRAPPER_ID}>- work in progress -</div>
            </Fragment>
        );
    }
}
