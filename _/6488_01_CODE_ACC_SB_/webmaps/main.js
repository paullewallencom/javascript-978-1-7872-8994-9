require([
    "esri/WebMap",
    "esri/views/MapView"
], function (
    WebMap,
    MapView
) {

    var map = new WebMap({
        portalItem: {
            id: "b5cc864eeab34258baa30f8ff9cbfe9e"
        }
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        ui: {
            components: ["zoom", "compass", "attribution" ]
        }
    });
    // layer id Enriched Requests_2790
    view.then(function() {
        map.layers.forEach(function(layer) {
            console.log("loop", layer.id);
        });

        console.log("found", map.findLayerById("Enriched Requests_2790").id);
    });

});

