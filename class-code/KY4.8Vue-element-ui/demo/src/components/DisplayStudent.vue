<template>
  <div>
    <el-table :data="students" border @select="test">
      <el-table-column type="selection"></el-table-column>
      <!-- prop对应 data中的属性名称, label对应表格的列名 -->
      <el-table-column prop="stuid" label="学号" sortable></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄" sortable></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
    </el-table>
    <el-pagination background current-page="5" layout="prev,pager,next,jumper" :page-count="16" @current-change="goPage">

    </el-pagination>
  </div>
</template>

<script>
export default {
  data(){
    return {
      students: [
        {stuid: 1001, name: '张三', age: 10, sex: '男'},
        {stuid: 1002, name: '李四', age: 15, sex: '女'},
        {stuid: 1003, name: '王五', age: 18, sex: '男'},
        {stuid: 1004, name: '赵六', age: 16, sex: '男'},
      ]
    }
  },
  methods: {
    // 手动勾选checkbox时触发
    // 参数1 selection(数组):所有选中行的数据, 参数2 row(对象):当前勾选的那一行的数据
    test(selection, row){
      console.log(selection, row);
    },
    goPage(page){
      console.log("到第",page, '页');
    }
  }
}
</script>