# 1.创建list对象
a = list()  # 创建一个空的列表
a = list("hello")  # 将一个序列对象（String,tuple,list,range）转换成一个list对象
a = list((1, [1, 2]))
a = list([1, 2, [3, 4]])
b = range(10)  # 创建一个 range对象 0-9
a = list(b)
print(a)

# 2. 切片 操作 和string相同  不会修改原有的list对象的
a = list(range(10))
b = a[2:]
print(b)
print(a)

# 3.新增数据 会修改原有的list对象中的元素 extend 数据类型（list,tuple,string）
a = list()
print(a)
a.append(1)
print(a)
a.extend([2, 3, 4])  # 将list中的元素 一个个的新增到一个新的list中
print(a)
a.append([2, 3, 4])  # 将list对象当成一个元素 新增到一个list中
print(a)
a.extend("123456")
print(a)

a.insert(0,['a','b'])  # 在指定位置插入新的元素
print(a)

# 4. 修改列表中的元素
a = [1, 2, 3, 4, 5]
# 通过下标直接修改
a[0] = 10
# a[5] = 19  索引取值不能超出范围
print(a)
# 切片修改
a[0:3] = [2, 3, 4]
print(a)
a = [1, 2, 3, 4, 5]
a.reverse()  # 反向list中的元素
print(a)
a.sort()  # 升序排列
print(a)
a.sort(reverse=True)  # 降序排列
print(a)

# 5. 删除元素
# 5.1 删除变量 del
a = "123"
print(a)
del a
a = [1, 2, 3, 4, 5]
del a[0]  # 删除第一个元素
print(a)
del a[2:]  # 切片删除
print(a)

# 5.2 方法删除
a = [1, 2, 3, 4, 5, 10]
b = a.pop()  # 删除最后一个元素  堆栈结构
print(b, ",", a)
b = a.pop(0)  # 删除第一个元素
print(b, ",", a)

a = [1, 2, 3, 4, 5, 10, 1]
a.remove(1)  # 移除指定对象
print(a)


# 5.3 其他操作
"""
list.count(obj)统计某个元素在列表中出现的次数
list.index(obj)从列表中找出某个值第一个匹配项的索引位置
list.copy()复制列表
"""
a = [1, 2, 3, 4, 5, 1]
print(a.count(1))
print(a.index(1))

a = [1, 2, 3, 4, [1, 2, 3]]
b = a.copy()  # 复制一个列表 内容和a相同的
print(a)
print(b)
print(a == b)  # == 比较两个对象中的内容是否相同
print(a is b)  # is 比较两个对象是否是同一个对象
print(a[0] is b[0])

a[0] = 10
print(a, b)  # a变 b不会变
a[4][0] = 10
print(a, b)  # a和b都会发生改变

# a = 10
# b = 10
# print(a is b)
# a = "abc"
# b = "abc"
# print(a is b)
# a = [1]
# b = [1]
# print(a is b)







