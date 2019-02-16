<template>
  <div class="logo">
    <a :href="link">
      <img :src="isrc"/>
    </a>
  </div>
</template>

<script>
export default {
  props:{
    link: {
      type: String,
      default: '/news'
    },
    isrc: {
      type: String,
      default: 'https://cdn.readhub.cn/static/assets/png/readhub_logo@2x.e5b95388.png'
    }
  },
  data: function () {
    return {}
  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  img {
    width: 130px;
    height: 36px;
  }
</style>