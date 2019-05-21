# 1.导入mysql-connector模块
import time
import mysql.connector
from mysql.connector import connection

# 2. 创建数据库的连接对象
# 2.1 使用 mysql.connector.connect
# conn_1 = mysql.connector.connect(
#     user="root",  # 数据库的用户名
#     passwd="123456",  # 数据库的密码
#     host="localhost",  # 数据库的ip或者域名
#     port=3306,  # 数据库的端口号 默认3306
#     database="college_1"  # 连接的库名
# )
#
# print(conn_1)

# 2.2 直接创建MySQLConnection对象
# conn_2 = connection.MySQLConnection(
#     user="root",
#     passwd="123456",
#     host="localhost",
#     port=3306,
#     database="college_1"
# )

# print(conn_2)


# while True:
#     time.sleep(10)


# 3. 建表
# 3.1 打开一个mysql客户端
conn = mysql.connector.connect(
    user="root",  # 数据库的用户名
    passwd="123456",  # 数据库的密码
    host="localhost",  # 数据库的ip或者域名
    port=3306,  # 数据库的端口号 默认3306
    database="college_1"  # 连接的库名
)
# 3.2 打开一个游标
cur = conn.cursor()
# 3.3 通过游标对象 发送sql
sql = """
create table course(
	couid int not null primary key auto_increment,
	couname varchar(32)
)
"""
cur.execute(sql)  # 发送sql

conn.close()  # 关闭连接
