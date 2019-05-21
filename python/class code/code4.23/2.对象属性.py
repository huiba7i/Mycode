# 1. 定义一个类 不包含任何属性和方法  自定义对象属性
class Student:
    """
        定义了一个结构最小的类
    """
    def __str__(self):
        """
        打印一个对象时候调用该方法
        :return:
        """
        return self.name+","+self.sex


# 2.创建对象
s1 = Student()  # 对象创建完成之后 自定义属性 不建议使用
s1.name = "zhangsan"
s1.sex = "男"

print(s1)

def test(self):
    print(self.age, ",", self.stuid)

s2 = Student()
s2.stuid = 1
s2.age = 20

# print(s2)

s2.method = test  # 对象扩展方法

s2.method(s2)









"""
var a = new Object();
a.name = "zhangsan";
a.age = 19;
a.show = function(){
    
    
}

"""


# 2.使用__init__ 初始化方法 创建对象属性
class Student:


    def __init__(self, stuid, name, sex, age):
        """
            用来初始化对象属性的
        """
        self.stuid = stuid  # 对象没有属性时 创建属性 有属性时 修改属性
        self.name = name
        self.sex = sex
        self.age = age


# 创建对象
s1 = Student(1, "lisi", "男", 18)
print(s1.stuid)
print(s1.name)
print(s1.sex)
print(s1.age)


# 类属性 即可以使用类名.属性 也可以使用对象名.属性（实际上是给对象新增了属性）
# 对象属性 只能使用对象名.属性 不能 使用类名.属性










