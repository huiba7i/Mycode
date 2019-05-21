# 1. 序列化 将python中的对象 序列化为字节码
# 2. 反序列化 将序列化为字节码的python对象 反序列化为一个具体的对象
import pickle

# dic = {"name": "张三", "age": 19}
# file = open("user.txt", mode="wb")
# pickle.dump(dic, file)  # 将对象序列化后存入文件


# 反序列化
file = open("user.txt", mode="rb")
dic = pickle.load(file)
print(dic)
print(type(dic))