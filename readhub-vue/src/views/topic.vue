<template>
  <div class="container">
    <div class="content">
      <div class="article" v-for="(item,index) in list" :key="index">
        <a class="title" :href="'https://readhub.cn/topic/'+item.id">
          {{item.title}}
        </a>
        <span class="time">&nbsp;&nbsp;&nbsp;{{getTime(item.updatedAt)}}</span>
        <div class="info" @click="toggle(index)">
          {{item.summary}}
        </div>
      </div>
      <div class="footer" v-show="load">
        <Loading/>
      </div>
    </div>
    <Sponsors/>
  </div>
</template>

<script>
import axios from "axios"
import Loading from "@/components/loading"
import Sponsors from "@/components/sponsors"
export default {
  components: {
    Loading, Sponsors
  },
  data: function () {
    return {
      list: [],
      load: false,
      lastCursor: '',
    }
  },
  created () {
    this.getTopics()
    window.addEventListener('scroll', this.getScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.getScroll)
  },
  methods: {
    getTopics () {
      axios.get(`https://api.readhub.cn/topic?lastCursor=&pageSize=20`)
        .then(res => {
          this.list = res.data.data
        }).catch(function (error) {
          console.log(error)
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
        axios.get(`https://api.readhub.cn/topic?lastCursor=${this.lastCursor}&pageSize=20`)
          .then(res => {
            this.list = [...this.list, ...res.data.data]
            this.lastCursor = res.data.data[19].order
            this.load = false
          }).catch((error) => {
            console.log(error)
            this.flag = true
          })
      }
    },
    getTime (date) {
      date = date.replace(/-/g,"/")
      date = date.split('')
      date.splice(10,1,' ')
      for(let i=19; i<=23; i++){
        date.splice(i,1,' ')
      }
      date = date.join('')
      date = new Date(date)
      let now = new Date()
      let millsec = parseInt(now-date)
      let sec = parseInt(millsec/1000)
      if (sec>60) {
        let min = parseInt(sec/60)
        if (min>60) {
          let hour = parseInt(min/60)
          if (hour>24) {let day = parseInt(hour/24)
            return day+" 天前"
          } else { return hour+" 小时前" }
        } else { return min+" 分钟前" }
      } else { return sec+" 秒前" }
    },
    toggle (index) {

    }
  },
}
</script>

<style lang="less" scoped>
  @viewTop: 30px;

  @titleHoverColor: #10579E;
  @titleColor: #333333;
  @titleBottom: 20px;

  @infoHoverColor: @titleColor;
  @infoColor: #737373;
  @infoHeight: 77px;
  @infoBottom: 30px;

  @timeColor: #999999;
 
  @arcWidth: 670px;
  @acrRight: 50px;
  @arcTop: 30px;

  .container {
    display: flex;
    flex-wrap:nowrap;
    margin-top: @viewTop; 
    .content {
      display: flex;
      flex-direction: column;
      letter-spacing: 1px;//rem!!!!!!!!!!!!!!!
      .article {
        border-bottom: 1px solid #e6e6e6;
        width: @arcWidth;
        margin-right: @acrRight;
        &:not(:first-child) {
          margin-top: @arcTop;
        }
        .title {
          text-decoration: none;
          color: @titleColor;
          display: inline-block;
          margin-bottom: @titleBottom;
          &:hover {
            color: @titleHoverColor;
            text-decoration: underline;
          }
        }
        .time {
          color: @timeColor;
          font-size: 14px;
          display: inline-block;
          }
        .info {
          cursor: pointer;
          color: @infoColor;
          height: @infoHeight;
          text-overflow: ellipsis; 
          overflow: hidden;
          line-height: 1.6em;
          margin-bottom: @infoBottom;
          font-size: 15px; 
          &:hover {
            color: @infoHoverColor;
          }
        }
      }
    }
  }
</style>
