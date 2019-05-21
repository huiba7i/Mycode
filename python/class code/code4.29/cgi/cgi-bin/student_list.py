import encoding
import cgi
from com.aowin.dao import StudentDao
from com.aowin.dao import UserDao
import json
import http.cookies
import os

# 先验证用户是否登录过
if "HTTP_COOKIE" in os.environ:
    cookie_string = os.environ.get("HTTP_COOKIE")
    cookie = http.cookies.SimpleCookie()
    cookie.load(cookie_string)
    username = None
    password = None
    if "username" in cookie:
        username = cookie["username"].value
    if "password" in cookie:
        password = cookie["password"].value

    if username and password:
        user = UserDao.login(username,password)
        if not user:  # 用户未登录
            print("")
            result = {"status": "1000"}
            print(json.dumps(result))
        else:
            # 1. 获取客户端提交的数据
            form = cgi.FieldStorage()
            pageNum = form.getvalue("pageNum")  # 获得当前页码
            stuname = form.getvalue("stuname")
            startDay = form.getvalue("startDay")
            endDay = form.getvalue("endDay")

            stu = {
                "stuname": stuname,
                "startDay": startDay,
                "endDay": endDay
            }

            page = StudentDao.select_page(stu, int(pageNum))
            print("Content-type:text/plain;charset=utf-8")
            print("")

            # 将page转换成json字符串
            page = json.dumps(page.__dict__, ensure_ascii=False)
            print(page)
    else:
        print("")
        result = {"status": "1000"}
        print(json.dumps(result))



