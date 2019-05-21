# 1.String
a = 'hello \n world'       # \n--换行符
print(a)
a = r'hello \n world'
print(a)                    #字符前加一个r --表示不做转义字符

# """字符串，按原本的格式排版
# a = """
#     <html>
#         <body>
#             <div style="width:1000px;height:800px;"></div>
#         </body>
#     </html>
# """
# print(a)

# 3. 字符串下标
# 3.1 从左往右 0 - length-1
# 3.2 从右往左 -1 - -length

# 4. 切片操作 [开始下标1:[结束下标2]] 截取子字符串的字符
# 截取从起始下标开始（包含） 到结束下标(不包含)之间的子字符串
a = 'hello world'
print(a[5:])  # [ world]
print(a[-5:])  # [world]
print(a[6:8])  # [wo]
print(a[1:-1])  # [ello worl]
print(a)

b = 'llo w'
r = b in a          #in -- 判断b是否包含a的内容 返回True或False
print(r)

#for in     - - 遍历字符串中的所有字符
for i in a:
    print(i)
# capitalize() -- 首字母转换为大写
# casefold() -- 大写字母转换为小写字母
# lower()将原来字符串中的字符全部转为小写字母返回。
# upper()将原来字符串中的字符全部转为大写字母返回。
# swapcase()将原字符串中大写字母转小写字母，小写字母转大写字母。
b = a.capitalize()
print(b)
b = a.casefold()
print(b)
a = b.swapcase()
print(a)

"""
    center(width[, fillchar])指定字符串显示width，
        不足的地方使用fillchar(默认空格)字符填充，原字符串居中显示。
    ljust(width[, fillchar])指定字符串显示width，
        不足的地方使用fillchar(默认空格)字符填充，原字符串靠左显示。
    rjust(width[, fillchar])指定字符串显示width，不足的地方使用fillchar(默认空格)字符填充，原字符串靠右显示。
    zfill(width)指定字符串显示width，不足的地方在左边使用0补齐。
    expandtabs(tabsize=8)将字符串中的\t替换成空格，默认一个\t会替换成8个空格。

"""
a = 'python'
b = a.center(100)
print(b)
b = a.center(100,"*")
print(b)

a = 'hello\tworld'
b = a.expandtabs()
print(b)


"""
    count(sub[, start[, end]]) 在指定索引start到end区间范围内去查找sub子字符串出现的次数。
    endswith(suffix[, start[, end]])检查字符串是否以某个子字符串作为后缀，start表示开始匹配的位置，end表示停止匹配的位置。
    startswith(prefix[, start[, end]])检查字符串是否以某个子字符串作为前缀，start表示开始匹配的位置，end表示停止匹配的位置。
    find(sub[, start[, end]])在字符串中查找第一次出现子字符串sub的索引位置，找不到返回-1，start设置起始索引，end设置结束索引。
    rfind(sub[, start[, end]])在字符串中查找最后一次出现子字符串sub的索引位置，找不到返回-1，start设置起始索引，end设置结束索引。
    index(sub[, start[, end]])和find方法一样，但是找不到时会抛出ValueError异常。 
    rindex(sub[, start[, end]])和rfind方法一样，但是找不到时会抛出ValueError异常。
    isalnum()如果一个字符串至少有一个字符，并且所有的字符都是字母或数字则返回True，否则返回False。
    isalpha()如果一个字符至少有一个字符，并且所有的字符都是字母则返回True，否则返回False。
    isdigit()如果一个字符至少有一个字符，并且所有的字符都是数字则返回True，否则返回False。
    isspace()如果一个字符串至少有一个字符，并且全都是由空白字符组成则返回True，否则返回False。
    istitle() 如果一个字符串至少有一个字符，并且每个单词的首字母都是大写后面字符小写则返回True，否则返回False。
    isupper() 如果一个字符串至少有一个字符，并且里面的字母都是大写则返回True，否则返回False。
"""

a = 'aaasbbbddeaadfdgdgaaasgaaadaaa'
b = a.count('aaa')  # 检索整个字符串 查找子字符串出现的次数
print(b)
b = a.count('aaa', 6)  # 检索从起始索引（包含）之后 查找子字符串出现的次数
print(b)
b = a.count('aaa', 6, 26)  # 检索从起始索引（包含）到结束索引（不包含）之间 查找子字符串出现的次数
print(b)

