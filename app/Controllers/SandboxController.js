import { appState } from "../AppState.js";
import { sandboxesService } from "../Services/SandboxesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawAllGifts() {
  let gifts = appState.allGifts
  let template = ''
  gifts.forEach(g => template += g.giftTemplate)
  setHTML('giftList', template)
  console.log('drawing gifts')
}

export class SandboxController {
  constructor() {
    console.log('hello from controller');
    this.getSandboxGifts()
    appState.on('allGifts', _drawAllGifts)
  }

  async getSandboxGifts() {
    try {
      console.log('getSandboxGifts Controller');
      await sandboxesService.getSandboxGifts();
    } catch (error) {
      Pop.error(error)
      console.log(error);
    }
  }

  async openGift(id) {
    // console.log('opening gift', id);
    sandboxesService.openGift(id)
  }
}

