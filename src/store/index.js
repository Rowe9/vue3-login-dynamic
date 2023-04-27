import { createPinia } from "pinia";
// import useLoginStore from "./login/login";

const pinia = createPinia();

// 写在这里就不用写在main里面了，避免main文件过于臃肿
// function registerStore(app) {
//   // 1.use的pinia
//   app.use(pinia);

//   // 2.加载本地的数据
//   // const loginStore = useLoginStore();
//   // loginStore.loadLocalCacheAction();
// }

export default pinia;
