"""
    while 循环

    while 循环条件:
        循环内容
"""

# 1.从1 + ... + 100
num = 1  # 定义一个变量存放要 加的数字
sum = 0  # 保存和
while num <= 100:
    sum += num
    num += 1
print("1+...+100=", sum)

"""
练习1 打印以下图案
*
**
***
****
*****
"""
line = 1  # 定义一个行号
while line <= 5:
    print("*"*line)
    line += 1


"""
    练习2  打印以下图案
   *         空格 3 * 1   -----1
  ***        空格 2 * 3   -----2
 *****       空格 1 * 5   -----3
*******      空格 0 * 7   -----4 

空格数 = 总行号-所在行号
*个数 = (所在行号-1)*2 + 1
"""
line = 1
max_line = 5
while line <= max_line:
    print(" "*(max_line-line), end="")  # 不换行打印
    print("*"*((line-1)*2+1))
    line += 1


# 2. while ... else  else语句表示循环条件不满足时 执行该分支
num = 11
while num <= 10:
    print(num)
    num += 1
else:
    print("循环结束")
print("done")

# 3. pass 用于自语句块 表示什么都不做
if False:
    pass
else:
    print("add")


# 4. break 退出循环
# continue 退出本次循环 继续下一次循环
num = 0
while num < 100:
    num += 1
    if num % 10 == 0:
        # break  # 退出循环
        continue  # 退出本次循环 接着下一次循环
    print(num)


else:
    print("循环结束")  # 循环中如果使用了break else分支是不执行的
print("done")









