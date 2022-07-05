import Vue from 'vue';
import GMap from "C:\\Users\\jonat\\Desktop\\Projects\\veluxi_v3\\veluxi\\packages\\agency-theme\\node_modules\\nuxt-gmaps\\components\\GMap.vue";
import GMapMarker from "C:\\Users\\jonat\\Desktop\\Projects\\veluxi_v3\\veluxi\\packages\\agency-theme\\node_modules\\nuxt-gmaps\\components\\GMapMarker.vue";
import GMapCircle from "C:\\Users\\jonat\\Desktop\\Projects\\veluxi_v3\\veluxi\\packages\\agency-theme\\node_modules\\nuxt-gmaps\\components\\GMapCircle.vue";
import GMapInfoWindow from "C:\\Users\\jonat\\Desktop\\Projects\\veluxi_v3\\veluxi\\packages\\agency-theme\\node_modules\\nuxt-gmaps\\components\\GMapInfoWindow.vue";
export default(context, inject) =>{
  Vue.component('GMap', GMap);
  Vue.component('GMapMarker', GMapMarker);
  Vue.component('GMapCircle', GMapCircle);
  Vue.component('GMapInfoWindow', GMapInfoWindow);
  inject('GMaps', {apiKey: "", loaded: false, libraries: undefined})
}