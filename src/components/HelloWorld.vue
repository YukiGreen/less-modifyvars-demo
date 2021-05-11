<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="text">这是一个div</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// @import "../../public/styles/variable.less";

// .text {
//   display: inline-block;
//   vertical-align: top;
//   line-height: 70px;
//   font-size: @font-size-large;
//   color: @text-2;
// }
</style>
