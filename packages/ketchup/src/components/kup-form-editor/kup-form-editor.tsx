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
    Watch,
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
import { KupRadioData } from '../kup-radio/kup-radio-declarations';
import {
    KupForm,
    KupFormEditorDragTypes,
    KupFormEditorElement,
    KupFormEditorEventPayload,
    KupFormEditorLabels,
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
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * Force render component by internal event.
     */
    @State() resetInternalData: boolean = false;

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
     * Draggable type of Form (Components or Sections).
     */
    private dragType: KupFormEditorDragTypes =
        KupFormEditorDragTypes.Components;

    /**
     * Internal data of the component.
     */
    private internalData: KupForm = null;

    /**
     * Internal data backup of the component for refresh when changed content by drag&drop.
     */
    private internalDataBackup: KupForm = null;

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
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('data')
    dataChanged() {
        this.resetData();
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
            label: KupFormEditorLabels.Reset,
            secondary: true,
            onClick: () => {
                this.resetData();
            },
        };
        const saveButtonProp: FButtonProps = {
            icon: 'save',
            label: KupFormEditorLabels.Save,
            onClick: () => this.onKupSave(),
        };
        const selRadioProp: KupRadioData[] = [
            {
                label: KupFormEditorLabels.Components,
                value: KupFormEditorDragTypes.Components,
                checked: this.dragType == KupFormEditorDragTypes.Components,
            },
            {
                label: KupFormEditorLabels.Sections,
                value: KupFormEditorDragTypes.Sections,
                checked: this.dragType == KupFormEditorDragTypes.Sections,
            },
        ];

        return (
            <div class="header">
                <kup-radio
                    data={selRadioProp}
                    onKup-radio-change={(ev) => {
                        this.dragType = ev.detail
                            .value as KupFormEditorDragTypes;
                        this.resetData(this.internalData);
                    }}
                ></kup-radio>
                <FButton {...clearButtonProp} />
                <FButton {...saveButtonProp} />
            </div>
        );
    }

    buildForm(form: KupForm, parent: KupForm | KupSection) {
        const classes = {
            form: true,
            'layout-column': form && form.layout == 'column',
            'layout-row': form && form.layout == 'row',
            'form-dropzone':
                form &&
                this.dragType == KupFormEditorDragTypes.Sections &&
                form.sections != null &&
                form.sections.length > 0,
        };
        return form ? (
            <div
                class={classes}
                ref={(el) => {
                    if (!el) return;
                    const kel = el as KupFormEditorElement;
                    kel.kupData = { parent: parent, form: form };
                }}
            >
                {form.sections.map((section) =>
                    this.buildSection(section, form)
                )}
            </div>
        ) : (
            <div>
                {this.kupManager.language.translate(
                    KupLanguageGeneric.EMPTY_DATA
                )}
            </div>
        );
    }

    buildSectionHeader(section: KupSection, parent: KupForm | KupSection) {
        const addButtonProp: FButtonProps = {
            icon: 'add',
            slim: true,
            onClick: () => {
                if (!section.sections) {
                    section.sections = [];
                }
                const newSec: KupSection = {
                    id: section.id + (section.sections.length + 1),
                    loaded: section.loaded,
                    layout: section.layout,
                    components: [],
                };
                if (section.components) {
                    section.components.forEach((x) =>
                        newSec.components.push(x)
                    );
                    section.components.splice(0);
                }
                section.sections.push(newSec);
                this.resetData(this.internalData);
            },
        };
        const removeButtonProp: FButtonProps = {
            icon: 'remove',
            slim: true,
            secondary: true,
            onClick: () => {
                const idx = parent.sections.indexOf(section);
                parent.sections.splice(idx, 1);
                this.resetData(this.internalData);
            },
        };

        return (
            <div class="section-header">
                <div>
                    {section.id}{' '}
                    {section.dim ? '(' + section.dim + ')' : undefined} -{' '}
                    {section.layout}
                </div>
                <div>
                    <div class="section-header-actions">
                        <kup-switch
                            checked={section.loaded}
                            label={KupFormEditorLabels.Loaded}
                            onKup-switch-change={(ev) => {
                                section.loaded = ev.detail.value == 'on';
                            }}
                        ></kup-switch>
                        <kup-switch
                            checked={section.layout == 'column'}
                            label={KupFormEditorLabels.Column}
                            onKup-switch-change={(ev) => {
                                section.layout =
                                    ev.detail.value == 'on' ? 'column' : 'row';
                                this.resetData(this.internalData);
                            }}
                        ></kup-switch>
                        <FButton {...addButtonProp} />
                        <FButton {...removeButtonProp} />
                        {section.components && section.components.length > 0 ? (
                            <kup-image
                                resource="widgets"
                                sizeX="24px"
                                sizeY="24px"
                            />
                        ) : undefined}
                    </div>
                </div>
            </div>
        );
    }

    buildSection(section: KupSection, parent: KupForm | KupSection) {
        const classes = {
            section: true,
            'section-draggable':
                this.dragType == KupFormEditorDragTypes.Sections,
            'section-dropzone':
                !section.sections ||
                section.sections.length == 0 ||
                this.dragType == KupFormEditorDragTypes.Sections,
        };

        const bodyClasses = {
            'section-body': true,
            'layout-column': section && section.layout == 'column',
            'layout-row': section && section.layout == 'row',
        };

        let bodyStyles = {};
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
                bodyStyles['gridTemplateRows'] = gridTemplate;
            if (section.layout == 'row')
                bodyStyles['gridTemplateColumns'] = gridTemplate;
        }

        return (
            <div
                class={classes}
                ref={(el) => {
                    if (!el) return;
                    const kel = el as KupFormEditorElement;
                    kel.kupData = { parent: parent, section: section };
                }}
            >
                {this.dragType == KupFormEditorDragTypes.Sections
                    ? this.buildSectionHeader(section, parent)
                    : undefined}
                <div class={bodyClasses} style={bodyStyles}>
                    {this.dragType == KupFormEditorDragTypes.Components &&
                    section.components
                        ? section.components.map((component) =>
                              component.type == 'SCH' ? (
                                  this.buildForm(component as KupForm, section)
                              ) : (
                                  <div
                                      class="component component-draggable"
                                      ref={(el) => {
                                          if (!el) return;
                                          const kel =
                                              el as KupFormEditorElement;
                                          kel.kupData = {
                                              section: section,
                                              componnent: component,
                                          };
                                      }}
                                  >
                                      {component.id} - {component.type}
                                      <kup-switch
                                          checked={component.loaded}
                                          label={KupFormEditorLabels.Loaded}
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
                              this.buildSection(childSection, section)
                          )
                        : undefined}
                </div>
            </div>
        );
    }

    didRenderInteractables() {
        try {
            const items: Element[] = [];
            this.rootElement.shadowRoot
                .querySelectorAll('.component-draggable')
                .forEach((x) => items.push(x));
            this.rootElement.shadowRoot
                .querySelectorAll('.section-draggable')
                .forEach((x) => items.push(x));
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
            const items: Element[] = [];
            this.rootElement.shadowRoot
                .querySelectorAll('.section-dropzone')
                .forEach((x) => items.push(x));
            this.rootElement.shadowRoot
                .querySelectorAll('.form-dropzone')
                .forEach((x) => items.push(x));
            items.forEach((item) => {
                this.kupManager.interact.dropzone(
                    item as HTMLElement,
                    null,
                    null,
                    {
                        drop: (ev) => {
                            ev.currentTarget.appendChild(ev.relatedTarget);
                            this.dropped(
                                ev.currentTarget as KupFormEditorElement,
                                ev.relatedTarget as KupFormEditorElement
                            );
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

    dropped(parent: KupFormEditorElement, child: KupFormEditorElement) {
        if (this.dragType == KupFormEditorDragTypes.Components) {
            const idx = child.kupData.section.components.indexOf(
                child.kupData.componnent
            );

            child.kupData.section.components.splice(idx, 1);
            parent.kupData.section.components.push(child.kupData.componnent);
            child.kupData.section = parent.kupData.section;
        } else if (this.dragType == KupFormEditorDragTypes.Sections) {
            const idx = child.kupData.parent.sections.indexOf(
                child.kupData.section
            );

            child.kupData.parent.sections.splice(idx, 1);
            if (parent.kupData.form) {
                // il nuovo target è la form.
                if (!parent.kupData.form.sections)
                    parent.kupData.form.sections = [];
                parent.kupData.form.sections.push(child.kupData.section);
                child.kupData.parent = parent.kupData.form;
            } else if (parent.kupData.section) {
                // il nuovo target è la section.
                if (!parent.kupData.section.sections)
                    parent.kupData.section.sections = [];

                if (
                    parent.kupData.section.components &&
                    parent.kupData.section.components.length > 0
                ) {
                    // devo creare una section contenitore e sposare i components
                    const newSec: KupSection = {
                        id: parent.kupData.section.id + '1',
                        loaded: parent.kupData.section.loaded,
                        layout: parent.kupData.section.layout,
                        components: [],
                    };
                    parent.kupData.section.components.forEach((x) =>
                        newSec.components.push(x)
                    );
                    parent.kupData.section.components.splice(0);
                    parent.kupData.section.sections.push(newSec);
                }
                parent.kupData.section.sections.push(child.kupData.section);
                child.kupData.parent = parent.kupData.section;
            }
            this.resetData(this.internalData);
        }
    }

    resetData(form: KupForm = null) {
        if (form) this.internalDataBackup = form;
        this.resetInternalData = true;
        setTimeout(() => {
            if (this.internalDataBackup) {
                this.internalData = this.internalDataBackup;
                this.internalDataBackup = null;
            }
            this.resetInternalData = false;
        }, 250);
    }

    unregisterInteractables() {
        this.kupManager.interact.unregister(
            Array.from(
                this.rootElement.shadowRoot.querySelectorAll(
                    '.component-draggable'
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
        this.kupManager.interact.unregister(
            Array.from(
                this.rootElement.shadowRoot.querySelectorAll(
                    '.section-draggable'
                )
            )
        );
        this.kupManager.interact.unregister(
            Array.from(
                this.rootElement.shadowRoot.querySelectorAll('.form-dropzone')
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
        if (this.resetInternalData) {
            this.internalData = null;
            this.unregisterInteractables();
        } else if (!this.internalData)
            this.internalData = JSON.parse(JSON.stringify(this.data));
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
                    {this.buildForm(this.internalData, null)}
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
