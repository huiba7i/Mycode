from com.aowin.util import DbUtil

def search():
    """
    实现所有数据查询
    :return:
    """
    key_list = ["id", "name", "province", "city", "address", "zip", "date"]
    # obj = (address,)
    sql = "select * from user"
    rs = DbUtil.get_excute_select(sql, None, key_list)
    if len(rs) == 0:
        return None
    else:
        return rs

