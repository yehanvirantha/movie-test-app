import { APIKEY } from ".";
class api {
  getSearchQueryEndpoint(searchitem) {
    return `http://www.omdbapi.com/?apikey=` + APIKEY() + searchitem;
  }
  getfromTitleQueryEndpoint(searchitem) {
    return `http://www.omdbapi.com/?apikey=` + APIKEY() + `&T=` + searchitem;
  }
}

export const { getSearchQueryEndpoint, getfromTitleQueryEndpoint } = new api();