// 日期天气温度
$(function () {
  let date = new Date
  let weathers = Mock.mock({
    message: {
      temperature: '@natural(30,39)',
      weather: '@string("晴雨阴雪",1)'
    }
  })
  $(`#weather`)[0].innerText = weathers.message.weather
  $(`#temperature`)[0].innerText = weathers.message.temperature
  let year = date.getFullYear()
  let month = Number(date.getMonth()) + 1
  let day = date.getDate()
  $(`#date`)[0].innerText =  year+ `年` +month + `月` + day + `日`
})
let getTime = () => {
  let date = new Date
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  $(`#time`)[0].innerText = h + `时` + m + `分` + s + `秒`
}
setInterval(getTime, 1000)
//根据页面大小缩放
$(function () {
  let allold_wid  //初始宽
  let allold_hgt  //初始高
  let allnow_wid  //此时宽
  let allnow_hgt  //此时高
  let zoom_scale    //缩放比例
  let update_wid    //更新后的宽
  let updata_hgt    //更新后的高
  allold_wid = parseFloat(getComputedStyle($(`#all`)[0]).width)
  allold_hgt = parseFloat(getComputedStyle($(`#all`)[0]).height)
  //更新缩放比例
  window.onresize = () => {
    allnow_wid = parseFloat(getComputedStyle($(`#all`)[0]).width)
    allnow_hgt = parseFloat(getComputedStyle($(`#all`)[0]).height)
    if (allnow_wid < allold_wid || allnow_hgt < allold_hgt) {
      allnow_wid / allold_wid < allnow_hgt / allold_hgt ? zoom_scale = allnow_wid / allold_wid : zoom_scale = allnow_hgt / allold_hgt
      $(`#maincont`).css(`transform`, `translate(-50%,-50%) scale(` + zoom_scale + `)`);
      [update_wid, updata_hgt] = [allnow_wid, allnow_hgt]
      return
    }
    allnow_wid / update_wid > allnow_hgt / updata_hgt ? zoom_scale = allnow_hgt / updata_hgt : zoom_scale = allnow_wid / update_wid
    $(`#maincont`).css(`transform`, `translate(-50%,-50%) scale(` + zoom_scale + `)`)
  }
})

//选项
$(function () {
  let navList = $(`.nav`).find(`*`)
  let navList_length = $(`.nav`).find(`*`).init().length
  for (nav of navList) {
    nav.onclick = () => {
      for (let i = 0; i < navList_length; i++) {
        navList[i].id = ""
      }
      event.target.id = `nav_highlightli`
    }
  }
})
//one echart
$(function () {
  let hours = []    //24小时
  let nums = []     //每小时的产量
  let num
  let time = new Date
  let max         //最高产量
  let one_echarts = []
  for (let i = 1; i <= 24; i++) {
    hours.push(i + `时`)
    num = Mock.mock({
      "number|200-888": 0
    })
    nums.push(num.number)
  }
  //实时产量
  for (actual_times of $(`.actual_time`)) {
    actual_times.innerText = nums[time.getHours()]
  }
  max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i]
    }
  }
  for (ac_max of $(`.actual_max`)) {
    ac_max.innerText = max
  }
  for (one of $(`.one_echart`)) {
    one_echarts.push(echarts.init(one))
  }
  let option = {
    xAxis: {
      data: hours,
    },
    yAxis: {
      show: false,   //文字不显示
      type: "value"
    },
    series: [{
      type: "line",
      symbol: 'none',
      data: nums,
      smooth: true,
      //填充区样式
      areaStyle: {
        normal: {
          color: '#733CC5'
        }
      },
      //轴线样式
      itemStyle: {
        normal: {
          lineStyle: {
            width: 0,
          }
        }
      },
    }],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'    //垂直提示线
      },
      formatter: function (data) {
        return data[0].name + `:</br>` + `&nbsp` + data[0].data + `</br>吨/小时`
      },
      // 提示区样式设置
      extraCssText: 'width:30px;height:60px;font-size:0.5em'
    }
  }
  for (e of one_echarts) {
    e.setOption(option)
  }
})
//前月，当前，下月
$(`.qh`)[0].onclick = () => {
  if (parseInt($(`.month`)[0].innerText) != 1) {
    $(`.month`)[0].innerText = parseInt($(`.month`)[0].innerText) - 1
    echartTwo()
  } else {
    $(`.month`)[0].innerText = 12
    let year = parseInt($(`.year`)[0].innerText) - 1
    $(`.year`)[0].innerText = year
    echartTwo()
  }
}
$(`.qh`)[1].onclick = () => {
  if (parseInt($(`.month`)[0].innerText) != 12) {
    $(`.month`)[0].innerText = parseInt($(`.month`)[0].innerText) + 1
    echartTwo()
  } else {
    $(`.month`)[0].innerText = 1
    let year = parseInt($(`.year`)[0].innerText) + 1
    $(`.year`)[0].innerText = year
    echartTwo()
  }
}
$(`#now`)[0].onclick = () => {
  let date = new Date
  $(`.month`)[0].innerText = date.getMonth()
  $(`.year`)[0].innerText = date.getFullYear()
  echartTwo()
}

