class Animal:
    name = "动物"  # 类属性

    def __init__(self, color):
        self.color = color  # 对象属性
        print("__init__ in Animail")


    def sound(self):
        print("我的皮肤是", self.color)



class Dog(Animal):
    """
        定义了一个Dog类 继承了Animal类
        可以继承Animal类中的类属性和类方法 以及对象属性 指的是__init__方法中定义的对象属性

    """

    def watch_home(self):
        print(self.name, "在看家")


# 创建对象
# dog = Dog("黄色")
# print(dog.color)  # 继承下来的对象属性
# print(Dog.name)  # 继承下来的类属性
# dog.sound()  # 继承下来的方法
#
# dog.name = "小黄"  # 对象属性
# dog.watch_home()  # 扩展的方法



class Dog(Animal):
    """
        定义了一个Dog类 继承了Animal类
        可以继承Animal类中的类属性和类方法 以及对象属性 指的是__init__方法中定义的对象属性

    """

    def __init__(self, color, name, age):
        """
        重写方法 重写父类中定义过的方法
            如果子类 不重写__init__ 默认会调用父类的__init__
            一旦子类重写过__init__就不会再调用父类__init__了，想要调用父类的必需显式调用
        :param name:
        :param age:
        """
        self.name = name
        self.age = age
        Animal.__init__(self, color)  # 显式调用父类的初始化方法


    def watch_home(self):
        print(self.name, "在看家")


    # 这个方法 会覆盖之前的同名的方法
    def watch_home(self, hour):
        print(self.name ,"一直在睡觉，已经睡了", hour, "小时了")



    def sound(self):
        print(self.name, "在汪汪叫")


dog = Dog("黄色", "小黄", 2)
dog.sound()
dog.watch_home(10)
print(dog.color)



class Person:

    def __init__(self, name):
        self.name = name
        print("__init__ in Person")


    def sleep(self):
        print(self.name, "在睡觉")


# 多继承
class Student(Animal,Person):
    pass


# 创建对象
print(Student.name)  # 从Animal中继承的 name属性
s = Student("sdfsdf")