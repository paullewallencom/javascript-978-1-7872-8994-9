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

        map = new EsriMap({
            basemap: "topo"
        });

        view = new MapView({
            container: "viewDiv",
            center: [-118.244, 34.052],
            zoom: 12,
            map: map
        });
    });

/*
layer = new FeatureLayer({
    url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/3",
    outFields: ["*"],
    popupTemplate: {
        title: "Name: {STATE_NAME}",
        content: "{*}"
    }
});

map.add(layer);


layer = new FeatureLayer({
  url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/3",
  outFields: ["*"],
  popupTemplate: {
    title: "Name: {STATE_NAME}",
    content: [
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "POP2000",
            visible: true,
            label: "Population for year 2000",
            format: {
              places: 0,
              digitSeparator: true
            }
          },
          {
            fieldName: "POP2007",
            visible: true,
            label: "Population for year 2007",
            format: {
              places: 0,
              digitSeparator: true
            }
          }  
        ]
      }
    ]
  }
});

map.add(layer);


popLayer = new FeatureLayer({
  url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/2",
  outFields: ["*"],
  popupTemplate: {
    title: "Name: {STATE_NAME}",
    content: `
      <section>
        <h4>County Code: {CNTY_FIPS}</h4>
        <hr />
        <ul>
          <li>Year 2000 Pop: {POP2000}</li>
          <li>Year 2007 Pop: {POP2007}</li>
          <li>Total Households: {HOUSEHOLDS}</li>
        </ul>
      </section>
    `
  }
});

map.add(popLayer);

// media infos

layer = new FeatureLayer({
  url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/3",
  outFields: ["*"],
  popupTemplate: {
    title: "Name: {STATE_NAME}",
    content: [
      {
        type: "media",
        mediaInfos: [
            {
            title: "<b>Population</b>",
            type: "column-chart",
            caption: "",
            value: {
                theme: "BlueDusk",
                fields: [ "POP2000", "POP2007" ]
            }
            }
        ]
      }
    ]
  }
});

map.add(layer);
*/