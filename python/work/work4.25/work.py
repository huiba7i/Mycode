# work1
import threading


def Strnum(str, name):
    n = "%s.txt" % name
    file = open(n, mode="r", encoding="utf8")
    num = 0
    showorder = 0    #保存指定字符出现的次数
    while True:
        """逐个读取匹配文件中的指定字符"""
        readStr = file.read(1)
        if readStr:     #如果字符未读完则不会停止
            if str == readStr:
                showorder += 1
            num += 1
        else:           #字符读完时推出循环
            break
    if showorder == 0:
        return "文件中没有该字符"
    else:
        return showorder


str = input("输入查询的字符")
name = input("输入文件名")
print(Strnum(str, name))


# work2
class Readstr(threading.Thread):

    def __init__(self, str, name):
        threading.Thread.__init__(self)
        self.str = str
        self.name = name

        # 单个文件中保存指定字符出现的次数
        showorder = Strnum(self.str, self.name)
        self.showorder = showorder


num = 1
str = input("输入查询的字符")
showorderlist = []

#创建线程
while num <= 5:
    t = Readstr(str, num)   #线程对象
    num += 1
    showorderlist.append(t)

#启动线程
for tr in showorderlist:
    tr.start()
#将线程假如到主线程中
for tr in showorderlist:
    tr.join()

sum = 0
for tr in showorderlist:
    sum += tr.showorder     #将所有线程读取到的字符数量相加
print("所有文件字符%s的数量为%s" % (str, sum))


# work3

class Shop:
    def __init__(self, max):
        self.max = max  #最大库存
        self.num = 0    #当前库存
        self.condition = threading.Condition()     #创建条件锁对象

    def stock(self, num):
        """
        进货
        """
        with self.condition:
            while num + self.num > self.max:
                print("进货数量%d,进货失败，库存已满，当前库存%d" % (num, self.num))
                self.condition.wait()

            self.num += num
            """
               让当前线程处于等待状态 并且会释放lock对象  
                等待状态会被调用过同一个condition对象的notify_all方法的线程唤醒
            """
            print("进货成功，进货数量%d，当前库存%d" % (num, self.num))
            self.condition.notify_all()

    def sell(self, num):
        """
        售货
        """
        with self.condition:
            while self.num < num:
                """
                  让当前线程处于等待状态 并且会释放lock对象  
                   等待状态会被调用过同一个condition对象的notify_all方法的线程唤醒
                """
                print("售货数量%d,售货失败，当前库存%d" % (num, self.num))
                self.condition.wait()
            self.num -= num
            print("售货数量%d,售货成功，当前库存%d" % (num, self.num))
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

while True:
    try:
        str = input("输入选项:1.进货 2.售货 3.退出")
        if str == "1":
            num = int(input("输入进货数量"))
            Stock(shop, num).start()

        elif str == "2":
            num = int(input("输入购买数量"))
            Sell(shop, num).start()

        elif str == "3":
            break

        else:
            print("输入有误")

    except ValueError:
        print("输入有误")
