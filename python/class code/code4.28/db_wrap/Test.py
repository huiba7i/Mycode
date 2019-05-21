from db_wrap.com.aowin.dao import StudentDao

# 1. 新增
# stu = ("张三", "男", "2001-09-08", 1.77)
# n = StudentDao.insert(stu)
# print("新增%d条数据" % n)

# 2.删除
# n = StudentDao.delete(25)
# print("删除%d条记录" % n)


# 3. 更新
# stu = ("张晓红", "女", "1999-10-08", 1.80, 24)
# n = StudentDao.update(stu)
# print("修改%d条记录" % n)


# 4. 查询
# stus = StudentDao.select_all()
# for s in stus:
#     print(s)

# 5. 带条件查询
# stu = {"stuid": 1}
# stu = {"sex": "女", "stuname": "小"}
# stu = {"startDay": "2000-01-01", "endDay": "2001-09-01"}
stu = {1}
# stus = StudentDao.select_data(stu)
stus = StudentDao.select_page(stu, 5)
for s in stus.data:
    print(s)

