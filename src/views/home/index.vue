<template>
  <div>
    <div class="cos_board">
      <!-- 左 -->
      <div class="board_box1">
        <!-- 左上 -->
        <div class="board_box1_top">
          <div class="line-title">
            <div class="line"></div>
            <div class="title-text">软件使用监控</div>
          </div>
          <canvasBarTop />
          <canvasLineTop />
        </div>
        <!-- 左下 -->
        <div class="board_box1_bottom">
          <div class="button_change">
            <div
              :class="chartChange ? 'button_left' : 'button_left_actived'"
              @click="chartChange = false"
            >
              开机时长统计
            </div>
            <div
              :class="chartChange ? 'button_right_actived' : 'button_right'"
              @click="chartChange = true"
            >
              开关机时间段分布
            </div>
          </div>
          <canvasBarBottom :chartChange="chartChange" />
        </div>
      </div>
      <!-- 中 -->
      <div class="board_box2">
        <div class="board_box2_top">
          <chinaChart />
        </div>
        <div class="board_box2_bottom">
          <div class="board_box2_bottom_left">
            <pieChart />
          </div>
          <div class="board_box2_bottom_right">
            <div>
              <div
                class="equipment_num"
                v-for="item in equipmentNum"
                :key="item.id"
              >
                <span class="equipment_num_item">{{ item.name }}</span>
                <span class="equipment_num_item">{{ item.value }}</span>
                <div class="equipment_num_trend" v-if="item.trend">

                  <img v-if="item.trend === '1'" src="../../image/up.png" alt="">
                  <img v-if="item.trend === '2'" src="../../image/down.png" alt="">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右 -->
      <div class="board_box3">
        <notify></notify>
        <div class="board_box3_bottom">
          <div class="board_box3_bottom_add">
            <section v-for="item in addData" :key="item.id">
              <span>{{ item.value }}</span>
              <span>{{ item.name }}</span>
            </section>
          </div>
          <div class="board_box3_bottom_img">
            <div class="equipment_state_num">
              <div class="num_1">
                <section class="box_num">
                  <span>总设备数</span>
                  <section class="box_num_background">139523</section>
                </section>
                <section class="dashed_1"></section>
              </div>
              <div class="num_2">
                <section class="box_num">
                  <span>运行中设备数</span>
                  <section class="box_num_background">{{runEqCount}}</section>
                </section>
                <section class="dashed_2"></section>
              </div>
              <div class="num_3">
                <section class="box_num">
                  <span>报修设备数</span>
                  <section class="box_num_background">23</section>
                </section>
                <section class="dashed_3"></section>
              </div>
            </div>
            <img src="../../image/bottom_background.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  // 定义属性
  data() {
    return {
      runEqCount:0,
      setVal: null,
      chartChange: false,
      loopData: [
        {
          id: "0",
          name: "天津一中",
          text: "新增一台86D设备",
          time: "刚刚",
        },
        {
          id: "1",
          name: "天津一中",
          text: "新增一台86D设备",
          time: "刚刚",
        },
        {
          id: "2",
          name: "天津一中",
          text: "新增一台86D设备",
          time: "刚刚",
        },
        {
          id: "3",
          name: "天津一中",
          text: "新增一台86D设备",
          time: "1分钟",
        },
        {
          id: "4",
          name: "天津一中",
          text: "新增一台86D设备",
          time: "5分钟",
        },
        {
          id: "5",
          name: "天津一中",
          text: "新增一台86D设备",
          time: "5分钟",
        },
        {
          id: "6",
          name: "天津一中",
          text: "新增一台86D设备",
          time: "10分钟",
        },
        {
          id: "7",
          name: "天津一中",
          text: "新增一台86D设备",
          time: "10分钟",
        },
      ],
      equipmentNum: [
        {
          id: 0,
          name: "省份",
          value: "设备数",
        },
        {
          id: 1,
          name: "广东省",
          value: "20843",
          trend:'1',  //趋势 1上升，2下降
        },
        {
          id: 2,
          name: "河南省",
          value: "14626",
          trend:'1',  //趋势 1上升，2下降
        },
        {
          id: 3,
          name: "河北省",
          value: "8139",
          trend:'2',  //趋势 1上升，2下降
        },
        {
          id: 4,
          name: "湖北省",
          value: "8127",
          trend:'1',  //趋势 1上升，2下降
        },
        {
          id: 5,
          name: "陕西省",
          value: "7806",
          trend:'1',  //趋势 1上升，2下降
        },
      ],
      addData: [
        {
          id: "0",
          name: "今日新增",
          value: "158",
        },
        {
          id: "1",
          name: "本周新增",
          value: "1257",
        },
        {
          id: "2",
          name: "本月新增",
          value: "3654",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {
    setInt() {
      let _this = this;
      this.setVal = setInterval(() => {
        _this.chartChange = !_this.chartChange;
      }, 10000);
    },
    runEqNum(){
      const week = new Date().getDay()

      let defNum = 95368

      if([0,6].includes(week)){
        defNum = 3687
      }

      const random = Math.ceil(Math.random() *10)

      const type= Math.ceil(Math.random()*2)

      const data = type === 1 ? defNum + random : defNum - random

      this.runEqCount = data

    },
    init(){
      this.runEqNum()
      setInterval(()=>{
        this.runEqNum()
      },30000)
    },
  },
  created() {},
  mounted() {
    this.setInt();
    this.init()
  },
};
</script>

<style lang="less" scoped>
.cos_board {
  margin-top: 126px;
  margin-bottom: 31px;
  display: flex;
  justify-content: flex-start;
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
.board_box1 {
  width: 460px;

  .board_box1_top {
    height: 565px;
    background: #1b2455;
    box-shadow: 0px 4px 8px 0px rgba(3, 11, 36, 0.17);
    border-radius: 6px;
    padding: 0 30px;
    padding-bottom: 10px;
  }
  .board_box1_bottom {
    margin-top: 17px;
    height: 336px;
    background: #1b2455;
    box-shadow: 0px 4px 8px 0px rgba(3, 11, 36, 0.17);
    border-radius: 6px;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    .button_change {
      display: flex;
      color: #ffffff;
      margin-top: 20px;
      justify-content: center;
      font-size: 16px;
    }
    .button_left {
      width: 157px;
      height: 42px;
      background: #121b49;
      border-radius: 21px 0px 0px 21px;
      text-align: center;
      line-height: 42px;
      cursor: pointer;
    }
    .button_left_actived {
      width: 157px;
      height: 42px;
      background: #2d3770;
      border-radius: 21px 0px 0px 21px;
      text-align: center;
      line-height: 42px;
      cursor: pointer;
    }
    .button_right {
      width: 157px;
      height: 42px;
      background: #121b49;
      border-radius: 0px 21px 21px 0px;
      text-align: center;
      line-height: 42px;
      cursor: pointer;
    }
    .button_right_actived {
      width: 157px;
      height: 42px;
      background: #2d3770;
      border-radius: 0px 21px 21px 0px;
      text-align: center;
      line-height: 42px;
      cursor: pointer;
    }
  }
}
.board_box2 {
  margin: 0 120px 0 119px;
  .board_box2_top {
    width: 700px;
    height: 565px;
  }
  .board_box2_bottom {
    width: 700px;
    height: 327px;
    display: flex;
  }
  .board_box2_bottom_left {
    width: 400px;
    height: 327px;
  }

  .board_box2_bottom_right {
    width: 310px;
    color: #ffffff;
    .equipment_num:first-child {
      background: none;
      border: none;
    }
    .equipment_num {
      width: 200px;
      height: 46px;
      float: right;
      background: linear-gradient(
        90deg,
        rgba(58, 74, 142, 0.46) 0%,
        #192251 100%
      );
      border-radius: 1px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      padding-left: 50px;
      span {
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
        line-height: 22px;
      }
      /*span:first-child {*/
      /*  margin-left: 33px;*/
      /*}*/
      /*span:last-child {*/
      /*  margin-left: 20px;*/
      /*}*/

      &_item{
        margin-right: 20px;
        width: 50px;
      }
      &-trend{
      }
    }
  }
}
.board_box3 {
  .board_box3_bottom {
    margin-top: 16px;
    width: 440px;
    height: 339px;

    background: #1b2455;
    box-shadow: 0px 4px 8px 0px rgba(3, 11, 36, 0.17);
    border-radius: 6px;
    .board_box3_bottom_add {
      display: flex;
      align-items: center;
      justify-content: space-around;
      section {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 37px;
        span {
          margin-top: 10px;
        }
        span:first-child {
          font-size: 22px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #00e7ff;
          line-height: 30px;
        }
        span:last-child {
          font-size: 12px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #ffffff;
          line-height: 17px;
        }
      }
    }
    .board_box3_bottom_img {
      margin-top: 40px;
      padding: 0 35px;
      position: relative;
      .equipment_state_num {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        .num_1 {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
        .num_2 {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          margin-bottom: 15px;
        }
        .num_3 {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
        .box_num {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          span {
            color: #fff;
            font-size: 12px;
          }
          .box_num_background {
            width: 70px;
            height: 27px;
            margin-top: 8px;
            background: #40cff6;
            border-radius: 4px;
            opacity: 0.77;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #1b3a55;
            font-size: 16px;
          }
        }
        .dashed_1 {
          width: 1px;
          height: 42px;
          border-left: 1px dashed #40cff6;
        }
        .dashed_2 {
          width: 1px;
          height: 82px;
          border-left: 1px dashed #40cff6;
        }
        .dashed_3 {
          width: 1px;
          height: 42px;
          border-left: 1px dashed #40cff6;
        }
      }
      img {
        position: absolute;
        width: 371px;
        height: 76px;
        bottom: -40px;
        left: 35px;
        right: 35px;
      }
    }
  }
}
</style>
