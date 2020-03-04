import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// FONTS + ICONS --DONT TOUCH
import { library } from '@fortawesome/fontawesome-svg-core'

import { faLightbulb, faUserPlus, faStar, faArrowRight} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(faLightbulb, faUserPlus, faStar, faArrowRight, faFontAwesome);

Vue.component('font-awesome-icon', FontAwesomeIcon);

// END
Vue.config.productionTip = false;


new Vue({
    router,
    render: h => h(App)
}).$mount("#app");

