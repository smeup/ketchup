import { Column, Row } from '../kup-data-table/kup-data-table-declarations';

/**
 * Props of the kup-echart component.
 * Used to export every prop in an object.
 */
export enum KupEchartProps {
    axis = 'Sets the axis of the chart.',
    chartTitle = 'Title of the graph.',
    customStyle = 'Custom style of the component.',
    data = 'The actual data of the chart.',
    legend = 'Sets the position of the legend. Supported values: bottom, left, right, top. Keep in mind that legend types are tied to chart types, some combinations might not work.',
    mapName = 'Choose which map you want to view, supported values: "europe", "africa", "asia", "oceania", "america" and "world".',
    series = 'The data series to be displayed. They must be of the same type.',
    types = 'The type of the chart. Supported formats: Line, Pie, Map, Scatter.',
    xAxis = 'Customization options for the x Axis.',
    yAxis = 'Customization options for the y Axis.',
}

export interface KupEchartData {
    columns: Column[];
    rows: Row[];
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
    RIGHT = 'right',
    TOP = 'top',
}

export enum KupEchartMaps {
    AFRICA = 'africa',
    AMERICA = 'america',
    ASIA = 'asia',
    EUROPE = 'europe',
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
}
