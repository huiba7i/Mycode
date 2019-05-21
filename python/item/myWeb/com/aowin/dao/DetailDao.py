import com.aowin.util.DbUtil as DbUtil


def search(id):
    """
    实现id准确查询
    :param id:
    :return:
    """
    key_list = ["id", "name", "province", "city", "address", "zip", "date"]
    sql = "select * from user where id = %s"
    obj = (id,)
    rs = DbUtil.get_excute_select(sql, obj, key_list)
    if len(rs) == 0:
        return None
    else:
        return rs


# print(search("1"))