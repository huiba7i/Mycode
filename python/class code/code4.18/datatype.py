# 1.变量定义
a = 10
b = 10
c = 10
a = b = c = 20  # 不推荐
a, b, c = 10, 20, 30  # 不推荐

# 2. Number数字类型 可以进行数学运算的
a = 100  # int
print(type(a))  # 打印一个变量的数据类型
a = 100.0  # float
print(type(a))  
a = True  # bool
print(type(a))  
a = 10 + 2j  # complex
print(type(a))  

# 3.String类型 整个脚本中字符串格式统一 要么使用"" 要么使用''
a = "hello Python"  # String 
a = 'hello Python' # String 
print(a)
print(a[0])  # 获取字符串的第1位的字符


# 4.List 有序列表 可以通过索引获取元素值 可以存放重复元素
a = []  # 定义一个空的列表
a.append(1)
a.append(1)
a.append(2)
print(a)
print(a[1])

a = [1, True, "Hello,List", [1, 2, 3]]  # 定义一个list 存放很多元素
a[0] = 100  # 可以修改元素
print(a)

# 5.Tuple 元组类型 () 不可变的
a = ()  # 定义一个空的元组
a = (1,)  # 定义包含一个元素的元组 ,不能省略
a = (1, 2, 3, [1, 2], "hello", (1,))
print(a[3])  # 通过下标（索引）获取元素

# 6.Set 无序集合 只能存放Number，Tuple， String数据类型 的数据 不能存放重复元素
a = set()  # 定义一个空的集合
a.add(1)
a.add("hello")
a.add((1, ))
a.add(1)
print(a)
a = {1, 2, 1, (1, 2)}


# 7.Directionary 字典类型 key-value
a = {}  # 定义一个空的字典
a["son"] = "lisi"  # 给字典对象增加元素
a["father"] = "lisan"
print(a)
print(a["son"])  # 字典元素取值

a = {'name': 'zhangsan', 'age': 19}  # 定义一个字典 并且包含一些元素
print(a)





# 不可变 Number、Tuple、String
a = 100
print(hex(id(a)))  # 打印一个变量的16进制的物理地址
a = 100.0
print(hex(id(a)))  # 打印一个变量的16进制的物理地址

# 可变 List、Set、Directionary
a = []
print(hex(id(a)), a)
a.append(1)
print(hex(id(a)), a)








