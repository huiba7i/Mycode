a = open("1.txt", encoding="utf-8")
b = open("2.txt", encoding="utf-8")
row = 1 # 定义行
cel = 0 # 定义列
while True:
    an = a.read(1)
    bn = b.read(1)
    cel += 1
    if an == bn:
        if not an:
            print("两个文件完全相同")
            break
        elif an == "\n":
            row += 1
            cel = 0
    else:
        print("第", row, "行", "第", cel, "列数据不一致")
        break
