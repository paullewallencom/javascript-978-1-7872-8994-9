var map, view;
require([
    "esri/WebMap",
    "esri/geometry/Point",
    "esri/views/MapView",
    "esri/core/watchUtils",
    "esri/core/Collection"
], function (
    WebMap,
    Point,
    MapView,
    watchUtils, Collection
) {
    window.Collection = Collection;
    window.Point = Point;
    map = new WebMap({
        portalItem: {
            id: "2460fa4e72044a33a465a8ffd9bdf774"
        }
    });

    view = new MapView({
        container: "viewDiv",
        map: map
    });

    view.then(function () {

    });

});

