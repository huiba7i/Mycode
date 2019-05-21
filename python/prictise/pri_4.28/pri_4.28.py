import mysql.connector
import time

conn = mysql.connector.connect(
    user="root",
    passwd="yzdz7777",
    host="localhost",
    port=3306,
    database="user1",
)

# while True:
#     time.sleep(5)


cur = conn.cursor()

sql = "insert into student (name, age, sex, department ,class) value (%s, %s, %s, %s)"

stu = ('小明', 15, '男', 'math',2)

cur.execute(sql,stu)

n = cur.rowcount

print("成功新增%d条" %n)

conn.commit()

conn.close