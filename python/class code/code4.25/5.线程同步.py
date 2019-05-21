import threading
import time
"""
    1.线程同步的概念：
        一个代码片段 ，只能被一个线程执行
        
    2. 怎么实现同步
        Lock对象实现
        
    3. 为什么要同步？
"""


class MyThread(threading.Thread):

    def __init__(self, lock):
        threading.Thread.__init__(self)
        self.lock = lock

    def run(self):
        # 语法一

        # self.lock.acquire()  # 获得锁对象
        # for i in range(10):
        #     print("%s --> %d" % (threading.current_thread().getName(), i))
        # self.lock.release()  # 释放锁对象

        # 语法二
        with self.lock:
            print("%s lock" % lock)
            for i in range(10):
                time.sleep(1)  # 让当前线程睡上几秒
                print("%s --> %d" % (threading.current_thread().getName(), i))


# 创建一个锁对象
lock = threading.Lock()
t1 = MyThread(lock)
# 没有同步效果
lock2 = threading.Lock()
# t2 = MyThread(lock2)
# 和t1 线程同步
t3 = MyThread(lock)

t1.start()
# t2.start()
t3.start()