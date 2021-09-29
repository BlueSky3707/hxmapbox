import axios from "axios";
export const kqData = () => {
  return axios({
    url: `/orsearch/rest/api/search`,
    method: "GET",
    params: {
      layerName: `sx_kqzdz`,
      outFields: `STATIONCODE,STATIONNAME,STATIONTYPE,AREANAME,STATIONATTRI`,
      isReturnGeometry: true,
      spatialRel: `INTERSECTS`,
      limit: 1000,
    },
  }).then((res) => {
    return res.data;
  });
};
export const buildingData = async (layer) => {
  return axios({
    url: `/postgisapi/rest/api/search`,
    method: "GET",
    params: {
      layerName: layer,
      isReturnGeometry: true,
      spatialRel: `INTERSECTS`,
      filter:`floor>10`,
      limit: 10000,
    },
  }).then((res) => {
    return res.data;
  });
};
