<template>
  <div class="header-temp-container">
    <div class="userInfo">
      <el-dropdown>
        <span class="user-info">
          <el-avatar
            :size="30"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span class="name">{{ userInfo.name }}</span>
          <span class="name">{{ userInfo.username }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleExitClick">
              <span>退出系统</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <span>个人信息</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <span>修改密码</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
const router = useRouter();
// 退出登录
function handleExitClick() {
  window.localStorage.removeItem("userInfo");
  router.push("/login");
}
</script>
<style scoped>
.header-temp-container {
  border-bottom: 1px solid #ddd;
  width: 100%;
  height: 60px;
}
.userInfo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  margin-right: 20px;
}
.eImage {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.detail {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}
</style>
