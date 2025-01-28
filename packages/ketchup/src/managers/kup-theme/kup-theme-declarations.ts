import { GenericObject, KupTagNames } from '../../types/GenericTypes';

/**
 * Variable used to fetch the MASTER customStyle (used in every component).
 */
export const masterCustomStyle = 'MASTER';
/**
 * Components using the FButton functional component.
 */
export const fButtonUsers = [
    KupTagNames.BUTTON,
    KupTagNames.BUTTON_LIST,
    KupTagNames.BOX,
    KupTagNames.CALENDAR,
    KupTagNames.CARD,
    KupTagNames.CELL,
    KupTagNames.DASHBOARD,
    KupTagNames.DATA_TABLE,
    KupTagNames.DROPDOWN_BUTTON,
    KupTagNames.FAMILY_TREE,
    KupTagNames.FORM,
    KupTagNames.INPUT_PANEL,
    KupTagNames.IMAGE_LIST,
    KupTagNames.OBJECT_FIELD,
    KupTagNames.SNACKBAR,
    KupTagNames.TOOLBAR,
];
/**
 * Components using the FCell functional component.
 */
export const fCellUsers = [
    KupTagNames.BOX,
    KupTagNames.CARD,
    KupTagNames.CELL,
    KupTagNames.DATA_TABLE,
    KupTagNames.FORM,
    KupTagNames.INPUT_PANEL,
    KupTagNames.TREE,
    KupTagNames.TOOLBAR,
];
/**
 * Components using the FCheckbox functional component.
 */
export const fCheckboxUsers = [
    KupTagNames.BOX,
    KupTagNames.CELL,
    KupTagNames.CHECKBOX,
    KupTagNames.DASHBOARD,
    KupTagNames.DATA_TABLE,
    KupTagNames.FORM,
    KupTagNames.INPUT_PANEL,
    KupTagNames.LIST,
    KupTagNames.TREE,
    KupTagNames.TOOLBAR,
];
/**
 * Components using the FChip functional component.
 */
export const fChipUsers = [
    KupTagNames.BOX,
    KupTagNames.CALENDAR,
    KupTagNames.CELL,
    KupTagNames.CHIP,
    KupTagNames.DATA_TABLE,
    KupTagNames.FORM,
    KupTagNames.INPUT_PANEL,
    KupTagNames.TREE,
    KupTagNames.TOOLBAR,
];
/**
 * Components using the FImage functional component.
 */
export const fImageUsers = [
    KupTagNames.ACCORDION,
    KupTagNames.ACTIVITY_TIMELINE,
    KupTagNames.BADGE,
    KupTagNames.BOX,
    KupTagNames.BUTTON,
    KupTagNames.BUTTON_LIST,
    KupTagNames.CALENDAR,
    KupTagNames.CARD,
    KupTagNames.CELL,
    KupTagNames.CHIP,
    KupTagNames.CHECKBOX,
    KupTagNames.DASHBOARD,
    KupTagNames.DATA_TABLE,
    KupTagNames.DIALOG,
    KupTagNames.DROPDOWN_BUTTON,
    KupTagNames.FAMILY_TREE,
    KupTagNames.FORM,
    KupTagNames.IMAGE,
    KupTagNames.IMAGE_LIST,
    KupTagNames.INPUT_PANEL,
    KupTagNames.LIST,
    KupTagNames.MAGIC_BOX,
    KupTagNames.OBJECT_FIELD,
    KupTagNames.RADIO,
    KupTagNames.SNACKBAR,
    KupTagNames.TAB_BAR,
    KupTagNames.TEXT_FIELD,
    KupTagNames.TOOLBAR,
    KupTagNames.TYPOGRAPHY,
    KupTagNames.TYPOGRAPHY_LIST,
    KupTagNames.TREE,
];
/**
 * Components using the FPaginator functional component.
 */
export const fPaginatorUsers = [KupTagNames.BOX, KupTagNames.DATA_TABLE];
/**
 * Components using the FProgressBar functional component.
 */
export const fProgressBarUsers = [
    KupTagNames.BOX,
    KupTagNames.CELL,
    KupTagNames.DATA_TABLE,
    KupTagNames.FORM,
    KupTagNames.PROGRESS_BAR,
    KupTagNames.TREE,
    KupTagNames.TOOLBAR,
];
/**
 * Components using the FRadio functional component.
 */
export const fRadioUsers = [
    KupTagNames.BOX,
    KupTagNames.CELL,
    KupTagNames.DATA_TABLE,
    KupTagNames.FORM,
    KupTagNames.INPUT_PANEL,
    KupTagNames.RADIO,
    KupTagNames.TREE,
    KupTagNames.TOOLBAR,
];
/**
 * Components using the FRating functional component.
 */
