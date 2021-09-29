<template>
  <div id="mapid">
  </div>
</template>
<script>
import mapConfig from "../../maputils/mapConfig"
import {loadBaseLayer} from "../../maputils/map"
export default {
 mounted(){
   console.log(mapConfig)
   loadBaseLayer()
 }
}
</script>

<style>
#mapid{
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    background-color: antiquewhite;
}
.echartMap div {
    position: absolute;
    overflow: auto;
  }
</style>