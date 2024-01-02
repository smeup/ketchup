import { KupEventPayload } from "../../types/GenericTypes";

/**
 * Props of the kup-dropdown-button component.
 * Used to export every prop in an object.
 */
export enum KupEditorProps {
  customStyle = 'Custom style of the component.',
  autosaveTimer = 'When a number is specified, the component will emit the kup-editor-save event at regular intervals. The amount of time every interval will last is specified but the prop itself.',
  initialEditType = 'Initializes editor with the specified editor type. Suported values: "markdown", "wysiwyg".',
  initialValue = 'Initializes editor with the specified string.',
  isReadOnly = 'Defaults at false. When set, When set, the editor’s content can’t be changed..',
  previewStyle = 'Initializes editor with the specified preview type. Suported values: "tab", "vertical".',
  showSaveButton = 'When set, a save button shown in the editor’s toolbar.',
  showToolbar = 'When set to false, the toolbar will not be shown.',
}

export type KupEditorType = 'wysiwyg' | 'markdown';

export type KupEditorPreview = 'tab' | 'vertical';

export interface KupEditorEventPayload extends KupEventPayload {
  htmlValue: string;
  markdownValue: string;
}
