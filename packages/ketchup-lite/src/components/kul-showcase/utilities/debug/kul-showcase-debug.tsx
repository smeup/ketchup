import { Component, Element, Fragment, State, h } from '@stencil/core';
import { KUL_WRAPPER_ID } from '../../../../variables/GenericVariables';
import { DEBUG_DOC } from './kul-showcase-debug-data';
import { KulButtonEventPayload } from '../../../kul-button/kul-button-declarations';
import { KulListEventPayload } from '../../../kul-list/kul-list-declarations';
import { GenericObject } from '../../../../components';

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
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * String keeping track of the current component selected by the dropdown.
     * @default ""
     */
    @State() currentComponent = '';
    /**
     * Object keeping track of the current specified props.
     * @default undefined
     */
    @State() currentProps: GenericObject;
    /**
     * Flag signaling whether the props JSON is valid or not.
     * @default undefined
     */
    @State() invalidJson = false;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #propsTemplate = JSON.stringify(JSON.parse('{ "kulProp": "" }'), null, 2);

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    #prepComponent() {
        const ComponentTag = this.currentComponent
            ? 'kul-' + this.currentComponent
            : undefined;
        return ComponentTag ? (
            <div class="component-wrapper">
                <ComponentTag
                    class={`component--${ComponentTag}`}
                    key={`${Date.now()}-${Math.random()}`}
                    {...this.currentProps}
                ></ComponentTag>
            </div>
        ) : (
            <div class="placeholder">
                <div class="placeholder__text">
                    The selected component will be displayed here
                </div>
            </div>
        );
    }

    #prepTextarea() {
        return this.currentComponent ? (
            <kul-textfield
                class={this.invalidJson ? 'kul-danger' : ''}
                key={'enabled'}
                kulLabel={this.invalidJson ? 'Invalid JSON' : 'Props'}
                onKul-textfield-event={(e) => {
                    if (e.detail.eventType === 'change') {
                        try {
                            const json = JSON.parse(e.detail.value);
                            this.currentProps = json;
                            this.invalidJson = false;
                        } catch (error) {
                            this.invalidJson = true;
                        }
                    }
                }}
                kulStyling="textarea"
                kulValue={this.#propsTemplate}
            ></kul-textfield>
        ) : (
            <kul-textfield
                key={'disabled'}
                kulDisabled={true}
                kulFullWidth={true}
                kulLabel="Props"
                kulStyling="textarea"
                kulValue="Select a component from the dropdown menu."
            ></kul-textfield>
        );
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    render() {
        return (
            <Fragment>
                <div id={KUL_WRAPPER_ID}>
                    <kul-article
                        kulData={DEBUG_DOC}
                        onKul-article-event={(e) => {
                            const articleDetail = e.detail;
                            const buttonDetail = (
                                articleDetail.originalEvent as CustomEvent<KulButtonEventPayload>
                            ).detail;
                            if (
                                articleDetail.eventType === 'kul-event' &&
                                buttonDetail?.eventType === 'kul-event'
                            ) {
                                const listDetail = (
                                    buttonDetail.originalEvent as CustomEvent<KulListEventPayload>
                                ).detail;
                                this.currentComponent =
                                    listDetail.node.id.toLowerCase();
                            }
                        }}
                    ></kul-article>
                    <div class="grid" data-cy="wrapper" part="grid">
                        {[this.#prepTextarea(), this.#prepComponent()]}
                    </div>
                </div>
            </Fragment>
        );
    }
}
