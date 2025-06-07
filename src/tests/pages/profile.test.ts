describe('profilePage', () => {
  it('Devrait afficher la page profile avec son titre', () => {
    cy.visit('/pcf/profile');

    cy.get('h1').contains('profile').should('be.visible');
  });
});
