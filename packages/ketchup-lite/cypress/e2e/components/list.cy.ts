import {
    KulListProps,
    KulListPropsInterface,
} from '../../../src/components/kul-list/kul-list-declarations';

describe('kul-list', () => {
    beforeEach(() => {
        cy.navigate('list');
    });

    it('common: should call getProps() and check keys against KulListProps enum', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-list')
            .first()
            .then(($list) => {
                $list[0].getProps().then((props) => {
                    const enumKeys = Object.keys(KulListProps);
                    expect(Object.keys(props)).to.deep.equal(enumKeys);
                });
            });
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-list')
            .first()
            .then(($list) => {
                const kulListElement = $list[0] as HTMLKulListElement;
                kulListElement.getDebugInfo().then((debugInfo) => {
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
            .find('kul-list')
            .first()
            .then(($list) => {
                const kulListElement = $list[0] as HTMLKulListElement;
                return kulListElement.getDebugInfo();
            })
            .then((debugInfo) => {
                initialRenderCount = debugInfo.renderCount;
                return cy.wrap(initialRenderCount);
            })
            .then((initialRenderCount) => {
                cy.get('@kulComponentShowcase')
                    .find('kul-list')
                    .first()
                    .then(($list) => {
                        const kulListElement = $list[0] as HTMLKulListElement;
                        return kulListElement.refresh();
                    })
                    .then(() => {
                        cy.wait(100);
                        return cy.wrap(initialRenderCount);
                    })
                    .then((initialRenderCount) => {
                        cy.get('@kulComponentShowcase')
                            .find('kul-list')
                            .first()
                            .then(($list) => {
                                const kulListElement =
                                    $list[0] as HTMLKulListElement;
                                return kulListElement.getDebugInfo();
                            })
                            .then((debugInfo) => {
                                cy.wait(100);
                                expect(debugInfo.renderCount).to.be.greaterThan(
                                    initialRenderCount
                                );
                            });
                    });
            });
    });

    it('common: should call getProps and check keys against KulListPropsInterface', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-list')
            .first()
            .then(($list) => {
                const kulListElement = $list[0] as HTMLKulListElement;
                return kulListElement.getProps();
            })
            .then((props) => {
                const dummy: KulListPropsInterface = {
                    kulData: null,
                    kulNavigation: null,
                    kulRipple: null,
                    kulSelectable: null,
                    kulStyle: null,
                };
                const expectedKeys = Object.keys(dummy);
                expect(Object.keys(props)).to.deep.equal(expectedKeys);
            });
    });
});
