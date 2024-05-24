import {
    KulTabbarProps,
    KulTabbarPropsInterface,
} from '../../../src/components/kul-tabbar/kul-tabbar-declarations';

describe('kul-tabbar', () => {
    beforeEach(() => {
        cy.navigate('tabbar');
    });

    it('common: should call getProps() and check keys against KulTabbarProps enum', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-tabbar')
            .first()
            .then(($tabbar) => {
                $tabbar[0].getProps().then((props) => {
                    const enumKeys = Object.keys(KulTabbarProps);
                    expect(Object.keys(props)).to.deep.equal(enumKeys);
                });
            });
    });

    it('common: should call getDebugInfo and check the structure of the returned object', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-tabbar')
            .first()
            .then(($tabbar) => {
                const kulTabbarElement = $tabbar[0] as HTMLKulTabbarElement;
                kulTabbarElement.getDebugInfo().then((debugInfo) => {
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
            .find('kul-tabbar')
            .first()
            .then(($tabbar) => {
                const kulTabbarElement = $tabbar[0] as HTMLKulTabbarElement;
                return kulTabbarElement.getDebugInfo();
            })
            .then((debugInfo) => {
                initialRenderCount = debugInfo.renderCount;
                return cy.wrap(initialRenderCount);
            })
            .then((initialRenderCount) => {
                cy.get('@kulComponentShowcase')
                    .find('kul-tabbar')
                    .first()
                    .then(($tabbar) => {
                        const kulTabbarElement =
                            $tabbar[0] as HTMLKulTabbarElement;
                        return kulTabbarElement.refresh();
                    })
                    .then(() => {
                        cy.wait(250);
                        return cy.wrap(initialRenderCount);
                    })
                    .then((initialRenderCount) => {
                        cy.get('@kulComponentShowcase')
                            .find('kul-tabbar')
                            .first()
                            .then(($tabbar) => {
                                const kulTabbarElement =
                                    $tabbar[0] as HTMLKulTabbarElement;
                                return kulTabbarElement.getDebugInfo();
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

    it('common: should call getProps and check keys against KulTabbarPropsInterface', () => {
        cy.get('@kulComponentShowcase')
            .find('kul-tabbar')
            .first()
            .then(($tabbar) => {
                const kulTabbarElement = $tabbar[0] as HTMLKulTabbarElement;
                return kulTabbarElement.getProps();
            })
            .then((props) => {
                const dummy: KulTabbarPropsInterface = {
                    kulData: null,
                    kulRipple: null,
                    kulStyle: null,
                    kulValue: null,
                };
                const expectedKeys = Object.keys(dummy);
                expect(Object.keys(props)).to.deep.equal(expectedKeys);
            });
    });

    it('#simple: should set the selected tab of the simple example to 2 (index 1)', () => {
        let initialValue: number;

        cy.get('@kulComponentShowcase')
            .find('kul-tabbar[id*="simple"]')
            .then(($tabbar) => {
                const kulTabbarElement = $tabbar[0] as HTMLKulTabbarElement;
                return kulTabbarElement.getValue();
            })
            .then((value) => {
                initialValue = value?.index;
                expect(initialValue).to.equal(undefined);
                const newValue = 1;
                return cy.wrap({ initialValue, newValue });
            })
            .then(({ newValue }) => {
                cy.get('@kulComponentShowcase')
                    .find('kul-tabbar[id*="simple"]')
                    .then(($tabbar) => {
                        const kulTabbarElement =
                            $tabbar[0] as HTMLKulTabbarElement;
                        return kulTabbarElement.setValue(newValue);
                    })
                    .then(() => {
                        return cy.wrap(newValue);
                    })
                    .then((newValue) => {
                        cy.get('@kulComponentShowcase')
                            .find('kul-tabbar[id*="simple"]')
                            .then(($tabbar) => {
                                const kulTabbarElement =
                                    $tabbar[0] as HTMLKulTabbarElement;
                                return kulTabbarElement.getValue();
                            })
                            .then((currentValue) => {
                                expect(currentValue.index).to.equal(newValue);
                            });
                    });
            });
    });
});
