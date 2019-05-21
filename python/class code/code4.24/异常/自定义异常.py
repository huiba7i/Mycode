class NumberNotFoundError(Exception):
    """
        自定义了一个异常类
    """
    message = "数字没有被找到"



# 抛出异常 raise
def find_num(list, num):
    """
    从一个list中查找一个数字 找到返回索引 找不到抛出数字没有找到的异常
    :param list:
    :param num:
    :return:
    """
    index = 0
    for i in list:
        if i == num:
            return index
        index += 1
    raise NumberNotFoundError  # 抛出异常 抛出异常后 该块中的程序会中断的



list = [1, 2, 3, 4, 5, 6]
num = 50
try:
    index = find_num(list, num)
    print(index)
except NumberNotFoundError:
    print(NumberNotFoundError.message)


