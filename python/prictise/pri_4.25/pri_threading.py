import threading
import time


def Num(name):
    for i in range(1, 10):
        print(name, i)


"""
 target -- 需要在线程中执行的函数对象！！
 args --  函数的实际参数 -- tuple类型！！！
"""
"""
t1 = threading.Thread(target=Num, args=("线程一",))

t2 = threading.Thread(target=Num, args=("线程二",))

t1.start()
t2.start()


class Mythreading(threading.Thread):
    def __init__(self, name):
        # 使用类创建线程必须要调用父类的__init__ 必须要写在第一行，否则会报error
        threading.Thread.__init__(self)
        self.name = name

    def run(self):
        Num(self.name)

t3 = Mythreading("线程三")
t4 = Mythreading("线程四")

t3.start()
t4.start()
"""


class Mythreading(threading.Thread):
    def __init__(self, lock):
        threading.Thread.__init__(self)
        self.lock = lock

    def run(self):
        # 语法一
        # self.lock.acquire()
        # for i in range(1, 10):
        #     print("%s --> %d" % (threading.current_thread().getName(), i))
        # self.lock.release()

        #语法二
        with self.lock:
            print("%s lock" % lock)
            for i in range(10):
                time.sleep(0.1)  # 让当前线程睡上几秒
                print("%s --> %d" % (threading.current_thread().getName(), i))


lock = threading.Lock()
t5 = Mythreading(lock)
lock2 = threading.Lock()
t6 = Mythreading(lock2)
t7 = Mythreading(lock)
t5.start()
t6.start()
t7.start()
