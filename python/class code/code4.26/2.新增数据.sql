/*
	新增sql语法
	1. insert into 表名 [(列名1,列名2,...)] values (值1, 值2, ...)
	2. insert into 表名 select ......

*/
insert into student (stuname, birthday, height) values ('张三', '1999-01-01', 1.77);

-- 表中的所有列都必须有值 顺序按照表结构的顺序
insert into student values (2, '张小红', '女', '1997-01-01', 1.57);  


insert into student (stuname, birthday, height) select stuname, birthday, height from student ;

insert into student_backup select * from student;  -- 将student表中的数据 复制到student_backup中