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

export function setCustomStyle(themeCustomStyle: string, customStyle: string) {
    if (themeCustomStyle) {
        if (customStyle) {
            return customStyle + ' ' + themeCustomStyle;
        } else {
            return themeCustomStyle;
        }
    } else if (customStyle) {
        return customStyle;
    } else {
        return undefined;
    }
}
