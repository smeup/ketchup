import { KulChartPropsInterface } from '../../../kul-chart/kul-chart-declarations';
import { KulShowcaseDynamicExampleType } from '../../kul-showcase-declarations';

export const CHART_EXAMPLES_KEYS = [
    'area',
    'bar',
    'line',
    'pie',
    'scatter',
    'style',
] as const;

export interface ChartExample extends KulChartPropsInterface {
    ['data-description']: string;
    ['data-dynamic']?: KulShowcaseDynamicExampleType;
}

export type ChartData = {
    [K in (typeof CHART_EXAMPLES_KEYS)[number]]: ChartExample;
};
