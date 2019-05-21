class Student:
    """
    定义了一个学生类，该类有国籍属性
    对象属性 stuid name sex age
    """
    nationality = "China"

    def __init__(self, stuid, name, sex, age):
        """
            用来初始化对象属性的
        """
        self.stuid = stuid  # 对象没有属性时 创建属性 有属性时 修改属性
        self.name = name
        self.sex = sex
        self.age = age

    def show(self):
        """
        打印所有的对象属性值
        :return:
        """
        print(self.stuid, ",", self.name, ",", self.sex, ",", self.age)


# 1. 类内置属性
print(Student.__doc__)  # 获得类的注释
print(Student.show.__doc__)
attr = Student.__dict__  # 获得所有的类属性 字典对象
for key in attr:
    print(key, "=", attr[key])

print(Student.__class__)  # 获取类的类型 type
print(type(1))

print(Student.__module__)  # 获得类所在的模块
print(Student.__name__)  # 获得类名

# 2. 对象内置属性
s = Student(1, "wangwu", "女", 18)
print(s.__class__)  # 获得对象的类型 类

attr = s.__dict__  # 获得对象的属性字典

# s.idCard = ""
for key in attr:
    print(key, "=", attr[key])

