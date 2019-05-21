# work2.1

while True:
    try:
        F = input("需要显示的文件名文件名")
        name = "%s.txt" % F
        file = open(name, mode="r+", encoding="utf8")
        # print(file.readline())
        N = int(input("输入显示的行数内容"))
        if N <= 0:
            print("行数不能小于1")
        elif N >= len(file.readlines()) + 1:
            print("文件没有输入的行数")
        else:
            # for strline in file.readlines()[0:N]: !!!
            #     strline = strline.strip()         !!!
            #     print(strline)                    !!!
            num = 0
            file.seek(0)
            while num < N:
                print(file.readline().strip())
                num += 1
            break
    except ValueError:
        print("输入有误")
    except FileNotFoundError:
        print("不存在该文件")

# work2.2
num = 0
s = input("输入一个文件名")
name = "%s.txt" % s
while True:

    try:
        file = open(name, mode="r", encoding="utf8")
        if num != 0:
            stop = input("按任意键继续,0为终止")
            if stop == '0':
                break
            s = 0
            print(s, num)
            while s < num:
                file.readline()
                s += 1
        # for str in file.readlines()[24:25]:   !!!
        #     str = str.strip()                 !!!
        #     print(name, "第25行内容为：", str) !!!
        #     input("按任意键继续")              !!!
        n = 0
        while n < 25:
            print(file.readline().strip())
            n += 1

        num += 25
    except FileNotFoundError:
        print("不存在该文件")

# work2.3
# one
# while True:
#     one = input("输入第一个文件")
#     onel = "%s.txt" % one
#     onefile = open(onel, mode="r+", encoding="utf8")
#     A = []
#     for str in onefile.readlines():
#         str = str.strip()
#         A.append(str)
#     two = input("输入第二个文件")
#     twol = "%s.txt" % two
#     twofile = open(twol, mode="r+", encoding="utf8")
#     B = []
#     for str in twofile.readlines():
#         str = str.strip()
#         B.append(str)
#     lenth = len(A)
#     n = 0
#     num = 0
#     while n < lenth:
#         if A[n] != B[n]:
#             print("两个文件中第", n + 1, "行不相同")
#             num = n
#             break
#         n += 1
#     s = 0
#     strlen = len(A[num])
#     while s < strlen:
#         if A[num][s] != B[num][s]:
#             print("第一个不同处在第", s + 1, "列")
#             break
#         s += 1
#     break

# two
# while True:
#     try:
#         one = input("输入第一个文件")
#         onel = "%s.txt" % one
#         onefile = open(onel, mode="r+", encoding="utf8")
#         two = input("输入第二个文件")
#         twol = "%s.txt" % two
#         twofile = open(twol, mode="r+", encoding="utf8")
#
#         n = 1
#         s = 0
#         if onefile.readlines() != twofile.readlines():
#             onefile.seek(0)
#             twofile.seek(0)
#             while True:
#                 if onefile.readline() != twofile.readline():
                    # print("第%d行内容不一样" %n)
                    #当n行的内容不同时记录下n的值
                    # onefile.seek(0)
                    # twofile.seek(0)
                    # while s < n:
                        #使用变量保存文件中不同的内容
    #                     str1 = onefile.readline()
    #                     str2 = twofile.readline()
    #                     s += 1
    #                 m = 0
    #                 while True:
    #                     if str1[m] != str2[m]:
    #                         """当第n行的内容对比第m个字符不同时记录m的值"""
    #                         print("两个文件第一处不同的地方在%d行第%d列" % (n, m + 1))
    #                         break
    #                     m += 1
    #
    #                 break
    #             n += 1
    #         break
    #     else:
    #         print("文件%s和文件%s完全相同" % (one, two))
    #         break
    # except FileNotFoundError:
    #     print("不存在该文件,重新输入")

# three
while True:
    try:
        one = input("输入第一个文件")
        onel = "%s.txt" % one
        onefile = open(onel, mode="r+", encoding="utf8")
        two = input("输入第二个文件")
        twol = "%s.txt" % two
        twofile = open(twol, mode="r+", encoding="utf8")
        n = 1
        s = 0
        while True:
            reone = onefile.read(1)
            retwo = twofile.read(1)
            s += 1
            if reone == retwo:
                if not reone:
                    print("文件%s和文件%s完全相同" % (one, two))
                    break
                elif reone == "\n":
                    n += 1
                    s = 0
            else:
                print("两个文件第一处不同的地方在%d行第%d列" % (n, s))
                break

    except FileNotFoundError:
        print("不存在该文件,重新输入")