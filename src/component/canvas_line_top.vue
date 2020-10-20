<template>
  <div class="canvas_line_top" ref="chart"></div>
</template>

<script>
export default {
  name: "canvasLineTop",
  components: {},
  data() {
    return {
      rawData: [
        {
          name: "创维优课",
          data: [60, 70, 50, 70, 50],
          color: "#FF8B8B",
          opacity: 1,
        },
        {
          name: "创维集控",
          data: [50, 70, 80, 60, 50],
          color: "#00EFFF",
          opacity: 0.2,
        },
        {
          name: "创维传屏",
          data: [65, 60, 80, 70, 50],
          color: "#39CD36",
          opacity: 0.2,
        },
        {
          name: "创维多屏互动",
          data: [55, 80, 60, 70, 50],
          color: "#FFE18C",
          opacity: 0.2,
        },
        {
          name: "天赐云助教",
          data: [70, 80, 50, 70, 50],
          color: "#D395FF",
          opacity: 0.2,
        },
      ],
      setVal: null,
    };
  },
  computed: {},
  watch: {},
  methods: {
    init() {
      let myChart = this.$echarts.init(this.$refs.chart);
      let seriesData = [];
      let xData = [];
      if (this.setVal) {
        let index = this.rawData.findIndex((item) => item.opacity === 1);
        if (index < 4) {
          this.$set(this.rawData[index], "opacity", 0.2);
          this.$set(this.rawData[index + 1], "opacity", 1);
        } else {
          this.$set(this.rawData[0], "opacity", 1);
          this.$set(this.rawData[4], "opacity", 0.2);
        }
      }

      let myDate = new Date();
      let day = myDate.getDate();
      for (let i = 0; i < 5; i++) {
        xData.push(`${Number(day) - i}日`);
      }
      console.log(xData);
      this.rawData.forEach((item) => {
        seriesData.push({
          name: item.name,
          type: "line",
          smooth: false,
          symbol: "none",
          data: item.data,
          itemStyle: {
            color: item.color,
          },
          lineStyle: {
            opacity: item.opacity,
          },
        });
      });
      let option = {
        title: {
          text: "使用率",
          textStyle: {
            color: "#8C96CC",
            fontSize: 12,
          },
        },
        legend: {
          icon: "circle",
          bottom: 0,
          left: 0,
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#fff",
            fontSize: 10,
          },
          data: [
            "创维优课",
            "创维集控",
            "创维传屏",
            "创维多屏互动",
            "天赐云助教",
          ],
        },
        grid: {
          top: 40,
          bottom: 65,
          left: 40,
          right: 0,
        },
        xAxis: {
          data: xData.reverse(),
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
            formatter: "{value} %",
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
          max: 100,
        },
        series: seriesData,
      };
      myChart.setOption(option);
    },
    setInt() {
      let _this = this;
      this.setVal = setInterval(() => {
        _this.init();
      }, 3000);
    },
  },
  created() {},
  mounted() {
    this.init();
    this.setInt();
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
