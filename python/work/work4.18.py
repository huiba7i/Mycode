# -*- coding: GBK -*-
# work1
'''
a = int(input('输入第一个数'))
b = int(input('输入第二个数'))
print('和为：', (a+b), '差为：', (a-b), '积为：', (a*b), '商为：', (a/b))

#work2
import math
r = int(input('输入圆的半径'))
print('直径：', (r*2), '周长：', (r*2*math.pi) ,'面积：' , (r*r*math.pi))

#work3
num = input('输入一个四位数')
num1 = int(num[0])
num2 = int(num[1])
num3 = int(num[2])
num4 = int(num[3])
numli = []
numli.append((num1+9)%10)
numli.append((num2+9)%10)
numli.append((num3+9)%10)
numli.append((num4+9)%10)
numli[0], numli[1] ,numli[2] ,numli[3]= numli[2] ,numli[3] ,numli[0] ,numli[1]
print(type(numli[0]*1000+numli[1]*100+numli[2]*10+numli[3]))

#work4
n = float(input('输入一个浮点数'))
sum = int(n*100)
print(sum/100)
'''

num = input('四位数')
n = -1
a = []
for l in num :
    n += 1
    a.append(l)
    print(a[n])