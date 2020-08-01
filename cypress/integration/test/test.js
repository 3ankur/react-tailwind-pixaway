import { Then } from 'cypress-cucumber-preprocessor/steps';


Then('I Should see the image grid', () => {
 // HomePage.getImageGallery({scenario:"error"})
 //  cy.find('.grid')
   cy.get('.grid').should('be.visible')  
 });