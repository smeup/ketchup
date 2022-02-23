import {
    KupDataColumn,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';
import { GenericObject, KupEventPayload } from '../../types/GenericTypes';
/**
 * Props of the kup-card component.
 * Used to export every prop in an object.
 */
export enum KupChartProps {
    asp = 'Sets the chart to a 2D or 3D aspect. 3D only works for Pie graphs.',
    axis = 'Sets the axis of the chart.',
    colors = 'Colors of the chart.',
    chartTitle = 'Title of the graph.',
    customStyle = 'Custom style of the component.',
    data = 'The actual data of the chart.',
    hAxis = 'Customize the hAxis.',
    legend = 'Sets the position of the legend. Supported values: bottom, labeled, left, none, right, top. Keep in mind that legend types are tied to chart types, some combinations might not work.',
    offlineMode = 'Renders charts without the Google API and using jQuery Sparkline.',
    series = 'The data series to be displayed. They must be of the same type.',
    showMarks = 'Displays the numerical values.',
    sizeX = 'The width of the chart, defaults to 100%. Accepts any valid CSS format (px, %, vw, etc.).',
    sizeY = 'The height of the chart, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).',
    sorting = 'Used to sort series.',
    stacked = 'Displays the data columns of an object on top of each other.',
    types = 'The type of the chart. Supported formats: Area, Bubble, Cal, Candlestick, Combo, Geo, Hbar, Line, Ohlc, Pie, Sankey, Scatter, Unk, Vbar.',
    vAxes = 'Customize the vAxes for multiple-charts.',
    vAxis = 'Customize the vAxis.',
    version = 'Google chart version to load.',
}

export enum ChartAspect {
    D2 = '2D',
    D3 = '3D',
}

export interface KupChartSort {
    column: number;
    desc?: boolean;
}

export interface KupChartTrendlines {
    [index: string]: GenericObject;
}

export interface ChartAxis {
    ticks?: string[];
    textPosition?: string;
    gridlines?: ChartAxisGridlines;
    viewWindow?: ChartAxisViewWindow;
    textStyle?: { color?: string; fontSize?: number };
}

export interface ChartAxisGridlines {
    count?: number;
}

export interface ChartAxisViewWindow {
    min?: number;
    max?: number;
}

export interface KupChartClickEvent extends KupEventPayload {
    datetime?: string;
    column?: KupDataColumn;
    row?: KupDataRow;
    rowindex?: number;
    colindex?: number;
}

export interface ChartOfflineMode {
    value: string;
    shape: string;
}

export interface ChartOptions {
    backgroundColor: string;
    is3D: boolean;
    colors?: string[];
    width?: string;
    height?: string;
    legend?: { position: string; textStyle?: { color?: string } };
    isStacked?: boolean;
    title?: string;
    titleTextStyle?: { color?: string; fontSize?: number };
    series?: { [index: string]: ChartOptionsSerie };
    slices?: {
        color?: string;
        offset?: number;
        textStyle?: { color?: string };
    }[];
    hAxis?: ChartAxis;
    hAxes?: { [index: string]: ChartAxis };
    vAxis?: ChartAxis;
    vAxes?: { [index: string]: ChartAxis };
    type?: string;
    trendlines?: KupChartTrendlines;
}

export interface ChartOptionsSerie {
    type?: string;
    targetAxisIndex?: string;
}
export interface ChartSerie {
    code: string;
    decode?: string;
}

export interface ChartTitle {
    value: string;
    color?: string;
    size?: number;
}

export enum ChartType {
    Area = 'Area',
    Bubble = 'Bubble',
    Cal = 'Cal',
    Candlestick = 'Candlestick',
    Combo = 'Combo',
    Geo = 'Geo',
    Hbar = 'Hbar',
    Line = 'Line',
    Ohlc = 'Ohlc',
    Pie = 'Pie',
    Sankey = 'Sankey',
    Scatter = 'Scatter',
    Unk = 'Unk',
    ColumnChart = 'ColumnChart',
    Vbar = 'Vbar',
}
