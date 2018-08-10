import Vue from "vue";
import App from "./App.vue";
window.appVue = App;
window.appVue = new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
