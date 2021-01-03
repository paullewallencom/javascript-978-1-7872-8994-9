var map, view;
require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/core/watchUtils"
], function (
    Map,
    MapView,
    FeatureLayer,
    watchUtils
) {
    window.watchUtils = watchUtils;
    map = new Map({
        basemap: "topo"
    });

    view = new MapView({
        container: "viewDiv",
        center: [-118.244, 34.052],
        zoom: 12,
        map: map
    });

    view.then(function () {
        window.layer = new FeatureLayer({
          url: "https://services1.arcgis.com/QKasy5M2L9TAQ7gs/arcgis/rest/services/At_Risk_CT2010_pts/FeatureServer/0"
        });
        map.add(window.layer);
    });

});

