import { XAXisComponentOption, YAXisComponentOption } from 'echarts';
import {
    KulDataColumn,
    KulDataDataset,
    KulDataNode,
} from '../../managers/kul-data/kul-data-declarations';
import { KulEventPayload } from '../../types/GenericTypes';

export type KulChartEvent = 'click' | 'ready';

export interface KulChartEventPayload extends KulEventPayload {
    column: KulDataColumn;
    node: KulDataNode;
    x: number | string;
    y: number | string;
}

export type KulChartLegendPlacement =
    | 'bottom'
    | 'left'
    | 'hidden'
    | 'right'
    | 'top';

export enum KulChartProps {
    kulAxis = 'Sets the axis of the chart.',
    kulColors = "Overrides theme's colors.",
    kulData = 'The actual data of the chart.',
    kulLegend = 'Sets the position of the legend. Supported values: bottom, left, right, top. Keep in mind that legend types are tied to chart types, some combinations might not work.',
    kulSeries = 'The data series to be displayed. They must be of the same type.',
    kulSizeX = 'The width of the chart, defaults to 100%. Accepts any valid CSS format (px, %, vw, etc.).',
    kulSizeY = 'The height of the chart, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).',
    kulStyle = 'Custom style of the component.',
    kulTypes = 'The type of the chart. Supported formats: Line, Pie, Map, Scatter.',
    kulXAxis = 'Customization options for the x Axis.',
    kulYAxis = 'Customization options for the y Axis.',
}

export interface KulChartPropsInterface {
    kulAxis?: string;
    kulColors?: string[];
    kulData?: KulDataDataset;
    kulLegend?: KulChartLegendPlacement;
    kulSeries?: string[];
    kulSizeX?: string;
    kulSizeY?: string;
    kulStyle?: string;
    kulTypes?: KulChartType[];
    kulXAxis?: XAXisComponentOption;
    kulYAxis?: YAXisComponentOption;
}

export type KulChartType =
    | 'area'
    | 'bar'
    | 'bubble'
    | 'calendar'
    | 'candle'
    | 'funnel'
    | 'gaussian'
    | 'hbar'
    | 'line'
    | 'pie'
    | 'radar'
    | 'sankey'
    | 'scatter';
