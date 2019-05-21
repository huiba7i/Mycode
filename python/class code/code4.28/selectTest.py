import mysql.connector
# 1.获取连接对象
conn = mysql.connector.connect(user="root", passwd="123456", host="localhost", database="college_1")

# 2.获得cursor对象
cursor = conn.cursor()
# 3.发送sql
sql = "select * from student"
cursor.execute(sql)
# 4. 获得查询结果集
rs = cursor.fetchone()  # 获取查询结果的 一条记录
print(rs)
rs = cursor.fetchone()  # 获取查询结果的 一条记录
print(rs)

rs = cursor.fetchall()  # 获取所有
print(rs)


