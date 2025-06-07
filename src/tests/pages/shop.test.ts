describe('shopPage', () => {
  it('Devrait afficher la page shop avec son titre', () => {
    cy.visit('/pcf/shop');

    cy.get('h1').contains('shop').should('be.visible');
  });
});
