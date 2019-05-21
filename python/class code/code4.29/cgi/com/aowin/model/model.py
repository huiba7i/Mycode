"""
    定义一系列的类 类用来封装和数据库表对应的数据
    一个类 对应一张表 类名和表名写一致 类名首字母大写
    类中定义对象属性 和表中的列相同

"""
class Stduent:
    def __init__(self, stuid, stuname, sex, birthday, height):
        self.stuid = stuid
        self.stuname = stuname
        self.sex = sex
        self.birthday = birthday
        self.height = height


    def __str__(self):
        return "{'stuid': %d,'stuname': %s, 'sex': %s, 'birthday': %s," \
               "'height': %3.2f}" % (self.stuid, self.stuname, self.sex,
                                     self.birthday, self.height)



class Course:
    def __init__(self, couid, couname):
        self.couid = couid
        self.couname = couname
