<template>
  <div class="login-pane">
    <div class="title">后台管理系统</div>
    <div class="tabs">
      <el-form
        :model="account"
        :rules="accountRules"
        label-width="60px"
        size="large"
        status-icon
        ref="formRef"
      >
        <el-form-item label="账号" prop="name">
          <el-input v-model="account.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="account.password"
            show-password
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <div class="login-btn">
      <el-button type="primary" size="large" @click="loginAction"
        >立即登录</el-button
      >
    </div>
    <div class="tips">
      <div class="guanliyuan">
        <span>管理员账号：admin 密码：123456</span>
      </div>
      <div class="putongren">
        <span>普通角色账号：people 密码：654321</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";
import dynamicUser from "../../../mock/mock";

import useLoginStore from "../../../store/login/login";

const isRemPwd = ref();

const account = reactive({
  name: "",
  password: "",
});

// 定义校验规则
const accountRules = {
  name: [
    { required: true, message: "必须输入帐号信息~", trigger: "blur" },
    {
      pattern: /^[a-z0-9]{4,20}$/,
      message: "必须是4~20数字或字母组成~",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "必须输入密码信息~", trigger: "blur" },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: "必须是3位以上数字或字母组成",
      trigger: "blur",
    },
  ],
};

const loginStore = useLoginStore();
// 表单的验证逻辑
const formRef = ref();
function loginAction() {
  formRef.value?.validate((valid) => {
    if (valid) {
      let flag = !1;
      dynamicUser.forEach((item) => {
        if (
          item["username"] == account["name"] &&
          item["password"] == account["password"]
        ) {
          flag = !0;
          ElMessage({
            type: "success",
            message: "登录成功",
            showClose: true,
            duration: 3000,
          });
          console.log("登陆成功");
          window.localStorage.setItem("userInfo", JSON.stringify(item));
          window.localStorage.setItem("token", JSON.stringify(item.token));
          window.localStorage.setItem("userMenus", JSON.stringify(item.routes));

          loginStore.getResult();
        }

        if (!flag)
          ElMessage({
            type: "warning",
            message: "账号密码错误，请重试!",
            showClose: true,
            duration: 3000,
          });
      });
    } else return false;
  });
}
</script>

<style lang="less" scoped>
.login-pane {
  width: 340px;
  height: 430px;
  // background-color: skyblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 20px;
    font-weight: 700;
    padding: 20px;
  }
  .tabs {
    padding: 20px;
    // background-color: skyblue;
  }
  .login-btn {
  }
  .controls {
    // display: flex;
    // justify-content: space-between;
  }
  .tips {
    display: flex;
    flex-direction: column;

    font-size: 16px;
    .guanliyuan {
      padding: 15px;
    }
  }
}
</style>
