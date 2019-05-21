import mysql.connector
from mysql.connector import connection

#创建表
conn = mysql.connector.connect(
    user="root",
    passwd="yzdz7777",
    host="localhost",
    port=3306,
    database="data"
)

cur = conn.cursor()

sql = """
create table user(
    id int primary key auto_increment not null,
    name varchar(32) not null,
    province varchar(32) not null,
    city varchar(32) not null,
    address varchar(128) not null,
    zip int(6),
    date date
)
"""



cur.execute(sql)

# conn.close()

