import Vue from 'vue'
import App from './App.vue'
import router from "../src/router/router.js";
import $ from 'jquery';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

$("#navbar-site a.nav-link").on("click", e => {
  e.preventDefault();

  let target = $(e.currentTarget.attributes.href.nodeValue);

  $("html, body").animate({
      scrollTop: target.offset().top - 150
  }, "medium");
});
