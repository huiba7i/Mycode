# 1.创建字典 key只能是不可变数据类型
user = {
    "username": "张三",
    "age": 29,
    "性别": "男"
}
# 2.字典取值
print(user["username"])
print(user.get("username"))  # 方法取值
print(user.get("abc", "123"))  # 方法取值 没有取到值 默认返回None 也可以指定返回值

# 取值 取不到就新增一个
print(user.setdefault("idcard", "2131231231231321"))
print(user)
print(user.setdefault("idcard", "没有找到"))
print(user)

# 3.删除
# 3.1 语句删除 del dict["key"]
# 3.2 方法删除
value = user.pop("idcard")  # 根据键删除
print(value)
print(user)
#
# item = user.popitem()  # 随机删除一组键值 返回tuple
# print(item)
# print(user)

# 4. 更新字典
user_1 = {"username": "lisi", "idcard": ""}
print(user)
user.update(user_1)  # key存在修改 key不存在就新增
print(user)


# 5. 字典遍历
# 5.1
items = user.items()
for item in items:
    print(item, item[0], "=", item[1])
# 5.2
for key in user.keys():
    print(key, "=", user[key])

# 5.3
for key in user:
    print(key, "=", user[key])


# 6. in
if "username1" in user:
    print(user["username1"])
else:
    print("username1 不存在")




