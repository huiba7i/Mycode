<template>
  <div>
    <el-table :data="userList.dataList" v-model="userList" border>
      <el-table-column prop="address" label="address"></el-table-column>
      <el-table-column prop="city" label="城市"></el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="zip" label="zip"></el-table-column>
    </el-table>
    <el-pagination
      :total="userList.total"
      :current-page="userList.currentPage"
      :page-size="userList.pageSize"
      @current-change="getText"
      layout="prev,pager,next,jumper"
    ></el-pagination>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      userList: [] //自定义数据列表
    };
  },
  created() {
    this.$axios //请求后端数据
      .get("/sys/user/page")
      .then(resp => {
        console.log(resp.data.currentPage);
        this.userList = resp.data; //把请求的数据放入列表
      })
      .catch(error => {
        console.log(error);
      });
  },
  //当改变页面的时候重新请求数据
  methods: {
    getText(seletion) {
      this.$axios //请求当前页面的所有数据
        .get(`/sys/user/page?currentPage=+${seletion}`)
        .then(resp => {
          this.userList = resp.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
</style>
