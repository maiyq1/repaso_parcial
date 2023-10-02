//import './assets/main.css'

import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/soho-light/theme.css";
import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from "primevue/config";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import my_router from "./router";

const app = createApp(App);

app.use(PrimeVue);
app.use(my_router);

app.component('pv-toolbar', Toolbar);
app.component('pv-button', Button);

app.mount("#app");
