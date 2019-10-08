import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import touch from 'kim-vue-touch'
// import touch from './index'
// import touch from '../dist/index'

Vue.config.productionTip = false
Vue.use(touch)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})