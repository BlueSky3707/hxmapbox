export const loadArcgisTiles=(url,layerid,maps)=>{
    maps.addLayer({
        id: layerid,
        type: "raster",
        source: {
          type: "raster",
          tiles: [
            url,
          ],
          tileSize: 256,
          zoomOffset: -1,
        },
        minzoom: 0,
        maxzoom: 22,
      });
}
export const loadAqiLayer=(data,layerid,maps)=>{
console.log(data,layerid,maps)
}