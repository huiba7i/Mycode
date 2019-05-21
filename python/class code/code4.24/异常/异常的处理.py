# 异常处理：为了防止因为异常导致程序完全中断 采取的措施就是异常处理
# 处理异常 try: except 异常类型: finally:

# while True:
#     try:  # 可能会出现异常的代码块
#         a = int(input("请输入一个数字a："))
#         b = int(input("请输入一个数字b："))
#         print(a, " +", b, " =", (a+b))
#     except ValueError:  # try代码块中运行时 遇到的异常类型
#         print("请输入正确的数字")





# while True:
#     try:  # 可能会出现异常的代码块
#         a = int(input("请输入一个数字a："))
#         b = int(input("请输入一个数字b："))
#         print(a, " /", b, " =", (a/b))
#         break
#
#         # print(a[0])
#     except ValueError:  # try代码块中运行时 遇到的异常类型
#         print("请输入正确的数字")
#     except ZeroDivisionError:
#         print("除数不能为0")
#     except:
#         print("未知异常")
#     finally:
#         print("done")  # 始终都会执行的代码块



# finally
try:
    print("abd")
finally:
    print("done")