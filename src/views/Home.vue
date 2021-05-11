<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="header">
      <div class="text">改变颜色改变大小测试</div>
      <div role="switch" class="switch" :class="theme === true ? 'is-checked' : ''">
        <input type="checkbox" class="switch-input"  @click="changeTheme" />
        <span class="switch-core"></span>
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { lightTheme, darkTheme } from '../assets/js/variable'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      theme: true
    }
  },
  methods: {
    changeTheme () {
      console.log(this.theme, 'yyyy', window.less)
      this.theme = !this.theme
      // 调用 `less.modifyVars` 方法来改变变量值
      // 定义variable.js是因为如果直接将less变量放在modifyVars中切换的效果只会生效一次，所以根据切换的状态使用对应的less变量。
      window.less.modifyVars(this.theme ? lightTheme : darkTheme)
    }
  }
}
</script>
<style lang="less">
// @import '../../public/styles/index.less';
</style>