a = 'hello.py0'
b = a.endswith('.py')
print(b)

a = 'baaasbbbddeaadfdgdgaaasgaaadaaa'
b = a.find('aaas')  # 返回第一次出现子字符串的索引位置 找不到返回-1
print(b)
# b = a.index("aabds")  # 此处会抛出ValueError异常

a = '1231wewe'
print(a.isalnum())
a = 'wewe'
print(a.isalpha())

#sep.join(str)以sep作为分隔符，将str的每个字符进行分割，并返回分割后的新的字符串。
a = '123456789'
b = ','.join(a)
print(b)

a = '   hello   '
b = a.lstrip().rstrip() #去掉左右空格
print(b)

"""
    split(sep=None[, maxsplit=-1])按照sep分割字符串，返回一个list对象，如果指定了maxsplit，则从左边开始分割maxsplit次。
    rsplit(sep=None, maxsplit=-1)按照sep分割字符串，返回一个list对象，如果指定了maxsplit，则从右边开始分割maxsplit次。

"""

a = '12, 34, 56, 78, 90'
b = a.split(',', 2)
print(b)

#replace(old, new[, count])将原字符串中old字符替换成new字符返回，替换次数不超过count(默认全部替换)次
a = "12,34,12,56,78,123"
b = a.replace(",","",0)
print(b)

# str.encode(encoding="utf-8", errors="strict")将一个字符串按照指定编码转成其字节编码对象
a = 'a'
print(a.encode())
a = '丁'
print(a.encode())
print(a.encode(encoding='gbk'))


a = list()  #创建一个空的列表
a = list('hello')  # 将一个序列对象（String,tuple,list,range）转换成一个list对象
print(a)
a = list((1, [1, 2]))
print(a)
a = list([1, 2, [3, 4]])
b = range(10)  # 创建一个 range对象 0-9
a = list(b)
print(a)

#切片 操作 和string相同  不会修改原有的list对象的
a = list(range(10))
b = a[2:]
print(b, a)

#新增数据 会修改原有的list对象中的元素 extend 数据类型（list,tuple,string）
a = list()
print(a)
a.append(1)
print(a)
a.extend([2, 3, 4])  # 将list中的元素 一个个的新增到一个新的list中
print(a)
a.append([2, 3, 4])  # 将list对象当成一个元素 新增到一个list中
print(a)
a.extend('123456')
print(a)

a.insert(0, ['a', 'b'])  # 在指定位置插入新的元素
print(a)

#修改列表中的元素
a = [1, 2, 3, 4, 5, 6]
# 通过下标直接修改
a[0] = 10
# a[5] = 19  索引取值不能超出范围
print(a)
# 切片修改
a[0:3] = [2, 3, 4]
print(a)
a = [1, 2, 3, 4, 5]
a.reverse()
print(a)    # 反向list中的元素
a.sort()
print(a) # 升序排列
a.sort(reverse=True)   # 降序排列
print(a)

# del   删除元素
a = '123'
print(a)
del a
a = [1, 2, 3, 4, 5]
del a[0]     # 删除第一个元素
print(a)
del a[2:]   #切片删除
print(a)

a = [1, 2, 3, 4, 5, 10]
b = a.pop() # 删除最后一个元素  堆栈结构
print(b, ',', a)

b = a.pop(0)  # 删除第一个元素
print(b, ',', a)

a = [1, 2, 3, 4, 5, 10, 1]
a.remove(2) # 移除指定对象
print(a)

"""
list.count(obj)统计某个元素在列表中出现的次数
list.index(obj)从列表中找出某个值第一个匹配项的索引位置
list.copy()复制列表
"""
a= [1, 2, 3, 4, 5, 1]
print(a.count(1))   #统计某个元素在列表中出现的次数
print(a.index(1))

a = [1, 2, 3, 4, [1, 2, 3]]
b = a.copy()  # 复制一个列表 内容和a相同的
print(b)
print(a == b) # == 比较两个对象中的内容是否相同
print(a is b) # is 比较两个对象是否是同一个对象
print(a[0] is b[0])

a[0] = 10
print(a, b) # a变 b不会变
a[4][0] = 10
print(a, b)  # a和b都会发生改变

a = 10
b = 10
print(a is b)
a = "abc"
b = "abc"
print(a is b)
a = [1]
b = [1]
print(a is b)

# 1.创建Tuple
t = tuple('abc')
print(t)