
import defaultMocks from './service-mocks/default-service-mocks';

Cypress.on('window:before:load', win => {
  // this lets React DevTools "see" components inside application's iframe
  win.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.top.__REACT_DEVTOOLS_GLOBAL_HOOK__;
});

beforeEach(() => {

  if (Cypress.config('mock')) {
    // if using mocks force 404 on unmatched routes
    cy.server({ force404: true });
    defaultMocks();
  } else {
    cy.server();
  }
});
