# -*- coding: GBK -*-
# work1
'''
a = int(input('�����һ����'))
b = int(input('����ڶ�����'))
print('��Ϊ��', (a+b), '��Ϊ��', (a-b), '��Ϊ��', (a*b), '��Ϊ��', (a/b))

#work2
import math
r = int(input('����Բ�İ뾶'))
print('ֱ����', (r*2), '�ܳ���', (r*2*math.pi) ,'�����' , (r*r*math.pi))

#work3
num = input('����һ����λ��')
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
n = float(input('����һ��������'))
sum = int(n*100)
print(sum/100)
'''

num = input('��λ��')
n = -1
a = []
for l in num :
    n += 1
    a.append(l)
    print(a[n])