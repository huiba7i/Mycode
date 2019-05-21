import cgi
import sys
import os
sys.path.append(os.getcwd())  # 将当前项目目录添加到模块的扫描路径中
from com.aowin.dao import UpdateDao

# 获取数据
field = cgi.FieldStorage()  # 从客户端提交的所有数据
id = field.getvalue("id")
name = field.getvalue("name")
province = field.getvalue("province")
city = field.getvalue("city")
address = field.getvalue("address")
zip = field.getvalue("zip")
date = field.getvalue("date")

# 查询数据库
try:
    update_users = UpdateDao.update_users(name, province, city, address, zip, date, id)
    # 若数据库中存在相同的id 则可以修改用户
    if update_users:
        result = "success"
    else:
        result = "fail"
except:
    result = "error"

# 响应
print('access-control-allow-origin: *')
print()
print(result, end="")
