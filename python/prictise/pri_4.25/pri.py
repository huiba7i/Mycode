import _thread


def Num(name):
    for i in range(1, 10):
        print(name, i)

# 函数的实际参数 -- tuple类型！！！
_thread.start_new_thread(Num, ("线程一", ))
print("*" * 30)
_thread.start_new_thread(Num, ("线程二", ))

while True:
    pass
