/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");
import Accessor = require("esri/core/Accessor");

import { subclass, declared, property } from "esri/core/accessorSupport/decorators";

type UIParams = {
  element: any,
  position?: string
};

interface Store {
  webmap: EsriMap;
  view: MapView;

  addToUI(params: UIParams): void;
}

class MyFunClass {
  name = "Barry Allen";
  running = false;
  run() {
    this.running = true;
    console.log("Lightning fast!");
  }
  stop() {
    this.running = false;
  }
}

interface Base extends Accessor, MyFunClass {}
interface BaseConstructor extends Base { new (): BaseConstructor; }
function getBase(): BaseConstructor { return <any> Accessor; }

@subclass()
class Speedster extends declared(getBase(), MyFunClass) {
  @property()
  running: boolean;
  
  @property({
    dependsOn: ["running"]
  })
  get fast() {
    return this.running ? "Faster than fast!" : "Taking a break!";
  }
}


window["Speedster"] = Speedster;


@subclass("app.stores.AppStore")
class AppStore extends declared(Accessor) implements Store {

  @property()
  webmap: EsriMap;

  @property()
  view: MapView;

  addToUI({ element, position }: UIParams) {
    this.view.ui.add(element, position);
  }

}

export default new AppStore();
