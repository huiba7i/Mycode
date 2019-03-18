function $(id){
  return document.getElementById(id);
}

window.onload = function(){
  var proSelect = $('province');
  // console.log(proSelect);
  var proArray = [ "江苏省","浙江省","安徽省", "黑龙江省"];
  for(var i=0; i<proArray.length; i++){

    var op = document.createElement('option');
    op.innerHTML = proArray[i];
    op.value = proArray[i];
    proSelect.appendChild(op);
    // proSelect.add(op);
  }
}

function changeCity(proSelect){
  // 获得选中的省份
  console.log(proSelect.value, proSelect.selectedIndex, proSelect.options[proSelect.selectedIndex].value);

  var citySelect = $('city');
  // 删除原有的城市选项
  citySelect.options.length = 1;
  /* switch(proSelect.value){
    case "浙江省":
      var cityArray = ['杭州市','温州市', '宁波市','金华市'];
      for(var i=0;i<cityArray.length;i++){

        var op = document.createElement('option');
        op.innerHTML = cityArray[i];
        op.value = cityArray[i];
        citySelect.appendChild(op);
      }
      break;
    case "黑龙江省":
      var cityArray = ['哈尔滨市'];
      for(var i=0;i<cityArray.length;i++){

        var op = document.createElement('option');
        op.innerHTML = cityArray[i];
        op.value = cityArray[i];
        citySelect.appendChild(op);
      }
      break;
  } */

  // 改进方法: 将每个省份的城市选项放在二维数组中,对应省份的索引
  /* var cityArray = new Array();
  cityArray[0] = ['杭州市','温州市', '宁波市','金华市'];
  cityArray[1] = ['哈尔滨市'];
  cityArray[2] = ['南京市','苏州市','常州市'];
  cityArray[3] = ['合肥市','芜湖市','马安山市'];
  var index = proSelect.selectedIndex-1;
  var city = cityArray[index];
  console.log(city);
  for(var i=0;i<city.length;i++){

    var op = document.createElement('option');
    op.innerHTML = city[i];
    op.value = city[i];
    citySelect.appendChild(op);
  } */
  // 改进方法: 将每个省份的城市选项放在二维数组中,下标用字符串标识
  var cityArray = new Array();
  cityArray['浙江省'] = ['杭州市','温州市', '宁波市','金华市'];
  cityArray['黑龙江省'] = ['哈尔滨市'];
  cityArray['江苏省'] = ['南京市','苏州市','常州市'];
  cityArray['安徽省'] = ['合肥市','芜湖市','马安山市'];
  var province = proSelect.value;
  // console.log(province, cityArray[province]);
  var city = cityArray[province];
  for(var i=0;i<city.length;i++){

    var op = document.createElement('option');
    op.innerHTML = city[i];
    op.value = city[i];
    citySelect.appendChild(op);
  }
}
