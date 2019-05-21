import com.aowin.util.DbUtil as DbUtil


def delete_user(id):
    """
    实现 id 删除用户
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
        sql = "delete from user where id = %s"
        obj = (id,)
        DbUtil.get_excute_dml(sql, obj)
        return rs[0]

