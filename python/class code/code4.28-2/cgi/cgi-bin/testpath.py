import sys
import os


print("")
# sys.path list 存放了读取模块的路径
for i in sys.path:
    print(i)

# 获取当前工程的目录
print(os.getcwd())