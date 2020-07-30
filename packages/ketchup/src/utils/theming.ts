import { errorLogging } from '../utils/error-logging';

declare global {
    interface HTMLElement {
        'kup-theme': any;
        kupCurrentTheme: any;
        kupThemes: any;
    }
}

const dom = document.documentElement;
const kupThemes = JSON.parse(`{
    "dark": {
        "cssVariables": {
            "--kup-background-color": "#2d2d2d",
            "--kup-header-background-color": "#2d2d2d",
            "--kup-drawer-background-color": "#1f1f1f",
            "--kup-main-color": "#82f0e2",
            "--kup-display-mode": "block",
            "--kup-font-family": "Lato, sans-serif",
            "--kup-font-size": "14px",
            "--kup-text-on-main-color": "#555555",
            "--kup-text-color": "#f5f5f5",
            "--kup-icon-color": "#e0e0e0",
            "--kup-hover-background-color": "#3c3c3c",
            "--kup-hover-color": "#dddddd",
            "--kup-border-color": "#535353",
            "--kup-disabled-text-color": "#7e7e7e",
            "--kup-disabled-background-color": "#3c3c3c",
            "--kup-field-background-color": "#2a2a2a",
            "--kup-chip-background-color": "#222222",
            "--kup-spinner-color": "#f2e114",
            "--kup-title-background-color": "#111111",
            "--kup-chart-color-1": "red",
            "--kup-chart-color-2": "blue",
            "--kup-chart-color-3": "orange",
            "--kup-chart-color-4": "purple"
        }
    },
    "default": {
        "cssVariables": {
            "--kup-background-color": "#ffffff",
            "--kup-header-background-color": "#2e2e2e",
            "--kup-drawer-background-color": "#ffffff",
            "--kup-main-color": "#d64325",
            "--kup-display-mode": "block",
            "--kup-font-family": "Roboto, sans-serif",
            "--kup-font-size": "14px",
            "--kup-text-on-main-color": "#ffffff",
            "--kup-text-color": "#2e2e2e",
            "--kup-icon-color": "#505050",
            "--kup-hover-background-color": "#f0f0f0",
            "--kup-hover-color": "#545454",
            "--kup-border-color": "#e0e0e0",
            "--kup-disabled-text-color": "#5c5c5c",
            "--kup-disabled-background-color": "#eaeaea",
            "--kup-field-background-color": "#fafafa",
            "--kup-chip-background-color": "#eaeaea",
            "--kup-spinner-color": "#eaa710",
            "--kup-title-background-color": "#f1f3f4",
            "--kup-chart-color-1": "red",
            "--kup-chart-color-2": "blue",
            "--kup-chart-color-3": "orange",
            "--kup-chart-color-4": "purple"
        }
    },
    "graphite": {
        "cssVariables": {
            "--kup-background-color": "#ffffff",
            "--kup-header-background-color": "#535353",
            "--kup-drawer-background-color": "#ffffff",
            "--kup-main-color": "#888888",
            "--kup-display-mode": "block",
            "--kup-font-family": "Roboto, sans-serif",
            "--kup-font-size": "13px",
            "--kup-text-on-main-color": "#ffffff",
            "--kup-text-color": "#545454",
            "--kup-icon-color": "#808080",
            "--kup-hover-background-color": "#f0f0f0",
            "--kup-hover-color": "#545454",
            "--kup-border-color": "#e0e0e0",
            "--kup-disabled-text-color": "#5c5c5c",
            "--kup-disabled-background-color": "#eaeaea",
            "--kup-field-background-color": "#fafafa",
            "--kup-chip-background-color": "#eaeaea",
            "--kup-spinner-color": "#eaa710",
            "--kup-title-background-color": "#f0f0f0",
            "--kup-chart-color-1": "red",
            "--kup-chart-color-2": "blue",
            "--kup-chart-color-3": "orange",
            "--kup-chart-color-4": "purple"
        },
        "customStyles": {
            "KUP-BUTTON": "#kup-component button { text-transform: unset; }"
        }
    },
    "ocean": {
        "cssVariables": {
            "--kup-background-color": "#e9f1ff",
            "--kup-header-background-color": "#001d3e",
            "--kup-drawer-background-color": "#e6f1ff",
            "--kup-main-color": "#0081c5",
            "--kup-display-mode": "block",
            "--kup-font-family": "Lato, sans-serif",
            "--kup-font-size": "16px",
            "--kup-text-on-main-color": "#ffffff",
            "--kup-text-color": "#1b1b1b",
            "--kup-icon-color": "#505050",
            "--kup-hover-background-color": "#cfe8ff",
            "--kup-hover-color": "#545454",
            "--kup-border-color": "#e0e0e0",
            "--kup-disabled-text-color": "#5c5c5c",
            "--kup-disabled-background-color": "#eaeaea",
            "--kup-field-background-color": "#dce9ff",
            "--kup-chip-background-color": "#eaeaea",
            "--kup-spinner-color": "#eaa710",
            "--kup-title-background-color": "#f1f3f4",
            "--kup-chart-color-1": "red",
            "--kup-chart-color-2": "blue",
            "--kup-chart-color-3": "orange",
            "--kup-chart-color-4": "purple"
        }
    },
    "wildlife": {
        "cssVariables": {
            "--kup-background-color": "#f7fff6",
            "--kup-header-background-color": "#095a1f",
            "--kup-drawer-background-color": "#dbfbd5",
            "--kup-main-color": "#0fa918",
            "--kup-display-mode": "block",
            "--kup-font-family": "Roboto, sans-serif",
            "--kup-font-size": "16px",
            "--kup-text-on-main-color": "#ffffff",
            "--kup-text-color": "#000000",
            "--kup-icon-color": "#333333",
            "--kup-hover-background-color": "#63ab46",
            "--kup-hover-color": "#ffffff",
            "--kup-border-color": "#e0e0e0",
            "--kup-disabled-text-color": "#5c5c5c",
            "--kup-disabled-background-color": "#eaeaea",
            "--kup-field-background-color": "transparent",
            "--kup-chip-background-color": "#eaeaea",
            "--kup-spinner-color": "#eaa710",
            "--kup-title-background-color": "#f1f3f4",
            "--kup-chart-color-1": "red",
            "--kup-chart-color-2": "blue",
            "--kup-chart-color-3": "orange",
            "--kup-chart-color-4": "purple"
        }
    },
    "test": {
        "cssVariables": {
            "--kup-background-color": "#ffffff",
            "--kup-header-background-color": "#f5f5f5",
            "--kup-drawer-background-color": "#ffffff",
            "--kup-main-color": "#d64325",
            "--kup-display-mode": "block",
            "--kup-font-family": "Roboto, sans-serif",
            "--kup-font-size": "14px",
            "--kup-text-on-main-color": "#ffffff",
            "--kup-text-color": "#2e2e2e",
            "--kup-icon-color": "#505050",
            "--kup-hover-background-color": "#f0f0f0",
            "--kup-hover-color": "#545454",
            "--kup-border-color": "#e0e0e0",
            "--kup-disabled-text-color": "#5c5c5c",
            "--kup-disabled-background-color": "#eaeaea",
            "--kup-field-background-color": "#fafafa",
            "--kup-chip-background-color": "#eaeaea",
            "--kup-spinner-color": "#eaa710",
            "--kup-title-background-color": "#f1f3f4",
            "--kup-chart-color-1": "red",
            "--kup-chart-color-2": "blue",
            "--kup-chart-color-3": "orange",
            "--kup-chart-color-4": "purple"
        },
        "customStyles": {
            "KUP-AUTOCOMPLETE": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-BADGE": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-BUTTON": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-BOX": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-CARD": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-CHECKBOX": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-CHIP": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-COMBOBOX": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-FIELD": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-GRID": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-IMAGE": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-LAZY": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-LIST": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-PROGRESS-BAR": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-RADIO": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-SPINNER": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-SWITCH": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-TAB-BAR": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-TEXT-FIELD": "#kup-component { border: 1px solid var(--kup-border-color); }",
            "KUP-TREE": "#kup-component { border: 1px solid var(--kup-border-color); }"
        }
    }
}`);

