export interface ChartConfig {
    type: ChartType;
    axe: string;
    series: Array<string>;
    asp?: string;
    colors?: Array<string>;
    height?: number;
    width?: number;
    leg?: boolean;
    stacked?: boolean;
    title?: string;
    titleColor?: string;
    titleSize?: string;
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
    Vbar = 'Vbar',
}
