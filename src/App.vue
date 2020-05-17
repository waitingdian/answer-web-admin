<template>
  <div id="app">
    <Topbar></Topbar>
    <Aside class="pull-left"></Aside>
    <router-view style="margin-left: 201px;"/>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'
import Aside from '@/components/Aside'
export default {
  name: 'App',
  components: {
    Topbar,
    Aside
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
