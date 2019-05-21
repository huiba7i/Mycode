from com.aowin.util.DbUtil import *


def select_total(query):
    """
        查询总条数
    :param query 查询条件 字典对象
    :return:
    """
    sql = "select count(*) "
    result = condion_sql(query)
    sql += result[0]

    key_list = ["total"]
    return get_excute_select(sql, tuple(result[1]), key_list)


def condion_sql(query):
    """封装查询条件"""
    sql = " from user where 1=1"
    query_list = []
    if query:
        if "name" in query:
            name = query["name"]
            if name:
                sql += " and name like %s"
                query_list.append("%" + name + "%")
        if "province" in query:
            province = query["province"]
            if province:
                sql += " and province like %s"
                query_list.append("%" + province + "%")
        if "city" in query:
            city = query["city"]
            if city:
                sql += " and city like %s"
                query_list.append("%" + city + "%")
        if "address" in query:
            address = query["address"]
            if address:
                sql += " and address like %s"
                query_list.append("%" + address + "%")
        if "zip" in query:
            zip = query["zip"]
            if zip:
                sql += " and zip like %s"
                query_list.append("%" + zip + "%")
        if "startDay" in query:
            startDay = query["startDay"]
            if startDay:
                sql += " and date>=%s"
                query_list.append(startDay)

        if "endDay" in query:
            endDay = query["endDay"]
            if endDay:
                sql += " and date<=%s"
                query_list.append(endDay)

    return sql, query_list


def select_page(query):
    """
        查询分页数据
        :return:
        """
    pageNum = int(query["pageNum"])
    dic = {"pageNum": pageNum, "page_size": page_size}

    # 总条数
    total_count = select_total(query)[0]["total"]
    dic["total_count"] = total_count
    # 计算总页数
    if total_count % page_size == 0:
        total_page = total_count // page_size
    else:
        total_page = total_count // page_size + 1
    dic["total_page"] = total_page

    # 查询详细记录
    result = condion_sql(query)
    sql = "select * " + result[0] + " limit %s, %s"
    result[1].append((pageNum - 1) * page_size)
    result[1].append(page_size)
    key_list = ["id", "name", "province", "city", "address", "zip", "date"]
    rs = get_excute_select(sql, tuple(result[1]), key_list)
    # print(sql)
    dic["list"] = rs
    return dic

# r = select_page({"startDay": "1919-03-04","name": "张", "endDay":"2019-01-11", "pageNum": 1})
# print(r)
