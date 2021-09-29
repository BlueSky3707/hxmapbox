import { ScatterplotLayer, LineLayer, GeoJsonLayer } from "@deck.gl/layers";
import { MapboxLayer } from "@deck.gl/mapbox";

export const decPointLayer = () => {
  return new MapboxLayer({
    id: "my-scatterplot",
    type: ScatterplotLayer,
    data: [{ position: [109.5, 36.5792027], size: 500 }],
    getPosition: (d) => d.position,
    getRadius: (d) => d.size,
    getColor: [0, 255, 0],
  });
};
export const decjLineLayer = () => {
  return new MapboxLayer({
    id: "linelayer",
    type: LineLayer,
    data: [
      {
        inbound: 72633,
        outbound: 74735,
        from: {
          name: "19th St. Oakland (19TH)",
          coordinates: [109.52, 36.5792027],
        },
        to: {
          name: "12th St. Oakland City Center (12TH)",
          coordinates: [109.56, 36.5892027],
        },
      },
    ],
    pickable: true,
    getWidth: 10,
    onClick:function(evt){
      console.log(evt)
    },
    getSourcePosition: (d) => d.from.coordinates,
    getTargetPosition: (d) => d.to.coordinates,
    getColor: (d) => [Math.sqrt(d.inbound + d.outbound), 140, 0],
  });
};
export const deckGeoLayer = () => {
  return new MapboxLayer({
    id: "geolayer",
    type: GeoJsonLayer,
    data: [
      {
        geometry: {
          type: "LineString",
          properties: {
            "name": "线数据"
          },
          coordinates: [
            [109.56, 36.5892027],
            [109.46, 36.6892027],
            [109.36, 36.2892027],
            [109.16, 36.2892027],
          ],
        },
      },
    ],
    pickable: true,
    stroked: false,
    filled: true,
    extruded: true,
    pointType: "circle",
    lineWidthScale: 20,
    onClick:function(evt){
    console.log(evt)
    },
    lineWidthMinPixels: 2,
    getFillColor: [160, 160, 180, 200],
    getLineColor: [0, 0, 0, 255],
    getPointRadius: 100,
    getLineWidth: 1,
    getElevation: 30,
  });
};
