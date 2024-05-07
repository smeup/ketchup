import {
    KulChartProps,
    KulChartPropsInterface,
} from '../../../src/components/kul-chart/kul-chart-declarations';

describe('kul-chart', () => {
    beforeEach(() => {
        cy.navigate('chart');
    });

    it('common: should call getProps() and check keys against KulChartProps enum', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-chart')
            .first()
            .then(($chart) => {
                $chart[0].getProps().then((props) => {
                    const enumKeys = Object.keys(KulChartProps);
                    expect(Object.keys(props)).to.deep.equal(enumKeys);
                });
            });
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-chart')
            .first()
            .then(($chart) => {
                const kulChartElement = $chart[0] as HTMLKulChartElement;
                kulChartElement.getDebugInfo().then((debugInfo) => {
                    expect(debugInfo)
                        .to.have.property('endTime')
                        .that.is.a('number');
                    expect(debugInfo)
                        .to.have.property('renderCount')
                        .that.is.a('number');
                    expect(debugInfo)
                        .to.have.property('renderEnd')
                        .that.is.a('number');
                    expect(debugInfo)
                        .to.have.property('renderStart')
                        .that.is.a('number');
                    expect(debugInfo)
                        .to.have.property('startTime')
                        .that.is.a('number');
                });
            });
    });

    it('common: should call getDebugInfo, refresh, and check that renderCount has increased', () => {
        let initialRenderCount: number;

        cy.get('@kulComponentShowcase')
            .find('kul-chart')
            .first()
            .then(($chart) => {
                const kulChartElement = $chart[0] as HTMLKulChartElement;
                return kulChartElement.getDebugInfo();
            })
            .then((debugInfo) => {
                initialRenderCount = debugInfo.renderCount;
                return cy.wrap(initialRenderCount);
            })
            .then((initialRenderCount) => {
                cy.get('@kulComponentShowcase')
                    .find('kul-chart')
                    .first()
                    .then(($chart) => {
                        const kulChartElement =
                            $chart[0] as HTMLKulChartElement;
                        return kulChartElement.refresh();
                    })
                    .then(() => {
                        cy.wait(100);
                        return cy.wrap(initialRenderCount);
                    })
                    .then((initialRenderCount) => {
                        cy.get('@kulComponentShowcase')
                            .find('kul-chart')
                            .first()
                            .then(($chart) => {
                                const kulChartElement =
                                    $chart[0] as HTMLKulChartElement;
                                return kulChartElement.getDebugInfo();
                            })
                            .then((debugInfo) => {
                                expect(debugInfo.renderCount).to.be.greaterThan(
                                    initialRenderCount
                                );
                            });
                    });
            });
    });

    it('common: should call getProps and check keys against KulChartPropsInterface', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-chart')
            .first()
            .then(($chart) => {
                const kulChartElement = $chart[0] as HTMLKulChartElement;
                return kulChartElement.getProps();
            })
            .then((props) => {
                const dummy: KulChartPropsInterface = {
                    kulAxis: null,
                    kulColors: null,
                    kulData: null,
                    kulLegend: null,
                    kulSeries: null,
                    kulSizeX: null,
                    kulSizeY: null,
                    kulStyle: null,
                    kulThreshold: null,
                    kulTypes: null,
                    kulXAxis: null,
                    kulYAxis: null,
                };
                const expectedKeys = Object.keys(dummy);
                expect(Object.keys(props)).to.deep.equal(expectedKeys);
            });
    });
});
