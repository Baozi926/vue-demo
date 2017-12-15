import * as esriLoader from 'esri-loader'

class Chm {
  static view;
  static vue;
  static createMap = function (div, param) {
    if (!esriLoader.isLoaded()) {
      esriLoader.bootstrap((err) => {
        if (err) {
          console.error(err)
        }
        this._createMap(div, param)
      }, {url: 'https://js.arcgis.com/4.5/'})
    } else {
      this._createMap(div, param)
    }
  };

  static _createMap = function (div, param) {
    esriLoader.dojoRequire([
      'esri/core/urlUtils',
      'esri/core/watchUtils',
      'esri/views/MapView',
      'esri/Map',
      'esri/layers/VectorTileLayer',
      'esri/layers/Layer',
      'esri/widgets/Expand',
      'esri/widgets/Legend',
      'esri/widgets/LayerList',
      'esri/widgets/Search'
    ], (urlUtils, watchUtils, MapView, Map, VectorTileLayer, Layer, Expand, Legend, LayerList, Search) => {
      const map = new Map({basemap: 'topo-vector'})
      const view = new MapView({
        map: map,
        container: div || 'viewDiv'
      })
      this.setView(view)
    })
  }

  static setView = function (view_) {
    this.view = view_
    this
      .view
      .then(() => {
        this
          .vue
          .$store
          .commit({type: 'mapLoaded', view: view_})
      })
  };

  static getView = function () {
    return this.view
  };

  static setVue = function (vue_) {
    this.vue = vue_
  };
}

export default Chm
