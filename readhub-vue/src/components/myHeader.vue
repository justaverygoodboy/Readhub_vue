<template>
  <header>
    <div class="content">
      <div class="logo-nav">
        <brand-logo/>
        <my-nav id="nav"/>
      </div>  
        <a 
          class="login" 
          href="https://passport.nocode.com/wechat?callback=https%3A%2F%2Freadhub.cn%2Ftopics&appname=readhub">
          登陆
        </a> 
    </div>
  </header>
</template>

<script>
import BrandLogo from "./brandLogo"
import MyNav from "./myNav"

export default {
  components: { 
    BrandLogo, MyNav
  },
}
</script>

<style lang="less" scoped>
  * {
    padding: 0;
    margin: 0;
  }

  @borderColor: #dcdcdc;
  @aColor: rgba(0, 0, 0, .66);
  @contentWidth: 996px;
  @contentHeight: 59px;
  @navMarginLeft: 35px;
  a {
    color: @aColor;
    text-decoration: none;
  }
  header {
    display: flex;
    width: 100%;
    border-bottom: 1px solid @borderColor;
    justify-content: center;
  }
  .content {
    width: @contentWidth; 
    height: @contentHeight; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo-nav {
      display: flex;

    }
    #nav {
      margin-left: @navMarginLeft;
    }
  }


</style>