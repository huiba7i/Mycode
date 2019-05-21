from db_warp.com.work.dao import userDao

# 新增
# user = ("钟大俊", "唐", "长安", "玄武街", 1423223, "2014-01-01")
# n = userDao.insert(user)

# user = ("唐", "荒原", "魔宗", "魔宗山门", 1562264, "1870-10-01")
# n = userDao.insert(user)
#
# user = ("李慢慢", "唐", "书院", "二层楼", 111111, "1868-12-20")
# n = userDao.insert(user)

# user = ("柳白", "南晋", "剑阁", "剑阁", 1433568, "1871-02-01")
# userDao.insert(user)

# user = ("夫子", "唐", "书院", "昊天世界", 111111, "1000-01-01")
# userDao.insert(user)

# user = ("君陌", "唐", "书院", "二层楼", 111111, "1868-01-01")
# userDao.insert(user)
#
# user = ("余莲", "唐", "书院", "二层楼", 111111, "1867-11-01")
# userDao.insert(user)

# user = ("唐小棠", "荒原", "魔宗", "魔宗山门", 1562264, "1879-10-01")
# userDao.insert(user)

# 删除信息
# n = userDao.delete(1)
# print("成功删除id为1的用户信息")

# 修改信息
# user = ("柳白", "南晋", "剑阁", "大陆南边", 143356, "1871-02-01", 10)
# userDao.update(user)
#
# user = ("夫子", "唐", "书院", "书院二层楼", 111111, "1000-01-01", 11)
# userDao.update(user)
# user = ("李慢慢", "唐", "书院", "二层楼", 111111, "1868-12-20", 9)
# userDao.update(user)

# user = ("宁缺", "唐", "书院", "二层楼", 111111, "1870-04-04", 2)
# userDao.update(user)

# 查询所有信息

users = userDao.select_all()
print("所有信息如下：")
for u in users:
    print(u)
# 条件查询信息
# user = {"province": "唐"}
# n = userDao.select_data(user)
# for u in n:
#     print(u)

# 分页条件查询
# user = {"province": "唐"}
# users = userDao.select_page(user, 1)
# for u in users.data:
#     print(u)
#
# user = {"name":"山"}
# users = userDao.select_page(user, 1)
# for u in users.data:
#     print(u)

# user = {"starDay":"1850-01-01", "endDay":"1870-12-31"}
# users = userDao.select_page(user, 2)
# for u in users.data:
#     print(u)
