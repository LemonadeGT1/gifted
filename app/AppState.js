import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { Gift } from "./Models/Gift.js"

class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  // values = loadState('values', [Value])
  /** @type {import('./Models/Gift').Gift[]} */
  allGifts = []
  allGiphys = []
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
