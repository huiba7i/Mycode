from com.aowin.util import DbUtil


def login(username, userpwd):
    """
    登录 操作功能
    :param username: 用户名
    :param userpwd:  密 码
    :return:  查询不到返回None,否则返回字典对象
    """
    key_list = ["id", "username", "userpwd", "usertel", "usersex"]
    obj = (username, userpwd)
    sql = "select * from login where username = %s and userpwd = %s"
    rs = DbUtil.get_excute_select(sql, obj, key_list)
    if len(rs) == 0:
        return None
    else:
        return rs[0]


# print(login("aqa", "123456"))
