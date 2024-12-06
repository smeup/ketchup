/**
 * Props of the kup-dialog component.
 * Used to export every prop in an object.
 */
export enum KupDialogProps {
    autoCenter = 'Auto centers the dialog relatively to the viewport.',
    customStyle = 'Custom style of the component.',
    header = 'Header options.',
    modal = 'Set of options to display the dialog as a modal.',
    resizable = 'Sets whether the dialog is resizable or not.',
    sizeX = 'The width of the dialog, defaults to auto. Accepts any valid CSS format (px, %, vw, etc.).',
    sizeY = 'The height of the dialog, defaults to auto. Accepts any valid CSS format (px, %, vh, etc.).',
    maxSizeY = 'The max height of the dialog, defaults to 90dvh.',
    maxSizeX = 'The max width of the dialog, defaults to 90dvw.',
}

export interface KupDialogAutoCenter {
    onReady?: boolean;
}

export interface KupDialogHeader {
    icons?: KupDialogIcons;
    title?: string;
}

export interface KupDialogIcons {
    close?: boolean;
}

export interface KupDialogModal {
    closeOnBackdropClick?: boolean;
}