export const fRatingUsers = [
    KupTagNames.BOX,
    KupTagNames.CELL,
    KupTagNames.DATA_TABLE,
    KupTagNames.FORM,
    KupTagNames.RATING,
    KupTagNames.TREE,
    KupTagNames.TOOLBAR,
];
/**
 * Components using the FSwitch functional component.
 */
export const fSwitchUsers = [
    KupTagNames.BOX,
    KupTagNames.CELL,
    KupTagNames.DATA_TABLE,
    KupTagNames.FORM,
    KupTagNames.INPUT_PANEL,
    KupTagNames.SWITCH,
    KupTagNames.TREE,
    KupTagNames.TOOLBAR,
];

/**
 * Components using the FSwitch functional component.
 */
export const fTypographyUsers = [
    KupTagNames.TYPOGRAPHY,
    KupTagNames.TYPOGRAPHY_LIST,
    KupTagNames.INPUT_PANEL,
];
/**
 * Components using the FTextField functional component.
 */
export const fTextFieldUsers = [
    KupTagNames.AUTOCOMPLETE,
    KupTagNames.BOX,
    KupTagNames.CELL,
    KupTagNames.COLOR_PICKER,
    KupTagNames.COMBOBOX,
    KupTagNames.DASHBOARD,
    KupTagNames.DATA_TABLE,
    KupTagNames.DATE_PICKER,
    KupTagNames.FORM,
    KupTagNames.INPUT_PANEL,
    KupTagNames.NUMERIC_PICKER,
    KupTagNames.OBJECT_FIELD,
    KupTagNames.PLANNER,
    KupTagNames.TEXT_FIELD,
    KupTagNames.TIME_PICKER,
    KupTagNames.TREE,
    KupTagNames.TOOLBAR,
    KupTagNames.LIST,
];
/**
 * Components using the MDC ripple effect.
 */
export const rippleUsers = [
    KupTagNames.ACCORDION,
    KupTagNames.CARD,
    KupTagNames.IMAGE_LIST,
    KupTagNames.TAB_BAR,
    KupTagNames.TREE,
];

/**
 * Components using the FObjectField functional component.
 */
export const fObjectFieldUsers = [
    KupTagNames.BOX,
    KupTagNames.CELL,
    KupTagNames.DATA_TABLE,
    KupTagNames.FORM,
    KupTagNames.INPUT_PANEL,
    KupTagNames.OBJECT_FIELD,
    KupTagNames.TREE,
];

/**
 * Components using the Editor component.
 */
export const editorUsers = [KupTagNames.INPUT_PANEL];
/**
 * Interface of the themes JSON.
 */
export interface KupThemeJSON {
    [index: string]: KupThemeElement;
}
/**
 * Interface wrapping all the others.
 */
export interface KupThemeElement {
    cssVariables: KupThemeCSSVariables;
    icons: KupThemeIcons;
    customStyles?: GenericObject;
    fonts?: KupThemeFonts[];
}
/**
 * All CSS variables managed by KupTheme.
 */
export interface KupThemeCSSVariables {
    [KupThemeColorValues.PRIMARY]: string;
    [KupThemeColorValues.SECONDARY]: string;
    [KupThemeColorValues.BACKGROUND]: string;
    [KupThemeColorValues.NAV_BAR_BACKGROUND]: string;
    [KupThemeColorValues.NAV_BAR]: string;
    [KupThemeColorValues.DRAWER]: string;
    [KupThemeColorValues.DRAWER_BACKGROUND]: string;
    '--kup-navbar-height': string;
    '--kup-drawer-width': string;
    '--kup-font-family': string;
    '--kup-font-size': string;
    [KupThemeColorValues.TEXT]: string;
    [KupThemeColorValues.TEXT_ON_PRIMARY]: string;
    [KupThemeColorValues.DISABLED_BACKGROUND]: string;
    [KupThemeColorValues.DISABLED]: string;
    [KupThemeColorValues.HOVER_BACKGROUND]: string;
    [KupThemeColorValues.HOVER]: string;
    [KupThemeColorValues.TITLE_BACKGROUND]: string;
    [KupThemeColorValues.TITLE]: string;
    [KupThemeColorValues.ICON]: string;
    [KupThemeColorValues.BORDER]: string;
    '--kup-box-shadow': string;
    [KupThemeColorValues.INFO]: string;
    [KupThemeColorValues.SUCCESS]: string;
    [KupThemeColorValues.WARNING]: string;
    [KupThemeColorValues.DANGER]: string;
    [KupThemeColorValues.SPINNER]: string;
    [KupThemeColorValues.CHART_1]: string;
    [KupThemeColorValues.CHART_2]: string;
    [KupThemeColorValues.CHART_3]: string;
    [KupThemeColorValues.CHART_4]: string;
    '--kup-font-family-monospace': string;
    '--kup-obj-cursor': string;
    [KupThemeColorValues.TEXT_ON_SECONDARY]: string;
    '--kup-card-zindex': number;
    '--kup-drawer-zindex': number;
    '--kup-navbar-zindex': number;
}
/**
 * All icons managed by KupTheme.
 */
