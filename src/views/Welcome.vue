<script setup>
//引入echarts
import * as echarts from 'echarts';
import {onMounted} from "vue";
import axios from "axios";

const myDate = () => {
  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(document.getElementById('myChart'));
  //图表配置项
  // var option = {
  //   legend: {
  //     top: 'bottom'
  //   },
  //   toolbox: {
  //     show: true,
  //     feature: {
  //       mark: {show: true},
  //       dataView: {show: true, readOnly: false},
  //       restore: {show: true},
  //       saveAsImage: {show: true}
  //     }
  //   },
  //   series: [
  //     {
  //       name: 'Nightingale Chart',
  //       type: 'pie',
  //       radius: [50, 250],
  //       center: ['50%', '50%'],
  //       roseType: 'area',
  //       itemStyle: {
  //         borderRadius: 8
  //       },
  //       data: [
  //         {value: 40, name: 'rose 1'},
  //         {value: 38, name: 'rose 2'},
  //         {value: 32, name: 'rose 3'},
  //         {value: 30, name: 'rose 4'},
  //         {value: 28, name: 'rose 5'},
  //         {value: 26, name: 'rose 6'},
  //         {value: 22, name: 'rose 7'},
  //         {value: 18, name: 'rose 8'}
  //       ]
  //     }
  //   ]
  // };
  // 绘制图表
  //显示Loading 动画
  myChart.showLoading();
  //再得到数据的基础上，进行地图绘制
  axios.get("https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=100000_full").then((res) => {
    console.log(res);
    //得到结 果后，关闭动画
    myChart.hideLoading();
    //注册地图(数据放在axios返回对象的data中哦)
    echarts.registerMap("China", res.data);
    var option = {
      visualMap: {
        type: "piecewise",
        show: true,
        min: 0,
        max: 1000000,
        left: "28%",
        bottom: "25%",
        showLabel: true,
        // text: ["高", "低"],
        textStyle: {
          color: "#ffffff",
        },
        pieces: [
          // 图例颜色
          {
            min: 10000,
            max: 999999,
            label: ">10000",
            color: "#A9251B",
            symbol: "roundRect",
          },
          {
            min: 1000,
            max: 9999,
            label: "1000-9999",
            color: "#D5514D",
            symbol: "roundRect",
          },
          {
            min: 100,
            max: 999,
            label: "100-999",
            color: "#E57C6D",
            symbol: "roundRect",
          },
          {
            min: 10,
            max: 99,
            label: "10-99",
            color: "#F19D8A",
            symbol: "roundRect",
          },
          {
            min: 1,
            max: 9,
            label: "1-9",
            color: "#FBE6DC",
            symbol: "roundRect",
          },
          {
            value: 0,
            label: "0",
            color: "#ffffff",
            symbol:
                "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAMAAAAB8C7XAAAAeFBMVEUAAADBIhzAIh+/ISDBHSHDHh6jMyHAISDAISC/ISDAIR/AISDAHiG/IR+6RjG+IiC/IiHAICC/IR/AISG+ISG+Ix+/ICDAIiC+IB/AIBzCHh68JRa/IiHAIB+/ISC9IiK/Hx+/IiC+IiK+Ih++ICDCJB/BJB+/ISDiIZL9AAAAJ3RSTlMALfv3HQwG0secl4NTQQPkvLWoo2xpZWFYJBkR693CkIx4WktHMjGv/nLNAAAAp0lEQVQoz4XNVwrEMAxFUcUlvfcyvWn/OxxBMASPxNyPBL9jMPwrNJ9gcwfTLfQt52ueRgqpeLQ0rJnGgP4BHtJNcqE7BNQJvRy0EgwSLBJAJUEnwSSBkQDO/l6XOyTe3lrYexxX1bzAte5TlWT9XFg4FNGs+xJ+SgnuwJQTGA42xYB7pGDhhjiw8ERMWbAKY2CLUYcsZIhvFgrEkYVQYw5s9QR8/tNf+EUpppEdkKMAAAAASUVORK5CYII=",
          },
        ],
      },
      tooltip: {},
      series: [
        {
          name: "中国地图",
          type: "map",
          map: "China",
          label: {
            show: true,
          },
          geoIndex: 0,
          data: [
            {
              name: "北京市",
              value: 54,
            },
            {
              name: "天津市",
              value: 13,
            },
            {
              name: "上海市",
              value: 40,
            },
            {
              name: "重庆市",
              value: 75,
            },
            {
              name: "河北省",
              value: 13,
            },
            {
              name: "河南省",
              value: 83,
            },
            {
              name: "云南省",
              value: 11,
            },
            {
              name: "辽宁省",
              value: 19,
            },
            {
              name: "黑龙江省",
              value: 15,
            },
            {
              name: "湖南省",
              value: 69,
            },
            {
              name: "安徽省",
              value: 60,
            },
            {
              name: "山东省",
              value: 39,
            },
            {
              name: "新疆省",
              value: 4,
            },
            {
              name: "江苏省",
              value: 31,
            },
            {
              name: "浙江省",
              value: 104,
            },
            {
              name: "江西省",
              value: 36,
            },
            {
              name: "湖北省",
              value: 7,
            },
            {
              name: "广西省",
              value: 33,
            },
            {
              name: "甘肃省",
              value: 7,
            },
            {
              name: "山西省",
              value: 9,
            },
            {
              name: "内蒙古省",
              value: 7,
            },
            {
              name: "陕西省",
              value: 22,
            },
            {
              name: "吉林省",
              value: 4,
            },
            {
              name: "福建省",
              value: 18,
            },
            {
              name: "贵州省",
              value: 5,
            },
            {
              name: "广东省",
              value: 98,
            },
            {
              name: "青海省",
              value: 1,
            },
            {
              name: "西藏自治区",
              value: 1,
            },
          ],
        },
      ],
    };
    myChart.setOption(option);
  });
}

//图表初始化
//钩子函数
onMounted(() => {
  myDate();
})
</script>

<template>
  <div class="wel">
    <el-row>
      <el-col>
        <div id="myChart" style="width: 650px; height: 650px;"></div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
#myChart {
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>
