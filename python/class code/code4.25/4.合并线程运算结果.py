import threading
def add(a, b):
    return a + b


class Arith(threading.Thread):

    def __init__(self, a, b):
        threading.Thread.__init__(self)
        self.a = a
        self.b = b

    def run(self):
        sum = add(self.a, self.b)
        self.sum = sum  # 将运算的结果作为对象属性保留下来



a = [1, 2, 3, 4, 5, 6]
i = 0
ts = []
# 创建3个线程对象
while i < len(a):
    t1 = Arith(a[i], a[i+1])  # 创建线程对象
    i += 2
    ts.append(t1)

# 启动线程
for t in ts:
    t.start()

# join线程 将线程加入到主线程中
for t in ts:
    t.join()

# 合并运算结果
sum = 0
for t in ts:
    sum += t.sum
print(sum)






