# 1. 算术运算符 +, -, *, /带浮点除, %（取余）, **求幂, //整除。
a = 99
b = 100
print(a + b)
print(a / b)  # 浮点除 0.99
print(a // b)  # 整除 0 只取整数部分
print(2**10)  # 求2的10次方

# + * 可以用于String List Tuple
print("hello " + "world")
print("hello" * 10)
print("*"*100)

print([1, 2] + [1, 2])
print([1, 2] * 10)



# 2. 位运算符 &, |, ^, ~, <<, >> 计算数字的 将数字转换成二进制进行运算的
# & 按位取与 都是1时 结果为1 否则结果为0
# | 按位取或 都是0时 结果为0 否则结果为1
# ^ 按位取异或 不同为1 相同为0
# ~ 按位取反 1变0 0变1
# << 左移n位表示扩大2的n-1次方倍 
# >> 右移n位表示缩小2的n-1次方倍 
a = 10  # 0000 .... 1010 
b = 9   # 0000 .... 1001
print(a & b)  # 0000 .... 1000
print(a | b)  # 0000 .... 1011
print(a ^ b)  # 0000 .... 0011
a, b = b, a # 交换两个变量中的值
print(a)
print(b)
print(~1)  # 0000 .... 0001 --> 1111 .... 1110 负数是以补码形式存放的  -2
# 原码 绝对值的原码 10进制转2进制 0000 .... 0010
# 反码 按位取反 1111 .... 1101
# 补码 反码+1   1111 .... 1110
print(1<<2)

# 3.关系运算符 ==, !=, >, <, >=, <=
print(1 >= 2)

# 4. 逻辑运算符 and , or , not   真（True） 假（False,0,None,[],"",{}）
"""
    x and y 
    如果x为False, 则结果为False
    如果x为非False的假值，则返回x
    如果x为True或为真，则返回y的值
"""

a = 10
b = False
print(a and b)  # False
b = 20
print(a and b)  # 20
a = False
print(a and b)
a = ""  # 非False的假值
print(a and b)


"""
    x or y 
    如果x为True或为真，则返回x的值
    如果x为False或者非False的假值, 则结果为y  
"""
a = 1
b = 0
print(a or b)  # 1
a = False
print(a or b)  # 0

"""
not x
如果x为True或为真的值，则返回False
如果x为False或为假的值，则返回True
"""

print(not 12)



# 5.赋值运算符 =, +=, -=, *=, /=, %=, **=, //=
a = 10
a += 10 # a = a + 10
print(a)

"""
    *
   ***
  *****
 ******* 
*********


"""