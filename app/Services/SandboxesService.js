import { appState } from "../AppState.js";
import { SandboxController } from "../Controllers/SandboxController.js";
import { Gift } from "../Models/Gift.js";
import { Pop } from "../Utils/Pop.js";
import { sandboxApi } from "./AxiosService.js";


class SandboxesService {
  async openGift(id) {
    console.log('open Gift', id);
    let openingGift = appState.allGifts.find((g) => g.id == id)
    console.log(openingGift);
    // change the opened boolean
    openingGift.opened = true

    const res = await sandboxApi.put(`api/gifts/${id}`, openingGift)

    console.log(res.data)
    this.getSandboxGifts() //----------------------
    // draw hte gifts
    appState.emit('allGifts')
    //update the sandbox

    // FIXME make sure it's drawing
  }

  async getSandboxGifts() {
    try {
      console.log('getSandboxGifts');
      const res = await sandboxApi.get('api/gifts')
      appState.allGifts = res.data.map(g => new Gift(g))
      console.log(appState.allGifts);
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }




}

export const sandboxesService = new SandboxesService()