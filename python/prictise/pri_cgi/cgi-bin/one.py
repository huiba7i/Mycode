import codecs, sys
sys.stdout = codecs.getwriter('utf-8')(sys.stdout.buffer)
#解决中文乱码

print("Content-type:text/html;charset=utf-8")   # 设置响应头
print()     # 打印一个空行 表示响应头结束
#Content-type: -- 设置响应内容的类型（text/heml,text/plain,text/xml,appliction/json）

print("<html>")
print("<body>")
print("<h1>")
print("HELLO CGI !!! 测试")
print("</h1>")
print("</body>")
print("</html>")