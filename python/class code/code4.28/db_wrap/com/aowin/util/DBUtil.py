import mysql.connector


def getConn():
    """
        获得数据库的连接对象
    :return:
    """
    return mysql.connector.connect(user="root", passwd="123456", host="localhost", database="college_1")



