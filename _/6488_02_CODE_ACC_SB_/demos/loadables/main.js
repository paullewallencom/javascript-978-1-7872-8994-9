require([
    "esri/WebMap",
    "esri/views/MapView"
], function (
    WebMap,
    MapView
) {

    window.WebMap = WebMap;
    window.MapView = MapView;

/*
webmap.load().then(() => {
  const layer = webmap.layers.find(({ id }) => {
    return id.indexOf("CensusTractPoliticalAffiliationTotals") > -1;
  });
  layer.definitionExpression = "TOTPOP_CY > 10000"
});

const view = new MapView({
    map: webmap,
    container: "viewDiv"
});
*/

});
