
import CONFIG from "../../config/dev.json"

 const SERVICE = 'homepage';
const { endPoint } = CONFIG;
export const HomePage = {
  getImageGallery(options = {}) {
   console.log("is is calling ",endPoint);
    const { status = 200, scenario = 'success' } = options;
    const response = `fixture:${SERVICE}/get_${scenario}.json`;
console.log(response);
    return cy.route({
      url: `${endPoint}/**`,
      method: 'GET',
      response,
      status,
    });
  },
};
