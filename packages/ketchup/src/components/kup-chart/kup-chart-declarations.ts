import { Column, Row } from '../kup-data-table/kup-data-table-declarations';

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
    Vbar = 'Vbar',
}

export enum ChartAspect {
    D2 = '2D',
    D3 = '3D',
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
    series?: any;
    hAxis?: ChartAxis;
    vAxis?: ChartAxis;
}

export interface ChartAxis {
    ticks?: string[];
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

export interface ChartClickedEvent {
    datetime?: string;
    column?: Column;
    row?: Row;
    rowindex?: number;
    colindex?: number;
}

export interface ChartOfflineMode {
    value: string;
    shape: string;
}
