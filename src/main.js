import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//importamos nuestro store
import store from './store';
//importamos moment
import{ moment } from 'vue-moment';

createApp(App)
  .use(store)
  .use(router)
  .use(moment)
  .mount("#app");
