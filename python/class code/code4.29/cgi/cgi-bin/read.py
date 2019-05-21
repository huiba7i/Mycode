import encoding
import os
import http.cookies

# 获取cookie的字符串信息
cookie_string = os.environ.get("HTTP_COOKIE")
print("Content-type:text/html;charset=utf-8")
print("")

# 将字符串转对象
cookie = http.cookies.SimpleCookie()
cookie.load(cookie_string)
print(cookie["username"].value)


print(cookie_string)