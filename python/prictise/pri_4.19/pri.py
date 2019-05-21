"""
num = int(input("输入一个数字"))
if num%2 == 0:
    print("输入的为偶数")
else:
    print("输入的为奇数")

n = 5
m = 1
while m <= n:
    print("*" * m)
    m += 1
"""

a = lambda x, y: x + y
print(a(1, 2))


def test(func, x, y):
    return func(x, y)


r = test(lambda x, y: x + y,10, 20)
print(r)