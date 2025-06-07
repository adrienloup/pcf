import '@testing-library/cypress/add-commands';
import './e2e.ts';

beforeEach(() => {
  cy.login();

  // cy.window().then((win) => {
  //   expect(win.localStorage.getItem('_user_3mma_0')).to.contain('adrien');
  // });
});
