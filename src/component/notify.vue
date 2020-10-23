<!--
  @author:  Hanyuchen
  @date:    2020/10/20
  @name:    notify
-->
<template>
  <div class="notify">
    <div class="board_box3_top">
      <div class="line-title">
        <div class="line"></div>
        <div class="title-text">消息</div>
      </div>
      <div class="loop_class" >
        <div class="loop_now" ref="nowData">
          <span class="loop_name">{{ nowData.name }}</span>
          <span class="loop_text">{{ nowData.text }}</span>
          <span class="loop_time">{{ nowData.time }}</span>
        </div>
        <div class="loop_list" ref="loopClass">
          <div class="loop_li" v-for="item in loopData" :key="item.id">
            <span class="loop_name">{{ item.name }}</span>
            <span class="loop_text">{{ item.text }}</span>
            <span class="loop_time">{{ item.time }}</span>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import {timeFormatToString} from '../lib/timeformat'
  export default {
    name: "notify",

    components: {},

    data() {
      return {
        animation:'',
        nowDataAnimation:'',
        nowData:{

          id: "8",
          name: "许昌幼儿师范学校",
          text: "新增一台86D设备",
          timestamp:new Date().valueOf(),
          time: "刚刚",

        },
        loopData: [
          {
            id: "0",
            name: "天津一中",
            text: "新增一台86T设备",
            timestamp:4,
            time: "1分钟",
          },
          {
            id: "1",
            name: "长春坦克学院",
            text: "新增需求反馈",
            timestamp:4,
            time: "1分钟",
          },
          {
            id: "2",
            name: "博州蒙古中学",
            text: "下发定时策略",
            timestamp:4,
            time: "1分钟",
          },
          {
            id: "3",
            name: "天津一中",
            text: "新增一台86D设备",
            timestamp:4,
            time: "1分钟",
          },
          {
            id: "4",
            name: "天津一中",
            text: "新增一台55X设备",
            timestamp:4,
            time: "1分钟",
          },
          {
            id: "5",
            name: "兴国平川中学",
            text: "增加需求反馈",
            timestamp:4,
            time: "1分钟",
          },
          {
            id: "6",
            name: "壶关县第一中学",
            text: "新增一台86T设备",
            timestamp:4,
            time: "1分钟",
          },
          {
            id: "7",
            name: "许昌科技学校",
            text: "开启弹窗拦截",
            timestamp:4,
            time: "1分钟",
          },
          {
            id: "9",
            name: "普洱卫生学校",
            text: "新增一台86T设备",
            timestamp:4,
            time: "1分钟",
          },
          {
            id: "10",
            name: "阳曲一中",
            text: "新增一台86D设备",
            timestamp:4,
            time: "1分钟",
          },
        ],

      }
    },

    props: {},

    computed: {},

    methods: {
      initAnimation(){
        const list = this.$refs.loopClass
        const nowData = this.$refs.nowData

        const keyframes = [
          // keyframes
          { transform: 'translateY(-50px)' },
          { transform: 'translateY(0px)' }
        ]

         const nowDatakeyframes = [
          // keyframes
          { opacity:1},
        ]



        this.animation = list.animate(keyframes, {
          duration: 1000,
          fill: 'forwards',
          // iterations: Infinity
        })

        this.nowDataAnimation = nowData.animate(nowDatakeyframes, {
          duration: 1000,
          fill: 'forwards',
          // iterations: Infinity
        })

        this.animation.play()
        this.nowDataAnimation.play()

      },
      init(){
        this.loopData.map(i=>{
          i.timestamp = new Date().valueOf()
          return i
        })
        this.setTime()
      },
      onAnimatePlay(){
        this.animation.play()

        this.onNewData()

        setTimeout(()=>{
          this.nowDataAnimation.play()
        },0)
      },
      setTime(){
        const second = Math.random() * 120 * 1000
        console.log(second,'延迟毫秒')
        setTimeout(()=>{
          this.onAnimatePlay()
          this.setTime()
        },second)
      },
      onNewData(){

        this.loopData.unshift(this.nowData)

        this.nowData = this.loopData[this.loopData.length -1]
        this.nowData.timestamp = new Date().valueOf()
        this.nowData.time = '刚刚'

        this.loopData.pop()
        this.loopData.map(i => {
          const timeObj = timeFormatToString(new Date().valueOf() - i.timestamp,'S')
          i.time = (timeObj.hour === '00' ? '' : `${timeObj.hour}小时`) + (timeObj.minute === '00' ? '1分钟' : `${timeObj.minute}分钟`)
          return i
        })

      },
    },

    created() {
    },

    mounted() {
      this.initAnimation()
      this.init()
    },

    destroyed() {
    },

    watch: {},

  }
</script>

<style scoped lang="less">
  .notify {
    .loop_list{
      /*transform: translateY(-50px);*/
    }
    .loop_class{
    }
    .line-title {
      display: flex;
      align-items: center;
      padding: 24px 0 20px 0;
      .line {
        width: 4px;
        height: 18px;
        background: #00e7ff;
        border-radius: 2px;
      }
      .title-text {
        margin-left: 8px;
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
        line-height: 25px;
      }
    }
    .title-text {
      margin-left: 8px;
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
      line-height: 25px;
    }
    .board_box3_top {
      width: 440px;
      height: 565px;
      background: #1b2455;
      box-shadow: 0px 4px 8px 0px rgba(3, 11, 36, 0.17);
      border-radius: 6px;
      // padding-left: 30px;
      padding-bottom: 35px;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      overflow: hidden;
      .line-title {
        margin-left: 30px;
      }
      .loop_now{
        /*width: 401px;*/
        height: 46px;
        opacity: 0;
        margin-left: 30px;
        background: linear-gradient(
                90deg,
                rgba(58, 74, 142, 0.46) 0%,
                #192251 100%
        );
        border-radius: 1px;
        margin-bottom: 14px;
        display: flex;
        align-items: center;
        padding-left: 30px;
        /*justify-content: space-around;*/
        .loop_name {
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #ffffff;
          line-height: 22px;
          margin-right: 20px;
          width: 150px;
        }
        .loop_text {
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #8c96cc;
          line-height: 22px;
          margin-right: 20px;
          width: 150px;
        }
        .loop_time {
          font-size: 12px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #03bad7;
          line-height: 17px;
        }
      }
      .loop_li {
        /*width: 401px;*/
        height: 46px;
        margin-left: 30px;
        background: linear-gradient(
                90deg,
                rgba(58, 74, 142, 0.46) 0%,
                #192251 100%
        );
        border-radius: 1px;
        margin-bottom: 14px;
        display: flex;
        align-items: center;
        padding-left: 30px;
        /*justify-content: space-around;*/
        .loop_name {
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #ffffff;
          line-height: 22px;
          margin-right: 20px;
          width: 150px;
        }
        .loop_text {
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #8c96cc;
          line-height: 22px;
          margin-right: 20px;
          width: 150px;
        }
        .loop_time {
          font-size: 12px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #03bad7;
          line-height: 17px;
        }
      }
    }

  }
</style>
