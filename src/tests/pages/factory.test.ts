describe('factoryPage', () => {
  it('Devrait afficher la page factory avec son titre', () => {
    cy.visit('/pcf/factory');

    cy.contains('paperclips').should('be.visible');
  });
});
