import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "mapbox-gl"
import 'mapbox-gl/dist/mapbox-gl.css'

let apps=createApp(App);
// apps.config.globalProperties.$mapBoxGl=mapBoxGl;
// window.$mapBoxGl=mapBoxGl
apps.use(store).use(router).mount("#app")

