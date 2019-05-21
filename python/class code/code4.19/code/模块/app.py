"""
    应用程序
"""

# 1. import arith  # 导入模块 使用模块中定义的内容时 必须使用模块名字.某个函数或者其他
#
# a = float(input("请输入数字a:\n"))
# b = float(input("请输入数字b:\n"))
# r = arith.sub(a, b)
# print(a, "-", b, "=", r)

# print(arith.__doc__)  # 获得模块的文档注释


# 2. from 模块名 import 变量名 函数名 类名
from arith import add, sub, name
a = 10
b = 20
r = add(a, b)


name = "app"

print(name)


