var map, view;
require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/core/watchUtils"
], function (
    EsriMap,
    MapView,
    FeatureLayer,
    watchUtils
) {
        window.watchUtils = watchUtils;
        window.EsriMap = EsriMap;
        window.MapView = MapView;
        window.FeatureLayer = FeatureLayer;

        /*
layer = new FeatureLayer({
    url: "https://services1.arcgis.com/QKasy5M2L9TAQ7gs/arcgis/rest/services/At_Risk_CT2010_pts/FeatureServer/0"
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

view.then(() => {
    window.layer = new FeatureLayer({
        id: "myLayer",
        url: "https://services1.arcgis.com/QKasy5M2L9TAQ7gs/arcgis/rest/services/At_Risk_CT2010_pts/FeatureServer/0"
    });
    map.add(window.layer);
});
        */
    });

            /*
let promise = view.whenLayerView(layer);
promise.then((layerView) => {
    watchUtils.whenFalseOnce(layerView, "updating", (val) => {
        layerView.queryFeatures().then((results) => {
            view.goTo(results);
        });
    });
});
            */