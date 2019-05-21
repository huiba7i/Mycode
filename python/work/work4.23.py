class Account:
    """数据"""

    def __init__(self, card, password, name):
        self.card = card
        self.password = password
        self.name = name
        self.money = 0.0

    """存款"""

    def in_money(self, money):
        self.money += money
        return "余额", self.money

    """取钱"""

    def out_money(self, money):
        num = self.money
        num -= money
        if num >= 0:
            self.money = num
            return "余额", self.money
        else:
            return "余额不足", self.money


class Bank:
    def __init__(self):
        self.list = []

    """添加用户"""

    def add_account(self):
        try:
            card = int(input("卡号"))
            password = input("密码")
            name = input("姓名")
            account = Account(card, password, name)
            self.list.append(account)
            print("开户成功")
        except ValueError:
            print("输入数字")

    """销户"""

    def remove_account(self, account):
        if account.money > 0:
            print(account.money)
            return "余额不为零，不能销户"
        else:
            self.list.remove(account)
            return "已销户"

    """账号密码查询"""

    def select(self, card, password):
        for acount in self.list:
            if card == acount.card and password == acount.password:
                return acount
        return None

    """账号查询"""

    def slct(self, card):
        for acount in self.list:
            if card == acount.card:
                return acount
        return None


bank = Bank()
while True:
    result = input("请选择：1.开户 2.存钱 3.取钱 4.查询 5.销户 6.退出")
    if result == "1":
        bank.add_account()

    elif result == "2":
        try:
            card = int(input("输入卡号"))
            account = bank.slct(card)

            if account:
                try:
                    money = int(input("输入金额"))
                    print(account.in_money(float(money)))
                except ValueError:
                    print("输入正确数字")
            else:
                print("卡号不存在")
        except ValueError:
            print("输入正确卡号")

    elif result == "3":
        try:
            card = int(input("输入卡号"))
            password = input("输入密码")
            account = bank.select(card, password)
            if account:
                try:
                    money = int(input("输入金额"))
                    print(account.out_money(float(money)))
                except ValueError:
                    print("输入正确数字")
            else:
                print("账号或密码错误")
        except ValueError:
            print("输入正确卡号")

    elif result == "4":
        try:
            card = int(input("输入账号"))
            account = bank.slct(card)
            if account:
                password = input("输入密码")
                if password == account.password:
                    print(account.name, account.card, account.password, account.money)
                else:
                    print("密码错误")
            else:
                print("卡号不存在")

        except ValueError:
            print("输入正确卡号")

    elif result == "5":
        try:
            card = int(input("输入账号"))
            account = bank.slct(card)
            if account:
                password = input("输入密码")
                if password == account.password:
                    print(bank.remove_account(account))
                else:
                    print("密码错误")
            else:
                print("账户不存在")
        except ValueError:
            print("输入正确卡号")

    elif result == "6":
        break

    else:
        print("输入有误")
