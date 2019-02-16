<template>
  <div class="side">
    <div class="ads-container">
      <h2 class="header">Sponsors</h2>
      <div class="wrapper">
        <a 
          target="_blank" 
          class="contain-item"
          v-for="brand in brands"
          :href="brand.url"
          >
          <div 
            class="item-image"
            :style="brand.positionStyle"
          ></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        brands: [{
            name: "ltz",
            id: 1,
            url: "https://lantouzi.com/union/hello?pcode=readhub&hmsr=readhub&hmmd=cpc&hmpl=tp&hmkw=xxl",
            positionStyle: {
              backgroundPosition: '-122px -231px',
              backgroundImage: 'url("https://cdn.readhub.cn/static/assets/png/ads.ea85c7d3.png")'
            }
          },
          {
            name: "zmbx",
            id: 2,
            url: "https://charminginsurance.cn/appointment/appointactuary?from=readhub",
            positionStyle: {
              backgroundPosition: '-366px -154px',
              backgroundImage: 'url("https://cdn.readhub.cn/static/assets/png/ads.ea85c7d3.png")'
            }
          },
          {
            name: "zsxq",
            id: 3,
            url: "https://www.zsxq.com/",
            positionStyle: {
              backgroundPosition: '0 -384px',
              backgroundImage: 'url("https://cdn.readhub.cn/static/assets/png/ads.ea85c7d3.png")'
            }
          },
          {
            name: "smwd",
            id: 4,
            url: "https://shimo.im/?hmsr=wumakeji&hmpl=PC&hmcu=wumakeji&hmkw=guanggao",
            positionStyle: {
              backgroundPosition: '-244px -231px',
              backgroundImage: 'url("https://cdn.readhub.cn/static/assets/png/ads.ea85c7d3.png")'
            }
          },
          {
            name: "wjy",
            id: 5,
            url: "https://www.wegene.com/",
            positionStyle: {
              backgroundPosition: '-366px -308px',
              backgroundImage: 'url("https://cdn.readhub.cn/static/assets/png/ads.ea85c7d3.png")'
            }
          },
          {
            name: "jksj",
            id: 6,
            url: "https://time.geekbang.org/?utm_source=web&utm_medium=readhub&utm_content=columns",
            positionStyle: {
              backgroundPosition: '-122px -308px',
              backgroundImage: 'url("https://cdn.readhub.cn/static/assets/png/ads.ea85c7d3.png")'
            }
          },
          {
            name: "jsj",
            id: 7,
            url: "https://jinshuju.net/?refer=W7fKAF8gC5",
            positionStyle: {
              backgroundPosition: '-366px -230px',
              backgroundImage: 'url("https://cdn.readhub.cn/static/assets/png/ads.ea85c7d3.png")'
            }
          },
          {
            name: "zr",
            id: 8,
            url: "https://x.zhiren.com/",
            positionStyle: {
              backgroundPosition: '-244px -384px',
              backgroundImage: 'url("https://cdn.readhub.cn/static/assets/png/ads.ea85c7d3.png")'
            }
          },
          {
            name: "tower",
            id: 9,
            url: "https://tower.im/",
            positionStyle: {
              backgroundPosition: '0 -308px',
              backgroundImage: 'url("https://cdn.readhub.cn/static/assets/png/ads.ea85c7d3.png")'
            }
          },
          {
            name: "dm",
            id: 10,
            url: "https://www.bigcat.com/?ref=readhub",
            positionStyle: {
              backgroundPosition: '-122px -384px',
              backgroundImage: 'url("https://cdn.readhub.cn/static/assets/png/ads.ea85c7d3.png")'
            }
          },
          {
            name: "dk",
            id: 11,
            url: "https://h5.youzan.com/v2/showcase/homepage?alias=nre994n7&sf",
            positionStyle: {
              backgroundPosition: '-122px -77px',
              backgroundImage: 'url("https://cdn.readhub.cn/static/assets/png/ads.ea85c7d3.png")'
            }
          },
          {
            name: "ypy",
            id: 12,
            url: "https://www.upyun.com/",
            positionStyle: {
              backgroundPosition: '-122px -154px',
              backgroundImage: 'url("https://cdn.readhub.cn/static/assets/png/ads.ea85c7d3.png")'
            }
          },
          {
            name: "ucloud",
            id: 13,
            url: "https://www.ucloud.cn/",
            positionStyle: {
              backgroundPosition: '-244px 0',
              backgroundImage: 'url("https://cdn.readhub.cn/static/assets/png/ads.ea85c7d3.png")'
            }
          },
          {
            name: "ydzb",
            id: 14,
            url: "https://mp.weixin.qq.com/s/rtMZ3uNjn4jEWJaLrlh1XA",
            positionStyle: {
              backgroundPosition: '-244px -308px',
              backgroundImage: 'url("https://cdn.readhub.cn/static/assets/png/ads.ea85c7d3.png")'
            }
          },
          ]
      }
    }
  }
</script>

<style scoped>
@media (min-width: 991px) {
  .ads-container {
    width: 256px;
  }
}
@media (max-width: 991px) {
  .ads-container {
    width: 121px;
  }
}
@media (max-width: 785px) {
  .side {
    display: none;
  }
}
* {
  margin: 0;
  padding: 0;
  font-weight: 400;
}
  .side {
    margin-left: 20px;
  }
  .ads-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .header {
    font-size: 16px;
    color: #afafaf;
    line-height: 1.78em;
    margin-bottom: 10px;
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .contain-item {
    border: 1px solid #e5e5e5;
    margin-bottom: 10px;
  }
  .item-image {
    background-position: 100px 0px;
    height: 75px;
    width: 121px;
  }
  .item-image:hover {
    background-size: 404%;
    box-shadow: 0 5px 40px -15px lightgrey;
  }
</style>
