import mysql.connector
from mysql.connector import connection

conn = mysql.connector.connect(
    user="root",
    passwd="yzdz7777",
    host="localhost",
    port=3306,
    database="data"
)

# 打开一个游标
cur = conn.cursor()

# sql = """
# create table login(
#     id int primary key auto_increment not null,
#     username varchar(32) not null,
#     userpwd varchar(32) not null,
#     usertel int(11) not null,
#     usersex char(1)
# )
# """

#增加用户

# sql语句中的%s 是一个占位符 预编译的功能 在execute时 必须传入具体的内容 替换%s位置
# sql = "insert into login (id, username ,userpwd, usertel, usersex) value (%s, %s, %s, %s, %s)"
#定义一个tuple对象
# user = (1, "ningque", "123456", 1357666766, "男")

sql = "insert into login (username ,userpwd, usertel, usersex) value (%s, %s, %s, %s)"
user = ('aqa', '123456', 1520354632, '男')



cur.execute(sql, user)  # 发送sql

n = cur.rowcount  # 获得数据库受影响的行数
print("成功新增%d条数据" % n)

conn.commit() #提交

conn.close()