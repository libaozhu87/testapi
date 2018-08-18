import Vue from "vue";
import App from "./App.vue";
/* window.appVue = App;
console.log(window.appVue)
window.gVue = new Vue({
  el: "#app",
  template: "<App/>",
  components: {
    App
  }
}); */
/* window.appVue = App;
console.log(window.appVue)
window.gVue = new Vue({
  el: "#app",
  template: "<App/>",
  components: {
    App
  }
}); */


window.$api.ready(function () {
  window.appVue = new Vue(App).$mount('#app');
  window.$api.loadRefresh(window.appVue);
})