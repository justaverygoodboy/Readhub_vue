<template>
  <div id="backTop" v-show="load" @click="backTop()">
    <div class="line"></div>
    <div class="arrow"></div>
  </div>
</template>

<script>
  export default{
    name: 'backTop',
    data () {
      return {
        speed: 0.3,
        load: false
      }
    },
    created () {
      this.$nextTick(function () {
        window.addEventListener('scroll', this.getScroll)
      })
    },
    methods: {
      backTop () {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let timer = setInterval(() => {
          scrollTop -= Math.abs(scrollTop * this.speed)
          if (scrollTop <= 1) {
            scrollTop = 0
            clearInterval(timer)
          }
          document.body.scrollTop = scrollTop
          document.documentElement.scrollTop = scrollTop
        }, 20)
        return false
      },
      getScroll () {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        const windowHeight = document.documentElement.clientHeight || document.body.clientHeight
        if (scrollTop >= windowHeight) {
          this.load = true
        } else {
          this.load = false
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  #backTop {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @buttonSquare: 40px;
  #backTop {
    position: fixed;
    height: @buttonSquare;
    width: @buttonSquare;
    bottom: 69px;
    right: 55px;
    background: #fff;
    border: 1px solid #d5d6d8;
    border-radius: 4px;
    transition: all .3s ease-in-out;
    .line 
    {
      width: 12px;
      height: 2px;
      background: #dddfe1;
      margin-bottom: 2px;
    }
  .arrow 
    {
      display: inline-block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 7px 10px;
      border-color: transparent transparent #dddfe1;
    }
  }
  
</style>