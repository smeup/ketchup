class GCellStyleGenerator {
    getStyleCSS(style: string): string {
        // TODO add regexp to validate

        switch (style) {
            case '*BOLD':
                return '{ font-weight: bold !important; }';
            case '*ERROR':
                return '{ color: white !important; background-color: red !important; }';
            case '*UNDERLINE':
                return '{ text-decoration: underline !important; }';
            case '*ITALIC':
                return '{ font-style: italic !important; }';
        }

        if (style.length !== 5) {
            return '';
        }

        let result = '';

        for (let i = 0; i < style.length; i++) {
            switch (i) {
                case 0:
                    // primo byte --> font color
                    result += this.getFontColorCss(style.charAt(i));
                    break;
                case 1:
                    // secondo byte --> "decorazione" font
                    result += this.getFontDecorationCss(style.charAt(i));
                    break;
                case 2:
                    // terzo byte --> background color
                    result += this.getBackgroundColorCss(style.charAt(i));
                    break;
                case 3:
                    // quarto byte --> tipo font
                    result += this.getFontCss(style.charAt(i));
                    break;
                default:
                    break;
            }
        }

        result += ' }';
        return result;
    }

    getFontColorCss(c: string): string {
        let ris: string;

        switch (c) {
            case '0':
                ris = 'color: #000000 !important;'; // black
                break;
            case '1':
                ris = 'color: #6C7A89 !important;'; // gray
                break;
            case '2':
                ris = 'color: #3A539B !important;'; // blue
                break;
            case '3':
                ris = 'color: #C0392B !important;'; // red
                break;
            case '4':
                ris = 'color: #C0C0C0 !important;'; // dark grey
                break;
            case '5':
                ris = 'color: #FFFFFF !important;'; // walter white
                break;
            default:
                ris = '';
                break;
        }

        return ris;
    }

    getFontDecorationCss(c: string): string {
        let ris:string;

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

    getBackgroundColorCss(c: string) {
        let ris:string;

        switch (c) {
            case '0':
                ris = `background: #FFFFFF;`;
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

    getFontCss(c: string): string {
        let ris:string;

        switch (c) {
            case '1':
                ris =
                    'font-family: "Courier New", Courier, monospace !important;';
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
}
