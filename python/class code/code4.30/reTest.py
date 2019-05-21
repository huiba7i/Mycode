import re

string = "hello abc python"  # 定义一个字符串
pattern = "abc"  # 定义一个正则的字符串  字符按照字面意思 一一匹配
# 1. match 从字符串的第一个字符开始匹配 ^
m = re.match(pattern, string)
print(m)
# 2. search 从字符串的任意位置开始匹配 返回第一次匹配到的子字符串
m = re.search(pattern, string)
print(m)

# 3.flag  re.I 忽略大小写
string = "hello ABC python"
pattern = "abc"
m = re.search(pattern, string, re.I)
print(m)

# 4. 正则匹配
# 4.1 按照字符字面意思一一匹配
# 4.2 字符集匹配
"""
    以下匹配的都是一位的字符
    .	匹配除\n外的任意字符
    \w	匹配数字字母下划线
    \W	匹配非数字字母下划线
    \s	匹配任意空白字符，等价于 [\t\n\r\f]。
    \S	匹配任意非空字符
    \d	匹配任意数字，等价于 [0-9]。
    \D	匹配任意非数字
"""
string = "\n1D8 2qs"
pattern = "."
pattern = "\w"
pattern = "\W"
pattern = "\W"
pattern = "\s"
pattern = "\S"
pattern = "\d"
pattern = "\D\d\w"
m = re.search(pattern, string)
print(m)


# 4.3 自定义字符集 [] 一个中括号匹配是一个字符
string = "hello WORLD"
pattern = "[CDEFWl]"
m = re.search(pattern, string)
print(m)

# 匹配一个字符串 要求第一位是不能为0的数字 第二位是一个小写字母 第三位是一个大写字母
# 第四位不能是f-k之间的字母
string = "2dF#sdfds"
pattern = "[1-9][a-z][A-Z][^f-k]"
m = re.match(pattern, string)
print(m)

# 4.4 边界匹配
"""
    ^	匹配字符串开始
    $	匹配字符串结束，忽略末尾换行符
    \A	匹配字符串开始
    \Z	匹配字符串结束，末尾如果是\n也算在匹配字符串内
    \b	匹配一个单词边界，也就是指单词和空格间的位置。例如， 'er\b' 可以匹配"never" 中的 'er'，但不能匹配 "verb" 中的 'er'。
    \B	匹配非单词边界。'er\B' 能匹配 "verb" 中的 'er'，但不能匹配 "never" 中的 'er'。
"""
string = "hello 123 hello python"
pattern = "123"
pattern = "^123"  # 匹配一个以123开头的字符串
pattern = "python$"  # 匹配一个以python结尾的字符串
string = "hello.py"
# string = "hellowpy"
pattern = "\.py$"  # 匹配一个以.py 结尾的字符串
m = re.search(pattern, string)
print(m)


string = "regirester, rehow old are you !!!"
pattern = r"\bre"  # 匹配一个以re开头的单词
m = re.search(pattern, string)
print(m)

pattern = r"re\b"  # 匹配一个以re结尾的单词
m = re.search(pattern, string)
print(m)

pattern = r"re\B"  # 匹配一个re 但是re不能作为单词的结尾
m = re.search(pattern, string)
print(m)

pattern = r"\Bre\B"  # 匹配一个re 但是re不能作为单词的结尾和单词的开始
m = re.search(pattern, string)
print(m)


# 4.5 数量匹配
"""
    *	指定匹配0个或者多个
    +	指定匹配1个或者多个
    ?	指定匹配0个或者1个
    {m}	指定匹配恰好m个
    {m,n}	指定匹配至少m个，至多n个
    {m,}	指定匹配至少m个
"""
string = "he12allo123abcdef235"
pattern = "\d*a"  # 匹配0个或者多个数字 + a 123a
m = re.search(pattern, string)
print(m)
pattern = "\d+a"  # 匹配1个或者多个数字 + a  123a
m = re.search(pattern, string)
print(m)
pattern = "\d?a"  # 匹配1个0个数字 + a  3a
m = re.search(pattern, string)
print(m)

pattern = "\d{3}a"  # 匹配3个数字 + a  3a
m = re.search(pattern, string)
print(m)


string = "he12allo1235645454abcdef235"
pattern = "\d{3,6}a"  # 匹配3个数字 + a  3a
m = re.search(pattern, string)
print(m)


# 练习 1. 匹配一个5位数的正整数
string = "12233"
pattern = "^[1-9]\d{4}$"
m = re.search(pattern, string)
print(m)

# 练习 2. 匹配一个大于5位数的正整数
string = "122331"
pattern = "^[1-9]\d{4,}$"
m = re.search(pattern, string)
print(m)


# 4.6 分组匹配 ()
string = "werw43w4123abc456ddd567www999qqqsdfsdfwerewr"
pattern = "(\d{3}[a-z]{3})+"
m = re.search(pattern, string)
print(m)

# | 或
string = "222222qqqqq####aaaaaa1111111#####"
pattern = "(([a-z]+\d+)|(\d+[a-z]+))*"
m = re.search(pattern, string)
print(m)

# 练习 匹配一个数字 整数部分是1-5位数 小数部分2位
string = "11111"
# 匹配1-5位整数

pattern = "^(((\d)|([1-9]\d{1,4}))(\.\d{2})?)$"
m = re.search(pattern, string)
print(m)


# 5. Match 的方法和属性
string = "sdfsdfdsfdsf121212dsfsdfsdf"
pattern = "\d+"
m = re.search(pattern, string)
startIndex = m.start()  # 匹配的字符串的起始索引
endIndex = m.end()  # # 匹配的字符串的结束索引
print(startIndex, endIndex)

g = m.group()  # 匹配的结果字符串
print('匹配的结果',g)
print(m)



string = "sdfsdfdsfdsf121212dsfsdfsdf"
pattern = "(\d)+"
m = re.search(pattern, string)
gs = m.groups()  # 在分组中使用
print('匹配的结果s',gs)


# 6. 扩展符号
# 6.1 (?i) 忽略大小写
string = "yes no，Yes No，YES no"
# pattern = "yes"
# m = re.findall(pattern, string, re.I)  # 查询整个字符串中所有匹配正则的地方
pattern = "(?i)yes (?-i:no)"
m = re.findall(pattern, string)

print(m)

# 6.2 (?:re1)(re2)  完整匹配 但是只取符合re2的字符串
string = "http://www.baidu.com http://www.google.com http://www.aowin.com"
pattern = r"http://(?:\w+\.)*(\w+\.com)"
r = re.findall(pattern, string)
print(r)

# 去匹配 符合abc###123 格式的字符串 只取里面的数字
string = "abc###123 ddd###222 ccc###333 888###123"
pattern = "[a-z]{3}(?:#{3})(\d{3})"
m = re.findall(pattern, string)
print(m)

string = "abc###123 ddd###222 ccc###333 888###123"
pattern = "[a-z]{3}(?=#{3})"  # 取(?=) 前面的字符
m = re.findall(pattern, string)
print(m)


string = "abc###123 ddd###222 ccc###333 888###123"
pattern = "(?<=#{3})\d{3}"  # 取 (?<=) 后面的字符
m = re.findall(pattern, string)
print(m)

