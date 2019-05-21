import mysql.connector
page_size = 5   # 每页的数据记录条数 page_size


def get_conn():
    """
    连接数据库
    :return:
    """
    cnx = mysql.connector.connect(
        user="root",
        password="yzdz7777",
        host="localhost",
        database="data"
    )
    return cnx


def get_excute_dml(sql, obj):
    """
     封装 增删改 操作  仅限实现一条
    :param sql: mysql语句
    :param obj: 条件
    :return:
    """
    try:
        # 连接数据库
        cnx = get_conn()
        # 获得游标
        cursor = cnx.cursor()
        cursor.execute(sql, obj)
        # 提交数据
        cnx.commit()
    finally:
        if cnx:
            cnx.close()  # 关闭数据库
    # print("数据库中", cursor.rowcount, "行受到影响")


def get_excutes_dml(sql, obj):
    """
    封装 增删改 操作 可实现多条
    :param sql:
    :param obj:
    :return:
    """
    try:
        # 连接数据库
        cnx = get_conn()
        # 获得游标
        cursor = cnx.cursor()
        cursor.executemany(sql, obj)
        # 提交数据
        cnx.commit()
    finally:
        if cnx:
            cnx.close()  # 关闭数据库
    # print("数据库中", cursor.rowcount, "行受到影响")


def get_excute_select(sql, obj, key_list):
    """
    查询数据
    :param sql:
    :param obj:
    :param key_list:
    :return:
    """
    try:
        # 连接数据库
        cnx = get_conn()
        # 获得游标
        cursor = cnx.cursor()
        cursor.execute(sql, obj)
        # 获得查询结果
        rs = cursor.fetchall()
        # 数据转换
        rs_lists = []
        for user in rs:
            i = 0
            dic = {}
            while i < len(user):
                dic[key_list[i]] = user[i]
                i += 1
            rs_lists.append(dic)
        return rs_lists
    finally:
        if cnx:
            cnx.close()
    print("数据库中", cursor.rowcount, "行受到影响")
    # print(rs)
    # print(rs_lists)
