/*
 switch(条件){
 	case 值1:
 		语句块1;
 		break;
 	case 值2:
 		语句块2;
 		break;
 	...
 	default:
 		语句块n;
 		break;
 }
 
 执行:switch中的条件,遂个去匹配case后面的值,如果相同,则执行相应case后面所有的语句块,直到遇到break结束,则整个swtich语句结束.
 如果前面的case值都不匹配,则执行default后面的语句
 
 注意:switch中的条件的类型通常是number,string
 */

var month = 2;
var year= 2018;
//switch(month){
//	case 1:
//		document.write(month+"月中有31天");
//		break;
//	case 2:
//		if((year%4==0 && year%100!=0) || (year%400==0) ){
//			document.write(month+"月中有29天");
//		}else{
//			document.write(month+"月中有28天");
//		}
//		break;
//	case 3:
//		document.write(month+"月中有31天");
//		break;
//	case 4:
//		document.write(month+"月中有30天");
//		break;
//	case 5:
//		document.write(month+"月中有31天");
//		break;
//	case 6:
//		document.write(month+"月中有30天");
//		break;
//	case 7:
//		document.write(month+"月中有31天");
//		break;
//	case 8:
//		document.write(month+"月中有31天");
//		break;
//	case 9:
//		document.write(month+"月中有30天");
//		break;
//	case 10:
//		document.write(month+"月中有31天");
//		break;
//	case 11:
//		document.write(month+"月中有30天");
////		break;
//	case 12:
//		document.write(month+"月中有31天");
//		break;
//	default:
//		document.write(month+"月份有误");
//		break;
//}

switch(month){
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
		document.write(month+"月中有31天");
		break;
	case 4:
	case 6:
	case 9:
	case 11:
		document.write(month+"月中有30天");
		break;
	case 2:
		if((year%4==0 && year%100!=0) || (year%400==0) ){
			document.write(month+"月中有29天");
		}else{
			document.write(month+"月中有28天");
		}
		break;
	default:
		document.write(month+"月份有误");
		break;
}

var con = 3.201+1;
switch(con){
	case 4.201:
		document.write("yes");break;
	case 4.0:
		document.write("no");break;
	
}
