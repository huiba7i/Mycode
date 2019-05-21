import codecs, sys
sys.stdout = codecs.getwriter('utf-8')(sys.stdout.buffer)
import sys
import os
sys.path.append(os.getcwd())  # 将当前项目目录添加到模块的扫描路径中