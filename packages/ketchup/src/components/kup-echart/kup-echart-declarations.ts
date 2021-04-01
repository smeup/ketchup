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
    mapType = 'Choose which map you want to view, supported values: "europe", "africa", "asia", "oceania", "america" and "world". You can also provide your own JSON.',
    series = 'The data series to be displayed. They must be of the same type.',
    types = 'The type of the chart. Supported formats: Line, Pie, Map, Scatter.',
}
export interface EchartTitle {
    value: string;
    color?: string;
    position?: string;
    size?: number;
}
