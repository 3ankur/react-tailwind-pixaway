import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import { HomePage } from '../../support/service-mocks/test-service';

Given('I am on the "home" page', () => {
// HomePage.getImageGallery({scenario:"error"})
  cy.visit('/');
});


