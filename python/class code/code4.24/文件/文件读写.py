# IO
# Input 输入 从其他地方（控制台、文件、网络等）输入到程序中来
# Output 输出 从程序输出到别的地方（控制台、文件、网络等）

# open() 打开一个文件 返回的是一个文件对象
# mode 变量 模式
"""
mode的参数有以下几种：
r 以只读模式打开文件(默认)
w 以写入模式打开文件，会先清空文件内容
x 创建一个新的文件，并且准备写入内容
a 以写入模式打开文件，文件不存在时创建新的文件，存在时写入内容追加在原文件后面
b 字节模式 适用于非文本文件
t 字符模式 适用于文本文件（默认）
+ 打开一个文件进行更新（可读可写）
以上参数是可以组合使用的，例如：r+,rb,rb+,w+,wb,wb+,a+,ab,ab+

"""
# 1. 字符读 mode="r"  打开一个不存在的文件时 会抛出FileNotFoundError异常
# file = open("1.txt", encoding="utf8")  # 打开 一个文件
# 读取文件数据
# n = file.read()  # 读取文件中所有的数据

# n = file.read(7)  # 指定字符个数进行读取
# print(n)
# n = file.read(1)  # 读取不到数据时 返回的是空白
# print(n)

# 一个字符一个字符的去读 读完整个文档
# try:
#     while True:
#         n = file.read(1)
#         if n:
#             print(n)
#         else:
#             break
#
#     # file.write("hello")  # UnsupportedOperation 异常 因为是以r模式打开
# finally:
#     file.close()  # 关闭文件流






# 2. 字节读 mode="rb"  适用于非文本文件读取 字节比字符效率要高
# file = open("1.txt", mode="rb")
# n = file.read(1)
# print(n)
# print("你".encode(encoding="utf8"))


# 3. 写 mode="w"
# file = open("2.txt", mode="w", encoding="utf8")  #打开一个文件 如果文件不存在 则创建一个新的文件 如果文件存在 则清空里面的内容
# # file.write("你好啊")
# # file.write("你吃饭了吗")
# # file.write("你热不热？")
# # file.write("hello")
#
# # file.read()  # 不能读 UnsupportedOperation异常
# file.flush()  # 将流刷新至硬盘
# file.close()


# 4. a 追加写入
# file = open("3.txt", mode="a")  # 文件不存在创建新文件 文件存在时，光标移到文件的最后一个字符
# file.write("world")
# file.flush()
# file.close()


# 5. +又写又读 r+ w+ a+
file = open("1.txt", mode="r+") # 光标在第一个字符位置
file.seek(0, 2)  # 把光标移到文件的末尾位置
file.write("hello") # 从光标位置开始写入内容 会覆盖原有内容

# 移动光标
file.seek(0)  # 把光标移到第一个字符的位置

n = file.read()  # 从光标位置开始读取数据
print(n)

