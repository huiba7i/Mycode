import sys
import os
sys.path.append(os.getcwd())  # 将当前项目目录添加到模块的扫描路径中
from com.aowin.dao import UserDao
import cgi
import json
import codecs
sys.stdout = codecs.getwriter('utf-8')(sys.stdout.buffer)

field = cgi.FieldStorage()
# 将查询条件封装成一个字典对象
query = {}
for i in field:
    query[i] = field.getvalue(i)

try:
    rs = UserDao.select_page(query)
    result = repr(rs)  # 将字典对象转换成字符串  -不是json-
except:
    result = "error"

print('access-control-allow-origin: *')
print("")
# 把日期格式的换成了字符串格式的就没有格式转换失败了
print(result, end="")


# field = cgi.FieldStorage()
# # 将查询条件封装成一个字典对象
# query = {}
# for i in field:
#     query[i] = field.getvalue(i)
# # try:
# rs = UserDao.select_page(query)
# # result = json.dumps(rs)  # 将字典对象转换成json字符串
# # except:
# #     result = "error"
#
# print("Content-type:text/plain;charset=utf-8")
# print("")
#
# print(rs, end="")


# a  = "{'pageNum': 1, 'page_size': 5, 'total_count': 25, 'total_page': 5, 'list': [{'id': 1, 'name': '钟大俊', 'province': '唐', 'city': '长安', 'address': '玄武街', 'zip': 1423223, 'date': 'datetime.date(2014, 1, 1)'}, {'id': 2, 'name': '宁缺', 'province': '唐', 'city': '书院', 'address': '二层楼', 'zip': 111111, 'date': 'datetime.date(1870, 4, 4)'}, {'id': 3, 'name': '李慢慢', 'province': '唐', 'city': '书院', 'address': '二层楼', 'zip': 111111, 'date': 'datetime.date(1868, 12, 20)'}, {'id': 4, 'name': '柳白', 'province': '南晋', 'city': '剑阁', 'address': '剑阁', 'zip': 1433568, 'date': 'datetime.date(1871, 2, 1)'}, {'id': 5, 'name': '夫子', 'province': '唐', 'city': '书院', 'address': '昊天世界', 'zip': 111111, 'date': 'datetime.date(1000, 1, 1)'}]}"
# print("")
# print(a, end="")