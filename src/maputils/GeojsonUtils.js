import { buildingData } from "../api/mapApi";
import { strMapToObj } from "./ObjUtil";
export const getGeojsonByUrl = async (layer) => {
  let resData = await buildingData(layer);
  let features = resData.data.features;
  let pFollect = {
    type: "FeatureCollection",
    features: [],
  };
  if (features.length) {
    //构建Geojson
    let pFeatures = [];
    for (let itm of features) {
      let geo = JSON.parse(itm.geoJson);
      console.log(geo)
      let pMap = new Map();
      pMap.set("type", "Feature");
      pMap.set("properties", itm.attributes);
      pMap.set("geometry", geo);
      let geoObj = strMapToObj(pMap);
      pFeatures.push(geoObj);
    }
    pFollect.features = pFeatures;
  }
  console.log(pFollect);
  return pFollect;
};
