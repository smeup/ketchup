import {
    KulChartProps,
    KulChartPropsInterface,
} from '../../../src/components/kul-chart/kul-chart-declarations';
import { CHART_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/chart/kul-showcase-chart-declarations';

const chart = 'chart';
const chartCapitalized = chart.charAt(0).toUpperCase() + chart.slice(1);
const chartTag = 'kul-' + chart;

describe(chartTag, () => {
    beforeEach(() => {
        cy.navigate(chart);
    });

    it(`common: should check that all <${chartTag}> exist`, () => {
        cy.checkComponentExamples(chartTag, new Set(CHART_EXAMPLES_KEYS));
    });

    it(`common: should check that the number of <${chartTag}> elements matches the number of examples`, () => {
        cy.checkComponentExamplesNumber(Array.from(CHART_EXAMPLES_KEYS));
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.checkDebugInfo(chartTag);
    });

    it('common: should check for the presence of at least 2 <style> elements within the shadow DOM', () => {
        cy.checkKulStyle();
    });

    it(`common: should call getProps and check keys against Kul${chartCapitalized}Props enum`, () => {
        cy.checkProps(chartTag, KulChartProps);
    });

    it(`common: should call getProps and check keys against Kul${chartCapitalized}PropsInterface`, () => {
        cy.checkPropsInterface(chartTag, {
            kulAxis: null,
            kulColors: null,
            kulData: null,
            kulLegend: null,
            kulSeries: null,
            kulSizeX: null,
            kulSizeY: null,
            kulStyle: null,
            kulTypes: null,
            kulXAxis: null,
            kulYAxis: null,
        } as Required<KulChartPropsInterface>);
    });

    it('common: should call getDebugInfo, refresh, and check that renderCount has increased', () => {
        cy.checkRenderCountIncrease(chartTag);
    });
});
