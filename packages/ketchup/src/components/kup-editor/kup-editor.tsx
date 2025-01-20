import {
    Component,
    Element,
    Event,
    EventEmitter,
    forceUpdate,
    h,
    Host,
    Method,
    Prop,
    State,
    Watch,
} from '@stencil/core';
import {
    KupManager,
    kupManagerInstance,
} from '../../managers/kup-manager/kup-manager';
import { componentWrapperId } from '../../variables/GenericVariables';
import { GenericObject, KupEventPayload } from '../../types/GenericTypes';
import Editor, { EditorOptions } from '@toast-ui/editor';
import {
    KupEditorEventPayload,
    KupEditorSelectedTab,
    KupEditorPreview,
    KupEditorProps,
    KupEditorType,
} from './kup-editor-declarations';
import Viewer, {
    ViewerOptions,
} from '@toast-ui/editor/dist/toastui-editor-viewer';
import { getProps, setProps } from '../../utils/utils';

@Component({
    tag: 'kup-editor',
    shadow: false,
})
export class KupEditor {
    /**
     * References the root HTML element of the component (<kup-editor>).
     */
    @Element() rootElement: HTMLElement;

    /*-------------------------------------------------*/
    /*                   S t a t e s                   */
    /*-------------------------------------------------*/

    /**
     * The editor instance.
     * @default null
     */
    @State() editor: Editor = null;

    /**
     * The editor html element instance.
     * @default null
     */
    @State() editorRef: HTMLDivElement;

    /**
     * The viewer instance.
     * @default null
     */
    @State() viewer: Viewer = null;

    /*-------------------------------------------------*/
    /*                    P r o p s                    */
    /*-------------------------------------------------*/

    /**
     * When specified, the component will emit the kup-editor-autosave event at regular intervals.
     * @default null
     */
    @Prop() autosaveTimer: number;

    /**
     * Sets the height of the component.
     * @default "auto"
     */
    @Prop() editorHeight: string = 'auto';

    /**
     * The editor type.
     * @default 'markdown'
     */
    @Prop() initialEditType: KupEditorType = 'markdown';

    /**
     * The initial editor value.
     * @default ''
     */
    @Prop({ mutable: false, reflect: false }) initialValue: string = '';

    /**
     * Defines whether the editor is disabled or not.
     * @default false
     */
    @Prop() isReadOnly: boolean = false;

    /**
     * The editor preview style.
     * @default 'vertical'
     */
    @Prop() previewStyle: KupEditorPreview = 'vertical';

    /**
     * The markdown editor selected tab.
     * @default 'write'
     */
    @Prop() selectedTab: KupEditorSelectedTab = 'write';

    /**
     * Defines whether to show the save button in editor's toolbar or not.
     * @default true
     */
    @Prop() showSaveButton: boolean = true;

    /**
     * Defines whether to show the editor's toolbar or not.
     * @default true
     */
    @Prop() showToolbar: boolean = true;

    /*-------------------------------------------------*/
    /*       I n t e r n a l   V a r i a b l e s       */
    /*-------------------------------------------------*/

