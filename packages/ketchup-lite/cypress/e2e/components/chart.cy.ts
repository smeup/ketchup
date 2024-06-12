import {
    KulChartEvent,
    KulChartProps,
    KulChartPropsInterface,
} from '../../../src/components/kul-chart/kul-chart-declarations';
import { CHART_EXAMPLES_KEYS } from '../../../src/components/kul-showcase/components/chart/kul-showcase-chart-declarations';

const chart = 'chart';
const chartCapitalized = chart.charAt(0).toUpperCase() + chart.slice(1);
const chartTag = 'kul-' + chart;

describe('Basic', () => {
    beforeEach(() => {
        cy.navigate(chart);
    });

    it(`Should check that all <${chartTag}> exist.`, () => {
        cy.checkComponentExamples(chartTag, new Set(CHART_EXAMPLES_KEYS));
    });

    it(`Should check that the number of <${chartTag}> elements matches the number of examples.`, () => {
        cy.checkComponentExamplesNumber(Array.from(CHART_EXAMPLES_KEYS));
    });
});

describe('Events', () => {
    it(`ready`, () => {
        cy.checkReadyEvent(chart);
    });
});

describe('Methods', () => {
    beforeEach(() => {
        cy.navigate(chart);
    });

    it('getDebugInfo: check the structure of the returned object.', () => {
        cy.checkDebugInfo(chartTag);
    });

    it('getDebugInfo, refresh: check that renderCount has increased after refreshing.', () => {
        cy.checkRenderCountIncrease(chartTag);
    });

    it(`getProps: check keys against Kul${chartCapitalized}Props enum.`, () => {
        cy.checkProps(chartTag, KulChartProps);
    });

    it(`getProps: check keys against Kul${chartCapitalized}PropsInterface.`, () => {
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
});

describe('Props', () => {
    beforeEach(() => {
        cy.navigate(chart);
    });

    it('Should check for the presence of a <style> element with id kup-style.', () => {
        cy.checkKulStyle();
    });
});
