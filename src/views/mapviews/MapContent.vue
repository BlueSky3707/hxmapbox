<template>
  <div class="container">
    <MapView></MapView>
    <MapTools></MapTools>
  </div>
</template>
<script>
import MapView from "./MapView.vue";
import MapTools from "./MapTools.vue";
export default {
  components: {
    MapView,
    MapTools,
  },
};
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  background-color: antiquewhite;
}
</style>
