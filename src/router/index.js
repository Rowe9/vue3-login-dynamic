import { createRouter, createWebHistory } from "vue-router";
import { firstMenu } from "@/utils/map-menus";

const routes = [
  {
    // 重定向到main
    path: "/",
    redirect: "/main",
  },
  {
    path: "/login",
    component: () => import("../views/login/Login.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../views/main/Main.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  // 只有登录成功(token), 才能真正进入到main页面
  const token = localStorage.getItem("token");
  if (to.path.startsWith("/main") && !token) {
    return "/login";
  }

  // 如果是进入到main
  if (to.path === "/main") {
    return firstMenu?.url;
  }
});
export default router;
