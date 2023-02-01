import {
    KupDataColumn,
    KupDataRow,
} from '../../managers/kup-data/kup-data-declarations';
import { KupEventPayload } from '../../types/GenericTypes';

/**
 * Props of the kup-echart component.
 * Used to export every prop in an object.
 */
export enum KupEchartProps {
    axis = 'Sets the axis of the chart.',
    chartTitle = 'Title of the graph.',
    colors = "Overrides theme's colors.",
    consistencyCheck = 'When true, performs checks in order to properly initialize props which could be missing (i.e.: axis). For performances purposes, this prop will run only once when the component is initially created.',
    customStyle = 'Custom style of the component.',
    data = 'The actual data of the chart.',
    legend = 'Sets the position of the legend. Supported values: bottom, left, right, top. Keep in mind that legend types are tied to chart types, some combinations might not work.',
    map = `Choose which map you want to view, supported values: "europe", "africa", "asia", "oceania", "america" and "world". It's possible to supply a custom JSON too.`,
    series = 'The data series to be displayed. They must be of the same type.',
    sizeX = 'The width of the chart, defaults to 100%. Accepts any valid CSS format (px, %, vw, etc.).',
    sizeY = 'The height of the chart, defaults to 100%. Accepts any valid CSS format (px, %, vh, etc.).',
    types = 'The type of the chart. Supported formats: Line, Pie, Map, Scatter.',
    xAxis = 'Customization options for the x Axis.',
    yAxis = 'Customization options for the y Axis.',
}
export interface KupEchartTitle {
    value: string;
    color?: string;
    position?: string;
    size?: number;
}

export enum KupEchartLegendPlacement {
    BOTTOM = 'bottom',
    LEFT = 'left',
    HIDDEN = 'hidden',
    RIGHT = 'right',
    TOP = 'top',
}

export enum KupEchartMaps {
    AFRICA = 'africa',
    AMERICA = 'america',
    ASIA = 'asia',
    EUROPE = 'europe',
    ITALY = 'italy',
    OCEANIA = 'oceania',
    WORLD = 'world',
}

export enum KupEchartTypes {
    BAR = 'Bar',
    GAUSSIAN = 'Gaussian',
    LINE = 'Line',
    MAP = 'Map',
    PIE = 'Pie',
    SCATTER = 'Scatter',
    FUNNEL = 'Funnel'
}
export interface KupEchartClickEventPayload extends KupEventPayload {
    column: KupDataColumn;
    row: KupDataRow;
    x: number | string;
    y: number | string;
}
