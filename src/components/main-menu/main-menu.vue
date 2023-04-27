<template>
  <div class="main-menu">
    <div class="title">后台管理系统</div>

    <div class="menu">
      <el-menu
        :default-active="defaultActive"
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
      >
        <template v-for="item in userMenus" :key="item.id">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <span>{{ item.name }}</span>
            </template>

            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleItemClick(subitem)"
              >
                {{ subitem.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
// import { computed } from "vue";
// import { mapPathToMenu } from "@/utils/map-menus";
// import { mapMenusToRoutes } from "@/utils/map-menus";
import useLoginStore from "@/store/login/login";

// 1.获取动态的菜单
const loginStore = useLoginStore();
const userMenus = loginStore.userMenus;
// console.log(userMenus);
// 2.监听item的点击
const router = useRouter();
function handleItemClick(item) {
  const url = item.url;
  router.push(url);
}

// // 3.ElMenu的默认菜单
// const route = useRoute();
// const defaultActive = computed(() => {
//   const pathMenu = mapPathToMenu(route.path, userMenus);
//   // console.log(userMenus)
//   return pathMenu.id + "";
// });
</script>

<style lang="less" scoped>
.main-menu {
  height: 100%;
  background-color: #001529;
}
.title {
  color: #fff;
}

.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
