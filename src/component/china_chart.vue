<template>
  <div class="china_chart" ref="chart"></div>
</template>

<script>
import './china'
export default {
  name: "chinaChart",
  components: {},
  data() {
    return {
      rawData:[
        {name:'广东',value:20843},
        {name:'河南',value:14626},
        {name:'河北',value:8139},
        {name:'湖北',value:8127},
        {name:'陕西',value:7805},
        {name:'上海',value:7452},
        {name:'广西',value:7248},
        {name:'安徽',value:7125},
        {name:'山西',value:6291},
        {name:'江苏',value:5985},
        {name:'吉林',value:5111},
        {name:'江西',value:4832},
        {name:'重庆',value:4625},
        {name:'四川',value:4398},
        {name:'北京',value:4037},
        {name:'湖南',value:3922},
        {name:'甘肃',value:3615},
        {name:'天津',value:3007},
        {name:'山东',value:2991},
        {name:'辽宁',value:2568},
        {name:'西藏',value:2018},
        {name:'新疆',value:1684},
        {name:'黑龙江',value:910},
        {name:'内蒙古',value:879},
        {name:'贵州',value:416},
        {name:'云南',value:345},
        {name:'海南',value:201},
        {name:'浙江',value:160},
        {name:'青海',value:98},
        {name:'宁夏',value:65},
      ],
      geoCoordMap:{
        '甘肃':[103.73, 36.03],
        '青海':[101.74, 36.56],
        '四川':[104.06, 30.67],
        '河北':[114.48, 38.03],
        '云南':[102.73, 25.04],
        '贵州':[106.71, 26.57],
        '湖北':[114.31, 30.52],
        '河南':[113.65, 34.76],
        '山东':[117, 36.65],
        '江苏':[118.78, 32.04],
        '安徽':[117.27, 31.86],
        '浙江':[120.19, 30.26],
        '江西':[115.89, 28.68],
        '福建':[119.3, 26.08],
        '广东':[113.23, 23.16],
        '湖南':[113, 28.21],
        '海南':[110.35, 20.02],
        '辽宁':[123.38, 41.8],
        '吉林':[125.35, 43.88],
        '黑龙江':[126.63, 45.75],
        '山西':[112.53, 37.87],
        '陕西':[108.95, 34.27],
        '台湾':[121.30, 25.03],
        '北京':[116.46, 39.92],
        '上海':[121.48, 31.22],
        '重庆':[106.54, 29.59],
        '天津':[117.2, 39.13],
        '内蒙古':[111.65, 40.82],
        '广西':[108.33, 22.84],
        '西藏':[91.11, 29.97],
        '宁夏':[106.27, 38.47],
        '新疆':[87.68, 43.77],
        '香港':[114.17, 22.28],
        '澳门':[113.54, 22.19]
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
    init() {
      let myChart = this.$echarts.init(this.$refs.chart);
      let _this = this;
      function convertData(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = _this.geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
            });
          }
        }
        return res;
      }
      let color = [
          {
            offset: 0,
            color: "#FD940A", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#FB606B", // 100% 处的颜色
          },
        ]
      // 指定图表的配置项和数据
      let option = {
        tooltip: {},
        geo: {
          // 这个是重点配置区
          map: "china", // 表示中国地图
          roam: true,
          label: {
            normal: {
              show: true, // 是否显示对应地名
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
              // shadowOffsetX: 0,
              // shadowOffsetY: 0,
              // shadowBlur: 20,
              // borderWidth: 0,
              // shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
          // regions: haveData
        },
        series: [
          {
            name: "销量",
            type: "scatter",
            coordinateSystem: "geo", // 对应上方配置
            data: convertData(this.rawData),
            symbolSize: function(val) {
              console.log(val,'77777')
              return val[2] % 30;
            },
            itemStyle: {
              color: function() {
                return {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: color,
                  global: false, // 缺省为 false
                };
              },
              shadowBlur: 10,
              shadowColor: "#333",
            },
          },
          {
            name: "销量",
            type: "scatter",
            coordinateSystem: "geo", // 对应上方配置
            data: convertData(this.rawData),
            symbolSize: function(val) {
              return val[2] % 30 + 10;
            },
            itemStyle: {
              color: function() {
                return {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: color,
                  global: false, // 缺省为 false
                };
              },
              shadowBlur: 10,
              shadowColor: "#333",
              opacity:0.37
            },
          },
          // {
          //   name: "Top 5",
          //   type: "effectScatter",
          //   coordinateSystem: "bmap",
          //   data: convertData(
          //     this.rawData
          //       .sort(function(a, b) {
          //         return b.value - a.value;
          //       })
          //       .slice(0, 6)
          //   ),
          //   symbolSize: function(val) {
          //     return val[2] / 10;
          //   },
          //   encode: {
          //     value: 2,
          //   },
          //   showEffectOn: "render",
          //   rippleEffect: {
          //     brushType: "stroke",
          //   },
          //   hoverAnimation: true,
          //   label: {
          //     formatter: "{b}",
          //     position: "right",
          //     show: true,
          //   },
          //   itemStyle: {
          //     color: "purple",
          //     shadowBlur: 10,
          //     shadowColor: "#333",
          //   },
          //   zlevel: 1,
          // },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
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
.china_chart {
  width: 700px;
  height: 565px;
}
</style>
