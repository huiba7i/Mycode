"""
    定义一系列的类 类用来封装和数据库表对应的数据
    一个类 对应一张表 类名和表名写一致 类名首字母大写
    类中定义对象属性 和表中的列相同
"""
#login表对应的类
class Login:
    def __init__(self, id, username, userpwd, usertel, usersex):
        self.id = id
        self.username = username
        self.userpwd = userpwd
        self.usertel = usertel
        self.usersex = usersex


    def __str__(self):
        return "{'id':%d,'username':%s,'userpwd':%s,'usertel':%d,'usersex':%s}" \
            % (self.id, self.username, self.userpwd, self.usertel, self.usersex)

class User:
    def __init__(self ,id , name, province, city, address, zip, date):
        self.id = id
        self.name = name
        self.province = province
        self.city = city
        self.address = address
        self.zip = zip
        self.date = date


    def __str__(self):
        return "{'id':%d, 'name':%s, 'province':%s, 'city':%s, 'address':%s ,'zip':%d, 'date':%s}" \
            % (self.id, self.name, self.province, self.city, self.address, self.zip, self.date)

class Coure:
    def __init__(self, couid, couname):
        self.couid = couid
        self.couname = couname