async function initThemes() {
    if (dom.kupCurrentTheme) {
        //In case multiple initializing instances are launched
        return;
    }
    if (!dom.kupThemes) {
        dom['kupThemes'] = kupThemes;
    } else {
        let message =
            'Ketchup themes were already set by a third party application.';
        errorLogging('theme manager', message);
    }
    if (!dom.getAttribute('kup-theme')) {
        dom.setAttribute('kup-theme', 'default');
    }
    setTheme();

    const observer = new MutationObserver(function () {
        setTheme();
    });
    let container = dom || document.body;
    observer.observe(container, {
        attributes: true,
        attributeFilter: ['kup-theme'],
    });
}

function setTheme() {
    let message = '';
    let themeValue = dom.getAttribute('kup-theme');
    message = 'Setting theme to: ' + themeValue + '.';
    errorLogging('theme manager', message);

    dom.kupCurrentTheme = dom.kupThemes[themeValue];
    if (!dom.kupCurrentTheme) {
        message = 'Invalid theme name, falling back to default.';
        errorLogging('theme manager', message);
        dom.kupCurrentTheme = dom.kupThemes['default'];
    }
    let variables = dom.kupCurrentTheme.cssVariables;
    for (var key in variables) {
        if (variables.hasOwnProperty(key)) {
            var val = variables[key];
            dom.style.setProperty(key, val);
        }
    }
    var event = new CustomEvent('kupThemeChanged');
    document.dispatchEvent(event);
    let components: any = document.querySelectorAll('.handles-custom-style');
    for (let i = 0; i < components.length; i++) {
        components[i].refreshCustomStyle(
            fetchThemeCustomStyle(components[i].tagName)
        );
    }
}

