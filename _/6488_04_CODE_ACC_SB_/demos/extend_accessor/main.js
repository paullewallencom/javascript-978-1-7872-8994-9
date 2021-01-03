require([
    "esri/Map",
    "esri/Graphic",
    "esri/core/Accessor",
    "esri/views/MapView",
    "esri/geometry/Point",
    "esri/geometry/geometryEngine",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/SimpleFillSymbol"
], function (
    EsriMap,
    Graphic,
    Accessor,
    MapView,
    Point, geometryEngine,
    SimpleMarkerSymbol, SimpleFillSymbol
) {
    window.Graphic = Graphic;
    window.Accessor = Accessor;
    window.Point = Point;
    window.geometryEngine = geometryEngine;

    window.marker = marker = new SimpleMarkerSymbol({
        color: [0, 197, 255, 1]
    });

    window.fill = new SimpleFillSymbol();

    const map = new EsriMap({
        basemap: "topo"
    });

    const view = new MapView({
        center: [-118.174, 34.024],
        zoom: 14,
        container: "viewDiv",
        map: map,
        ui: {
            components: ["zoom", "compass", "attribution"]
        }
    });

    window.view = view;

/*
const Model = Accessor.createSubclass({
  properties: {
    feature: Graphic,
    name: {
        dependsOn: ["feature"],
        get() {
            if (this.feature) {
                return this.feature.attributes.name;
            }
            else {
                return "Unknown"
            }
        }
    }
  }
});

// read-only
const Model = Accessor.createSubclass({
  properties: {
    name: {
        value: "Barry",
        readOnly: true
    }
  }
});

// autocasting
const Model = Accessor.createSubclass({
  properties: {
    feature: Graphic
  }
});

let model = new Model();

model.watch("feature", (feature, oldFeature) => {
    view.graphics.remove(oldFeature);
    view.graphics.add(feature);
});

model.watch("name", (name) => {
    console.log(name);
});

model.feature = {
    symbol: marker,
    geometry: new Point([-118.174, 34.024]),
    attributes: {
        name: "Charlie"
    },
    popupTemplate: {
        title: "My Marker",
        content: "{*}"
    }
};
*/
});