import cgi
import sys
import os
sys.path.append(os.getcwd())  # 将当前项目目录添加到模块的扫描路径中
import com.aowin.dao.InsertDao as InsertDao
import re

# 获取数据
field = cgi.FieldStorage()  # 从客户端提交的所有数据
name = field.getvalue("name")
province = field.getvalue("province")
city = field.getvalue("city")
address = field.getvalue("address")
zip = field.getvalue("zip")
date = field.getvalue("date")
pattern = r"^[a-zA-Z\d_\u4e00-\u9fa5]{3,10}$"

# if re.match(pattern, name):
#     print("123")
# else:
#     print("456")

try:
    add_users = InsertDao.add_users(name, province, city, address, zip, date)
    if add_users:
        result = "fail"
    else:
        result = "success"
except:
    result = "error"



# 响应
print('access-control-allow-origin: *')
print()
print(result, end="")

