require([
  "esri/WebScene",
  "esri/views/SceneView"
], function (
  WebScene,
  SceneView
) {
    var map = new WebScene({
      portalItem: {
        id: "e18d908bacd440f6ab15b75e85f637b4"
      }
    });

    var view = new SceneView({
      container: "viewDiv",
      map: map,
    });

    view.then(function() {
      setTimeout(function() {
        var camera = view.camera.clone();
        camera.position = {
          x: -118,
          y: 34,
          z: 100000
        };
        view.goTo(camera)
      }, 5000);
    });

  });

