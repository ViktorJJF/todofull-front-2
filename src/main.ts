import { createApp } from "vue";
import { createPinia } from "pinia";
import store from "./store";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@/scss/style.scss";
import "@/scss/chat.scss";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import VueApexCharts from "vue3-apexcharts";
// @ts-ignore:next-line
import InstantSearch from "vue-instantsearch/vue3/es";
import VCalendar from "v-calendar";
import moshaToasTify from "@/plugins/moshaToasTify";
import VueFeather from "vue-feather";
import axios from "@/plugins/axios";

import "@/plugins/sockets";

const app = createApp(App);
app.component(VueFeather.name, VueFeather);
app.use(PerfectScrollbar);
app.use(store);
app.use(InstantSearch);
app.use(createPinia());
app.use(VCalendar, {});
app.use(VueApexCharts);
app.use(moshaToasTify);
app.use(router);
app.use(vuetify).mount("#app");
