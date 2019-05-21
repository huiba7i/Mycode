"""
    函数：
        分为内建函数和自定义函数的
        内建：
            type()
            print()
            input()
            int()
            bin()
            hex()
            oct()
            id()

        自定义函数

        def 函数名([形参列表]):

            函数内容

"""


# 1. 定义一个最简单的函数
def a():
    """
        函数的文档注释
    :return:
    """
    print("hello world")


# 调用
a()


# 2. 定义一个带参数的函数
def printStar(num):
    a = 1
    while a <= num:
        print("*"*a)
        a += 1


# 3.调用
# n = int(input("请输入一个数字：\n"))
# printStar(n)


# 3. 定义一个带返回值的函数
def isOdd(num):
    """
    检测一个数字是否是一个奇数
    :param num:
    :return:
    """
    if num % 2 == 1:
        return True
    return False


# 调用
# n = int(input("请输入一个数字：\n"))
# r = isOdd(n)
# if r:
#     print(n, "是一个 奇数")
# else:
#     print(n, "是一个 偶数")


print(printStar(1))  # 没有返回值的函数 会返回None


# 4. 多返回值 函数

#     :param mylist: list列表
#     :return:  列表中最大的值 以及其索引  返回的是tuple类型的对象

def findMax(mylist):
    size = len(mylist)  # 返回list的元素的个数
    i = 0
    max = i  # max 存放最大值的索引
    while i < size:
        if mylist[i] > mylist[max]:
            max = i
        i += 1

    return mylist[max],max


# 调用函数
print(findMax([1, 2, 8, 10, 20, 30, 0]))


# 5. 关键字参数
def person(name, age, birthday):
    print("name =", name, ",age =", age, ",birthday =", birthday)


# 调用
# 5.1 位置参数 按照形参的位置 依次传入实参
person("lisi", 19, "2011-10-09")
# 5.2 关键字参数(形式参数名字=实际参数) 传入实参
person(birthday="2011-10-09", name="wangwu", age=18)


# 6. 默认值参数 要放在参数列表的最后面  定义函数时 函数名相同的函数 后面的会覆盖前面的函数
def person(name, age, birthday, sex="男"):
    print("name =", name, ",age =", age, ",birthday =", birthday, ",sex =",sex)


# 包含默认值的函数的调用
person("lisi", 19, "2011-10-09")
person("lisi", 19, "2011-10-09", "女")


# 7. 可变参数
def person(*args):
    print(args)  # 使用tuple接收可变参数


# 调用
person("1", "zhangsan", "男", "中国人")
person()
person("法国人")


# 必须参数放在 可变参数的前面
# def person(age, *args):
#     print("age =",age)
#     print(args)


# 调用时 按照位置参数顺序传参
# person(19, "1", "hello")


def person(*args, age):
    print("age =",age)
    print(args)


# 调用时 必需参数 必须以关键字形式传入
person("1", "hello", age=19)


# 8. 字典参数列表
def person(**kwargs):
    print(kwargs)


# 调用 必须写关键字参数
person(age=19, sex="男")
print("1", "2", "3", "4", sep="#")


# 9. 函数传递 函数可以作为参数传递到另外一个函数中的
def a():
    print("in a()")


def b(fun):
    """
    :param fun: 函数对象
    :return:
    """
    fun()


# 调用b
b(a)


# 10 . 函数内部去定义函数 闭包
def out():
    print("in out()")
    # 在函数的内部定义新的函数
    def inner():
        print("in out inner()")

    # 调用闭包函数
    inner()


out()


# 11. lambda 表达式 匿名函数
la = lambda x, y : x + y
print(la(10, 20))


def count(fun, x, y):
    return fun(x, y)


print(count(lambda x, y:x - y, 20, 10))
print(count(lambda x, y:x * y, 20, 10))

















