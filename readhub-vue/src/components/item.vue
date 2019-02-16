<template>
  <div class="items">
    <div class="article">
      <a :href="item.url" target="_blank" class="title">{{item.title}}</a>
      <div class="info">{{item.summary}}</div>
      <div class="source-time">
        {{item.siteName}}
        <span class="time">&nbsp;&nbsp;{{getTime(item.publishDate)}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item:{
      type: Object
    }
  },
  methods: {
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
    }
  }
}
</script>
<style lang="less" scoped>
  @infoColor: #737373;
  @visitedColor: #999999;
  @titileColor: #333333;
  @timeColor: @visitedColor;
  @hoverColor: #10579E;
  @arcBottom: 27px; 
  @titleSize: 17px;
  @titleBottom: 8px;
  @infoSize: 15px;
  @infoBottom: 10px;
  @infoHeight: 81px;
  @sourceSize: 14px;
  @itemWidth:690px;
  a {
    color: @titileColor;
    text-decoration: none;
      &:visited {
        color: @visitedColor;
      }
      &:hover {
        color: @hoverColor;
        text-decoration: underline;
      }
  }

  .items {
    display: flex;
    flex-direction: column;
    width: @itemWidth; 
    
  }
  .article {
      padding-bottom: @arcBottom;
      border-bottom: 1px solid #e6e6e6;
    }
  .title {
    font-size: @titleSize;
    color: @titileColor;
    line-height: 1.78em;
    margin-bottom: @titleBottom;
    display: block;
  }
  .info {
    color: @infoColor;
    font-size: @infoSize;
    margin-bottom: @infoBottom;
    line-height: 1.8em;
    max-height: @infoHeight;
    overflow: hidden;
  }
  .source-time {
    color: @timeColor;
    font-size: @sourceSize;
    line-height: 1.2em;
  }
</style>