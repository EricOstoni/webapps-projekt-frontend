import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";


axios.defaults.baseURL = "https://oilshop-backend.onrender.com";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

const app = createApp(App);

app.use(router);


app.config.globalProperties.axios = axios;



app.use(router).mount("#app");
