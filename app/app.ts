import Vue from 'nativescript-vue'
import Home from './components/Home.vue'
import Vuex from 'vuex'
import App from './components/App.vue'
import store from './store'

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

new Vue({
  store,
  render: (h) => h('frame', [h(App)]),
}).$start()
