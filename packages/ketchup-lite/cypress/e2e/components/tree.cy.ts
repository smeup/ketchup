import {
    KulTreeProps,
    KulTreePropsInterface,
} from '../../../src/components/kul-tree/kul-tree-declarations';

describe('kul-tree', () => {
    beforeEach(() => {
        cy.navigate('tree');
    });

    it('common: should call getProps() and check keys against KulTreeProps enum', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-tree')
            .first()
            .then(($tree) => {
                $tree[0].getProps().then((props) => {
                    const enumKeys = Object.keys(KulTreeProps);
                    expect(Object.keys(props)).to.deep.equal(enumKeys);
                });
            });
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-tree')
            .first()
            .then(($tree) => {
                const kulTreeElement = $tree[0] as HTMLKulTreeElement;
                kulTreeElement.getDebugInfo().then((debugInfo) => {
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
            .find('kul-tree')
            .first()
            .then(($tree) => {
                const kulTreeElement = $tree[0] as HTMLKulTreeElement;
                return kulTreeElement.getDebugInfo();
            })
            .then((debugInfo) => {
                initialRenderCount = debugInfo.renderCount;
                return cy.wrap(initialRenderCount);
            })
            .then((initialRenderCount) => {
                cy.get('@kulComponentShowcase')
                    .find('kul-tree')
                    .first()
                    .then(($tree) => {
                        const kulTreeElement = $tree[0] as HTMLKulTreeElement;
                        return kulTreeElement.refresh();
                    })
                    .then(() => {
                        cy.wait(250);
                        return cy.wrap(initialRenderCount);
                    })
                    .then((initialRenderCount) => {
                        cy.get('@kulComponentShowcase')
                            .find('kul-tree')
                            .first()
                            .then(($tree) => {
                                const kulTreeElement =
                                    $tree[0] as HTMLKulTreeElement;
                                return kulTreeElement.getDebugInfo();
                            })
                            .then((debugInfo) => {
                                cy.wait(250);
                                expect(debugInfo.renderCount).to.be.greaterThan(
                                    initialRenderCount
                                );
                            });
                    });
            });
    });

    it('common: should call getProps and check keys against KulTreePropsInterface', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-tree')
            .first()
            .then(($tree) => {
                const kulTreeElement = $tree[0] as HTMLKulTreeElement;
                return kulTreeElement.getProps();
            })
            .then((props) => {
                const dummy: KulTreePropsInterface = {
                    kulAccordionLayout: null,
                    kulData: null,
                    kulFilter: null,
                    kulInitialExpansionDepth: null,
                    kulRipple: null,
                    kulSelectable: null,
                    kulStyle: null,
                };
                const expectedKeys = Object.keys(dummy);
                expect(Object.keys(props)).to.deep.equal(expectedKeys);
            });
    });
});
