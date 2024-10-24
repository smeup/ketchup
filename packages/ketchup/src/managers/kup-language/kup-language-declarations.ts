import type { GenericObject } from '../../types/GenericTypes';

/**
 * Master type extending all subtypes of keys.
 * Remember to edit "languages.json"
 */
export type KupLanguageKey =
    | KupLanguageCheckbox
    | KupLanguageColumn
    | KupLanguageDashboard
    | KupLanguageDebug
    | KupLanguageDensity
    | KupLanguageFontsize
    | KupLanguageGeneric
    | KupLanguageGrid
    | KupLanguageGrouping
    | KupLanguagePage
    | KupLanguageRow
    | KupLanguageSearch
    | KupLanguageTotals;
/**
 * Interface of the languages JSON.
 */
export interface KupLanguageJSON {
    [index: string]: KupLanguageElement;
}
/**
 * Interface of a single language.
 */
export interface KupLanguageElement {
    keys: GenericObject;
    variants?: {
        keys: GenericObject;
    };
}
/**
 * Decode language interface.
 */
export interface KupLanguageDecode {
    language: string;
    variant: string;
}
/**
 * Default languages available.
 */
export enum KupLanguageDefaults {
    cn = 'chinese',
    en = 'english',
    es = 'spanish',
    it = 'italian',
    fr = 'french',
    pl = 'polish',
    ru = 'russian',
}
/**
 * Checkbox statuses decodes.
 */
export enum KupLanguageCheckbox {
    ALL = 'checkboxAll',
    CHECKED = 'checkboxChecked',
    INDETERMINATE = 'checkboxIndeterminate',
    UNCHECKED = 'checkboxUnchecked',
}
/**
 * Column related decodes.
 */
export enum KupLanguageColumn {
    ADD = 'columnAdd',
    ADD_DESCRIPTION = 'columnAddDescription',
    COLUMNS = 'columnColumns',
    HIDE = 'columnHide',
    MERGE = 'columnMerge',
    NO_FORMULA = 'columnNoFormula',
    NON_NUMERICAL = 'columnNonNumerical',
    NON_NUMERICAL_IN_TABLE = 'columnNonNumericalInTable',
    SWAP = 'columnSwap',
}
/**
 * Dashboard related decodes.
 */
export enum KupLanguageDashboard {
    DIMENSION = 'dashboardDimension',
    LOADED = 'dashboardLoaded',
    RESET = 'dashboardReset',
    SAVE = 'dashboardSave',
    VERTICAL = 'dashboardVertical',
}
/**
 * Debug widget decodes.
 */
export enum KupLanguageDebug {
    AUTOPRINT = 'debugAutoprint',
    CLEAR = 'debugClear',
    DUMP = 'debugDump',
    DL_ALL = 'debugDLAll',
    DL_PROPS = 'debugDLProps',
    DL_PROPS_COMP = 'debugDLPropsComp',
    LANGUAGE_CHANGER = 'debugLanguageChanger',
    LOCALE_CHANGER = 'debugLocaleChanger',
    LOG_LIMIT = 'debugLogLimit',
    MAGIC_BOX = 'debugMagicBox',
    OFF = 'debugOff',
    PRINT = 'debugPrint',
    THEME_CHANGER = 'debugThemeChanger',
}
/**
 * Density decodes (data table customization settings).
 */
export enum KupLanguageDensity {
    DENSE = 'densityDense',
    LABEL = 'densityLabel',
    MEDIUM = 'densityMedium',
    WIDE = 'densityWide',
}
/**
 * Font size decodes (data table customization settings).
 */
export enum KupLanguageFontsize {
    BIG = 'fontsizeBig',
    LABEL = 'fontsizeLabel',
    MEDIUM = 'fontsizeMedium',
    SMALL = 'fontsizeSmall',
}
/**
 * Generic user interface action/messages.
 */
