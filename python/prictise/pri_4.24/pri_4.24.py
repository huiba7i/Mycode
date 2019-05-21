name = "老年丁"
age = 77
score = 59.5

a = "他的名字叫%s,他今年%d岁了，他考了%f分，差一点就及格了" % (name, age, score)
print(a)

a = "他的名字叫%s" % name
print(a)

file = open("1.txt", encoding="utf8")
print(file.read(20))
file = open("1.txt", encoding="utf8")
while True:
    n = file.read(1)
    if n:
        print(n)
    else:
        break