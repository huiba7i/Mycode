import re

string = "1433223 zip pwd mnba bcd.py"
pattern = "pwd"
m = re.search(pattern, string)
m = re.match(pattern, string)   #字符串的第一个位置开始匹配，如果不匹配返回None，如果匹配成功则返回一个Match对象
print(m)    #在字符串中任意位置匹配正则表达式，返回第一个的匹配对象。


pattern = "\D"
pattern = "\d"
pattern = "\S"
pattern = "."       # "." 匹配除\n外的任意字符
pattern = "\w"      # "\w" 匹配数字字母下划线
pattern = "\W"      # "\W" 匹配非数字字母下划线
m = re.search(pattern, string)
print(m)

pattern = "[a-z]"
pattern = "[1-9]"
pattern = "[a-z]"
pattern = "[^0-9]"
pattern = "\.py\\b"
m = re.search(pattern, string)
print(m)

string = "12000"
pattern = "[1-9]\d{4}$"
n = re.match(pattern, string)
print(n)

string = "12000"
pattern = "^[1-9]\d{4}$"
n = re.search(pattern, string)
print(n)