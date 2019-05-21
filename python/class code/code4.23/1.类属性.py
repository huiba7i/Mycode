# 1. 定义一个类 不包含任何属性和方法
class Student:
    """
        定义了一个结构最小的类
    """
    pass


# 2.创建对象
s1 = Student()
s2 = Student()
print(s1)
print(s2)


# 2. 定义类 包含属性 和 方法的
class Student:

    """
        类的文档注释
    """
    sex = "男"  # 定义了一个类数据属性 可以直接使用类名.属性

    def getSex(self):
        """
        定义一个方法
        self 不能省略的 表示该类的一个对象 哪个对象调用这个方法 self就是哪个对象
        :return:
        """
        return self.sex;  # 返回self对象的sex属性



# 创建对象
s1 = Student()
Student.sex = "未知"  # 修改了类属性
s1.sex = "女"  # 修改了对象的属性 当使用对象的名字去修改类属性时 实际上是创建一个新的对象属性
print(s1.sex)  # 打印对象的sex属性
print(s1.getSex())  # 调用对象的方法

s2 = Student()
print(Student.sex)
print(s2.sex)
print(s2.getSex())


# 调用类的方法
Student.getSex(s2)  # 使用类名去调用方法时 必须要传入具体的对象
s2.getSex()










