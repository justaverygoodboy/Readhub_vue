<template>
  <div class="container">
    <div class="content">
      <div class="article" v-for="(item,index) in list" :key="index">
        <Item :item="item"/>
      </div>
      <div class="footer" v-show="load">
        <Loading/>
      </div>  
    </div>
    <Sponsors class="sponsors"/>  
  </div>
</template>

<script>
import axios from "axios"
import Loading from "@/components/loading"
import Item from "@/components/item"
import Sponsors from "@/components/sponsors"
export default {
  components: {
    Loading, Item, Sponsors
  },
  data: function () {
    return {
      list: [],
      load: false,
      timestamp: ''
    }
  },
  created () {
    this.getTechNews()
    window.addEventListener('scroll', this.getScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.getScroll)
  },
  methods: {
    getTechNews() {
      this.timestamp = Date.parse(new Date())
      axios.get(`https://api.readhub.cn/technews?lastCursor=${this.timestamp}&pageSize=20`)
        .then(res => {
          this.list = [...this.list, ...res.data.data]
          this.load = false
        }
        ).catch((error) => {
          console.log(error)
          this.load = true
        })
    },
    getScroll () {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      if (scrollTop + windowHeight === scrollHeight) {
        this.getMore()
      }
    },
    getMore () {
      if (!this.load) {
        this.timestamp = this.timestamp - 10080000
        axios.get(`https://api.readhub.cn/technews?lastCursor=${this.timestamp}&pageSize=20`)
          .then(res => {
            this.list = [...this.list, ...res.data.data]
            this.load = false
          }
          ).catch((error) => {
            console.log(error)
            this.load = true
          })
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @viewMarginTop: 38px; 
  @arcTop: 27px; 
  .container {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    margin-top: @viewMarginTop;
    .content {
    display: flex;
    flex-direction: column;
    }
  }
  
  .article {
    &:not(:first-child){
      margin-top: @arcTop;
    }
  }
</style>
