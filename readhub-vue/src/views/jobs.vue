<template>
  <div class="container">
    <div class="jobs-array">
      <div class="bg-padding"></div>
      <div v-for="(item,index) in list" :key="index" class="job-block-with-padding">
        <div class="job-block">
          <div class="title">{{item.jobTitle}}</div>
          <div class="job">
            <span v-for="(job,index) in item.jobsArray" :key="index">{{job.title}}</span>
          </div>
          <div class="info">
            <p>北京、深圳等地共更新了{{item.jobCount}}个职位，待遇集中在 {{item.salaryLower}}-{{item.salaryUpper}}k，一般要求 {{item.experienceLower}}-{{item.experienceUpper}} 年经验</p>
          </div>
        </div>
        <div class="block-padding"></div> 
      </div>
    </div>
    <div class="breif-news">
      <div></div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Loading from "@/components/loading"

export default {
  components: {
    Loading
  },
  data: function () {
    return {
      list: [],
      load: false,
      lastCursor: ''
    }
  },
  created () {
    window.addEventListener('scroll', this.getScroll)
    this.getJobs()
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.getScroll)
  },
  methods: {
    getJobs () {
      axios.get(`https://api.readhub.cn/jobs?lastCursor=&pageSize=20`)
        .then(res => {
          this.list = res.data.data
        }).catch(function (error) {
          console.log(error)
        })
    },
    getTime (date) {

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
        this.timestamp = Date.parse(new Date())
        axios.get(`https://api.readhub.cn/jobs?lastCursor${this.timestamp}=&pageSize=20`)
          .then(res => {
            this.list = [...this.list, ...res.data.data]
            this.load = false
          }).catch((error) => {
            console.log(error)
            this.flag = true
          })
      }
    },
  },
}
</script>

<style lang="less" scoped>
  @titleColor: #333333;
  @titleMaginLeft: 50px;
  @jobColor: #7F7F7F;
  @infoColor: #595959;
  @bgColor: #F5F6F7;
  @borderColor: #E6E6E6;
  @jobsWidth: 690px; 
  @paddingHeight: 12px;

  @blockUpPadding: 28px;
  @blockDownPadding: 26px;
  @jobMarginTop: 16px;
  @infoMarginTop: 13px;
  .container {
    display: flex;
    justify-content: center;
    width: 99.15vw;
    background-color: @bgColor;
    .jobs-array {
      width: @jobsWidth;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: @bgColor;
      .job-block-with-padding {
        display: flex;
        flex-direction: column;
        .block-padding {
          height: @paddingHeight;
          background-color: @bgColor;
        }
      }
      .bg-padding {
        height: 40px;
        background-color: @bgColor;
      }
      .job-block {
        cursor: pointer;
        border: 1px solid @borderColor;
        width: @jobsWidth;
        padding: @blockUpPadding 0 @blockDownPadding;
        &:hover {
          box-shadow: 0px 8px 20px -10px grey;
          border-radius: 0; 
          z-index:9999;
        }
        .title {
          color: @titleColor;
          font-weight: 500;
          margin-left: @titleMaginLeft;
        }  
        .job {
          color: @jobColor;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: @jobMarginTop 50px 0 50px;
        }
        .info {
          color: @infoColor;
          margin: @infoMarginTop 50px 0 50px;    
        }
      }
    }
  }

</style>
