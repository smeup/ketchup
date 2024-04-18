const badgeExamples = [
    'badgeColors',
    'badgeEmpty',
    'badgeIcon',
    'badgeImage',
    'badgeLabel',
    'badgePosition',
    'badgeStyle',
];

describe('kul-badge', () => {
    beforeEach(() => {
        cy.navigate('badge');
    });

    badgeExamples.forEach((badgeId) => {
        it(`should check if the badge with ID ${badgeId} exists`, () => {
            cy.get(`#${badgeId}`).should('exist');
        });
    });

    it('should check that the number of kul-badge elements matches the number of badgeExamples', () => {
        cy.get('kul-badge').should('have.length', badgeExamples.length);
    });
});
