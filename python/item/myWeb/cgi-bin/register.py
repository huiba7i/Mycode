import cgi
import sys
import os
sys.path.append(os.getcwd())  # 将当前项目目录添加到模块的扫描路径中
import com.aowin.dao.RegisterDao as RegisterDao

# 获取数据
field = cgi.FieldStorage()  # 从客户端提交的所有数据
username = field.getvalue("username")
userpwd = field.getvalue("userpwd")
usersex = field.getvalue("usersex")
usertel = field.getvalue("usertel")


# if register:
#     print('access-control-allow-origin: *')
#     print('')
#     print('success', end='')
# else:
#     print('access-control-allow-origin: *')
#     print('')
#     print('error', end='')


# 查询数据库
try:
    register = RegisterDao.register(username, userpwd, usersex, usertel)
    # 若数据库中存在相同的用户名则注册失败
    if register:
        result = "fail"
    else:
        result = "success"
except:
    result = "error"

# 响应
print('access-control-allow-origin: *')
print()
print(result, end="")
