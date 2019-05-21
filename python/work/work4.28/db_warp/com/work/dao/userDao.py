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
        sql = "insert into user (name, province, city, address, zip, date) value (%s, %s, %s, %s, %s, %s)"
        cursor.execute(sql, user)
        conn.commit()
        return cursor.rowcount
    finally:
        if conn:
            conn.close()    #关闭连接


#根据id删除用户
def delete(id):
    """删除"""
    conn = DBUtil.getConn()
    try:
        cursor = conn.cursor()
        sql = "delete from user where id = %s"
        cursor.execute(sql, (id, ))
        conn.commit()
        return cursor.rowcount
    finally:
        if conn:
            conn.close()


def update(user):
    """修改数据"""
    conn = DBUtil.getConn()
    try:
        cursor = conn.cursor()
        sql = "update user set name=%s, province=%s, city=%s, address=%s, zip=%s, date=%s where id=%s"
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
        sql = "select * from user"
        cursor.execute(sql)

        #将tuple的list转成User对象的list
        users = []
        for u in cursor.fetchall():
            user = model.User(u[0], u[1], u[2], u[3], u[4], u[5], u[6])
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
        sql = "select * from user where 1 = 1"
        params = []    #用来存放具体的添加参数
        if "id" in user:
            sql += " and id = %d"
            params.append(user["id"])
        if "name" in user:
            if user["name"]:
                sql += " and name like concat('%',%s,'%')"
                params.append(user["name"])
        if "province" in user:
            sql += " and province = %s"
            params.append(user["province"])
        if "city" in user:
            sql += ""
            params.append(user["city"])
        if "address" in user:
            sql += " and address = %s"
            params.append(user["address"])
        if "zip" in user:
            sql += ""
            params.append(user["zip"])
        if "date" in user:
            sql += " and date = %s"
            params.append(user["date"])

        print(sql)
        cursor.execute(sql,tuple(params))

        #将tuple的list 转成userData对象的list

        users = []
        for u in cursor.fetchall():
            user = model.User(u[0], u[1], u[2], u[3], u[4], u[5], u[6])
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
    :param pageNum:显示的页数
    :return:   page 对象
    """

    conn = DBUtil.getConn()
    try:
        cursor = conn.cursor()
        sqlData = "select * from user"
        sqlCount = "select count(*) from user"

        sql = " where 1 = 1 " #放查询条件

        params = []  #用来存放具体的条件参数
        if "id" in user:
            sql += " and id = %s"
            params.append(user["id"])
        if "name" in user:
            if user["name"]:
                sql += " and name like concat('%', %s, '%')"
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
            sql += " and zip = %s"
            params.append(user["zip"])
        if "starDay" in user:
            # if "date":
            sql += " and data >= %s"
            params.append(user["starDay"])
        if "endDay" in user:
            sql += " and data <= %s"
            params.append(user["endDay"])

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
            user = {
                "id" : u[0],
                "name" : u[1],
                "province" : u[2],
                "city" : u[3],
                "address" : u[4],
                "zip" : u[5],
                "date" : str(u[6])
            }
            users.append(user)
        page.data = users

        return page

    finally:
        if conn:
            conn.close()
