describe('explorePage', () => {
  it('Devrait afficher la page explore avec son titre', () => {
    cy.visit('/pcf/explore');
    cy.contains('explore en').should('be.visible');
  });
});
