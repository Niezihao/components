import Vue from 'vue'
import App from './App.vue'
import NeButton from './components/button.vue'
import NeDialog from './components/dialog.vue'
import NeInput from './components/input.vue'
import NeSwitch from './components/switch.vue'
import NeRadio from './components/radio.vue'
import NeRadioGroup from './components/radio-group.vue'
import NeCheckbox from './components/checkbox.vue'
import NeCheckboxGroup from './components/checkboxgroup.vue'
import Neform from './components/form.vue'
import NeformItem from './components/form-item.vue'


import './assets/fonts/iconfont.css'


Vue.component(NeButton.name, NeButton)
Vue.component(NeDialog.name, NeDialog)
Vue.component(NeInput.name, NeInput)
Vue.component(NeSwitch.name, NeSwitch)
Vue.component(NeRadio.name, NeRadio)
Vue.component(NeRadioGroup.name, NeRadioGroup)
Vue.component(NeCheckbox.name, NeCheckbox)
Vue.component(NeCheckboxGroup.name, NeCheckboxGroup)
Vue.component(Neform.name, Neform)
Vue.component(NeformItem.name, NeformItem)

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')