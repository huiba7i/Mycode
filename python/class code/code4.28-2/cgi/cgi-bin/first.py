import encoding

# 响应头 给浏览器看的 浏览器会根据响应头的信息 做一些处理 不会显示在页面上被用户看到
# 响应正文 会显示在浏览器上被用户看到的
print("Content-type: text/html;charset=utf-8")  # 设置响应头
# Content-type 设置响应内容的类型 （text/html,text/plain,text/xml,appliction/json）
print("")  # 打印一个空行 空行是响应头和响应正文的分界线
print("<html>")
print("<body>")
print("<h1>")
print("Hello, CGI!!!")
print("你好, CGI!!!")
print("</h1>")
print("</body>")
print("</html>")
