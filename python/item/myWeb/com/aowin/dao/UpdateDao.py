from com.aowin.util import DbUtil


def update_users(name, province, city, address, zip, date, id):
    sql = "select * from user where id = %s"
    obj = (id,)
    key_list = ["id", "name", "province", "city", "address", "zip", "date"]
    rs = DbUtil.get_excute_select(sql, obj, key_list)
    if len(rs) == 0:
        return None
    else:
        obj = (name, province, city, address, zip, date, id)
        sql = "update user set name=%s,province=%s,city=%s,address=%s,zip=%s,date=%s where id=%s"
        DbUtil.get_excute_dml(sql, obj)
        return rs[0]

