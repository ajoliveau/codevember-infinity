import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Buefy from 'buefy'
import Bind from './mixins/Bind'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.mixin(Bind); 

Vue.config.productionTip = false



new Vue({
    el: '#app',
    store,
    render: h => h(App),
})
