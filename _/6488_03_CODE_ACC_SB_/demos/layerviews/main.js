var map, view, layer;
require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/core/watchUtils",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/geometry/geometryEngine",
    "esri/tasks/support/Query"
], function (
    EsriMap,
    MapView,
    FeatureLayer,
    watchUtils,
    SimpleMarkerSymbol,
    geometryEngine,
    Query
) {
        window.watchUtils = watchUtils;
        window.EsriMap = EsriMap;
        window.MapView = MapView;
        window.FeatureLayer = FeatureLayer;
        window.SimpleMarkerSymbol = SimpleMarkerSymbol;
        window.geometryEngine = geometryEngine;
        window.Query = Query;

        layer = new FeatureLayer({
            url: "https://services1.arcgis.com/QKasy5M2L9TAQ7gs/arcgis/rest/services/At_Risk_CT2010_pts/FeatureServer/0",
            outFields: ["*"]
        });

        map = new EsriMap({
            basemap: "topo",
            layers: [layer]
        });

        view = new MapView({
            container: "viewDiv",
            center: [-118.244, 34.052],
            zoom: 12,
            map: map
        });
    });

            /*
let promise = view.whenLayerView(layer);
promise.then((layerView) => {
    watchUtils.whenFalseOnce(layerView, "updating", (val) => {
        layerView.queryFeatures().then((results) => {
            view.goTo(results);
        });
    });
})
.otherwise(error => console.warn(error));

view.on("click", function(evt) {
    const screenPoint = {
        x: evt.x,
        y: evt.y
    };
    const mapPoint = view.toMap(screenPoint);
    const buffer = geometryEngine.buffer(mapPoint, 5000, "feet");
    const query = layer.createQuery();
    query.geometry = buffer;
    layer.queryFeatures(query).then((results) => {
        const features = results.features.map(graphic => {
            graphic.symbol = new SimpleMarkerSymbol({
                style: "square",
                size: 8,
                color: "blue"
            });
            return graphic;
        });
        view.graphics.removeAll();
        view.graphics.addMany(features);
    })
    .otherwise(error => console.warn(error));
});

            */
/*

const query = layer.createQuery();
query.where = "ACSPOVINDX > 100";
layer.queryFeatures(query).then((results) => {
    const features = results.features.map(graphic => {
        graphic.symbol = new SimpleMarkerSymbol({
            style: "square",
            size: 8,
            color: "blue"
        });
        return graphic;
    });
    view.graphics.removeAll();
    view.graphics.addMany(features);
    view.goTo(features);
});
*/