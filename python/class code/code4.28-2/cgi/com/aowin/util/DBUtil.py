import mysql.connector


def getConn():
    """
        获得数据库的连接对象
    :return:
    """
    return mysql.connector.connect(user="root", passwd="yzdz7777", host="localhost", database="sys")



