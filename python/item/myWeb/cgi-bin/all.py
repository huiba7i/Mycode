import cgi
import sys
import os
import json

import codecs  # 防止乱码
sys.stdout = codecs.getwriter('utf-8')(sys.stdout.buffer)

sys.path.append(os.getcwd())  # 将当前项目目录添加到模块的扫描路径中
import com.aowin.dao.AllDao as AllDao

# 获取数据
field = cgi.FieldStorage()  # 从客户端提交的所有数据
# address = field.getvalue("address")


# 查询数据库
try:
    alls = AllDao.search()
    if alls:
        # result = alls
        result = json.dumps(alls)
    else:
        result = "fail"
except:
    result = "error"

# 响应
print("content-type:text/plain;charset=utf-8")
print()
print(result, end="")
