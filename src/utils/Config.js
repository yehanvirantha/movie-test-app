import { APIKEY } from ".";
class api {
  getSearchQueryEndpoint(searchitem) {
    return `http://www.omdbapi.com/?apikey=` + APIKEY() + searchitem;
  }
  getfromIDQueryEndpoint(searchitem) {
    return `http://www.omdbapi.com/?apikey=` + APIKEY() + `&I=` + searchitem;
  }
}

export const { getSearchQueryEndpoint, getfromIDQueryEndpoint } = new api();
