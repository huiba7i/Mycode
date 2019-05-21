# 1. 新增
# 1.1 add
a = set()
a.add(1)
a.add(5)
a.add("hello")
a.add(1)
print(a)

# 1.2
a.update((1, 4, 5))
print(a)


# 2. 删除
# 2.1 discard 删除指定元素
a.discard(1)
# a.discard(1)
print(a)

# 2.2
# a.remove(1)  # 元素不存在 抛出KeyError异常

# 2.3 pop 随机移除 并且返回元素
print(a.pop())
print(a)


# 3 集合运算
#3.1  set.intersection_update(set1, set2, ...)移除在参数的集合中存在而在原集合中不存在的元素，set中保留集合的交集
a = {1, 2, 3, 4, 5, 6, 7, 8, 9}
b = {1, 2, 10}
c = {2, 3, 10}
a.intersection_update(b, c)  # 会修改原集合
print(a)

a = {1, 2, 3, 4, 5, 6, 7, 8, 9}
b = {1, 2, 10}
c = {2, 3, 10}

d = a.intersection(b, c)  # 将运算结果返回 不会修改原集合
print(d)
print(a)




a = {1, 2, 3, 4, 5, 6, 7, 8, 9}
b = {1, 2, 10}

print(a.intersection(b))


# 3.2 去掉重复部分 添加不重复的部分
a = {1, 2, 3, 4, 5, 6, 7, 8, 9}
b = {1, 2, 10}
a.symmetric_difference_update(b)
print(a)

# 3.3 差集 去掉重复部分
print(a.difference(b))

# 3.4 求并集
a = {1, 2, 3, 4, 5, 6, 7, 8, 9}
b = {1, 2, 10}
print(a.union(b))

print(len(a))




