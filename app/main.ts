import Vue from 'nativescript-vue'
import Vuex from 'vuex'
import App from './components/App.vue'
import Theme from "@nativescript/theme"
import store from './store'
import VueDevtools from 'nativescript-vue-devtools'

Vue.use(Vuex)

if ((module as any).hot) 
(module as any).hot.accept()


if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
Theme.setMode(Theme.Dark)
console.log(Theme.getMode())
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
