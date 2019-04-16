// 默认导出, 导入时可以用任意变量名称来接收,不用加{}
/* export default function(){
  console.log('export default in other');
} */

let num = 1;
export let count = 2;
export {num}; // export可以有多个

function func(){
  console.log('export default in other');
}
export default func; // export default只能有一个或没有