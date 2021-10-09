
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
