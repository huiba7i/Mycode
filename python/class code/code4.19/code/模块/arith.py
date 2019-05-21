"""
    模块文档注释
    定义了一些列的数学运算方法
"""

name = "arith"

def add(a, b):
    """
        加法运算
    :param a:
    :param b:
    :return:
    """
    return a + b


def sub(a, b):
    """
        减法运算
    :param a:
    :param b:
    :return:
    """
    return a - b


# 以下是测试代码
# __name__ 运行模块本身时  该值是__main__ 如果运行的是别的模块该值 就变成了模块名字（文件名）
if __name__ == "__main__":
    r = add(10, 20)
    if r == 30:
        print("测试通过")
    else:
        print("测试失败")
