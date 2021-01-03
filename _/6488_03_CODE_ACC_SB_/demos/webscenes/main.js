var scene, view;
require([
    "esri/Map",
    "esri/WebScene",
    "esri/views/SceneView",
    "esri/layers/FeatureLayer",
    "esri/layers/SceneLayer",
    "esri/core/watchUtils"
], function (
    EsriMap,
    WebScene,
    SceneView,
    FeatureLayer, SceneLayer,
    watchUtils
) {
    window.EsriMap = EsriMap;
    window.WebScene = WebScene;
    window.watchUtils = watchUtils;
    window.SceneView = SceneView;
    window.SceneLayer = SceneLayer;
    /*
sceneLayer = new SceneLayer({
  url: "https://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer/layers/0"
});

map = new Map({
  basemap: "streets",
  ground: "world-elevation",
  layers: [sceneLayer]
});

scene = new WebScene({
    portalItem: {
        id: "e18d908bacd440f6ab15b75e85f637b4"
    }
});

scene2 = new WebScene({
    portalItem: {
        id: "082c4fd545104f159db39da11ea1e675"
    }
});

{
    position: {
    x: -8241580,
    y: 4964925,
    z: 2311,
    spatialReference: 3857
    },
    heading: 32.5,
    tilt: 64.9
}
    */
    view = new SceneView({
        container: "viewDiv"
    });
    /*
view.environment = {
    lighting: {
        directShadowsEnabled: true,
        date: new Date("Mon May 15 2017 07:00:00 GMT-0700 (Pacific Daylight Time)")
    }
};
    */
});