export interface KupThemeIcons {
    [KupThemeIconValues.ASCENDING]: string;
    [KupThemeIconValues.CLEAR]: string;
    [KupThemeIconValues.COLLAPSED]: string;
    [KupThemeIconValues.DESCENDING]: string;
    [KupThemeIconValues.DROPDOWN]: string;
    [KupThemeIconValues.EXPANDED]: string;
    [KupThemeIconValues.FILTER_REMOVE]: string;
}
/**
 * Object returned by the colorCheck method, containing hex/rgb/hsl CSS colors and rgb/hsl values.
 */
export interface KupThemeColor {
    hexColor: string;
    hslColor: string;
    hslValues: string;
    hue: string;
    lightness: string;
    saturation: string;
    rgbColor: string;
    rgbValues: string;
}
/**
 * Interface of a color described by RGB colors.
 */
export interface KupThemeRGBValues {
    r: number;
    g: number;
    b: number;
}
/**
 * Interface of a color described by HSL colors.
 */
export interface KupThemeHSLValues {
    h: number;
    s: number;
    l: number;
}
/**
 * List of all colors.
 */
export enum KupThemeColorValues {
    PRIMARY = '--kup-primary-color',
    SECONDARY = '--kup-secondary-color',
    BACKGROUND = '--kup-background-color',
    NAV_BAR = '--kup-navbar-color',
    NAV_BAR_BACKGROUND = '--kup-navbar-background-color',
    DRAWER = '--kup-drawer-color',
    DRAWER_BACKGROUND = '--kup-drawer-background-color',
    TEXT = '--kup-text-color',
    TEXT_ON_PRIMARY = '--kup-text-on-primary-color',
    TEXT_ON_SECONDARY = '--kup-text-on-secondary-color',
    DISABLED_BACKGROUND = '--kup-disabled-background-color',
    DISABLED = '--kup-disabled-color',
    HOVER_BACKGROUND = '--kup-hover-background-color',
    HOVER = '--kup-hover-color',
    TITLE_BACKGROUND = '--kup-title-background-color',
    TITLE = '--kup-title-color',
    ICON = '--kup-text-secondary',
    BORDER = '--kup-border-subtle',
    INFO = '--kup-info-color-50',
    SUCCESS = '--kup-success-color-50',
    WARNING = '--kup-warning-color-50',
    DANGER = '--kup-danger-color-50',
    SPINNER = '--kup-spinner-color',
    CHART_1 = '--kup-chart-color-1',
    CHART_2 = '--kup-chart-color-2',
    CHART_3 = '--kup-chart-color-3',
    CHART_4 = '--kup-chart-color-4',
}
/**
 * List of all icons.
 */
export enum KupThemeIconValues {
    ASCENDING = '--kup-ascending-icon',
    CLEAR = '--kup-clear-icon',
    COLLAPSED = '--kup-collapsed-icon',
    DESCENDING = '--kup-descending-icon',
    DROPDOWN = '--kup-dropdown-icon',
    EXPANDED = '--kup-expanded-icon',
    FILTER_REMOVE = '--kup-filter-remove-icon',
    KEY = '--kup-key-icon',
    SEARCH = '--kup-search-icon',
}

