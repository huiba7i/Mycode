from util import print_num

import _thread  # 多线程的低级模块

# 单线程执行
# print_num()
# print("*"*100)
# print_num()

# 启动线程 都是后台线程
_thread.start_new_thread(print_num, ("线程一",))
print("*"*100)
_thread.start_new_thread(print_num, ("线程二",))

# 主线程 是前台线程
# 前台线程 优先级比较高 前台线程代码不执行完 程序是不会结束的
# 后台线程 优先级比较低 所有的前台线程执行完 后台线程会被强制终止的
while True:
    pass


