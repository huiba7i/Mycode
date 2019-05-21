class Page:
    def __init__(self):
        self.pageNum = 1 # 当前页页码
        self.pageTotal = None  # 总页码
        self.countTotal = None  # 总条数
        self.pageSize = 5  # 每页显示5条 记录
        self.data = None  # 放查询的数据

