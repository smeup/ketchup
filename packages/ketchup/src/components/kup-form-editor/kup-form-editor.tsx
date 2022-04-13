import {
    Component,
    Element,
    EventEmitter,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
    State,
    Event,
} from '@stencil/core';
import { FButton } from '../../f-components/f-button/f-button';
import { FButtonProps } from '../../f-components/f-button/f-button-declarations';
import { KupDebugCategory } from '../../managers/kup-debug/kup-debug-declarations';
import { KupDragEffect } from '../../managers/kup-interact/kup-interact-declarations';
import { KupLanguageGeneric } from '../../managers/kup-language/kup-language-declarations';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { GenericObject, KupComponent } from '../../types/GenericTypes';
import { getProps, setProps } from '../../utils/utils';
import { componentWrapperId } from '../../variables/GenericVariables';
import {
    KupForm,
    KupFormEditorElement,
    KupFormEditorEventPayload,
    KupFormEditorProps,
    KupSection,
} from './kup-form-editor-declarations';

@Component({
    tag: 'kup-form-editor',
    styleUrl: 'kup-form-editor.scss',
    shadow: true,
})
export class KupFormEditor {
    /**
     * References the root HTML element of the component (<kup-text-field>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * Custom style of the component.
     * @default ""
     * @see https://ketchup.smeup.com/ketchup-showcase/#/customization
     */
    @Prop() customStyle: string = '';
    /**
     * The data of the component.
     * @default false
     */
    @Prop() data: KupForm = null;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    /**
     * Instance of the KupManager class.
     */
    private kupManager: KupManager = kupManagerInstance();

