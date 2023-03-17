import { appState } from "../AppState.js";
import { giphysService } from "../Services/GiphysService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawGifs() {
  let giphys = appState.allGiphys
  let template = ''
  giphys.forEach(g => template += g.giphyTemp)
  setHTML('giphys', template)
}

export class GiphysController {
  constructor() {
    console.log('this the giphys controller');
    appState.on('allGiphys', _drawGifs)
  }

  getGiphys() {
    try {
      event?.preventDefault()
      let searchText = document.getElementById('searchText')
      console.log('get Giphys', searchText?.value)
      giphysService.getGiphys(searchText.value)
      appState.emit('allGiphys')
    } catch (error) {
      console.log(error)
      Pop.error(error)
    }


  }

}