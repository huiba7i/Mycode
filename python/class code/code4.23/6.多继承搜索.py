class A:
    # def test(self):
    #     print("in A")
    pass
class B:
    # def test(self):
    #     print("in B")
    pass

class C:
    def test(self):
        print("in C")

class D(A, B):
    # def test(self):
    #     print("in D")
    pass

class E(B, C):
    # def test(self):
    #     print("in E")
    pass

class F(D,E):
    pass

f = F()
f.test()
