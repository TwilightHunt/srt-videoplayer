import "./assets/scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
