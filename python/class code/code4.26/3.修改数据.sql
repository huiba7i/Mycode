/*
	修改数据
	update 表名 set 列名1=值,列名2=值 where 条件 一般都是使用id作为条件的
*/
-- 将stuid为7的学生 生日改为1999-09-08 身高改为1.62
update student set birthday = '1999-09-08',height=1.62 where stuid= 7;
