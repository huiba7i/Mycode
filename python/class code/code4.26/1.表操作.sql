/*
    新建表 
    create table 表名(
        列名 数据类型 约束条件,
        ....
    )
    
    约束条件:
        not null 非空约束
        primary key 主键约束
        default 值 默认值
        auto_increment 添加在int类型的主键上 主键自动递增
*/

CREATE TABLE `student` (
  `stuid` int(11) NOT NULL AUTO_INCREMENT,
  `stuname` varchar(5) NOT NULL,
  `sex` char(1) DEFAULT '男',
  `birthday` date DEFAULT NULL,
  `height` double(3,2) DEFAULT NULL,
  PRIMARY KEY (`stuid`)
) ;

