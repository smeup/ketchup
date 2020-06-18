import { h } from '@stencil/core';

declare global {
    interface Document {
        kupTheme: any;
    }
}

export function themeCustomStyle(component: string) {
    if (!document.kupTheme) {
        return undefined;
    }
    let styles = document.kupTheme.customStyles;
    if (!styles) {
        return undefined;
    }
    let completeStyle: string = undefined;

    if (styles[component]) {
        completeStyle = styles[component];
    }

    return completeStyle;
}

export function setCustomStyle(customStyleTheme: string, customStyle: string) {
    if (customStyleTheme) {
        if (customStyle) {
            return (
                <style>
                    {customStyleTheme}
                    {customStyle}
                </style>
            );
        } else {
            return <style>{customStyleTheme}</style>;
        }
    } else if (customStyle) {
        return <style>{customStyle}</style>;
    } else {
        return <style>--no custom style detected--</style>;
    }
}
