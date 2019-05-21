from com.aowin.util import DBUtil

def login(username, password):
    """
    登录功能
    :param username:
    :param password:
    :return:
    """
    conn = DBUtil.getConn()
    try:
        cursor = conn.cursor()
        sql = "select * from user where username=%s and password = %s"
        cursor.execute(sql, (username, password))

        user = cursor.fetchone()
        return user

    finally:
        if conn:
            conn.close()


if __name__ == "__main__":
    user = login("zhangsan", "13")
    print(user)