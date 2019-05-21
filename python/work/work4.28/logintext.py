from db_warp.com.work.dao import loginDao

# 增加
# user = ("yulian", "789456", 1317866826, "男")
# n = loginDao.insert(user)
# print("新增%d条记录" % n)


#删除
# n = loginDao.delete(3)
# print("删除%d条记录" %n)

#根据用户名和密码删除用户
# n = loginDao.delete("xiahou", "123456")
# print("删除%d条记录" %n)


# 查询所有用户
users = loginDao.select_all()
for u in users:
    print(u)

# 条件查询用户
# user = {"usersex": "男"}
# n = loginDao.select_data(user)
# print("usersex='男'的查询记录为%d" % len(n))