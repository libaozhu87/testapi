import Vue from "vue";
import App from "./App.vue";
addEventListener('DOMContentLoaded', function () {
  window.appVue = new Vue(App).$mount('#app');
});