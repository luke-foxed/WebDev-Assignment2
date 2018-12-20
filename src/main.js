// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import burger from 'vue-burger-menu'

import VueParticles from 'vue-particles'
import VueAnime from 'vue-animejs'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' // Vuesax styles

import VueTyper from 'vue-typer'

Vue.use(Vuesax)

Vue.use(BootstrapVue)
Vue.use(VueParticles)
Vue.use(VueAnime)
Vue.use(burger)
Vue.use(VueTyper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<app/>'
})
