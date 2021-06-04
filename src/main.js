import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCat, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { store } from './store'

library.add(faCat, faCheck, faTimes);

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store)

app.mount('#app')