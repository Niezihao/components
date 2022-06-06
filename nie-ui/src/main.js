import Vue from 'vue'
import App from './App.vue'
import NeButton from './components/button.vue'
import NeDialog from './components/dialog.vue'
import NeInput from './components/input.vue'
import './assets/fonts/iconfont.css'


Vue.component(NeButton.name, NeButton)
Vue.component(NeDialog.name, NeDialog)
Vue.component(NeInput.name, NeInput)

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')