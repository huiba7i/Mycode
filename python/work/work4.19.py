# work1
def Count(n):
    sum = 0
    s = 1
    while s <= n:
        sum += 1/s
        s += 1
    return sum


n = int(input("输入一个正整数"))
print(Count(n))

# work2

# a = int(input("输入第一个整数"))
# b = int(input("输入第二个整数"))
# c = int(input("输入第三个整数"))
# d = int(input("输入第四个整数"))
# sum = 0
# if(a>b):
#     sum = b
# else:
#     sum = a
# if(sum>c):
#     sum = c
# if(sum>d):
#     sum = d
# print("最小数为：", sum)

# work3
# def Sum(arr):
#     s = 0
#     sum = 0
#     while s < len(arr):
#         if (arr[s] % 2 != 0):
#             sum += arr[s]
#         s += 1
#     return sum
#
#
# arr = []
# n = 0
# while n < 5:
#     arr.append(int(input("输入整数")))
#     n += 1
#
# print("输入的所有基数和为：", Sum(arr))

# work4


# sum = 0
# def Test(x, y, p):
#     if (p == "+"):
#         sum = x + y
#     elif (p == "-"):
#         sum = x - y
#     elif (p == "*"):
#         sum = x * y
#     else:
#         sum = x / y
#     return (sum)
#
#
# sum = Test(x=int(input("输入第一个数")), p=input("输入运算符"), y=int(input("输入第二个数")))
# print("计算结果为：", sum)

# work5
# a = 1
# while a <= 9:
#     b = 1
#     while b<= a:
#         print(a ,"*" ,b , "=" ,a * b ,end="  ")
#         b += 1
#     print()
#     a += 1

# work6
# def isLeap(year):
# #     if ((year % 4 == 0) and ((year % 100) != 0)) or (year % 400 == 0):
# #         return True
# #     else:
# #         return False
# #
# #
# # year = int(input("输入一个年份"))
# # if isLeap(year):
# #     print(year, "为闰年")
# # else:
# #     print(year, "不为闰年")

# work7
# def Prime(n):
#     if n <= 1:
#         return False
#     sum = 2
#     while sum * sum <= n:
#         if n % sum == 0:
#             return False
#         sum += 1
#     return True
#
#
# boolean = Prime(n=int(input("输入一个正整数")))
# if boolean:
#     print("Yes")
# else:
#     print("No")


# work8
# def numMax(numlist):
#     num = 0
#     maxi = num
#     while num < len(numlist):
#         if numlist[num] > numlist[maxi]:
#             maxi = num
#         num += 1
#
#     return numlist[maxi], maxi
#
#
# n = 0
# prili = []
# while n < 5:
#     prili.append(int(input("输入数字")))
#     n += 1
#
# print(numMax(prili))
