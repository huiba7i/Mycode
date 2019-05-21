from util import print_num
import threading
t1 = threading.Thread(target=print_num, args=("线程1", ))
t2 = threading.Thread(target=print_num, args=("线程2", ))
t3 = threading.Thread(target=print_num, args=("线程3", ))


# 线程对象的操作
# 1. name属性 设置或者获得线程对象的名字
print(t1.name)
print(t2.name)
print(t3.name)
print(threading.current_thread().getName())  # MainThread
t1.name = "线程一"
print(t1.name)

# 2. daemon bool类型的 标志线程对象是否是后台线程 默认False
# print(t1.daemon)
# t1.setDaemon(True)
# t1.start()

# 3. join 联合线程 把一个线程对象和当前线程合为一个线程 等加入的线程执行完 当前线程才会继续执行
t1.start()
t2.start()
t3.start()
print("t3的线程状态", t3.is_alive())
t1.join()
t2.join()
t3.join()
print("t3的线程状态", t3.is_alive())
print("done")



