// catch()方法作用同Promise中reject回调函数相同, 还能处理resolve中出现的错误
function request(){
  let p = new Promise((resolve, reject)=>{
    resolve('success');

    // reject('error');
  });

  return p;
}

function testCatch(){
  let promise = request();
  promise.then((result)=>{
    console.log(result, d);
    console.log('over');
  }).catch((error)=>{
    console.log(error);
  });

  /* promise.then((result)=>{
    console.log(result, d);
  },(error)=>{
    console.log(error);
  }); */
  console.log('end');

}