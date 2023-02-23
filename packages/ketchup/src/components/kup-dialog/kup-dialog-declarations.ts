/**
 * Props of the kup-dialog component.
 * Used to export every prop in an object.
 */
export enum KupDialogProps {
    autoCenter = 'Auto centers the dialog relatively to the viewport.',
    customStyle = 'Custom style of the component.',
    header = 'Header options.',
    resizable = 'Sets whether the dialog is resizable or not.',
    sizeX = 'The width of the dialog, defaults to auto. Accepts any valid CSS format (px, %, vw, etc.).',
    sizeY = 'The height of the dialog, defaults to auto. Accepts any valid CSS format (px, %, vh, etc.).',
}

export interface KupDialogHeader {
    icons?: KupDialogIcons;
    title?: string;
}

export interface KupDialogIcons {
    close?: boolean;
}

export interface KupDialogAutoCenter {
    onReady?: boolean;
}
