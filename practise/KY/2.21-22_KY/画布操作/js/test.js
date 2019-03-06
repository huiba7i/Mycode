var cvs = document.getElementById('cvs');
// console.log(cvs)
// 获得画布的一个上下文对象, 参数: 2d(二维), 3d(三维)
var ct = cvs.getContext('2d');
// console.log(ct)
/* // (1)绘制矩形
// (1.1).(实心)fillRect(x,y,width,height)
ct.fillStyle = '#f00'; // 填充的颜色
ct.fillRect(0,0,200,100);

// (1.2).(空心)strokeRect(x, y, width, height)
ct.strokeStyle = '#0f0'; // 绘制轮廓的颜色
ct.strokeRect(0, 100, 200, 100)

// (1.3).清除一块矩形区域 clearRect(x, y, width, height)
ct.clearRect(10, 10, 50, 50) */

/* // (2)缩放 (按照图形的宽度和高度进行缩放)scale(xScale, yScale)
ct.fillStyle = 'yellow'
ct.save(); // 保存画布的状态
ct.fillStyle = '#00f';
ct.scale(2, 0.5)
ct.fillRect(0, 0, 100, 100);

ct.fillRect(0, 110, 200, 200);
ct.restore(); // 恢复画布的状态
ct.fillRect(0,180, 100, 100); */

/* // (3)更换画布的原点
ct.save();
ct.fillRect(0, 0, 100, 200 );
ct.translate(110, 100); // 画布原点变为(110, 100)
ct.fillRect(0, 0, 100, 200 ); */

/* // (4)颜色渐变, 通常作为画布的fillStyle属性的值进行填充
// 线性渐变 createLinearGradient(xStart, yStart, xEnd, yEnd) 
// 添加渐变的颜色 addColorStop(position,color) position为0~1
// var grad = ct.createLinearGradient(0,0, 0,200)
var grad = ct.createLinearGradient(0,0, 200,200)
grad.addColorStop(0, '#f00');
grad.addColorStop(1, '#00f');
ct.fillStyle = grad;
ct.fillRect(0,0,200,200); */

/* // (5)线条
ct.moveTo(10, 10); // 画笔移至某个触点
ct.lineTo(100, 100); // 绘制一条线从触点到指定的位置
ct.lineTo(100, 10);
ct.lineWidth = '10'; // 线条的粗细, 以像素为单位,默认是1
ct.lineCap = 'round'; // 线条端点的形状, 圆形
// ct.lineCap = 'square';
// 设置两条线连接点的形状
// ct.lineJoin = 'round';
ct.lineJoin = 'bevel';
ct.stroke(); // 绘制线 */

/* // (6)弧形或圆形
// ct.fillStyle = 'orange'
ct.beginPath();
ct.arc(100,100, 60, 0, (Math.PI/2), false)
ct.closePath();
// ct.fill();
ct.stroke() */

/* // (7)绘制文字

// 添加阴影
ct.shadowColor = '#ccc'; // 阴影颜色
ct.shadowOffsetX = '8'; // 阴影水平偏移值
ct.shadowOffsetY = '8'; // 阴影垂直偏移值
ct.shadowBlur = '3'; // 阴影的模糊度

ct.fillStyle = 'red';
ct.strokeStyle = 'blue';
ct.font = 'bold 50px 微软雅黑';
ct.textAlign = 'left'; // 文字的水平对齐方式
ct.textBaseline = 'top'; // 文字的垂直对齐方式
ct.strokeText('我是画布',0,0); // 后面两个参数:文字对齐方式的中心点(x, y)
ct.fillText('我是画布',0,0); */

// (8)绘制图像
// var imgs = new Image(); // 对应一个<img />标签
var imgs = document.createElement('img');
console.log(imgs);
imgs.src = 'img/ballade.png'
// 当图像加载完成,将其绘制在画布上
imgs.onload = function(){
  ct.drawImage(imgs, 0, 0,200,200);
}