import random

num = random.randint(1, 100)
while True:
    try:
        s = int(input("输入一个1~100中的整数"))
        if s > num:
            print("猜大了")
        elif s < num:
            print("猜小了")
        else:
            print("猜对了")
            break

    except ValueError:
        print("输入有误")
