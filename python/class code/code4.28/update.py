# 1.导入mysql-connector模块
import time
import mysql.connector

# 2. 建表
# 2.1 打开一个mysql客户端
conn = mysql.connector.connect(
    user="root",  # 数据库的用户名
    passwd="123456",  # 数据库的密码
    host="localhost",  # 数据库的ip或者域名
    port=3306,  # 数据库的端口号 默认3306
    database="college_1"  # 连接的库名
)
# 对于 insert、update、delete 三种操作 是开启了事务的 sql执行完 一定要调用conn.commit()提交事务

# 2.2 打开一个游标
cur = conn.cursor()
# 2.3 通过游标对象 发送sql
# sql语句中的%s 是一个占位符 预编译的功能 在execute时 必须传入具体的内容 替换%s位置
sql = "update student set stuname=%s, sex=%s, birthday=%s, height=%s where stuid=%s"
# 定义一个tuple对象
stu = ("王大红", "男", "1998-09-01", 1.79, 19)
cur.execute(sql, stu)  # 发送sql

n = cur.rowcount  # 获得数据库受影响的行数
print("成功修改%d条数据" % n)

conn.commit()  # 提交数据 事务

conn.close()  # 关闭连接
