const fixedStyle: { [key: string]: string } = {
    '*BOLD': 'font-weight: bold; !important;',
    '*ERROR': 'color: white !important; background: red !important;',
    '*UNDERLINE': 'text-decoration: underline !important;',
    '*ITALIC': 'font-style: italic !important;',
};

export function getGCellStyle(gCellId: string): Record<string, string> {
    const style = getGCellStyleAsString(gCellId);

    const styleObj = style
        .split(';')
        .filter((s) => s.trim())
        .reduce((acc, rule) => {
            const [key, value] = rule.split(':').map((s) => s.trim());
            if (key && value) {
                const cleanValue = value.replace(/!important/g, '').trim();
                const camelCaseKey = key.replace(/-([a-z])/g, (_, char) =>
                    char.toUpperCase()
                );
                acc[camelCaseKey] = cleanValue;
            }
            return acc;
        }, {} as Record<string, string>);
    return styleObj;
}

export function getGCellStyleAsString(gCellId: string): string {
    const regexp = /\d{2}[A-Z0-9]\d{2}|\*(BOLD|ERROR|ITALIC|UNDERLINE)/;

    let result = '';

    if (gCellId?.match(regexp)) {
        result = fixedStyle[gCellId];

        if (!result) {
            result = '';
            for (let i = 0; i < gCellId.length; i++) {
                switch (i) {
                    case 0:
                        // font color
                        result += getFontColorCss(gCellId.charAt(i));
                        break;
                    case 1:
                        // font decoration
                        result += getFontDecorationCss(gCellId.charAt(i));
                        break;
                    case 2:
                        // background color
                        result += getBackgroundColorCss(gCellId.charAt(i));
                        break;
                    case 3:
                        // font family
                        result += getFontCss(gCellId.charAt(i));
                        break;
                    default:
                        break;
                }
            }
        }
    }
    return result;
}

function getFontColorCss(c: string): string {
    let result: string;

    switch (c) {
        case '0':
            result = 'color: #000000 !important;'; // black
            break;
        case '1':
            result = 'color: #6C7A89 !important;'; // gray
            break;
        case '2':
            result = 'color: #3A539B !important;'; // blue
            break;
        case '3':
            result = 'color: var(--kup-danger-color-60) !important;'; // red
            break;
        case '4':
            result = 'color: #C0C0C0 !important;'; // dark grey
            break;
        case '5':
            result = 'color: #FFFFFF !important;'; // white
            break;
        case '6':
            result = 'color: var(--kup-success-color-60) !important;'; // green
            break;
        case '7':
            result = 'color: #9B59B6 !important;'; // purple
            break;
        default:
            result = '';
            break;
    }

    return result;
}

function getFontDecorationCss(c: string): string {
    let ris: string;

    switch (c) {
        case '1':
            ris = 'font-weight: bold !important;';
            break;
        case '2':
            ris = 'font-style: italic !important;';
            break;
        case '3':
            ris = 'text-decoration: underline !important;';
            break;
        default:
            ris = '';
            break;
    }

    return ris;
}

function getBackgroundColorCss(c: string) {
    let ris: string;

    switch (c) {
        case '0':
            ris = `background: transparent;`;
            break;
        case '1':
            ris = `background: #D5ECF7;`;
            break;
        case '2':
            ris = `background: #59ABE3;`;
            break;
        case '3':
            ris = `background: #446CB3;`;
            break;
        case '4':
            ris = `background: #9B59B6;`;
            break;
        case '5':
            ris = `background: #F1A9A0;`;
            break;
        case '6':
            ris = `background: #E74C3C;`;
            break;
        case '7':
            ris = `background: #CF000F;`;
            break;
        case '8':
            ris = `background: #C0392B;`;
            break;
        case '9':
            ris = `background: #95A5A6;`;
            break;
        case 'A':
            ris = `background: #F5D76E;`;
            break;
        case 'B':
            ris = `background: #F7CA18;`;
            break;
        case 'C':
            ris = `background: #F7CA18;`;
            break;
        case 'D':
            ris = `background: #F39C12;`;
            break;
        case 'E':
            ris = `background: #90C695;`;
            break;
        case 'F':
            ris = `background: #26A65B;`;
            break;
        case 'G':
            ris = `background: #019875;`;
            break;
        case 'H':
            ris = `background: #36D7B7;`;
            break;
        default:
            ris = '';
            break;
    }

    return ris;
}

function getFontCss(c: string): string {
    let ris: string;

    switch (c) {
        case '1':
            ris = 'font-family: "Courier New", Courier, monospace !important;';
            break;
        case '2':
            ris =
                'font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif !important;';
            break;
        case '3':
            ris = 'font-family: Arial, Helvetica, sans-serif !important;';
            break;
        default:
            ris = '';
            break;
    }

    return ris;
}
