<template>
  <div class="canvas_bar_top" ref="chart"></div>
</template>

<script>
export default {
  name: "canvasBarTop",
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
          text: "下载量",
          textStyle: {
            color: "#8C96CC",
            fontSize: 12,
          },
        },
        grid: {
          top: 45,
          bottom: 35,
          left: 0,
          right: 0,
        },
        xAxis: {
          axisLabel: {
            color: "#fff",
            interval: 0,
            formatter: function(params) {
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 4; //一行显示几个字
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                for (var p = 0; p < rowNumber; p++) {
                  var tempStr = "";
                  var start = p * provideNumber;
                  var end = start + provideNumber;
                  if (p == rowNumber - 1) {
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                    tempStr = params.substring(start, end) + "\n";
                  }
                  newParamsName += tempStr;
                }
              } else {
                newParamsName = params;
              }
              return newParamsName;
            },
          },
          
          data: [
            "创维优课",
            "创维多屏互动",
            "创维集控",
            "天赐云助教",
            "创维传屏",
          ],
        },
        yAxis: {
          
          axisLine: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#FFFFFF",
            },
          },
        },
        series: [
          {
            name: "销量",
            type: "bar",
            barWidth: 12,
            label: {
              show: true,
              position: "top",
              color: "#fff",
            },
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#1682D3" }, //柱图渐变色
                  { offset: 1, color: "#1E2961" }, //柱图渐变色
                ]),
              },
            },
            data: [149523, 95842, 64215, 109852, 39521],
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
.canvas_bar_top {
  width: 400px;
  height: 240px;
}
</style>
