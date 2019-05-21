"""
    屏幕输入一个年份，判断是否为闰年
	四年一闰，百年不闰；四百再闰
       （1）能被4整除且不能被100整除
       （2）能被400整除
"""
def isLeap():
    year = input("请输入一个年份：\n")
    year = int(year)
    if year % 4 ==0 and year % 100 != 0:
        print(year, "是一个闰年")
    elif year % 400 == 0:
        print(year, "是一个闰年")
    else:
        print(year, "不是一个闰年")


isLeap()


# 修改函数 对于一个函数来说 接收参数 进行算法处理 给出结果
def isLeap(year):
    if year % 4 ==0 and year % 100 != 0:
        return True
    elif year % 400 == 0:
        return True
    else:
        return False



# 应用部分 包括数据来源
year = input("请输入一个年份：\n")
year = int(year)
r = isLeap(year)
if r:
    print(year, "是一个闰年")
else:
    print(year, "不是一个闰年")