import { appState } from "../AppState.js"
import { GiphysController } from "../Controllers/giphysController.js"
import { Gift } from "../Models/Gift.js"
import { giphyApi } from "./AxiosService.js";


class GiphysService {
  async getGiphys(searchText) {
    console.log('giphys service');
    const res = await giphyApi.get('search', {
      params: {
        rating: 'pg',
        limit: 10,
        q: searchText
      }
    })
    console.log(res.data.data);
  }

}

export const giphysService = new GiphysService()