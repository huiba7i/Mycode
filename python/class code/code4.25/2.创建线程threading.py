from util import print_num
import threading  # 线程的高级模块

# 通过threading模块中的Thread类来完成线程对象的创建的
# 1. 直接创建Thread对象 传入一个需要在线程中执行的函数对象
"""
    target - 需要在在线程中执行的函数对象
    args - 函数的实际参数 tuple类型
"""
# print(type(print_num))
# t1 = threading.Thread(target=print_num, args=("线程1", ))
# # 启动线程
# t1.start()
#
# t2 = threading.Thread(target=print_num, args=("线程2", ))
# # 启动线程
# t2.start()


# 2. 自定义线程类 继承Thread 重写run方法
class PrintThread(threading.Thread):

    def __init__(self, name):
        # 必须要调用父类的__init__ 必须要写在第一行
        threading.Thread.__init__(self)
        self.name = name



    def run(self):
        """重写run方法"""
        print_num(self.name)


# 创建线程对象
t1 = PrintThread("线程1")
t2 = PrintThread("线程2")
# 启动线程 实际会运行线程类中的run方法
t1.start()
t2.start()
