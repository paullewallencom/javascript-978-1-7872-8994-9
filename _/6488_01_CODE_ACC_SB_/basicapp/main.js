require([
    "esri/Map",
    "esri/views/MapView"
], function (
    Map,
    MapView
) {

    var map = new Map({
        basemap: "topo"
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 10,
        center: [-118, 34],
        rotation: 30
    });

});

