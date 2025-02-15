const fixedStyle: Record<string, string> = {
    '*BOLD': 'font-weight: bold !important;',
    '*ERROR': 'color: white !important; background: red !important;',
    '*UNDERLINE': 'text-decoration: underline !important;',
    '*ITALIC': 'font-style: italic !important;',
};

const colorMap: Record<string, string> = {
    '0': '#000000', // black
    '1': '#6C7A89', // gray
    '2': '#3A539B', // blue
    '3': '#C0392B', // red
    '4': '#C0C0C0', // dark grey
    '5': '#FFFFFF', // white
    '6': '#26A65B', // green
    '7': '#9B59B6', // purple
};

const decorationMap: Record<string, string> = {
    '1': 'font-weight: bold !important;',
    '2': 'font-style: italic !important;',
    '3': 'text-decoration: underline !important;',
};

const backgroundMap: Record<string, string> = {
    '0': '#FFFFFF',
    '1': '#D5ECF7',
    '2': '#59ABE3',
    '3': '#446CB3',
    '4': '#9B59B6',
    '5': '#F1A9A0',
    '6': '#E74C3C',
    '7': '#CF000F',
    '8': '#C0392B',
    '9': '#95A5A6',
    A: '#F5D76E',
    B: '#F7CA18',
    C: '#F7CA18',
    D: '#F39C12',
    E: '#90C695',
    F: '#26A65B',
    G: '#019875',
    H: '#36D7B7',
};

const fontMap: Record<string, string> = {
    '1': 'font-family: "Courier New", Courier, monospace !important;',
    '2': 'font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif !important;',
    '3': 'font-family: Arial, Helvetica, sans-serif !important;',
};

export function getGCellStyle(gCellId: string): Record<string, string> {
    const style = getGCellStyleAsString(gCellId);
    const styleObj = style
        .split(';')
        .filter((s) => s.trim())
        .reduce((acc, rule) => {
            const [key, value] = rule.split(':').map((s) => s.trim());
            if (key && value) {
                const camelCaseKey = key.replace(/-([a-z])/g, (_, char) =>
                    char.toUpperCase()
                );
                acc[camelCaseKey] = value.replace(/!important/g, '').trim();
            }
            return acc;
        }, {} as Record<string, string>);
    return styleObj;
}

export function getGCellStyleAsString(gCellId: string): string {
    const regexp = /\d{2}[A-Z0-9]\d{2}|\*(BOLD|ERROR|ITALIC|UNDERLINE)/;
    if (gCellId?.match(regexp)) {
        return fixedStyle[gCellId] || parseGCellId(gCellId);
    }
    return '';
}

function parseGCellId(gCellId: string): string {
    return gCellId
        .split('')
        .map((char, index) => {
            switch (index) {
                case 0:
                    return `color: ${colorMap[char] || ''} !important;`;
                case 1:
                    return decorationMap[char] || '';
                case 2:
                    return `background: ${backgroundMap[char] || ''};`;
                case 3:
                    return fontMap[char] || '';
                default:
                    return '';
            }
        })
        .join('');
}
