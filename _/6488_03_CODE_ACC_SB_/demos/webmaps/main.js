var webmap, view;
require([
    "esri/WebMap",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/core/watchUtils"
], function (
    WebMap,
    MapView,
    FeatureLayer,
    watchUtils
) {
    window.WebMap = WebMap;
    window.watchUtils = watchUtils;
    window.MapView = MapView;
    /*
webmap = new WebMap({
    portalItem: {
        id: "2dfaf8bdb45a4dcf8511a849e4583873"
    }
});
    */
    view = new MapView({
        container: "viewDiv"
    });
    /*
webmap.load().then(() => {
    console.log("loaded");
    const layer = webmap.layers.find(({ id }) => {
        return id.indexOf("CensusTractPoliticalAffiliationTotals") > -1;
    });
    layer.definitionExpression = "TOTPOP_CY > 10000"
    view.map = webmap;
});
    
const webmapids = [
    "e691172598f04ea8881cd2a4adaa45ba",
    "2dfaf8bdb45a4dcf8511a849e4583873"
];

// create an array of WebMaps
const webmaps = webmapids.map(webmapid => {
    return new WebMap({
        portalItem: {
            id: webmapid
        }
    });
});
    */

});

