import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import BaseModal from "@/components/BaseModal.vue";
import Toaster from "@meforma/vue-toaster";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { createPinia } from "pinia";
const app = createApp(App);
app.component("base-modal", BaseModal);
app.use(router);
app.use(Toaster);
app.component("Datepicker", Datepicker);

app.use(createPinia());
app.mount("#app");
