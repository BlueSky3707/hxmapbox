import { buildingData } from "../api/mapApi";
export const loadBuildGeojson = async (layer) => {
  let resData = await buildingData(layer);
  let features = resData.data.features;
  let pFollect=null;
  if (features.length) {
    pFollect=createGeojonByData(features)
  }
  return pFollect;
};
export const createGeojonByData = (features) => {
  let pFollect = {
    type: "FeatureCollection",
    features: [],
  };
  let pFeatures = [];
  for (let itm of features) {
    let geo = JSON.parse(itm.geoJson);
    let geoObj = new Object();
    geoObj.type = "Feature";
    geoObj.properties = itm.attributes;
    geoObj.geometry = geo;
    pFeatures.push(geoObj);
  }
  pFollect.features = pFeatures;
  return pFollect;
};