//two echart  年度计划完成率
let echartTwo = () => {
  let nums = [[], [], [], []]   //数据数组
  let num
  let numarrs = []
  for (let i = 0; i < 20; i++) {
    num = Mock.mock({
      "number|400-800": 400
    })
    numarrs.push(num.number)
  }
  //四个数据数组
  for (let i = 0, l = 0; i < 4; i++ , l + 4) {
    for (let k = 0; k < 5; k++) {
      nums[i].push(numarrs.shift(l, l += 4))
    }
  }

  let myChart = echarts.init($(`#two_echart`)[0])
  let option = {
    //颜色
    color: ['#003366', '#006699', '#4cabce', '#e5323e', '#cccc'],
    grid: {
      x: 35,
      y: 10,
      x2: 20,
      y2: 20
    },
    xAxis: [
      {
        type: 'category',
        data: ["矿山自产铜", "阴极铜", "矿产粗铜", "硫酸", "铜加工材"],
        axisLine: {
          lineStyle: {
            color: 'white',
            width: 1, //突出显示
          },
        },
        //修改字体样式
        axisLabel: {
          interval: 0,    //间隔
          show: true,
          textStyle: {
            color: '#d8d8d8',  //文字颜色
            fontSize: 10       //文字大小
          },
          axisLine: {
            lineStyle: {
              width: 3,
              color: '#fff' //更改坐标轴颜色
            }
          }

        },
      }
    ],

    yAxis: [
      {
        splitNumber: 4,
        // show: true,
        // type: 'value',
        splitLine: {
          show: false 	//是否显示网格  
        },
        axisTick: {
          show: false   //取消显示刻度线
        },
        axisLine: {
          lineStyle: {
            width: 0,
          }
        },
        axisLabel: {
          //自定义y轴刻度值
          formatter: function (value, index) {
            var texts = [];
            if (index == 1) {
              texts.push('20%');
            } else if (index == 2) {
              texts.push('50%');
            } else if (index == 3) {
              texts.push('70%');
            } else if (index == 4) {
              texts.push('100%');
            } else if (index == 0) {
              texts.push('0');
            }
            console.log(texts)
            return texts;
          },
          textStyle: {
            interval: 0,
            color: "white",
            fontSize: 10
          }
        }
      }
    ],
    itemStyle: {
      //轴线样式
      normal: {
        lineStyle: {
          width: 1,
        }
      }
    },
    series: [
      {
        type: "bar",
        symbol: 'none',
        name: "计划",
        data: nums[0],
        smooth: true,
        barWidth: 7      //柱图宽度
      },
      {
        type: "bar",
        symbol: 'none',
        name: "实际",
        data: nums[1],
        smooth: true,
        barWidth: 7,
      },
      {
        type: "bar",
        symbol: 'none',
        name: "计划 ",
        data: nums[2],
        smooth: true,
        barWidth: 7,
      },
      {
        type: "bar",
        symbol: 'none',
        name: "实际 ",
        data: nums[3],
        smooth: true,
        barWidth: 7,
      }
    ],
    tooltip: {
      textStyle: {
        fontSize: 10,
        fontStyle: 'normal'
      }
      ,
      trigger: 'axis',
      axisPointer: {
        type: 'none'    //垂直提示线
      },
      //改变提示框的位置
      position: function (p) { // p为当前鼠标的位置
        return [p[0] + 5, p[1] - 10];
      },
      extraCssText: 'width:78px;height:115px;',   //修改提示框的宽高
      //自定义提示框数据
      formatter: function (params) {
        let texts = "";
        var dotHtml
        let nowCompRate = (num1, num2) => {
          let n = num1 / num2 * 100
          return Math.round(n) + "%"
        }
        //提示框内容
        params.forEach(function (item, index) {
          dotHtml = '<span style="display:inline-block;margin-right:8px;border-radius:30%;width:7px;height:7px;background-color:' + item.color + '"></span>'
          texts += dotHtml + item.seriesName + ":" + item.value + "<br>"
          if (index == 1) {
            let str = '<span style="margin-left:10px">完成率:' + nowCompRate(params[0].value, params[1].value) + '</span>'
            texts += str + "<br>" + "<br>" + "历史同期:" + "<br>"
          }
          if (index == 3) {
            let str = '<span style="margin-left:10px">完成率:' + nowCompRate(params[2].value, params[3].value) + '</span>'
            texts += str + "<br>"
          }
        })
        return texts
      }
    }
  }
  myChart.setOption(option)
}
$(function(){
  echartTwo()
})
//折线图

// let myChart = echarts.init($(`.one_echart`)[0])
// let option = {
//   xAxis: {
//     data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
//   },
//   yAxis: {},
//   series: [{
//     name: '销量',
//     type: 'bar',
//     data: [5, 20, 36, 10, 10, 20]
//   }]
// };
// myChart.setOption(option)
// echarts.init($(`#two_echart`)[0]).setOption({
//   series: {
//     type: 'pie',
//     data: [
//       { name: 'A', value: 1212 },
//       { name: 'B', value: 2323 },
//       { name: 'C', value: 1919 }
//     ]
//   }
// });

// console.log($(`.one_echart`)[0])
let data = Mock.mock({
  message: {
    name: `@cname`,
    sex: '@string("男女",1)',
    birthday: '@datetime',
    hometown: '@county(true)',
    age: '@natural(1,100)',
    usepassword: '@string(6,10)',
    email: '@email',
    boker: '@url',
    'phone|1': /^1[0-9]{10}$/
  }
});
console.log(data.message.name, `1：1.78`)