export enum KupThemeFonts {
    IBM_PLEX_SANS = 'IbmPlexSans-Regular',
    IBM_PLEX_SANS_LIGHT = 'IbmPlexSans-Light',
    IBM_PLEX_SANS_LIGHT_ITALIC = 'IbmPlexSans-LightItalic',
    IBM_PLEX_SANS_ITALIC = 'IbmPlexSans-Italic',
    IBM_PLEX_SANS_MEDIUM = 'IbmPlexSans-Medium',
    IBM_PLEX_SANS_MEDIUM_ITALIC = 'IbmPlexSans-MediumItalic',
    IBM_PLEX_SANS_SEMI_BOLD = 'IbmPlexSans-SemiBold',
    IBM_PLEX_SANS_SEMI_BOLD_ITALIC = 'IbmPlexSans-SemiBoldItalic',
    IBM_PLEX_SANS_BOLD = 'IbmPlexSans-Bold',
    IBM_PLEX_SANS_BOLD_ITALIC = 'IbmPlexSans-BoldItalic',
    IBM_PLEX_SANS_EXTRA_BOLD = 'IbmPlexSans-ExtraBold',
    IBM_PLEX_SANS_EXTRA_BOLD_ITALIC = 'IbmPlexSans-ExtraBoldItalic',
    IBM_PLEX_MONO = 'IbmPlexMono-Regular',
    IBM_PLEX_MONO_LIGHT = 'IbmPlexMono-Light',
    IBM_PLEX_MONO_LIGHT_ITALIC = 'IbmPlexMono-LightItalic',
    IBM_PLEX_MONO_ITALIC = 'IbmPlexMono-Italic',
    IBM_PLEX_MONO_MEDIUM = 'IbmPlexMono-Medium',
    IBM_PLEX_MONO_MEDIUM_ITALIC = 'IbmPlexMono-MediumItalic',
    IBM_PLEX_MONO_SEMI_BOLD = 'IbmPlexMono-SemiBold',
    IBM_PLEX_MONO_SEMI_BOLD_ITALIC = 'IbmPlexMono-SemiBoldItalic',
    IBM_PLEX_MONO_BOLD = 'IbmPlexMono-Bold',
    IBM_PLEX_MONO_BOLD_ITALIC = 'IbmPlexMono-BoldItalic',
    IBM_PLEX_MONO_EXTRA_BOLD = 'IbmPlexMono-ExtraBold',
    IBM_PLEX_MONO_EXTRA_BOLD_ITALIC = 'IbmPlexMono-ExtraBoldItalic',
}

export const KupThemeFontFamilyMap: Record<KupThemeFonts, string> = {
    [KupThemeFonts.IBM_PLEX_MONO]: 'IBM Plex Mono',
    [KupThemeFonts.IBM_PLEX_MONO_LIGHT]: 'IBM Plex Mono Light',
    [KupThemeFonts.IBM_PLEX_MONO_LIGHT_ITALIC]: 'IBM Plex Mono Light Italic',
    [KupThemeFonts.IBM_PLEX_MONO_ITALIC]: 'IBM Plex Mono Italic',
    [KupThemeFonts.IBM_PLEX_MONO_MEDIUM]: 'IBM Plex Mono Medium',
    [KupThemeFonts.IBM_PLEX_MONO_MEDIUM_ITALIC]: 'IBM Plex Mono Medium Italic',
    [KupThemeFonts.IBM_PLEX_MONO_SEMI_BOLD]: 'IBM Plex Mono SemiBold',
    [KupThemeFonts.IBM_PLEX_MONO_SEMI_BOLD_ITALIC]:
        'IBM Plex Mono SemiBold Italic',
    [KupThemeFonts.IBM_PLEX_MONO_BOLD]: 'IBM Plex Mono Bold',
    [KupThemeFonts.IBM_PLEX_MONO_BOLD_ITALIC]: 'IBM Plex Mono Bold Italic',
    [KupThemeFonts.IBM_PLEX_MONO_EXTRA_BOLD]: 'IBM Plex Mono ExtraBold',
    [KupThemeFonts.IBM_PLEX_MONO_EXTRA_BOLD_ITALIC]:
        'IBM Plex Mono ExtraBold Italic',
    [KupThemeFonts.IBM_PLEX_SANS]: 'IBM Plex Sans',
    [KupThemeFonts.IBM_PLEX_SANS_LIGHT]: 'IBM Plex Sans Light',
    [KupThemeFonts.IBM_PLEX_SANS_LIGHT_ITALIC]: 'IBM Plex Sans Light Italic',
    [KupThemeFonts.IBM_PLEX_SANS_ITALIC]: 'IBM Plex Sans Italic',
    [KupThemeFonts.IBM_PLEX_SANS_MEDIUM]: 'IBM Plex Sans Medium',
    [KupThemeFonts.IBM_PLEX_SANS_MEDIUM_ITALIC]: 'IBM Plex Sans Medium Italic',
    [KupThemeFonts.IBM_PLEX_SANS_SEMI_BOLD]: 'IBM Plex Sans SemiBold',
    [KupThemeFonts.IBM_PLEX_SANS_SEMI_BOLD_ITALIC]:
        'IBM Plex Sans SemiBold Italic',
    [KupThemeFonts.IBM_PLEX_SANS_BOLD]: 'IBM Plex Sans Bold',
    [KupThemeFonts.IBM_PLEX_SANS_BOLD_ITALIC]: 'IBM Plex Sans Bold Italic',
    [KupThemeFonts.IBM_PLEX_SANS_EXTRA_BOLD]: 'IBM Plex Sans ExtraBold',
    [KupThemeFonts.IBM_PLEX_SANS_EXTRA_BOLD_ITALIC]:
        'IBM Plex Sans ExtraBold Italic',
};
