import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { CoHamburgerMenu, IoInvertModeSharp, BiListUl, BiCardText, BiGraphUp } from "oh-vue-icons/icons"


addIcons(CoHamburgerMenu, IoInvertModeSharp, BiListUl, BiCardText, BiGraphUp)

const app = createApp(App)

app.use(router)
app.component("v-icon", OhVueIcon)

app.mount('#app')
