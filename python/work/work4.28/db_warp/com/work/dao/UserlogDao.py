from db_warp.com.work.util import DBUtil

def login(username,userpwd):

    conn = DBUtil.getConn()
    try:
        cursor = conn.cursor()
        sql = "select * from login where username = %s and userpwd = %s"
        cursor.execute(sql, (username, userpwd))

        user = cursor.fetchone()
        return user

    finally:
        if conn:
            conn.close()

# if __name__ == "__main__":
#     user = login("xiaocao", "123457")
#     print(user)

# print(login("sangsang","234567"))