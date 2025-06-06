import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-dropdown-button component.
 * Used to export every prop in an object.
 */
export enum KupEditorProps {
    autosaveTimer = 'When a number is specified, the component will emit the kup-editor-save event at regular intervals. The amount of time every interval will last is specified but the prop itself.',
    editorHeight = 'Sets the height of the component.',
    initialEditType = 'Initializes editor with the specified editor type. Suported values: "markdown", "wysiwyg", "text".',
    initialValue = 'Initializes editor with the specified string.',
    isReadOnly = 'Defaults at false. When set, When set, the editor’s content can’t be changed..',
    selectedTab = 'Sets the markdown editor with the specified tab. Supported values: "preview", "write".',
    previewStyle = 'Initializes editor with the specified preview type. Suported values: "tab", "vertical".',
    showSaveButton = 'When set, a save button shown in the editor’s toolbar.',
    showToolbar = 'When set to false, the toolbar will not be shown.',
}

export type KupEditorType = 'wysiwyg' | 'markdown' | 'text';

export type KupEditorPreview = 'tab' | 'vertical';

export type KupEditorSelectedTab = 'preview' | 'write';

export interface KupEditorEventPayload extends KupEventPayload {
    htmlValue: string;
    markdownValue: string;
}
