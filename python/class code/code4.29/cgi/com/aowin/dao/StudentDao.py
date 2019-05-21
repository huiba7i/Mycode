from com.aowin.util import DBUtil
from com.aowin.model import model
from com.aowin.model import Page

def insert(stu):
    """
        新增学生
    :param stu: 学生对象tuple
    :return:
    """
    conn = DBUtil.getConn()
    try:
        cursor = conn.cursor()
        sql = "insert into student (stuname, sex, birthday, height) values (%s, %s, %s, %s)"
        cursor.execute(sql, stu)
        conn.commit()
        return cursor.rowcount
    finally:
        if conn:
            conn.close()  # 关闭连接


def delete(stuid):
    """删除数据"""
    conn = DBUtil.getConn()
    try:
        cursor = conn.cursor()
        sql = "delete from student where stuid = %s"
        cursor.execute(sql, (stuid, ))
        conn.commit()
        return cursor.rowcount
    finally:
        if conn:
            conn.close()  # 关闭连接



def update(stu):
    """修改数据"""
    conn = DBUtil.getConn()
    try:
        cursor = conn.cursor()
        sql = "update student set stuname=%s, sex=%s, birthday=%s, height=%s where stuid=%s"
        cursor.execute(sql, stu)
        conn.commit()
        return cursor.rowcount
    finally:
        if conn:
            conn.close()  # 关闭连接


def select_all():
    """
    不带条件查询
    :return:
    """
    conn = DBUtil.getConn()
    try:
        cursor = conn.cursor()
        sql = "select * from student"
        cursor.execute(sql)

        # 将tuple的list 转成Student对象的list
        stus = []
        for s in cursor.fetchall():
            stu = model.Stduent(s[0], s[1], s[2], s[3], s[4])
            stus.append(stu)
        return stus
    finally:
        if conn:
            conn.close()  # 关闭连接


def select_data(stu):
    """
        封装一个带条件查询方法

        使用 动态生成sql的方式 来完成不同条件的查询功能
    :param stu: 字典对象
        假如可能有以下key
            stuid
            stuname
            sex
            startDay 起始生日
            endDay 结束生日
            minHeight 最小身高
            maxHeight 最大身高
    :return:
    """
    conn = DBUtil.getConn()
    try:
        cursor = conn.cursor()
        sql = "select * from student where 1 = 1 "
        params = []  # 用来存放具体的条件参数
        if "stuid" in stu:
            sql += " and stuid = %s"
            params.append(stu["stuid"])
        if "stuname" in stu:
            if stu["stuname"]:
                sql += " and stuname like concat('%',%s,'%')"
                params.append(stu["stuname"])
        if "sex" in stu:
            sql += " and sex = %s"
            params.append(stu["sex"])

        if "startDay" in stu:
            sql += " and birthday >= %s"
            params.append(stu["startDay"])
        if "endDay" in stu:
            sql += " and birthday <= %s"
            params.append(stu["endDay"])
        if "maxHeight" in stu:
            sql += " and height <= %s"
            params.append(stu["maxHeight"])
        if "minHeight" in stu:
            sql += " and birthday >= %s"
            params.append(stu["minHeight"])

        print(sql)
        cursor.execute(sql, tuple(params))

        # 将tuple的list 转成Student对象的list
        stus = []
        for s in cursor.fetchall():
            stu = model.Stduent(s[0], s[1], s[2], s[3], s[4])
            stus.append(stu)
        return stus
    finally:
        if conn:
            conn.close()  # 关闭连接




def select_page(stu, pageNum):
    """
        封装一个带条件 分页 查询方法

        使用 动态生成sql的方式 来完成不同条件的查询功能
    :param stu: 字典对象
        假如可能有以下key
            stuid
            stuname
            sex
            startDay 起始生日
            endDay 结束生日
            minHeight 最小身高
            maxHeight 最大身高
    :return: page 对象
    """
    conn = DBUtil.getConn()
    try:
        cursor = conn.cursor()
        sqlData = "select * from student"
        sqlCount = "select count(*) from student"

        sql = " where 1 = 1"  # 放查询条件

        params = []  # 用来存放具体的条件参数
        if "stuid" in stu:
            if stu["stuid"]:
                sql += " and stuid = %s"
                params.append(stu["stuid"])
        if "stuname" in stu:
            if stu["stuname"]:
                sql += " and stuname like concat('%',%s,'%')"
                params.append(stu["stuname"])
        if "sex" in stu:
            sql += " and sex = %s"
            params.append(stu["sex"])

        if "startDay" in stu:
            if stu["startDay"]:
                sql += " and birthday >= %s"
                params.append(stu["startDay"])
        if "endDay" in stu:
            if stu["endDay"]:
                sql += " and birthday <= %s"
                params.append(stu["endDay"])
        if "maxHeight" in stu:
            if stu["maxHeight"]:
                sql += " and height <= %s"
                params.append(stu["maxHeight"])
        if "minHeight" in stu:
            if stu["minHeight"]:
                sql += " and birthday >= %s"
                params.append(stu["minHeight"])

        print(sql)


        page = Page.Page()
        # 查询总条数
        sqlCount += sql
        cursor.execute(sqlCount, tuple(params))
        countTotal = cursor.fetchone()[0]
        page.countTotal = countTotal

        # 计算总页数
        if countTotal % page.pageSize == 0:
            pageTotal = countTotal // page.pageSize
        else:
            pageTotal = countTotal // page.pageSize + 1
        page.pageTotal = pageTotal


        page.pageNum = pageNum

        # 查询记录
        sqlData += sql
        sqlData += " limit %s, %s"
        params.append((pageNum-1)*page.pageSize)
        params.append(page.pageSize)
        cursor.execute(sqlData, tuple(params))

        # 将tuple的list 转成Student对象的list
        stus = []
        for s in cursor.fetchall():
            stu = {
                "stuid": s[0],
                "stuname": s[1],
                "sex": s[2],
                "birthday": str(s[3]),
                "height": s[4]
            }
            stus.append(stu)
        page.data = stus

        return page
    finally:
        if conn:
            conn.close()  # 关闭连接




print(1/2)