#1. 格式化字符串 %[(name)][flags][width].[precision]typecode
# % 占位符
# typecode
# s 字符串
# d 整型数字
# f 浮点型数据
name = "小强"
age = 18
score = 95.8
# 1.1 按照 占位符的顺序 依次传入tuple
a = "我的名字叫做%s，我今年%d岁了，我数学考了%f分" % (name, age, score)
print(a)

a = "我的名字叫做%s" % name
print(a)

# 1.2 name 传入字典对象
a = "我的名字叫做%(name)s，我今年%(age)d岁了，我数学考了%(score)f分" % {"age": age, "name": name, "score": score}
print(a)

# 1.3 [flags (+,-, ,0)][width数字 表示字符串的宽度]
name ="a"
a = "my name is %+4s" % name
print(a)

name ="ab"
a = "my name is %-4s" % name
print(a)

name ="abc"
a = "my name is % 4s" % name
print(a)


num = 1010
a = "%032d" % num
print(a)

# 1.4 .[precision]
score = 95.5987766
a = "%-10.2f" % score
print(a)

# 1.5 将10进制转16进制输出
num = 10
a = "%x" % num
print(a)




# 2. 字符串对象的format方法  {}为格式占位符
# :[[fill]align][sign][#][width][,][.precision][type]
name = "小强"
age = 18
score = 95.8
a = "我的名字叫做{},我今年{}岁,我数学考了{}分".format(name, age, score)
print(a)

# 2.1 格式化 fill填充的字符 align对其方式 width字符的宽度
a = "my name is {:#>30}".format("lisi")  # #表示宽度不足的部分填充的字符>内容右对齐 30表示字符串宽度
print(a)
a = "my name is {: ^30}".format("lisi")  # #表示宽度不足的部分填充的字符^内容居中对齐 30表示字符串宽度
print(a)


# 2.2 singn + - 格式化数字
a = "{:+}".format(100)
print(a)
a = "{:0=-32}".format(-100)
print(a)

# 2.3 浮点
a = "{:.2f}".format(100.123444)
print(a)