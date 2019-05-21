# 1.导入mysql-connector模块
import time
import mysql.connector
from mysql.connector import connection

# 2. 建表
# 2.1 打开一个mysql客户端
conn = mysql.connector.connect(
    user="root",  # 数据库的用户名
    passwd="123456",  # 数据库的密码
    host="localhost",  # 数据库的ip或者域名
    port=3306,  # 数据库的端口号 默认3306
    database="college_1"  # 连接的库名
)
# 2.2 打开一个游标
cur = conn.cursor()
# 2.3 通过游标对象 发送sql
sql = """
create table course(
	couid int not null primary key auto_increment,
	couname varchar(32)
)
"""
cur.execute(sql)  # 发送sql

conn.close()  # 关闭连接