export enum KupLanguageGeneric {
    ABORT = 'genericAbort',
    ADD_NEW = 'genericAddNew',
    AI_ASSISTANT = 'genericAiAssistant',
    APPLY = 'genericApply',
    BACK = 'genericBack',
    COLLAPSE = 'genericCollapse',
    CONFIRM = 'genericConfirm',
    CONFIRM_DELETE = 'genericConfirmDelete',
    CONFIRM_DELETE_X_ROWS = 'genericConfirmDeleteXRows',
    DAY = 'genericDay',
    DRAG_AND_DROP = 'genericDragAndDrop',
    DROP_YOUR_DATA = 'genericDropYourData',
    EDITABLE = 'genericEditable',
    EDITABLE_FIELD = 'genericEditableField',
    EMPTY_DATA = 'genericEmptyData',
    EMPTY_OBJECT = 'genericEmptyObject',
    EXPAND = 'genericExpand',
    EXPERIMENTAL_FEAT = 'genericExperimentalFeat',
    FILTERS = 'genericFilters',
    INFO = 'genericInfo',
    INVALID_COLOR = 'genericInvalidColor',
    LAYOUT_NYI = 'genericLayoutNotYetImplemented',
    LIST = 'genericList',
    LOAD_MORE = 'genericLoadMoreData',
    MERGE = 'genericMerge',
    MENU = 'genericMenu',
    MONTH = 'genericMonth',
    MOVE = 'genericMove',
    NEXT = 'genericNext',
    NO = 'genericNo',
    OPEN_NAVIGATION_MENU = 'genericOpenNavigationMenu',
    OPEN_IN_NEW_TAB = 'genericOpenInNewTab',
    OPEN_IN_NEW_WINDOW = 'genericOpenInNewWindow',
    OPTIONS = 'genericOptions',
    PREVIOUS = 'genericPrevious',
    REMOVE_FILTERS = 'genericRemoveFilters',
    SETTINGS = 'genericSettings',
    SHOW_ROW_OPTIONS = 'genericShowRowOptions',
    SHOW_TOOLTIP_INFO = 'genericShowTooltipInfo',
    SORT_BY = 'genericSortBy',
    SWAP = 'genericSwap',
    TOGGLE = 'genericToggle',
    TODAY = 'genericToday',
    TOP = 'genericTop',
    TOTALS_TABLE = 'genericTotalsTable',
    TRANSPOSE_DATA = 'genericTransposeData',
    VIEW_AS = 'genericViewAs',
    WEEK = 'genericWeek',
    YES = 'genericYes',
    UPDATE = 'genericUpdate',
    ROW_ADD = 'genericRowAdd',
    ROW_DELETE = 'genericRowDelete',
}
/**
 * Grid decodes (data table customization settings).
 */
export enum KupLanguageGrid {
    COLUMN = 'gridColumn',
    COMPLETE = 'gridComplete',
    LABEL = 'gridLabel',
    NONE = 'gridNone',
    ROW = 'gridRow',
}
/**
 * Grouping decodes (data table groups).
 */
export enum KupLanguageGrouping {
    DISABLE = 'groupingDisable',
    ENABLE = 'groupingEnable',
    GROUPS = 'groupingGroups',
}
/**
 * Page related decodes.
 */
export enum KupLanguagePage {
    PAGE = 'pagePage',
    TOTAL = 'pageTotal',
}
/**
 * Row related decodes.
 */
export enum KupLanguageRow {
    DETAIL = 'rowDetail',
    EDITABLE_KEY = 'rowEditableKey',
    KEY = 'rowKey',
    NEXT = 'rowNext',
    PREVIOUS = 'rowPrevious',
    RENDERED = 'rowRendered',
    ROWS = 'rowRows',
    SELECTED = 'rowSelected',
    TOTAL = 'rowTotal',
}
/**
 * Search decodes.
 */
export enum KupLanguageSearch {
    FROM = 'searchFrom',
    SEARCH = 'searchSearch',
    TO = 'searchTo',
}
/**
 * Footer totals decodes (tree and data table).
 */
export enum KupLanguageTotals {
    AVERAGE = 'totalsAverage',
    CALCULATE = 'totalsCalculate',
    CANCEL = 'totalsCancel',
    COUNT = 'totalsCount',
    DIFFERENCE = 'totalsDifference',
    DISTINCT = 'totalsDistinct',
    FORMULA = 'totalsFormula',
    MAXIMUM = 'totalsMaximum',
    MINIMUM = 'totalsMinimum',
    PRODUCT = 'totalsProduct',
    SUM = 'totalsSum',
}
