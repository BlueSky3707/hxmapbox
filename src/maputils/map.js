import mapboxgl from "mapbox-gl";
import {loadArcgisTiles} from "../maputils/layerUtils"
import mapConfig from "./mapConfig"
import {createEhartLayer} from './echartLayer' 
import {loadBuildLayer}from "./BuildLayer"
export const loadBaseLayer = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoieWFuY29uZ3dlbiIsImEiOiJjaml4eWgxMnowNHY0M3BvMW96cDI1bWJ6In0.QA-bmCCquo-mziBfZ8KOIQ";
  let map = new mapboxgl.Map({
    container: "mapid", // container id
    pitch: 65,
    center: [109, 34], // starting position
    zoom: 9, // starting zoom
  });
  window.$mapbox = map;
  loadArcgisTiles(mapConfig.v_layer,"vectid",map)
  createEhartLayer()
  map.getCanvas().style.cursor = "crosshair";
  loadBuildLayer()
};
