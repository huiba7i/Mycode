//one
var cvs = document.getElementById("cvs_one");   //画布
var pan = cvs.getContext("2d");
pan.strokeStyle = "#c12cee";    //改变空心图形的样式
pan.moveTo(10, 10);     //起始点
pan.lineTo(250, 250);   
pan.lineTo(10, 250);
pan.lineTo(50, 150);
pan.lineTo(10, 10);
pan.stroke();   //绘制空心图

//two
cvs = document.getElementById("cvs_two");
pan = cvs.getContext("2d");
pan.strokeStyle = "black";
pan.strokeRect(580, 10, 660, 300);      //绘制矩形 (x,y,宽,高)
pan.shadowColor = "black";      //阴影颜色
pan.shadowOffsetX = "7";        //阴影 X 轴偏移值
pan.shadowOffsefY = "-7";       //阴影 Y 轴偏移值
pan.shadowBlur = "4";       //阴影程度
pan.fillStyle = "blue";     //修改实心图样式
pan.font = "italic bold 50px 楷体";     //字体样式  italic - 斜体
pan.textAlign = "left";     //垂直对齐方向
pan.textBaseline = "top";   //交叉轴对齐方式
pan.fillText("疯狂讲义", 585, 15);

pan.shadowColor = "black";
pan.shadowOffsetX = "3";
pan.shadowOffsetY = "-5";
pan.shadowBlur = "4";
pan.strokeStyle = "rgb(245, 50, 203)";
pan.font = "bold 45px 宋体";
pan.textAlign = "left";
pan.textBaseline = "top";
pan.strokeText("轻量级", 585, 65);
pan.strokeText("企业应用实战", 785, 65);

pan.shadowOffsetX = "7";
pan.fillRect(590, 160, 270, 130);

pan.lineWidth = "10";
pan.moveTo(930, 160);
pan.lineTo(1200, 160);
pan.lineTo(1200, 290);
pan.lineTo(930, 290);
pan.closePath();
pan.stroke();

//three
cvs = document.getElementById("cvs_three");
pan = cvs.getContext("2d");
pan.lineJoin = "round";
pan.lineWidth = "3";
pan.strokeStyle = "black";
pan.moveTo(350, 550);
pan.lineTo(100, 300);
pan.moveTo(350,300);
pan.lineTo(100,550);
pan.stroke();
pan.strokeRect(100, 300, 250, 250);
pan.fillStyle = "red";
pan.fillRect(110, 310, 230, 230);
pan.clearRect(125, 325, 200, 200);
pan.strokeRect(135, 335, 180, 180);
pan.fillRect(145, 345, 160, 160);
pan.clearRect(160, 360, 130, 130);
pan.strokeStyle = "aqua";
pan.strokeRect(170, 370, 110, 110)
pan.fillRect(180, 380, 90, 90);
pan.clearRect(195, 395, 60, 60);
pan.strokeStyle = "blue";
pan.strokeRect(205, 405, 40, 40);

