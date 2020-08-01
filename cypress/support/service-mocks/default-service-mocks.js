 import { HomePage } from './test-service';

export default function defaultServiceMocks() {
  cy.server();
  HomePage.getImageGallery();
}
