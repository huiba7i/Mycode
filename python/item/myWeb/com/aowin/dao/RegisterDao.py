import com.aowin.util.DbUtil as DbUtil


def register(username, userpwd, usersex, usertel):
    """
    注册操作功能
    :param username: 用户名
    :param userpwd:  密码
    :param usersex:  性别
    :param usertel:  手机号
    :return:
    """

    # conn  = DbUtil.get_conn()
    # stu = (username, userpwd, usertel, usersex)
    # try:
    #     cur = conn.cursor()
    #     sql = 'INSERT INTO login (username, userpwd, usertel, usersex) VALUES (%s, %s, %s, %s)'
    #     cur.execute(sql, stu)
    #     conn.commit()
    #     return  stu[0]
    # finally:
    #     if conn:
    #         conn.close()

    sql2 = "select * from login where username = %s"
    key_list = ["id", "username", "userpwd", "usertel", "usersex"]
    rs = DbUtil.get_excute_select(sql2, (username,), key_list)
    if len(rs) == 0:
        obj = (username, userpwd, usersex, usertel)
        sql = "insert into login (username, userpwd, usersex, usertel) values (%s, %s, %s, %s)"
        DbUtil.get_excute_dml(sql, obj)
        return None
    else:
        return rs[0]
