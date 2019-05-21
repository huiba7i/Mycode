class Account:
    def __init__(self, card_code, name, password):
        """
        银行账户类
        :param card_code:卡号
        :param name:开户人
        :param password:密码
        """
        self.card_code = card_code
        self.name = name
        self.password = password
        self.money = 0.0

    def in_money(self, money):
        """存钱"""
        self.money += money
        return "存钱成功，账户余额:%.2f" % self.money

    def out_money(self, money):
        """取钱"""
        if self.money - money < 0:
            return "账户余额不足"
        else:
            self.money -= money
            return "取钱成功，账户余额:%.2f" % self.money


class Bank:
    def __init__(self):
        self.accounts = []  # 定义银行的所有账户

    def find_account(self, card_code):
        """根据银行卡号查找账户"""
        for account in self.accounts:
            if card_code == account.card_code:
                return account
        return None




# 应用开发
bank = Bank()
while True:
    result = input("请选择：1.开户 2.存钱 3.取钱 4.查询 5.退出")
    if result == "1":
        card_code = input("请输入卡号：\n")
        password = input("请输入密码：\n")
        name = input("请输入开户人姓名：\n")
        account = Account(card_code, name, password)
        bank.accounts.append(account)
        print("恭喜您开户成功")
    elif result == "2":
        card_code = input("请输入卡号：\n")
        account = bank.find_account(card_code)
        if account:
            money = input("请输入存钱金额：\n")
            r = account.in_money(float(money))
            print(r)
        else:
            print("输入的卡号不存在")
    elif result == "3":
        card_code = input("请输入卡号：\n")
        account = bank.find_account(card_code)
        if account:
            password = input("请输入密码:\n")
            if password != account.password:
                print("密码不正确")
            else:
                money = input("请输入取钱金额：\n")
                r = account.out_money(float(money))
                print(r)
        else:
            print("输入的卡号不存在")
    elif result == "4":
        card_code = input("请输入卡号：\n")
        account = bank.find_account(card_code)
        if account:
            password = input("请输入密码:\n")
            if password != account.password:
                print("密码不正确")
            else:
                print(account.card_code, account.name, account.password, account.money)
        else:
            print("输入的卡号不存在")
    elif result == "5":
        break

