<template>
  <div id="app">
    <el-container>
      <el-header id="header">
        <h1>ELEMENT</h1>
      </el-header>
      <el-container>
        <el-aside class="aside">
          <ul>
            <li><a href="">安装</a></li>
            <li><a href="">Layout布局</a></li>
          </ul>
        </el-aside>
        <el-main>
          <img src="./assets/logo.png">
          <hr>
          <input type="button" value="Button按钮HTML">
          <el-button>Button按钮</el-button>
          <el-button type="primary">Button按钮</el-button>
          <el-button type="info">Button按钮</el-button>
          <el-button type="warning" plain>Button按钮</el-button>
          <el-button type="danger" plain>Button按钮</el-button>
          <i class="el-icon-info"></i>
          <i class="el-icon-star-on"></i>
          <el-button type="primary" icon="el-icon-search" plain>搜索</el-button>
          <router-link to="log">登录</router-link>
          <router-link to="reg">注册</router-link>
          <router-link to="stuList">查看所有学生信息</router-link>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
#header{
  background-color: orange;
}
aside{
  background-color: #ccc;

}
i{
  /* color: red; */
  font-size: 20px;
}
</style>