export function fetchThemeCustomStyle(component: string) {
    let styles = dom.kupCurrentTheme.customStyles;
    if (!styles) {
        return undefined;
    }
    let completeStyle: string = undefined;

    if (styles[component]) {
        completeStyle = styles[component];
    }

    return completeStyle;
}

export function setThemeCustomStyle(component: any) {
    if (!dom.kupCurrentTheme) {
        initThemes();
    }
    component.customStyleTheme = fetchThemeCustomStyle(
        component.rootElement.tagName
    );
}

export function setCustomStyle(component: any) {
    if (component.customStyleTheme) {
        if (component.customStyle) {
            return component.customStyleTheme + '' + component.customStyle;
        } else {
            return component.customStyleTheme;
        }
    } else if (component.customStyle) {
        return component.customStyle;
    } else {
        return undefined;
    }
}

export function dynColorContrast(component: any, color: string) {
    let textColour = colorContrast(color);
    if (textColour !== component.dynColor) {
        let message =
            'Detected low contrast on ' +
            component.rootElement.tagName +
            ', switching to ' +
            textColour +
            ' from ' +
            component.dynColor +
            '.';
        errorLogging('theme manager', message);
        component.dynColor = textColour;
        component.refresh = !component.refresh;
    }
}

export function colorContrast(color: string) {
    const colorValues = color.replace(/[^\d,.]/g, '').split(',');
    const brightness = Math.round(
        (parseInt(colorValues[0]) * 299 +
            parseInt(colorValues[1]) * 587 +
            parseInt(colorValues[2]) * 114) /
            1000
    );
    const textColour = brightness > 125 ? 'black' : 'white';
    return textColour;
}
