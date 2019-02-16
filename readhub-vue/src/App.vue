<template>
  <div id="app">
    <my-header id="header"/>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    <BackTop/>
  </div>
</template>

<script>
import MyHeader from "./components/myHeader"
import Sponsors from "./components/sponsors"
import BackTop from "./components/backTop"
export default {
  name: 'App',
  components: {
    MyHeader, BackTop
  },
}
</script>

<style>
  @import "./assets/root.less";
  * {
    background-color: #fff;
    margin: 0;
    padding: 0;
  }
  #header {
    width: 100%;
  }
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
