from db_warp.com.work.util import DBUtil
from db_warp.com.work.model import model
from db_warp.com.work.model import Page

def insert(user):
    """
        新增用户
    :param user:
    :return:
    """

    conn = DBUtil.getConn()

    try:
        cursor = conn.cursor()
        sql = "insert into login (username, userpwd, usertel, usersex) value (%s, %s, %s, %s)"
        cursor.execute(sql, user)
        conn.commit()
        return cursor.rowcount
    finally:
        if conn:
            conn.close()    #关闭连接


def delete(name, pwd):
    """删除"""
    conn = DBUtil.getConn()
    try:
        cursor = conn.cursor()
        sql = "delete from login where username = %s and userpwd = %s"
        cursor.execute(sql, (name, pwd, ))
        conn.commit()
        return cursor.rowcount
    finally:
        if conn:
            conn.close()


def updata(user):
    """修改数据"""
    conn = DBUtil.getConn()
    try:
        cursor = conn.cursor()
        sql = "update login set id=%s, username=%d, userpwd=%s, usertel=%d, usersex=%s wehere id=%s"
        cursor.execute(sql, user)
        conn.commit()
        return cursor.rowcount
    finally:
        if conn:
            conn.close()


def select_all():
    """
    不带条件查询
    :return:
    """
    conn = DBUtil.getConn()
    try:
        cursor = conn.cursor()
        sql = "select * from login"
        cursor.execute(sql)

        #将tuple的list转成User对象的list
        users = []
        for u in cursor.fetchall():
            user = model.Login(u[0], u[1], u[2], u[3], u[4])
            users.append(user)
        return users
    finally:
            if conn:
                conn.close()


def select_data(user):
    """
    封装一个带条件的查询方法

    使用动态生成sql的方式，来完成不同条件的查询功能
    :param user: 字典对象

    :return:
    """
    conn = DBUtil.getConn()
    try:
        cursor = conn.cursor()
        sql = "select * from login where 1 = 1"
        params = []    #用来存放具体的添加参数
        if "id" in user:
            sql += " and id = %d"
            params.append(user["id"])
        if "username" in user:
            if user["username"]:
                sql += " and username like concat('%',%s,'%')"
                params.append(user["username"])
        if "userpwd" in user:
            sql += " and userpwd = %s"
            params.append(user["userpwd"])
        if "usertel" in user:
            sql += " and usertrl = %s"
            params.append(user["usertel"])
        if "usersex" in user:
            sql += " and usersex = %s"
            params.append(user["usersex"])

        print(sql)
        cursor.execute(sql,tuple(params))

        #将tuple的list 转成userData对象的list

        users = []
        for u in cursor.fetchall():
            user = model.Login(u[0], u[1], u[2], u[3], u[4])
            users.append(user)
        return users
    finally:
        if conn:
            conn.close()

def select_page(user, pageNum):
    """
        封装一个带条件 分页 查询方法

        使用 动态生成sql的方式 来完成不同条件的查询功能
    :param user: 字典对象
    :param pageNum:
    :return:   page 对象
    """

    conn = DBUtil.getConn()
    try:
        cursor = conn.cursor()
        sqlData = "select * from login"
        sqlCount = "select count(*) from login"

        sql = "where 1 = 1" #放查询条件

        params = []  #用来存放具体的条件参数
        if "id" in user:
            sql += " and id = %d"
            params.append(user["id"])
        if "name" in user:
            if user["name"]:
                sql += " and name like concat('%', '%s', '%')"
                params.append(user["name"])
        if "province" in user:
            sql += " and province = %s"
            params.append(user["province"])
        if "city" in user:
            sql += " and city = %s"
            params.append(user["city"])
        if "address" in user:
            sql += " and address = %s"
            params.append(user["address"])
        if "zip" in user:
            sql += " and zip = %d"
            params.append(user["zip"])
        if "date" in user:
            sql += " and date = %d"
            params.append(user["date"])

        print(sql)

        page = Page.Page()
        #查询总条数
        sqlCount += sql
        cursor.execute(sqlCount, tuple(params))
        countTotal = cursor.fetchone()[0]
        page.countTotal = countTotal

        # 计算总页数
        if countTotal % page.pageSize == 0:
            pageTotal = countTotal // page.pageSize
        else:
            pageTotal = countTotal // page.pageSize +1
        page.pageTotal = pageTotal

        page.pageNum = pageNum

        # 查询记录
        sqlData += sql
        sqlData += "limit %s, %s"
        params.append((pageNum-1)*page.pageSize)
        params.append(page.pageSize)
        cursor.execute(sqlData, tuple(params))

        # 将tuple的list 转成 userData对象的list
        users = []
        for u in cursor.fetchall():
            user = model.Login(u[0], u[1], u[2], u[3], u[4], u[5], u[6])
            users.append(user)
        page.data = users

        return page

    finally:
        if conn:
            conn.close()
