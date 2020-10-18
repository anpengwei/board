<template>
  <div class="canvas_line_top" ref="chart"></div>
</template>

<script>
export default {
  name: "canvasLineTop",
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
        title: {
          text: "使用率",
          textStyle: {
            color: "#8C96CC",
            fontSize: 12,
          },
        },
        grid: {
          top: 40,
          bottom: 30,
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {

        },
        series: [
          {
            name: "销量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20],
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
.canvas_line_top {
  width: 400px;
  height: 240px;
  margin-top: 20px;
}
</style>
