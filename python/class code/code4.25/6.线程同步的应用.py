import threading
import time


class Train():
    num = 5  # 定义一个火车票总张数

    def __init__(self):
        self.lock = threading.Lock()  # 给对象添加一个属性 锁对象

    def buy(self):
        """
        购买火车票
        :return:
        """
        # 效率比较低的同步
        # with self.lock:
        #     if Train.num > 0:
        #         time.sleep(1)
        #         Train.num -= 1
        #         print("%s-->成功购买一张火车票，剩余%d张" % (threading.current_thread(), Train.num))
        #     else:
        #         print("%s-->对不起没有票了" % threading.current_thread())


        # 优化后的程序
        left = -1  # 定义剩余的票
        with self.lock:
            if Train.num > 0:
                # time.sleep(1)
                Train.num -= 1
                left = Train.num
        if left == -1:
            print("%s-->对不起没有票了" % threading.current_thread())
        else:
            print("%s-->成功购买一张火车票，剩余%d张" % (threading.current_thread(), left))




class BuyThread(threading.Thread):

    def __init__(self, train):
        threading.Thread.__init__(self)
        self.train = train


    def run(self):
        self.train.buy()



train = Train()
for i in range(8):
    t = BuyThread(train)
    t.start()

