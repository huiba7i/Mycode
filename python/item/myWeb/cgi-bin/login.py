import cgi
import sys
import os
sys.path.append(os.getcwd())  # 将当前项目目录添加到模块的扫描路径中
from com.aowin.dao import LoginDao
import http.cookies

# 获取数据
field = cgi.FieldStorage()  # 从客户端提交的所有数据
username = field.getvalue("username")
userpwd = field.getvalue("userpwd")

# 查询数据库
try:
    login = LoginDao.login(username, userpwd)
    if login:
        result = "success"
    else:
        result = "fail"
except:
    result = "error"

# 响应
print('access-control-allow-origin: *')
print("")
print(result, end="")

