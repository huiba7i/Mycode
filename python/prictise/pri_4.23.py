class Ding:
    sex = "男"
    lick = "扣脚"
    mark = "菜的扣脚"

    def Action(self):
        print("天天睡觉")
        return self.mark


d = Ding()
print(d.sex, d.lick)
d.Action()
print(d.Action())


class Phone:

    def __init__(self, color, model):
        self.color = color
        self.model = model

    def call(self):
        print(self.color, self.model)


class Person:

    def __init__(self, name, age, sex, phoneNum):
        self.name = name
        self.age = age
        self.sex = sex
        self.phoneNum = phoneNum

    def call(self):
        print(self.name, )


phoneOne = Phone("white", "oppo")
phoneOne.call()
Person = Person("ding", 20, "男", 9527)
Person.call()


class Ding:

    def __init__(self, age, mark):
        self.age = age
        self.mark = mark

    def study(self):
        print("study")


class DingTwo(Ding):
    pass


DingTwo = DingTwo(20, "菜")
print(DingTwo.age, DingTwo.mark)


class DingThree(Ding):

    def __init__(self, mark, age, sex):
        self.age = age
        self.sex = sex
        Ding.__init__(self, mark, age)
    # def study(self):
    #     print("new study")


DingThree = DingThree("渣渣", 20, "男")

print(DingThree.mark, DingThree.age, DingThree.sex)
DingThree.study()
