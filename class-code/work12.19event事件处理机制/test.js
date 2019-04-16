function eventOne(){
	alert("one");
}
function eventTwo(){
	alert("two");
}

var btn = document.getElementById("btn");
btn.addEventListener('click',eventOne,false);
btn.addEventListener('click',eventTwo,false);

btn.removeEventListener('click',eventTwo);