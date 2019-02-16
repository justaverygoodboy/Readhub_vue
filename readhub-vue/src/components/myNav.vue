<template>
  <nav>
    <router-link tag="a" :to="item.link" v-for="(item,index) in items" :key="index" :href="item.link">{{item.title}}</router-link>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      items: [
        { 
          title: "热门话题",
          link: "/"
        },
        {
          title: "科技动态",
          link: "news"
        },
        {
          title: "开发者资讯",
          link: "technews"
        },
        {
          title: "区块链快讯",
          link: "blockchain"
        },
        {
          title: "招聘行情",
          link: "jobs"
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  @linkColor: #737373;
  @activeColor: #246394;
  @linksMarginLeft: 40px;
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  a {
    color: @linkColor;
    margin-right: @linksMarginLeft;
    text-decoration: none;
    &.router-link-exact-active {
      color: @activeColor;
      font-weight: 550;
    }
    &:hover {
      .router-link-exact-active;
    }
  }
</style>
