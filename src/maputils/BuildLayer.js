import { loadBuildGeojson } from "./GeojsonUtils";
export const loadBuildLayer = async () => {
  let geoData = await loadBuildGeojson("xianbuilding");
  if (geoData) {
    addBoxLayer(geoData);
  }
};
const addBoxLayer = (geoData) => {
    debugger
  if (window.$mapbox.getLayer("buildid")) {
    window.$mapbox.removeLayer("buildid");
  }
  if (window.$mapbox.getLayer("buildshader")) {
    window.$mapbox.removeLayer("buildshader");
  }
  let features = geoData.features;
  features.forEach((item) => {
    let he = ""; //默认建筑物高度
    if (item.properties.floor == "") {
      he = "5";
    } else {
      he = item.properties.floor+10;
    }
    //模拟数据
    item.properties.pkid = parseInt(item.properties.gid);
    item.properties.height = parseInt(he);
    item.properties.base_height = parseInt(0);
  });
  if (window.$mapbox.getSource("states")) {
    window.$mapbox.getSource("states").setData(features);
  } else {
    window.$mapbox.addSource("states", {
      type: "geojson",
      data: geoData,
    });
  }
  window.$mapbox.addLayer({
    id:"buildid",
    source:"states",
    type:"fill-extrusion",
    layout:{},
    minzoom: 13,
    paint: {
      "fill-extrusion-color": "red",
      "fill-extrusion-height": [
        "interpolate",
        ["linear"],
        ["zoom"],
        14,
        0,
        14.05,
        ["get", "height"],
      ],
      "fill-extrusion-base": [
        "interpolate",
        ["linear"],
        ["zoom"],
        14,
        0,
        14.05,
        ["get", "base_height"],
      ],
      "fill-extrusion-opacity": 1,
    },
  });
  window.$mapbox.addLayer({
    id: "buildshader",
    source:"states",
    type:"fill-extrusion",
    layout: {},
    minzoom: 13,
    paint: {
      "fill-extrusion-color": "#b8c9dd",
      "fill-extrusion-height": ["get", "height"],
      "fill-extrusion-base": ["get", "base_height"],
      "fill-extrusion-opacity": 1,
    },
    filter: ["in", "pkid", ""],
  });
};
