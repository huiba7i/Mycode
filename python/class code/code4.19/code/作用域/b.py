# 引入的模块中的变量  内建作用域
# from a import name  # B （Build-in）

# 取值范围 L < E < G < B

# 全局变量 G （Global）
# name = "wangwu"




def test():
    # E （Enclosing） 闭包函数外的函数中
    name = "zhangsan"

    def inner():
        # L (Local) 局部变量
        name = "lisi"
        print("in inner ", name)


    inner()
    print("in test ", name)




test()

if True:
    age = 10

print(age)
