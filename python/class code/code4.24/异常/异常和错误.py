# 1. 错误： 通常指的是语法错误，它会导致程序一行代码都不会执行
# print("hello world")
# if True:
# print("真的？")
# else:
# print("假的")

# 2. 异常 在程序运行过程中出现的错误 导致程序中断 出现异常之前的程序可以正常执行，出现异常之后的程序将不再执行
b = True
if b:
    print("真的")
    a = 10
else:
    c = 20
print("a", a)
print("c", c)  # 异常 NameError





