import encoding
import cgi
from com.aowin.dao import UserDao

# 1. 获取客户端数据
fs = cgi.FieldStorage()  # 获得所有的客户端发送过来的参数
# 获取具体的参数
username = fs.getvalue("username")
password = fs.getvalue("password")

# 2. 做格式校验
if not username or not password:
    # 数据验证失败 不做业务处理 直接响应
    # print("Content-type: text/html")
    print("")
    print("error", end="")
else:
    # print("Content-type: text/html")

    user = UserDao.login(username, password)
    if user:
        # print("<script>location.href='/index.html'</script>")
        # 将用户的登录状态使用cookie记录在客户端
        print("Set-cookie: username=%s" % user[1])
        print("Set-cookie: password=%s" % user[2])
        print("")
        print("success", end="")
    else:
        # print("用户名不存在，或者密码错误！")
        # print("<script>location.href='/login.html'</script>")
        print("")
        print("error", end="")