    /**
     * Force render component by internal event.
     */
    @State() forceRender: boolean = false;
    /**
     * Internal data of the component.
     */
    @State() internalData: KupForm = null;

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    @Event({
        eventName: 'kup-formeditor-save',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupSave: EventEmitter<KupFormEditorEventPayload>;

    onKupSave() {
        this.kupSave.emit({
            comp: this,
            id: this.rootElement.id,
            data: this.internalData,
        });
    }

    /*-------------------------------------------------*/
    /*           P u b l i c   M e t h o d s           */
    /*-------------------------------------------------*/

    /**
     * Used to retrieve component's props values.
     * @param {boolean} descriptions - When provided and true, the result will be the list of props with their description.
     * @returns {Promise<GenericObject>} List of props as object, each key will be a prop.
     */
    @Method()
    async getProps(descriptions?: boolean): Promise<GenericObject> {
        return getProps(this, KupFormEditorProps, descriptions);
    }
    /**
     * This method is used to trigger a new render of the component.
     */
    @Method()
    async refresh(): Promise<void> {
        forceUpdate(this);
    }
    /**
     * Sets the props to the component.
     * @param {GenericObject} props - Object containing props that will be set to the component.
     */
    @Method()
    async setProps(props: GenericObject): Promise<void> {
        setProps(this, KupFormEditorProps, props);
    }

    /*-------------------------------------------------*/
    /*           P r i v a t e   M e t h o d s         */
    /*-------------------------------------------------*/

    buildHeader() {
        const clearButtonProp: FButtonProps = {
            icon: 'cancel',
            secondary: true,
            onClick: () => {
                this.forceRender = true;
                setTimeout(() => {
                    this.forceRender = false;
                }, 100);
            },
        };
        const saveButtonProp: FButtonProps = {
            icon: 'save',
            onClick: () => this.onKupSave(),
        };

        return (
            <div class="header">
                <FButton {...clearButtonProp} />
                <FButton {...saveButtonProp} />
            </div>
        );
    }

    buildForm(form: KupForm) {
        const classes = {
            form: true,
            'layout-column': form && form.layout == 'column',
            'layout-row': form && form.layout == 'row',
        };
        return form ? (
            <div class={classes}>
                {form.sections.map((section) => this.buildSection(section))}
            </div>
        ) : (
            <div>
                {this.kupManager.language.translate(
                    KupLanguageGeneric.EMPTY_DATA
                )}
            </div>
        );
    }

    buildSection(section: KupSection) {
        const classes = {
            section: true,
            'layout-column': section && section.layout == 'column',
            'layout-row': section && section.layout == 'row',
            'section-dropzone':
                !section.sections || section.sections.length == 0,
        };

        let styles = {};
        if (section.sections) {
            let gridTemplate = '';
            section.sections.forEach((childSection) => {
                if (!childSection.dim) gridTemplate += ' 1fr';
                else
                    gridTemplate +=
                        childSection.dim.indexOf('%') < 0
                            ? ' ' + childSection.dim + 'px'
                            : ' ' + childSection.dim;
            });
            if (section.layout == 'column')
                styles['gridTemplateRows'] = gridTemplate;
            if (section.layout == 'row')
                styles['gridTemplateColumns'] = gridTemplate;
        }
        return (
            <div
                class={classes}
                style={styles}
                ref={(el) => {
                    if (!el) return;
                    const kel = el as KupFormEditorElement;
                    kel.kupData = { section: section };
                }}
            >
                {section.components
                    ? section.components.map((component) =>
                          component.type == 'SCH' ? (
                              this.buildForm(component as KupForm)
                          ) : (
                              <div
                                  class="component widget-draggable"
                                  ref={(el) => {
                                      if (!el) return;
                                      const kel = el as KupFormEditorElement;
                                      kel.kupData = {
                                          section: section,
                                          componnent: component,
                                      };
                                  }}
                              >
                                  {component.id} - {component.type}
                                  <kup-switch
                                      checked={component.loaded}
                                      onKup-switch-change={(ev) => {
                                          component.loaded =
                                              ev.detail.value == 'on';
                                      }}
                                  ></kup-switch>
                              </div>
                          )
                      )
                    : undefined}
                {section.sections
                    ? section.sections.map((childSection) =>
                          this.buildSection(childSection)
                      )
                    : undefined}
            </div>
        );
    }

    private didRenderInteractables() {
        try {
            const items =
                this.rootElement.shadowRoot.querySelectorAll(
                    '.widget-draggable'
                );
            items.forEach((item) => {
                this.kupManager.interact.draggable(
                    item as HTMLElement,
                    null,
                    null,
                    KupDragEffect.CLONE
                );
            });
        } catch (error) {
            this.kupManager.debug.logMessage(
                this,
                error,
                KupDebugCategory.ERROR
            );
        }
        try {
            const items =
                this.rootElement.shadowRoot.querySelectorAll(
                    '.section-dropzone'
                );
            items.forEach((item) => {
                this.kupManager.interact.dropzone(
                    item as HTMLElement,
                    null,
                    null,
                    {
                        drop: (ev) => {
                            ev.currentTarget.appendChild(ev.relatedTarget);

                            const kSec =
                                ev.currentTarget as KupFormEditorElement;
                            const kComp =
                                ev.relatedTarget as KupFormEditorElement;
                            const idx =
                                kComp.kupData.section.components.indexOf(
                                    kComp.kupData.componnent
                                );

                            kComp.kupData.section.components.splice(idx, 1);
                            kSec.kupData.section.components.push(
                                kComp.kupData.componnent
                            );
                            kComp.kupData.section = kSec.kupData.section;
                        },
                    }
                );
            });
        } catch (error) {
            this.kupManager.debug.logMessage(
                this,
                error,
                KupDebugCategory.ERROR
            );
        }
    }

    unregisterInteractables() {
        this.kupManager.interact.unregister(
            Array.from(
                this.rootElement.shadowRoot.querySelectorAll(
                    '.widget-draggable'
                )
            )
        );
        this.kupManager.interact.unregister(
            Array.from(
                this.rootElement.shadowRoot.querySelectorAll(
                    '.section-dropzone'
                )
            )
        );
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.kupManager.dates.register(this);
        this.kupManager.debug.logLoad(this, false);
        this.kupManager.language.register(this);
        this.kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.kupManager.debug.logRender(this, false);
        if (this.forceRender) {
            this.internalData = null;
            this.unregisterInteractables();
        } else this.internalData = JSON.parse(JSON.stringify(this.data));
    }

    componentDidRender() {
        this.kupManager.debug.logRender(this, true);
        this.didRenderInteractables();
    }

    render() {
        return (
            <Host>
                <style>
                    {this.kupManager.theme.setKupStyle(
                        this.rootElement as KupComponent
                    )}
                </style>
                <div id={componentWrapperId}>
                    {this.buildHeader()}
                    {this.buildForm(this.internalData)}
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.unregisterInteractables();
        this.kupManager.dates.unregister(this);
        this.kupManager.language.unregister(this);
        this.kupManager.theme.unregister(this);
    }
}
