<template>
  <div class="wrapper">
    <img
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt=""
      class="wrapper_img"
    />
    <div class="wrapper_input">
      <input
        type="text"
        class="wrapper_input_content"
        placeholder="请输入用户名"
        v-model="usernmae"
      />
    </div>
    <div class="wrapper_input">
      <input
        type="password"
        class="wrapper_input_content"
        placeholder="请输入密码"
        v-model="password"
        autocomplete="new-password"
      />
    </div>
    <div class="wrapper_login-button" @click="handleLogin">登录</div>
    <div class="wrapper_login-link" @click="handleRegisterTo">立即注册</div>
    <Toast v-if="show" :message="toastMessage" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import { reactive, toRefs } from 'vue'
import Toast, { useToastEffect } from '../../components/Toast'

// const useToastEffect = () => {
//   const toastData = reactive({
//     showToast: false,
//     toastMessage: ''
//   })
//   const showToast = message => {
//     toastData.toastMessage = message
//     toastData.showToast = true
//     setTimeout(() => {
//       toastData.showToast = false
//       toastData.toastMessage = ''
//     }, 2000)
//   }
//   return { toastData, showToast }
// }
const useLoginEffect = showToast => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: ''
  })
  const handleLogin = async () => {
    try {
      const result = await post('/api/user/login', {
        username: 'data.username',
        password: 'data.password'
      })

      if (result?.errno === 0) {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        showToast('登录失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password } = toRefs(data)
  return { username, password, handleLogin }
}
const useRegisterEffect = () => {
  const router = useRouter()
  const handleRegisterTo = () => {
    router.push({ name: 'Register' })
  }
  return {
    handleRegisterTo
  }
}
export default {
  name: 'Login',
  components: { Toast },
  setup() {
    const { showToast, show, toastMessage } = useToastEffect()
    const { username, password, handleLogin } = useLoginEffect(showToast)
    const { handleRegisterTo } = useRegisterEffect()
    return {
      handleLogin,
      handleRegisterTo,
      username,
      password,
      show,
      toastMessage
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &_img {
    width: 0.66rem;
    height: 0.66rem;
    display: block;
    margin: 0 auto 0.4rem auto;
  }
  &_input {
    background-color: #f9f9f9;
    border-radius: 0.06rem;
    border: 0.01rem solid rgba(0, 0, 0, 0.1);
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    box-sizing: border-box;
    &_content {
      line-height: 0.48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: 0.16rem;
      &::placeholder {
        color: rgba(0, 0, 0, 50);
      }
    }
  }
  &_login-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: #fff;
    line-height: 0.48rem;
    font-size: 0.16rem;
    text-align: center;
  }
  &_login-link {
    font-size: 0.14rem;
    color: rgba(0, 0, 0, 0.5);
    letter-spacing: 0;
    text-align: center;
  }
}
</style>
