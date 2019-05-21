import mysql.connector
# 1.获取连接对象
conn = mysql.connector.connect(user="root", passwd="123456", host="localhost", database="college_1")

# 2.获得cursor对象
cursor = conn.cursor()
# 3.发送sql

stu = ("王晓红", "女' or '1'='1")

sql = "select * from student where stuname = %s and sex = %s"
print(sql)
cursor.execute(sql, stu)
rs = cursor.fetchall()  # 获取所有
for s in rs:
    print(s)


print("*"*200)

sql = "select * from student where stuname = '%s' and sex = '%s'" % stu
print(sql)
cursor.execute(sql)

# 4. 获得查询结果集
rs = cursor.fetchall()  # 获取所有
for stu in rs:
    print(stu)
