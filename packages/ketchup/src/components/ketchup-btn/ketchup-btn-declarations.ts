export interface ButtonStyle {
    fontName?: string;
    fontColor?: string;
    fontSize?: string;
    bold?: boolean | number;
    bckColor?: string;
    italic?: boolean;
    underline?: boolean;
}

export interface ButtonConfig {
    align?: string;
    borderColor?: string;
    btnStyle?: ButtonStyle;
    buttonClass?: string;
    columns?: number;
    fillspace?: boolean;
    flat?: boolean;
    horizontal?: boolean;
    iconUrl?: string;
    rounded?: boolean;
    showicon?: boolean;
    showSelection?: boolean;
    showtext?: boolean;
    textmode?: string;
    transparent?: boolean;
}
