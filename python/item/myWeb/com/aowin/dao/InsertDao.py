from com.aowin.util import DbUtil


def add_users(name, province, city, address, zip, date):

    sql = "select * from user where name = %s"
    key_list = ["id", "name", "province", "city", "address", "zip", "date"]
    rs = DbUtil.get_excute_select(sql, (name,), key_list)

    if len(rs) == 0:
        obj = (name, province, city, address, zip, date)
        sql = "insert into user (name, province, city, address, zip, date) values (%s, %s, %s, %s, %s, %s)"
        DbUtil.get_excute_dml(sql, obj)
        return None
    else:
        return rs[0]


