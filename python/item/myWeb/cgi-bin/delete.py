import cgi
import sys
import os

import codecs  # 防止乱码
sys.stdout = codecs.getwriter('utf-8')(sys.stdout.buffer)

sys.path.append(os.getcwd())  # 将当前项目目录添加到模块的扫描路径中
import com.aowin.dao.DeleteDao as DeleteDao

# 获取数据
field = cgi.FieldStorage()  # 从客户端提交的所有数据
id = field.getvalue("id")

# 查询数据库
try:
    one = DeleteDao.delete_user(id)
    if one:
        result = "success"
    else:
        result = "fail"
except:
    result = "error"

# 响应
print('access-control-allow-origin: *')
print()
print(result, end="")
