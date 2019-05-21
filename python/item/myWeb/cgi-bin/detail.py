import cgi
import sys
import os

import codecs  # 防止乱码
sys.stdout = codecs.getwriter('utf-8')(sys.stdout.buffer)

sys.path.append(os.getcwd())  # 将当前项目目录添加到模块的扫描路径中
from com.aowin.dao import DetailDao

# 获取数据
field = cgi.FieldStorage()  # 从客户端提交的所有数据
id = field.getvalue("id")

# 查询数据库
try:
    one = DetailDao.search(id)
    if one:
        result = one
    else:
        result = "fail"
except:
    result = "error"

# 响应
print("content-type:text/plain;charset=utf-8")
print()
print(result, end="")
