import { GiphysController } from "./Controllers/giphysController.js";
import { SandboxController } from "./Controllers/SandboxController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  sandboxController = new SandboxController();
  giphysController = new GiphysController();


}

window["app"] = new App();
