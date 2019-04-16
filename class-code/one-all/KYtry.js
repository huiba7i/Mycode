function tryFun(){
	var count = 1;
	console.log(count);
	// try监测{}中的代码块,一旦发生了错误异常,自动调用catch{}中的代码进行处理
	// catch,finally必须和try结合使用
	try{
//		alret(count);
		alert(count);
	}catch(err){
		console.log('异常的处理,处理完后程序正常往下执行');
		console.log('异常出现的原因:'+err.message)
	}finally{
		console.log('不管异常是否发生,都会执行的代码块');
	}
	
	count++;
	console.log(count);
}
