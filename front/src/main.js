import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
//import VueMask from 'v-mask';


const app = createApp(App);
//app.use(VueMask);
app.use(router);


app.mount("#app");
