import { buildingData } from "../api/mapApi";
import {createGeojonByData} from './GeojsonUtils'
export const loadBuildGeojson = async (layer) => {
  let resData = await buildingData(layer);
  let features = resData.data.features;
  let pFollect=null;
  if (features.length) {
    pFollect=createGeojonByData(features)
  }
  return pFollect;
};