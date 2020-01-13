// Widget utils functions

// -------------
// BUTTON
// -------------

export interface J4objKupButtonConfig {
    flat: boolean;
    buttonStyle: {};
    imageSrc: string;
    iconClass: string;
    label: string;
    tooltip: string;
    textmode: string;
    showtext: boolean;
    fillspace: boolean;
}

export function buildButtonConfig(value: string, config): J4objKupButtonConfig {
    let label = value;
    let textMode = 'Hint';
    let buttonStyle = null;
    let icon = null;
    let imageSrc = null;
    let tooltip = null;
    let flat = true;
    let showtext = false;
    let fillspace = false;

    if (config) {
        icon = config.icon;

        imageSrc = config.imageSrc;

        tooltip = config.tooltip;

        if (config.hasOwnProperty('showtext')) {
            showtext = config.showtext;
        }

        if (config.hasOwnProperty('fillspace')) {
            fillspace = config.fillspace;
        }

        if (config.hasOwnProperty('flat')) {
            flat = config.flat;

            if (!flat) {
                textMode = '';
            }
        }

        if (config.hasOwnProperty('buttonStyle')) {
            buttonStyle = config.buttonStyle;
        }
    }

    return {
        buttonStyle: buttonStyle,
        label,
        textmode: textMode,
        imageSrc: imageSrc,
        tooltip: tooltip,
        iconClass: icon,
        flat,
        showtext,
        fillspace,
    };
}
