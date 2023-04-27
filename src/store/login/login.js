import { defineStore } from "pinia";
import router from "@/router";
import { mapMenuToRoutes } from "@/utils/map-menus";
// import dynamicUser from "../../mock/mock";

const useLoginStore = defineStore("login", {
  // 如何制定state的类型
  state: () => ({
    token: "",
    userInfo: {},
    userMenus: [],
  }),
  actions: {
    getResult() {
      const userInfo = localStorage.getItem("userInfo");
      // console.log(JSON.parse(userInfo));
      this.userInfo = JSON.parse(userInfo);

      const token = JSON.parse(localStorage.getItem("userInfo")).token;
      // console.log(token);
      this.token = token;

      const userMenus = JSON.parse(localStorage.getItem("userInfo")).routes;
      this.userMenus = userMenus;

      // 3.动态添加路由
      const routes = mapMenuToRoutes(userMenus);
      routes.forEach((route) => router.addRoute("main", route));

      router.push("/main");
    },
    localLoadAction() {
      const userInfo = localStorage.getItem("userInfo");
      // console.log(JSON.parse(userInfo));
      this.userInfo = JSON.parse(userInfo);

      const token = JSON.parse(localStorage.getItem("userInfo")).token;
      // console.log(token);
      this.token = token;

      const userMenus = JSON.parse(localStorage.getItem("userInfo")).routes;
      this.userMenus = userMenus;

      // 3.动态添加路由
      const routes = mapMenuToRoutes(userMenus);
      routes.forEach((route) => router.addRoute("main", route));
    },
  },
});

export default useLoginStore;
