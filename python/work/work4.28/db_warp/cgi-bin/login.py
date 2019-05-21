import encodings
import cgi
from db_warp.com.work.dao import UserlogDao

# 获取客户端数据
fs = cgi.FieldStorage() #获取所有客户端发送过来的参数

#获取具体的参数
username = fs.getvalue("username")
userpwd = fs.getvalue("userpwd")

#格式校验
if not username or not userpwd:
    print("Content-type: text/html;charset=utf-8")
    print("")
    print("error", end="")
else:
    print("Content-type: text/html;charset=utf-8")
    user = UserlogDao.login(username, userpwd)
    if user:
        print("Content-type: text/html;charset=utf-8")
        print("Set-cookie:username=%s" % user[1])
        print("Set=cookie:userpwd=%s" % user[2])
        print("")
        print("success", end="")
    else:
        print("Content-type: text/html;charset=utf-8")
        print("")
        print("error", end="")