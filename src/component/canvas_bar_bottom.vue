<template>
  <div class="canvas_bar_bottom" ref="chart"></div>
</template>

<script>
export default {
  name: "canvasBarBottom",
  components: {},
  props: {
    chartChange: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
  },
  data() {
    return {
      rawData: [
        {
          name: "开机",
          color: "#008FFF",
          data: [100, 500, 850, 500, 200, 50],
        },
        {
          name: "关机",
          color: "#FF895A",
          data: [600, 100, 50, 50, 400, 700],
        },
      ],
    };
  },
  computed: {},
  watch: {
    chartChange() {
      this.init();
    },
  },
  methods: {
    init() {
      let myChart = this.$echarts.init(this.$refs.chart);
      let seriesData = [];
      this.rawData.forEach((item) => {
        seriesData.push({
          name: item.name,
          type: "line",
          smooth: true,
          symbol: "none",
          data: item.data,
          itemStyle: {
            color: item.color,
          },
        });
      });
      let option1 = {
        grid: {
          top: 10,
          bottom: 20,
          right: 0,
        },
        xAxis: {
          axisLabel: {
            color: "#fff",
            interval: 0,
          },

          data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月"],
        },
        yAxis: {
          scale: false,
          axisLabel: {
            color: "#fff",
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#FFFFFF",
            },
          },
          min: 0,
        },
        series: [
          {
            name: "销量",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: [5, 5, 0, 0],
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#00E7FF" }, //柱图渐变色
                  { offset: 1, color: "#5866FF" }, //柱图渐变色
                ]),
              },
            },
            showBackground: true,
            backgroundStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#00B7FF" }, //柱图渐变色
                { offset: 1, color: "#5866FF" }, //柱图渐变色
              ]),
              opacity: 0.11,
            },
            data: [80, 260, 120, 150, 220, 90, 60, 180, 150],
          },
        ],
      };
      let option2 = {
        legend: {
          icon: "circle",
          right: 20,
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
          data: ["开机", "关机"],
        },
        grid: {
          top: 30,
          bottom: 20,
          left: 40,
        },
        xAxis: {
          data: ["04", "08", "12", "16", "20", "24"],
          axisLabel: {
            color: "#fff",
          },
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          scale: false,
          axisLabel: {
            color: "#fff",
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#FFFFFF",
            },
          },
          min: 0,
          max: 1000,
        },
        series: seriesData,
      };
      if (this.chartChange) {
        myChart.clear();
        myChart.setOption(option2);
      } else {
        myChart.clear();
        myChart.setOption(option1);
      }
    },
  },
  created() {},
  mounted() {
    this.init();
  },
};
</script>
<style lang="less" scoped>
.canvas_bar_bottom {
  width: 406px;
  height: 200px;
  margin-top: 20px;
  margin-left: 10px;
}
</style>
