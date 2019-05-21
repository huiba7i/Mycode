/*
	查询：
	主句 不能省略
		select 
			*（查询表中的所有列）|列名1,列名2,....|表达式 1+1 ,列名*2 |函数
		from 表名

	子句
		where
			条件
		group by 列名
			分组
		having
			分组后的条件
		order by
			排序
		limit 
			限制条件
*/
-- 1. 不带条件查询
select * from student;
SELECT STUID,STUNAME,SEX FROM STUDENT;
-- 2. 给列或者表取别名 列 别名
select 1+1 a,stuid,stuid*2 b from student;
select stuid stuname from student;  -- stuname 作为stuid的别名使用的
select stuid,stuname from student;

-- 3.where 条件
-- 3.1 关系运算符 = 、!=(<>)、 >、<、 >= 、 <=
-- 查询stuid是1的学生基本信息
select * from student where stuid = 1;
select * from student where stuid <> 1;
-- 查询出生日期在2000年之后的学生信息
select * from student where birthday > '2000-01'

-- 3.2 between a and b 查询在[a,b]范围内的数据
select * from student where stuid between 2 and 5;

-- 3.3 模糊查询 like
-- % 匹配0个或者多个任意字符
-- _ 匹配一个任意字符
-- 查询学生姓名中包含'小' 的学生信息
select * from student where stuname like '%小%';

-- 查询 姓 '李' 的学生
select * from student where stuname like '李%';

-- 查询第二字是 '小' 的学生
select * from student where stuname like '_小%'


-- 3.5 多条件查询 （and ，or） and 的优先级会大于or

-- and 必须同时满足条件才可以查出来
-- or 只要满足其中一个条件 就可以被查出来
-- 查询姓名中包含'小' 并且 性别是女的学生
select * from student where stuname like '%小%' and sex = '女';
select * from student where stuname like '%小%' or sex = '女';

select * from student where (stuname like '%小%' or sex = '女') and birthday = '1988-09-09';
select * from student where stuname like '%小%' or sex = '女' and birthday = '1988-09-09';


-- 3.6 统计查询 统计函数 
/*
	count(列|*) 统计查询结果的总条数  指定列时 统计该列不为null的总行数
	max(列名) 取列的最大值
  min(列名) 取列的最小值
	sum(列名) 求所有列的和
  avg(列名) 求列的平均数
*/
-- 查询统计函数时  如果不带group by 子句 那么select 后的结果就只能写统计函数 不要去获取指定的列数据
-- 不添加group by 时  把所有记录当做一个组来统计的
select count(*),count(birthday),max(height),min(height),SUM(height),AVG(height) from student;

-- group by 分组统计
-- 统计男生人数 和女生人数
-- 添加group by 子句时，select后面的结果可以是统计函数 以及 group by 后的列名
select count(*),sex from student group by sex;
select count(*),sex,height from student group by sex, height;  -- 按照性别和 身高做分组

-- having 分组后条件筛选（统计函数作为条件） 
-- 查询总人数>3的性别 以及总人数
select count(*), sex from student group by sex having count(*) > 3;

-- 3.7 order by 排序（升序（默认 asc）降序(desc)）
select * from student order by height;
select * from student order by height desc;  -- 降序

-- 按照两列排序
select * from student order by height, birthday desc;  -- heigth一样时 再按照birthday降序排列


-- 3.8 limit n,m
-- limit n 取查询结果的前n条记录
select * from student limit 5;

-- limit n,m 从查询结果的第n（从0行开始）行开始 获取m条记录
select * from student limit 0, 2;  -- 可以用来做分页查询
select * from student limit 2, 2;
select * from student limit 4, 2;
select * from student limit 6, 2

-- 假如页码n 每页显示m条记录
select * from student limit (n-1)*m,m


-- 语句的执行顺序  from > where > group by > having > select > order by > limit
select
	sex,count(*) count
FROM
	student
where stuid >= 1
group by sex
having count(*) > 3
order by COUNT
limit 1;

-- 3.9 子查询 将一个语句的查询结果 作为一个条件接着去查询
-- 查询身高大于平均身高的学生信息
select * from student where height > (select avg(height) from student);

-- 查询身高大于平均身高的学生信息 以及平均身高
select * from (select avg(height) a from student) t, student s where s.height > t.a




