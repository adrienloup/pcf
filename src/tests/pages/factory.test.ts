describe('factoryPage', () => {
  it('Devrait afficher la page factory avec son titre', () => {
    cy.visit('/pcf/factory');

    cy.get('h1').contains('paperclips').should('be.visible');
  });
});
