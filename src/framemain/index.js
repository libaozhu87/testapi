import Vue from "vue";
import App from "./App.vue";
window.mainApp = app;

new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
