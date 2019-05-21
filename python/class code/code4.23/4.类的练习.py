# 定义一个电话类Phone 对象属性：颜色 型号 方法 call
# 定义一个人类Person 对象属性：姓名 年龄 性别 电话  方法 call 使用他自己的电话打
class Phone:

    def __init__(self, color, style):
        self.color = color
        self.style = style


    def call(self):
        print("使用", self.color, self.style, "打电话")



class Person:


    def __init__(self, name, age, sex, phone):
        self.name = name
        self.age = age
        self.sex = sex
        self.phone = phone


    def call(self):
        self.phone.call()  # 使用自己的手机打电话
        print("我叫", self.name)




# 应用
phone = Phone("黑色", "华为p30")
person = Person("李四", 30, "男", phone)

person.call()

phone = Phone("白色", "Iphone XS")
person.phone = phone
person.call()
