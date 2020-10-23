<!--
  @author:  Hanyuchen
  @date:    2020/10/23
  @name:    taiwan_chart
-->
<template>
  <div class="taiwan_chart" ref="taiwan_chart"></div>
</template>

<script>
  const taiwanJson = require('./taiwan')
  export default {
    name: "taiwan_chart",

    components: {},

    data() {
      return {}
    },

    props: {},

    computed: {},

    methods: {
      init() {
        let myChart = this.$echarts.init(this.$refs.taiwan_chart);
        this.$echarts.registerMap('taiwan',taiwanJson);

        // 指定图表的配置项和数据
        let option = {
          tooltip: {},
          geo: {
            // 这个是重点配置区
            map: "taiwan", // 表示中国地图
            roam: true,
            center: [122.50, 25.05],
            label: {
              normal: {
                show: false, // 是否显示对应地名
                textStyle: {
                  fontSize: "7",
                  color:'#fff',
                },
              },
              emphasis: {
                textStyle: {
                  fontSize: "7",
                  color:'#fff',
                },
              },
            },
            itemStyle: {
              normal: {
                areaColor: 'rgba(30, 52, 118, 1)',
                borderColor: "#00E7FF",
              },
              emphasis: {
                areaColor: 'rgba(30, 52, 118, 1)',
                borderColor: "#00E7FF",
              },
            },
            zoom:2
            // regions: haveData
          },
          series: [
            {
              name: "",
              type: "map",
              // coordinateSystem: "geo", // 对应上方配置
              data:[],
            },
          ],
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      },

    },

    created() {
    },

    mounted() {
      this.init()
    },

    destroyed() {
    },

    watch: {},

  }
</script>

<style scoped lang="less">
  .taiwan_chart {
    width: 100%;
    height: 100%;
    border: 1px solid rgba(55,97,144,1);
  }
</style>
