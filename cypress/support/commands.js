// import get from 'lodash/get';

// import { Atom } from './service-mocks/atom';
// import { Commerce } from './service-mocks/commerce';
import defaultMocks from './service-mocks/default-service-mocks';
// import DynamicBasket from './service-mocks/dynamic-basket';

Cypress.on('window:before:load', win => {
  // this lets React DevTools "see" components inside application's iframe
  win.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.top.__REACT_DEVTOOLS_GLOBAL_HOOK__;
});

beforeEach(() => {
  // cy.setCookie('sales-uuid', 'sales-uuid');
  // cy.setCookie('skyUMV', 'skyUMV');
  // cy.setCookie('skySSO', 'skySSO');
  // cy.setCookie('skyCEsidismesso01', 'skyUMV');

  if (Cypress.config('mock')) {
    // if using mocks force 404 on unmatched routes
    cy.server({ force404: true });
    defaultMocks();
  } else {
    cy.server();
  }
});

// Cypress.Commands.add('basket', (action, id) => {
//   cy.window()
//     .its('store')
//     .invoke('getState')
//     .its('commerce.basket')
//     .then(state => {
//       cy.fixture('commerce/dynamic-basket/get_success.json').then(basketFixture => {
//         const dynamicBasket = new DynamicBasket(basketFixture);

//         get(state, 'data.products', []).map(({ staticId }) => dynamicBasket.add(staticId));

//         if (action === 'add') {
//           dynamicBasket.add(id);
//         } else {
//           dynamicBasket.remove(id);
//         }

//         Atom.getAllPromotions();
//         Commerce.dynamicBasket({
//           basketReference: 'test-basket',
//           response: dynamicBasket.getBasket(),
//         });
//       });
//     });
// });

// Cypress.Commands.add('getIframeBody', selector => {
//   return cy
//     .get(selector)
//     .its('0.contentDocument.body')
//     .should('not.be.empty')
//     .then(cy.wrap);
// });
