import { createApp } from "vue";
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
import "normalize.css";
import "./assets/css/index.less";
import pinia from "./store";
import App from "./App.vue";
import router from "./router";
import useLoginStore from "./store/login/login";

const app = createApp(App);
app.use(pinia);

const loginStore = useLoginStore();
loginStore.localLoadAction();

app.use(router);
app.mount("#app");
