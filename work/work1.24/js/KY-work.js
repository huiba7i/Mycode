function three() {
    var sum = 0;
    while (true) {
        var n = prompt("请输入一个数字:", 0);
        n = parseFloat(n);
        if (isNaN(n) || n == 0) {
            document.write('和为:', sum);
            break;
        }
        sum += n;
    }
}
// three();

function four(r) {
    // 坐标是整数
    for (var x = -parseInt(r); x <= parseInt(r); x++) {
        for (var y = -parseInt(r); y <= parseInt(r); y++) {
            // 坐标是圆周上
            if (x * x + y * y == r * r){
                console.log(x,y);
            }
        }
    }
}
// four(5);

function five(a,b,c,d,e){
    var min = 1; // 假设min是最小的众倍数
    var count = 0;  // min能被5个参数整除的数量
    while(true){

        if(min%a==0) count++;
        if(min%b==0) count++;
        if(min%c==0) count++;
        if(min%d==0) count++;
        if(min%e==0) count++;
        
        if(count>=3) break;
        else{
            min++;
            count=0;
        }
    }
    return min;
}
console.log(five(6,2,3,4,5));