    #autosaveInterval: NodeJS.Timeout;
    #hasChanges: boolean = false;
    #initialContent: string = '';
    #kupManager: KupManager = kupManagerInstance();
    #unsavedChangesIndex = 0;
    #unsavedChangesItem: toastui.ToolbarButton = {
        options: {
            className: 'kup-editor-unsaved-changes',
            el: this.createUnsavedChanges(),
            tooltip: 'There are unsaved changes.',
        },
        type: 'button',
    };

    /*-------------------------------------------------*/
    /*                   E v e n t s                   */
    /*-------------------------------------------------*/

    /**
     * Triggered at regular intervals if autosaveTimer prop is initialised.
     */
    @Event({
        eventName: 'kup-editor-autosave',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupAutoSave: EventEmitter<KupEditorEventPayload>;

    /**
     * Triggered when the component is ready.
     */
    @Event({
        eventName: 'kup-editor-ready',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupReady: EventEmitter<KupEventPayload>;

    /**
     * Triggered when save button is clicked.
     */
    @Event({
        eventName: 'kup-editor-save',
        composed: true,
        cancelable: false,
        bubbles: true,
    })
    kupSave: EventEmitter<KupEditorEventPayload>;

    /*-------------------------------------------------*/
    /*                  W a t c h e r s                */
    /*-------------------------------------------------*/

    @Watch('editorRef')
    onEditorRefUpdated() {
        if (this.editorRef && !this.editor) {
            if (!this.isReadOnly) {
                this.createEditor();
            } else {
                this.createViewer();
            }
        }
    }

    @Watch('editor')
    onEditorUpdate() {
        if (this.editor) {
            // to give focus to editor
            setTimeout(() => {
                if (this.editor) {
                    this.editor.moveCursorToStart();
                    if (
                        this.initialEditType === 'markdown' &&
                        this.previewStyle === 'tab' &&
                        this.selectedTab === 'preview'
                    ) {
                        this.updateMarkDownPreviewTab();
                    }
                }
            }, 100);
        }
    }

    @Watch('initialEditType')
    onInitialEditTypeChanged() {
        if (
            (this.initialEditType != 'markdown' &&
                this.initialEditType != 'wysiwyg') ||
            !this.editor
        )
            return;
        this.editor.changeMode(this.initialEditType);
        this.updateToolbarVisiblity();
    }

    @Watch('isReadOnly')
    onIsReadOnlyChanged() {
        if (this.isReadOnly) {
            this.editor.remove();
            this.editor = null;
            this.createViewer();
        } else {
            this.viewer.remove();
            this.viewer = null;
            this.createEditor();
        }
    }

    @Watch('previewStyle')
    onPreviewStyleChanged() {
        if (
            (this.previewStyle != 'tab' && this.previewStyle != 'vertical') ||
            !this.editor
        )
            return;
        this.editor.changePreviewStyle(this.previewStyle);

        /*
        this is a fix to a bug in editor, when editor is in tab style and preview tab is selected
        all toolbar buttons are disabled so at that point if we change the preview style to vertical
        the toolbar buttons still remains disabled, so we call the enable all button function manually
        */
        if (this.previewStyle == 'vertical') {
            this.editor.getUI().getToolbar().enableAllButton();
        }

        this.updateToolbarVisiblity();
    }

    @Watch('selectedTab')
    onMarkdownPreviewTabChanged() {
        if (
            (this.initialEditType != 'markdown' &&
                this.previewStyle != 'tab') ||
            !this.editor
        )
            return;
        this.updateMarkDownPreviewTab();
    }

    @Watch('showSaveButton')
    onShowSaveButtonChanged() {
        if (this.editor) {
            const toolbar = this.editor.getUI().getToolbar();
            if (this.showSaveButton) {
                toolbar.insertItem(0, this.getToolBarWithSaveButton(false)[0]);
            } else {
                toolbar.removeItem(0);
            }
        }
    }

    @Watch('showToolbar')
    onShowToolBarChanged() {
        if (this.editor) {
            this.updateToolbarVisiblity();
        }
    }

    @Watch('autosaveTimer')
    onAutosaveTimerChanged() {
        if (this.editor) {
            this.#autosaveInterval && clearInterval(this.#autosaveInterval);
            typeof this.autosaveTimer === 'number' &&
                this.autosaveTimer > 0 &&
                this.setAutosaveInterval();
        }
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
        return getProps(this, KupEditorProps, descriptions);
    }
    /**
     * Returns the component's internal value as html.
     */
    @Method()
    async getValueAsHTML(): Promise<string> {
        return this.editor?.getHtml() ?? '';
    }
    /**
     * Returns the component's internal value as markdown.
     */
    @Method()
    async getValueAsMarkdown(): Promise<string> {
        return this.editor?.getMarkdown() ?? '';
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
        setProps(this, KupEditorProps, props);
    }

    /*-------------------------------------------------*/
    /*          P r i v a t e   M e t h o d s          */
    /*-------------------------------------------------*/

    createEditor() {
        const editorProps: EditorOptions = {
            el: this.editorRef,
            events: {
                change: () => {
                    if (this.#initialContent !== this.editor.getMarkdown()) {
                        if (!this.#hasChanges) {
                            this.#unsavedChangesIndex =
                                this.editor.getUI().getToolbar().getItems()
                                    .length - 1;
                            this.editor
                                .getUI()
                                .getToolbar()
                                .insertItem(
                                    this.#unsavedChangesIndex,
                                    this.#unsavedChangesItem
                                );
                        }
                        this.#hasChanges = true;
                    } else {
                        if (this.#hasChanges) {
                            this.editor
                                .getUI()
                                .getToolbar()
                                .removeItem(this.#unsavedChangesIndex);
                        }
                        this.#hasChanges = false;
                    }
                },
                focus: () => {
                    if (!this.isReadOnly && !this.showToolbar) {
                        this.showToolbar = true;
                    }
                },
            },
            height: this.editorHeight ?? 'auto',
            hideModeSwitch: true,
            initialEditType: this.initialEditType,
            initialValue: this.initialValue,
            placeholder: 'Type your text here...',
            previewStyle: this.previewStyle,
            usageStatistics: false,
        };

        if (this.showSaveButton) {
            editorProps.toolbarItems = this.getToolBarWithSaveButton();
        }

        this.editor = new Editor(editorProps);
        this.#initialContent = this.editor.getMarkdown();

        if (!this.showToolbar) {
            this.updateToolbarVisiblity();
        }

        typeof this.autosaveTimer === 'number' &&
            this.autosaveTimer > 0 &&
            this.setAutosaveInterval();
    }

    createViewer() {
        this.initialValue = JSON.parse(`"${this.initialValue}"`);
        const viewerProps: ViewerOptions = {
            el: this.editorRef,
            initialValue: this.initialValue,
        };

        this.viewer = new Viewer(viewerProps);
    }

    createSaveButton() {
        const button: HTMLElement = document.createElement('button');

        button.className = 'kup-editor-save-button';
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#585858" version="1.1" id="Capa_1" width="12px" height="12px" viewBox="0 0 407.096 407.096" xml:space="preserve">
        <g>
            <g>
                <path d="M402.115,84.008L323.088,4.981C319.899,1.792,315.574,0,311.063,0H17.005C7.613,0,0,7.614,0,17.005v373.086    c0,9.392,7.613,17.005,17.005,17.005h373.086c9.392,0,17.005-7.613,17.005-17.005V96.032    C407.096,91.523,405.305,87.197,402.115,84.008z M300.664,163.567H67.129V38.862h233.535V163.567z"/>
                <path d="M214.051,148.16h43.08c3.131,0,5.668-2.538,5.668-5.669V59.584c0-3.13-2.537-5.668-5.668-5.668h-43.08    c-3.131,0-5.668,2.538-5.668,5.668v82.907C208.383,145.622,210.92,148.16,214.051,148.16z"/>
            </g>
        </g>
        </svg>`;
        button.addEventListener('click', this.onEditorSave.bind(this));

        return button;
    }

    createDivider() {
        const el: HTMLElement = document.createElement('div');
        el.className = 'kup-editor-divider';
        const divider: toastui.ToolbarButton = {
            options: {
                className: 'kup-editor-divider',
                el,
            },
            type: 'button',
        };
        return divider;
    }

    createUnsavedChanges() {
        const el: HTMLElement = document.createElement('span');
        el.className = 'kup-editor-unsaved-changes';
        el.innerText = 'Unsaved changes.';
        return el;
    }

    updateToolbarVisiblity() {
        const toolbarElement = this.editor.getUI().getToolbar().el;
        const toolbarParentElement = toolbarElement.parentElement;

        toolbarElement.style.display = '';
        toolbarParentElement.style.display = '';

        if (!this.showToolbar) {
            toolbarElement.style.display = 'none';
            if (
                this.initialEditType != 'markdown' ||
                this.previewStyle != 'tab'
            ) {
                toolbarParentElement.style.display = 'none';
            }
        }
    }

    setAutosaveInterval() {
        this.#autosaveInterval = setInterval(() => {
            this.onEditorAutoSave();
        }, this.autosaveTimer);
    }

    onEditorSave() {
        this.editor.getUI().getToolbar().removeItem(this.#unsavedChangesIndex);
        this.#hasChanges = false;
        this.kupSave.emit(this.getSaveAndAutoSaveProps());
    }

    onEditorAutoSave() {
        this.kupAutoSave.emit(this.getSaveAndAutoSaveProps());
    }

    updateMarkDownPreviewTab() {
        const tabSection = this.rootElement.querySelector(
            '.te-markdown-tab-section'
        );
        if (!tabSection) return;

        this.selectedTab === 'preview' &&
            (tabSection.querySelector(
                'button:last-child'
            ) as HTMLElement)!.click();
        this.selectedTab === 'write' &&
            tabSection.querySelector('button')!.click();
    }

    getToolBarWithSaveButton(includeDefaultItems: boolean = true) {
        const options: Partial<EditorOptions> = {
            toolbarItems: [
                {
                    options: {
                        el: this.createSaveButton(),
                        tooltip: 'Save',
                    },
                    type: 'button',
                },
                this.createDivider(),
                ...(includeDefaultItems ? this.getDefaultToolBarItems() : []),
            ],
        };

        return options.toolbarItems;
    }

    getDefaultToolBarItems() {
        const toolBarItems = [
            'heading',
            'bold',
            'italic',
            'strike',
            this.createDivider(),
            'hr',
            'quote',
            this.createDivider(),
            'ul',
            'ol',
            'task',
            'indent',
            'outdent',
            this.createDivider(),
            'table',
            'image',
            'link',
            this.createDivider(),
            'code',
            'codeblock',
        ];

        if (this.initialEditType == 'markdown') {
            toolBarItems.push('scrollSync');
        }
        return toolBarItems;
    }

    getSaveAndAutoSaveProps(): KupEditorEventPayload {
        return {
            comp: this,
            id: this.rootElement.id,
            htmlValue: this.editor.getHtml() ?? '',
            markdownValue: this.editor.getMarkdown() ?? '',
        };
    }

    /*-------------------------------------------------*/
    /*          L i f e c y c l e   H o o k s          */
    /*-------------------------------------------------*/

    componentWillLoad() {
        this.#kupManager.debug.logLoad(this, false);
        this.#kupManager.theme.register(this);
    }

    componentDidLoad() {
        this.kupReady.emit({
            comp: this,
            id: this.rootElement.id,
        });
        this.#kupManager.debug.logLoad(this, true);
    }

    componentWillRender() {
        this.#kupManager.debug.logRender(this, false);
    }

    componentDidRender() {
        this.#kupManager.debug.logRender(this, true);
    }

    render() {
        return (
            <Host>
                <div id={componentWrapperId}>
                    <div
                        key={this.rootElement.id}
                        ref={(el) => (this.editorRef = el)}
                        class="kup-editor"
                    ></div>
                </div>
            </Host>
        );
    }

    disconnectedCallback() {
        this.#kupManager.theme.unregister(this);
        this.#autosaveInterval && clearInterval(this.#autosaveInterval);
    }
}
