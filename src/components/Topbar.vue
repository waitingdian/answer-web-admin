<template>
  <div class="topbar-comp">
    <span class="fs-16 text-gray">MAT后台</span>
    <span class="pull-right cursor-pointer" @click="logout">退出</span>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      logout () {
        this.$message("成功")
      }
    }
  }
</script>
<style scoped lang="less">
  .topbar-comp{
    position: relative;
    z-index: 1;
    height: 60px;
    line-height: 60px;
    padding: 0 50px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
</style>
