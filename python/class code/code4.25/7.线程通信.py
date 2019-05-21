import threading

class Shop:
    def __init__(self, max):
        self.max = max  # 最大库存
        self.num = 0  # 当前库存
        self.condition = threading.Condition()  # 创建一个条件锁对象



    def stock(self, num):
        """
        进货
        :param num:
        :return:
        """
        with self.condition:
            while num + self.num > self.max:
                """
                   让当前线程处于等待状态 并且会释放lock对象  
                    等待状态会被调用过同一个condition对象的notify_all方法的线程唤醒
                """
                print("%s --> 进货失败，等待 ，进货数量%d, 当前库存%d" % (threading.current_thread(), num, self.num))
                self.condition.wait()
            self.num += num
            print("%s --> 进货成功，进货数量%d, 当前库存%d" % (threading.current_thread(), num, self.num))
            self.condition.notify_all()



    def sell(self, num):
        """
        售货
        :param num:
        :return:
        """
        with self.condition:
            while self.num < num:
                """
                   让当前线程处于等待状态 并且会释放lock对象  
                    等待状态会被调用过同一个condition对象的notify_all方法的线程唤醒
                """
                print("%s --> 售货失败，等待 ，售货数量%d, 当前库存%d" % (threading.current_thread(), num, self.num))
                self.condition.wait()
            self.num -= num
            print("%s --> 售货成功，售货数量%d, 当前库存%d" % (threading.current_thread(), num, self.num))
            self.condition.notify_all()


class Stock(threading.Thread):
    """
    进货线程
    """

    def __init__(self, shop, num):
        """

        :param shop: 进货商店
        :param num:  进货数量
        """
        threading.Thread.__init__(self)
        self.shop = shop
        self.num = num

    def run(self):
        self.shop.stock(self.num)


class Sell(threading.Thread):
    """
    售货线程
    """
    def __init__(self, shop, num):
        """

        :param shop: 售货商店
        :param num:  售货数量
        """
        threading.Thread.__init__(self)
        self.shop = shop
        self.num = num

    def run(self):
        self.shop.sell(self.num)



shop = Shop(100)

# 创建线程
Stock(shop, 20).start() # 进货20
Sell(shop, 30).start()
Sell(shop, 30).start()
Stock(shop, 20).start() # 进货20
# Stock(shop, 20).start() # 进货20
# 1.进货 2.售货 3.退出

