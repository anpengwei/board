<template>
  <div class="canvas_bar_bottom" ref="chart"></div>
</template>

<script>
export default {
  name: "canvasBarBottom",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    init() {
      let myChart = this.$echarts.init(this.$refs.chart);
      let option = {
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
            barWidth: 12,
            itemStyle: {
              normal: {
                barBorderRadius: [5, 5, 0, 0],
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#1682D3" }, //柱图渐变色
                  { offset: 1, color: "#1E2961" }, //柱图渐变色
                ]),
              },
            },
            data: [80, 260, 120, 150, 220, 90, 60, 180, 150],
          },
        ],
      };
      myChart.setOption(option);
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
