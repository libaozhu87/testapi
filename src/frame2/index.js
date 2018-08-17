import Vue from "vue";
import App from "./App.vue";

window.$api.ready(function () {
  window.appVue = new Vue(App).$mount('#app');
})