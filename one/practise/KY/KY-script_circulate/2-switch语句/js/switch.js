/*
语法 :
switch (表达式)
{         
    case 常量1 : 
 	   JavaScript语句1;
	   break;
 	case 常量2 : 
 	   JavaScript语句2;
 	   break;
 	...
 	default : 
        JavaScript语句N; 
	    break;   
}
执行流程:
switch中的表达式逐个去匹配case后面的值,如果相等,则执行相应case后面所有的js语句块,直到遇到break结束
如果所有的case都不匹配,则执行default后面的语句块
*/
// 判断每月的天数
var month = 30;
// if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
//     document.write("31天<br/>");
// }else if(month==4 || month==6||month==9||month==11){
//     document.write("30天<br/>");
// }else if(month==2){
//     document.write("28天<br/>");
// }

// switch (month) {
//     case 1:
//         document.write("31天<br/>");
//         break;
//     case 2:
//         document.write("28天<br/>");
//         break;
//     case 3:
//         document.write("31天<br/>");
//         break;
//     case 4:
//         document.write("30天<br/>");
//         break;
//     case 5:
//         document.write("31天<br/>");
//         break;
//     case 6:
//         document.write("30天<br/>");
//         break;
//     case 7:
//         document.write("31天<br/>");
//         break;
//     case 8:
//         document.write("31天<br/>");
//         break;
//     case 9:
//         document.write("30天<br/>");
//         break;
//     case 10:
//         document.write("31天<br/>");
//         break;
//     case 11:
//         document.write("30天<br/>");
//         break;
//     case 12:
//         document.write("31天<br/>");
//         break;
// }
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        document.write("31天<br/>");
        break;
    case 2:
        document.write("28天<br/>");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        document.write("30天<br/>");
        break;
    default:
        document.write("月分错误<br/>");
        break;
        // document.write("dddd"); 不可能执行的语句
}
