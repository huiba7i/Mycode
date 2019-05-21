# 1. 字符串转义字符 \n \t \r
a = 'hello \n world'
print(a)
a = r'hello \n world'  # 字符串前面添加一个r 表示\不做转义字符的意思
print(a)
a = 'hello \\n world'  # 字符串前面添加一个r 表示\不做转义字符的意思
print(a)

# 2. """字符串 可见即所得的效果
a = """
    <html>
        <body>
            <div style="width:1000px;height:800px;"></div>
        </body>
    </html>
"""
print(a)

# 3. 字符串下标
# 3.1 从左往右 0 - length-1
# 3.2 从右往左 -1 - -length

# 4. 切片操作 [开始下标1:[结束下标2]] 截取子字符串的字符
# # 截取从起始下标开始（包含） 到结束下标(不包含)之间的子字符串
a = "hello world"
print(a[5:])  # [ world]
print(a[-5:])  # [world]
print(a[6:8])  # [wo]
print(a[1:-1])  # [ello worl]
print(a)

# 4. in (not in)
b = "llo w"
r = b in a
print(r)

# 5. 遍历字符串中所有的字符
for i in a:
    print(i)

# 6. 字符串方法
# 6.1 大小写转换的方法
"""
    capitalize() 首字母转大写。
    casefold() 将大写字母转小写字母。
    lower()将原来字符串中的字符全部转为小写字母返回。
    upper()将原来字符串中的字符全部转为大写字母返回。
    swapcase()将原字符串中大写字母转小写字母，小写字母转大写字母。
"""
a = "hello world"
b = a.capitalize()
print(b, a)
c = b.swapcase()
print(b, ",", c)

# 6.2 修改字符串格式
"""
    center(width[, fillchar])指定字符串显示width，
        不足的地方使用fillchar(默认空格)字符填充，原字符串居中显示。
    ljust(width[, fillchar])指定字符串显示width，
        不足的地方使用fillchar(默认空格)字符填充，原字符串靠左显示。
    rjust(width[, fillchar])指定字符串显示width，不足的地方使用fillchar(默认空格)字符填充，原字符串靠右显示。
    zfill(width)指定字符串显示width，不足的地方在左边使用0补齐。
    expandtabs(tabsize=8)将字符串中的\t替换成空格，默认一个\t会替换成8个空格。

"""
a = "python"
b = a.center(100)
print(b)
b = a.center(100, "*")
print(b)
a = "1"
b = a.zfill(16)
print(b)

a = "hello\tworld"
b = a.expandtabs()
print(b)
a = "\thello\t"
b = a.expandtabs()
print(b)

# 6.3 和字符串检索有关的
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
a = "abcdddaaadddaaa"
b = a.count("aaa")  # 检索整个字符串 查找子字符串出现的次数
print(b)
b = a.count("aaa", 6)  # 检索从起始索引（包含）之后 查找子字符串出现的次数
print(b)
b = a.count("aaa", 6, 14)  # 检索从起始索引（包含）到结束索引（不包含）之间 查找子字符串出现的次数
print(b)

a = "hello.py"
b = a.endswith(".py")
print(b)


a = "abcdddaaadddaaa"
b = a.find("aaab")  # 返回第一次出现子字符串的索引位置 找不到返回-1
print(b)
# b = a.index("aaab")  # 此处会抛出ValueError异常


a = "1231wewe#"
print(a.isalnum())
a = "wewe"
print(a.isalpha())



# 6.4 sep.join(str)以sep作为分隔符，将str的每个字符进行分割，并返回分割后的新的字符串。
a = "123456789"
b = ",".join(a)
print(b)

# 6.5
"""
    lstrip([chars])截掉字符串左边的空格或指定字符。
    rstrip([chars])截掉字符串右边的空格或指定字符。
"""
a = "     hello    "
b = a.lstrip().rstrip()  # 去掉左右空格
print(b)

# 6.6
"""
    split(sep=None[, maxsplit=-1])按照sep分割字符串，返回一个list对象，如果指定了maxsplit，则从左边开始分割maxsplit次。
    rsplit(sep=None, maxsplit=-1)按照sep分割字符串，返回一个list对象，如果指定了maxsplit，则从右边开始分割maxsplit次。

"""
a = "12,34,12,56,78,123"
b = a.split(",",3)
print(b)

# 6.7 replace(old, new[, count])将原字符串中old字符替换成new字符返回，替换次数不超过count(默认全部替换)次
a = "12,34,12,56,78,123"
b = a.replace(",","",1)
print(b)

# 6.8 str.encode(encoding="utf-8", errors="strict")将一个字符串按照指定编码转成其字节编码对象
a = "a"
print(a.encode())
a = "你"
print(a.encode())  # utf-8 编码
print(a.encode(encoding="gbk"))  # gbk


