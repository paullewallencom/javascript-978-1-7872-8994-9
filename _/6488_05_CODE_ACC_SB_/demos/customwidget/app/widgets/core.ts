import BasemapToggle = require("esri/widgets/BasemapToggle");
import Compass = require("esri/widgets/Compass");
import Legend = require("esri/widgets/Legend");
import Search = require("esri/widgets/Search");

import watchUtils = require("esri/core/watchUtils");

import store from "../stores/app";

import Summary from "./summary";
import SummaryViewModel from "./viewmodels/summaryviewmodel";

const { whenOnce } = watchUtils;

export function widgetInit() {
  whenOnce(store, "view")
  .then(({ value: view }) => {
    [
      {
        element: new BasemapToggle({
          view, nextBasemap: "hybrid"
        }),
        position: "bottom-left"
      },
      {
        element: new Compass({ view }),
        position: "top-left"
      },
      {
        element: new Legend({ view }),
        position: "bottom-left"
      },
      {
        element: new Search({ view }),
        position: "top-right"
      },
      {
        element: new Summary({ view }),
        position: "bottom-right"
      }
    ].map(store.addToUI, store);
  });
}
