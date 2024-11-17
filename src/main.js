
import { createApp } from 'vue'
import App from './App.vue'
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import {InputText} from "primevue";
import {Button} from "primevue";
import router from "@/ChallengePro/router/index.js";
import "./styles.css";
import store from '../src/ChallengePro/storages/store.js';


const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.use(store);
app.component('inputtext', InputText);
app.component('vbutton', Button);

store.dispatch('loadUserFromStorage');


app.mount('#app');

