"""
    使用三引号注释 写在整个python文件的最前面的成为文档注释
    条件控制语句（分支语句）
    if 条件（真或者假）:
        执行程序
    elif 条件:
        执行程序
    else:
        执行程序

"""
salary = 10000
if salary <= 3000:
    print("你还在温饱线上挣扎")
    print("条件分支")
elif salary <= 5000:
    print("<=5000")
else:
    print(">5000")
print("done")


# 练习  输入一个数字 判断该数字是否是一个偶数 如果是偶数就打印偶数 否则打印奇数
num = input("请输入一个数字：\n")
num = int(num)
if num % 2 == 0:
    print(num, "是一个偶数")
else:
    print(num, "是一个奇数")