var cvs = document.getElementById("cvs");   //获取画布
var hb = cvs.getContext("2d");      //获取 “画笔”

//绘制实心圆   -- fillRect
hb.fillStyle = "aqua";      //改变实心圆填充颜色--fillStyle
hb.fillRect(0, 0, 200, 100);
hb.clearRect(10, 10, 180, 80);     //清除指定区域的像素--clearRect
// hb.scale(2, 2);      //缩放绘制的图形
hb.save();      //保存画布当前状态，缩放，颜色等

//绘制空心圆    --strokeRect
hb.restore();       //获取上一个保存画布状态

hb.translate(20, 20);    //更换画布原点

hb.strokeStyle = "red";     //改变空心圆边框颜色--strokeStyle
hb.strokeRect(180, 50, 100, 100);


hb.restore();   //获取上一个保存画布状态
//绘制线条

hb.beginPath();     //创建路径
hb.moveTo(0, 10);        //起笔位置
hb.lineTo(160, 150);     //绘至何处一
hb.lineTo(0, 150);       //绘至何处二
hb.closePath();     //闭合路径（会自动与创建路径的位置闭合）
hb.lineWidth = "5";     //线条粗细，默认为1px
hb.linelineCap = "round";   //线条端点的形状    linnelineCap="butt","square"
hb.lineJoin = "round";  //两条线之间连接点的形状，"round"--圆角
//lineJoin = "miter"--默认尖角，等于10，"bevel"--斜角
hb.stroke();            //绘制空心图形；
// hb.fill();              //绘制实心图形，内部会填充颜色 

hb.restore();

//渐变开始与结束的坐标
//创建线性渐变（start-x,start-y,end-x,end-y）
var grad = hb.createLinearGradient(700, 0, 700, 100);
// 添加颜色
grad.addColorStop(0, "white");  //添加颜色
grad.addColorStop(1, "black");  //添加颜色
hb.fillStyle = grad;     //给绘制的图形添加渐变样式
hb.fillRect(350, 0, 100, 100); 

//创建径向渐变--createRadialGradient(start-x,start-y,start(r),end-x,end-y,end(r))
var radial = hb.createRadialGradient(900,100,20,900,100,120);
radial.addColorStop(0,"aqua");  //添加颜色（0-1，'颜色'）
radial.addColorStop(0.3,"blue");    //添加颜色
radial.addColorStop(0.6,"orange")
radial.addColorStop(1,"red");   //添加颜色
hb.fillStyle = radial;      //添加渐变样式
hb.fillRect(800,0,200,200);

//绘制弧形 arc(圆心x,圆心y,半径，圆的起始位置，结束位置，（顺时针‘flase’）（逆时针‘ture’）)
hb.beginPath();
var carcle = hb.createRadialGradient(600,250,30,600,250,100);
carcle.addColorStop(0,"red");
carcle.addColorStop(0.4,"#534");
carcle.addColorStop(0.8,"#278");
carcle.addColorStop(1,"#548");
hb.fillStyle = carcle;
var arc = hb.arc(600,250,100,0,(Math.PI*2),false);
hb.closePath();     //闭合路径
hb.fill();

hb.beginPath();
hb.strokeStyle = "#cccc";
hb.lineWidth = "15";
hb.arc(600,70,50,0,(Math.PI*2),true);
hb.closePath();
hb.stroke();

//绘制字体--添加阴影
hb.shadowColor = "#cccccc";       //阴影颜色
hb.shadowOffsetX = "7";         //阴影x轴偏移度
hb.shadowOffsetY = "-3";        //阴影y轴偏移度
hb.shadowBlur = "4";            //阴影程度
hb.fillStyle = "aqua";
hb.strokeStyle = "red";
hb.font = "italic 30px 楷体";   //字体样式  italic-斜体 
hb.textAlign = "left";          //字体水平对齐方式
hb.textBaseLine = "top";        //字体垂直对齐方式
hb.strokeText("蒂花之秀",200,45);       //（'字体内容'，x,y）
hb.fillText("蒂花之秀",200,45);
console.log(hb.measureText("蒂花之秀"));

//var img = new Image();   创建Image标签
var img = document.createElement("img"); //创建img标签
img.src = "imgs/ballade.png";
//当图像加载完成后绘制在画布上
img.onload = function(){
    hb.drawImage(img,120,170,200,200);
}
console.log(img);