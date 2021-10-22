<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { useRoute, useRouter, RouteRecordRaw } from "vue-router";
import { useStore, Store } from "vuex";
import { ADDROUTE } from "@/vuex";
import { QUERYLOGINCODE, LOGIN } from "@/vuex/modules/auth";
import loginBg from "@/images/login-bg.png";
import topLeft from "@/images/top-left.png";
import bottomRight from "@/images/bottom-right.png";
import { LoginForm, LoginResponse, LoginResponseUser } from "@/interface/Login";
// import { BaseResponse } from "@/interface";
import { useReactive } from "@/hooks/vue";
import validate from "@/utils/validate";
import { Person, LockClosed, ShieldCheckmark } from "@vicons/ionicons5";
import { useMessage } from "naive-ui";
export default defineComponent({
  components: {
    Person,
    LockClosed,
    ShieldCheckmark,
  },
  setup() {
    // 背景图片
    const bg = ref(loginBg);
    // 左上角、右下角
    const [tl, br] = [ref(topLeft), ref(bottomRight)];
    // 路由实例
    const router = useRouter();
    // 获取登录验证码
    function queryLoginCode() {
      useLoginCode.call(store);
    }
    onMounted(() => {
      useLoginCode.call(store);
      console.log(router.getRoutes());
    });
    // Store
    const store: Store<any> = useStore();
    // 表单数据
    const loginInfo = useReactive<LoginForm>({
      userName: "admin",
      password: "123456",
      remember: true,
      loginCode: "test",
    });
    // 表单实例
    const formRef = ref();
    // 表单验证
    const loginRules = useValidate();
    // const formCase = useForm(loginInfo, loginRules);

    

    const message = useMessage();

    // 点击登录
    function login() {
      // formCase.validate().then((result: LoginForm) => {
      //     permissionRoute.forEach((route: RouteRecordRaw) => {
      //         router.addRoute(route)
      //     })
      //     router.push('/');
      // }).catch(error => {

      // });
      formRef.value.validate((errors: Error) => {
        if (!errors) {
          // localStorage.setItem("jwtoken", "zhangpingcloud");
          message.loading("登录中");
          message.success("登录成功");
              localStorage.setItem("jwtoken", 'token');
              store.commit(ADDROUTE)
              router.replace("/");
          // store
          //   .dispatch(LOGIN, loginInfo)
          //   .then((res: LoginResponse<LoginResponseUser>) => {
          //     message.success("登录成功");
          //     localStorage.setItem("jwtoken", res.token);
          //     localStorage.setItem("user", JSON.stringify(res.user));
          //     store.commit(ADDROUTE)
          //     router.replace("/");
          //   })
          //   .catch((err) => {
          //     queryLoginCode();
          //     message.destroyAll();
          //     message.error(err.message);
          //   })
          //   .finally(() => {});
        } else {
          console.log(errors);
        }
      });
    }
    return {
      bg,
      tl,
      br,
      loginInfo,
      login,
      loginRules,
      formRef,
      queryLoginCode,
      loginCode: computed(() => store.state.auth.loginCode),
    };
  },
});
export function useValidate() {
  return {
    userName: validate.required(),
    password: [
      validate.required(),
      validate.length(6, 16, "blur"),
      validate.length(6, 16, "input"),
    ],
    loginCode: validate.required(),
  };
}
export async function useLoginCode(): Promise<void> {
  await this.dispatch(QUERYLOGINCODE);
}
</script>
<template>
  <div class="login" :style="{ backgroundImage: `url(${bg})` }">
    <!-- <span class="welcome">WELCOME</span> -->
    <div class="login-box">
      <img class="ornament-tl" :src="tl" />
      <img class="ornament-br" :src="br" />
      <h1 class="login-type">管理员登录</h1>
      <n-form
        class="login-form"
        :model="loginInfo"
        :rules="loginRules"
        ref="formRef"
        label-placement="left"
        :show-require-mark="true"
      >
        <n-form-item path="userName" label=" " :first="true">
          <n-input
            v-model:value="loginInfo.userName"
            @keyup.enter="login"
            round
            size="large"
            class="input"
            placeholder="请输入用户名"
          >
            <!-- @ts-ignore -->
            <template #prefix>
              <n-icon>
                <Person />
              </n-icon>
            </template>
          </n-input>
        </n-form-item>
        <n-form-item path="password" label=" " :first="true">
          <n-input
            v-model:value="loginInfo.password"
            @keyup.enter="login"
            round
            size="large"
            class="input"
            placeholder="请输入密码"
            type="password"
          >
            <template #prefix>
              <n-icon>
                <LockClosed />
              </n-icon>
            </template>
          </n-input>
        </n-form-item>
        <n-form-item path="loginCode" label=" " :first="true">
          <n-input
            v-model:value="loginInfo.loginCode"
            @keyup.enter="login"
            round
            size="large"
            class="input"
            placeholder="请输入验证码"
            type="text"
          >
            <template #prefix>
              <n-icon>
                <ShieldCheckmark />
              </n-icon>
            </template>
            <template #suffix>
              <img @click="queryLoginCode" :src="loginCode" alt="" />
            </template>
          </n-input>
        </n-form-item>
        <n-form-item name="remember">
          <n-checkbox v-model:checked="loginInfo.remember">自动登录</n-checkbox>
          <n-divider vertical />
          <span>忘记密码</span>
        </n-form-item>
        <n-form-item>
          <p class="register-tip">
            还没有注册账号？立即
            <span class="register">注册</span>
            <n-divider vertical />
            <n-button
              @click="login"
              class="submit"
              type="primary"
              size="medium"
              round
              >登 录</n-button
            >
          </p>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import url(@/styles/no-permission/Login.less);
</style>