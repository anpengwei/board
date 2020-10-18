<template>
  <div class="pie_chart" ref="chart"></div>
</template>

<script>
export default {
  name: "pieChart",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    init() {
      let color = [
        [
          {
            offset: 0,
            color: "#FFFC4D", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#AF9618", // 100% 处的颜色
          },
        ],
        [
          {
            offset: 0,
            color: "#47EF5A", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#029B83", // 100% 处的颜色
          },
        ],
        [
          {
            offset: 0,
            color: "#AB84FB", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#734DF5", // 100% 处的颜色
          },
        ],
        [
          {
            offset: 0,
            color: "#FFA837", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#CE5900", // 100% 处的颜色
          },
        ],
        [
          {
            offset: 0,
            color: "#59CDFF", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#0086FF", // 100% 处的颜色
          },
        ],
        [
          {
            offset: 0,
            color: "#FD5F5F", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#DF3939", // 100% 处的颜色
          },
        ],
      ];
      let myChart = this.$echarts.init(this.$refs.chart);
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{b}<br/> {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          icon: "circle",
          right: 0,
          bottom: 50,
          textStyle: {
            color: "#fff",
          },
          data: ["55寸", "65寸", "70寸", "75寸", "86寸", "98寸"],
        },
        grid: {
          left: 0,
          right: 10,
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "60%"],
            avoidLabelOverlap: false,
            left: 0,
            right: 30,
            label: {
              show: false,
            },
            itemStyle: {
              color: function(params) {
                return {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: color[params.dataIndex],
                  global: false, // 缺省为 false
                };
              },
            },
            data: [
              { value: 335, name: "55寸" },
              { value: 310, name: "65寸" },
              { value: 234, name: "70寸" },
              { value: 135, name: "75寸" },
              { value: 1548, name: "86寸" },
              { value: 1548, name: "98寸" },
            ],
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
.pie_chart {
  width: 400px;
  height: 327px;
}
</style>
