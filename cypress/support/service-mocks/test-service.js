
import CONFIG from "../../config/dev.json"

 const SERVICE = 'homepage';
const { endPoint } = CONFIG;
export const HomePage = {
  getImageGallery(options = {}) {
   console.log("is is calling ",endPoint);
    const { status = 200, scenario = 'success' } = options;
    const response = `fixture:${SERVICE}/get_${scenario}.json`;
console.log(response);
    //  url: `https://cdn.privacy-mgmt.com/consent/tcfv${tcfVersion}/consent/v3/**`,
    return cy.route({
     // url: `${endPoint}/**`,
     url:`https://pixabay.com/api/?key=16706699-0a39087c67e883c7f93b62962&q=&image_type=photo&page=1`,
      method: 'GET',
      response,
      status,
    });
  },
};
