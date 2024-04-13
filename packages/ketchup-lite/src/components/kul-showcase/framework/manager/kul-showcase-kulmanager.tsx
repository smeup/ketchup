import { Component, Element, Fragment, h } from '@stencil/core';
import { KUL_WRAPPER_ID } from '../../../../variables/GenericVariables';

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
                    <article class="text-wrapper" part="text-wrapper">
                        <section class="text-section" part="text-section">
                            <div class="text-container" part="text-container">
                                <p class="text-paragraph" part="text-paragraph">
                                    Ketchup Lite is more than just a
                                    webcomponents library, it offers a handful
                                    of cross-component utilities which are also
                                    usable from the application on which Ketchup
                                    Lite is installed.
                                </p>
                                <p class="text-paragraph" part="text-paragraph">
                                    <span class="code-word" part="code-word">
                                        KulManager
                                    </span>
                                    is a Javascript class which wraps quite a
                                    few functionalities and contains other
                                    manager classes - such as the theme one.
                                </p>
                            </div>
                        </section>
                        <section class="text-section" part="text-section">
                            <p class="text-container" part="text-container">
                                <p class="text-paragraph" part="text-paragraph">
                                    <span class="code-word" part="code-word">
                                        KulManager
                                    </span>
                                    is automatically instanced as a singleton by
                                    the first component loaded inside the DOM.
                                </p>
                                <p class="text-paragraph" part="text-paragraph">
                                    There are a few default behaviors of the
                                    library which can be altered. In order to do
                                    so, it's possible to define a custom
                                    property on the documentElement named
                                    <span class="code-word" part="code-word">
                                        ketchupLiteInit
                                    </span>
                                    before the
                                    <span class="code-word" part="code-word">
                                        body
                                    </span>
                                    of the document.
                                </p>
                                <p class="text-paragraph" part="text-paragraph">
                                    For example, let's say you wish to load
                                    ketchup with the "Night" theme enabled.
                                    <br />
                                    This is everything you need to do in a
                                    script inside the
                                    <span class="code-word" part="code-word">
                                        head
                                    </span>
                                    tag:
                                    <code class="flat">{`const dom = document.documentElement;\ndom.ketchupLiteInit = {\n   theme: { name: 'night' },\n};`}</code>
                                    There are many initialization settings, here
                                    is the list:
                                </p>
                                <p class="text-paragraph" part="text-paragraph">
                                    <span class="code-word" part="code-word">
                                        assetsPath
                                    </span>
                                    (string): sets the URL where static assets
                                    used by the library are located, such as
                                    SVGs.
                                </p>
                                <p class="text-paragraph" part="text-paragraph">
                                    <span class="code-word" part="code-word">
                                        autoSetLocalization
                                    </span>
                                    (boolean): when true, the library
                                    automatically sets KupLanguage and KupMath
                                    locales to KupDates'.
                                </p>
                                <p class="text-paragraph" part="text-paragraph">
                                    <span class="code-word" part="code-word">
                                        dates
                                    </span>
                                </p>
                                <p class="text-paragraph" part="text-paragraph">
                                    <span>
                                        - <strong>locale(string)</strong>: sets
                                        the locale of the library (used by
                                        components such as kup-date-picker).
                                    </span>
                                </p>
                                <p class="text-paragraph" part="text-paragraph">
                                    <span class="code-word" part="code-word">
                                        debug
                                    </span>
                                </p>
                                <p class="text-paragraph" part="text-paragraph">
                                    <span>
                                        - <strong>active(boolean)</strong>: sets
                                        whether the debug is active or not.
                                    </span>
                                    <span>
                                        - <strong>autoPrint(boolean)</strong>:
                                        sets whether the debug widget
                                        automatically print new logs.
                                    </span>
                                    <span>
                                        - <strong>logLimit(number)</strong>:
                                        sets the maximum number of debug logs to
                                        store.
                                    </span>
                                </p>
                                <p class="text-paragraph" part="text-paragraph">
                                    <span class="code-word" part="code-word">
                                        language
                                    </span>
                                </p>
                                <p class="text-paragraph" part="text-paragraph">
                                    <span>
                                        - <strong>list(JSON)</strong>: sets a
                                        custom list of languages.
                                    </span>
                                    <span>
                                        - <strong>name(string)</strong>: sets
                                        the initial language of the library.
                                    </span>
                                </p>
                                <p class="text-paragraph" part="text-paragraph">
                                    <span class="code-word" part="code-word">
                                        scrollOnHover
                                    </span>
                                </p>
                                <p class="text-paragraph" part="text-paragraph">
                                    <span>
                                        - <strong>delay(number)</strong>: sets
                                        the delay after which the scroll on
                                        hover starts.
                                    </span>
                                    <span>
                                        - <strong>step(number)</strong>: sets
                                        the step size in pixel of each scroll.
                                    </span>
                                </p>
                                <p class="text-paragraph" part="text-paragraph">
                                    <span class="code-word" part="code-word">
                                        theme
                                    </span>
                                </p>
                                <p class="text-paragraph" part="text-paragraph">
                                    <span>
                                        - <strong>list(JSON)</strong>: sets a
                                        custom list of themes.
                                    </span>
                                    <span>
                                        - <strong>name(string)</strong>: sets
                                        the initial theme of the library.
                                    </span>
                                </p>
                            </p>
                        </section>
                    </article>
                </div>
            </Fragment>
        );
    }
}
