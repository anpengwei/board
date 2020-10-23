<template>
  <div class="china_chart" ref="chart"></div>
</template>

<script>
// import './china'
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

      const sortList = [].concat(_this.rawData).sort((a,b) => a.value - b.value)
      const sortListReverse = [].concat(_this.rawData).sort((a,b) => b.value - a.value)
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
          roam: false,
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
              // shadowOffsetX: 0,
              // shadowOffsetY: 0,
              // shadowBlur: 20,
              // borderWidth: 0,
              // shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
          zoom:1.2
          // regions: haveData
        },
        series: [
          {
            name: "",
            type: "scatter",
            coordinateSystem: "geo", // 对应上方配置
            data: convertData(this.rawData.filter(i=>i.name !== '北京')),
            symbolSize: function(val) {
              const width = sortList.findIndex(i=>i.value === val[2])
              return width / 2
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
              tooltip:{
                formatter:  function (params) {
                  const index = sortListReverse.findIndex(i=>i.value === params.data.value[2])
                  return `
                      TOP:
                      <span style="color: #01E754;font-size: 16px;">${index +1}</span> <br />
                      ${params.data.name}:
                      <span style="color: #01E754;font-size: 16px;">${params.data.value[2]}</span>`;
                }
              },
              shadowBlur: 10,
              shadowColor: "#333",
            },
          },
          {
            name: "",
            type: "scatter",
            coordinateSystem: "geo", // 对应上方配置
            data: convertData(this.rawData.filter(i=>i.name !== '北京')),
            symbolSize: function(val) {
              const width = sortList.findIndex(i=>i.value === val[2])
              return (width + 10) /2;
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
              tooltip:{
                formatter:  function (params) {
                  const index = sortListReverse.findIndex(i=>i.value === params.data.value[2])
                  return `
                      TOP:
                      <span style="color: #01E754;font-size: 16px;">${index +1}</span> <br />
                      ${params.data.name}:
                      <span style="color: #01E754;font-size: 16px;">${params.data.value[2]}</span>`;
                }
              },
              shadowBlur: 10,
              shadowColor: "#333",
              opacity:0.37
            },
          },
          {
            name: "",
            type: "scatter",
            coordinateSystem: "geo", // 对应上方配置
            data: convertData([{name:'北京',value:4037},]),
            symbolSize: function() {
              // const width = sortList.findIndex(i=>i.value === val[2])
              return 15;
            },
            symbol:'image://data:image/jpeg;base64,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',
            // itemStyle: {
            //   color: function() {
            //     return {
            //       type: "linear",
            //       x: 0,
            //       y: 0,
            //       x2: 0,
            //       y2: 1,
            //       colorStops: color,
            //       global: false, // 缺省为 false
            //     };
            //   },
            //
            //   shadowBlur: 10,
            //   shadowColor: "#333",
            //   opacity:0.37
            // },
            tooltip:{
              formatter:  function (params) {
                console.log(params,222)
                const index = sortListReverse.findIndex(i=>i.value === params.data.value[2])
                return `
                      TOP:
                      <span style="color: #01E754;font-size: 16px;">${index +1}</span> <br />
                      ${params.data.name}:
                      <span style="color: #01E754;font-size: 16px;">${params.data.value[2]}</span>`;
              }
            },
            zlevel: 2
          },

          {
            name: "",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(this.rawData.filter(i=>i.name !== '北京')),
            symbolSize: function(val) {
              const width = sortList.findIndex(i=>i.value === val[2])
              return (width + 10) / 2
            },
            encode: {
              value: 2,
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke",
            },
            hoverAnimation: true,
            label: {
              show: false,
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
            tooltip:{
              formatter:  function (params) {
                const index = sortListReverse.findIndex(i=>i.value === params.data.value[2])
                return `
                    TOP:
                    <span style="color: #01E754;font-size: 16px;">${index +1}</span> <br />
                    ${params.data.name}:
                    <span style="color: #01E754;font-size: 16px;">${params.data.value[2]}</span>`;
              }
            },
            zlevel: 1,
          },
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
