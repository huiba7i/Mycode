<template>
  <div id="app">
    <Layout>
      <Header>
        <h1>WELCOME TO IView!</h1>
      </Header>
      <Layout>
        <Sider width="300">
          <Menu theme="light">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-menu" size="20"></Icon>
                系统管理
              </template>
              <MenuItem name="1-1">首页</MenuItem>
              <MenuItem name="1-2">重新登录</MenuItem>
              <MenuItem name="1-3">退出</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                  <Icon type="ios-menu" size="20"></Icon>
                用户管理
              </template>
              <MenuItem name="2-1">添加用户</MenuItem>
              <MenuItem name="2-2">查询用户</MenuItem>
            </Submenu>


          </Menu>
        </Sider>
        <Content>
            <Breadcrumb>
              <BreadcrumbItem to="/">系统管理</BreadcrumbItem>
              <BreadcrumbItem>首页</BreadcrumbItem>
          </Breadcrumb>
          <img src="./assets/logo.png">

          <router-link to="reg">注册</router-link>

          <Divider>Button按钮组件</Divider>
          <Button>默认按钮</Button>
          <Button type="primary">按钮</Button>
          <Button type="info">按钮</Button>
          <Button type="success">按钮</Button>
          <Button type="warning">按钮</Button>
          <Button type="error">按钮</Button>
          <Button type="error" shape="circle">圆角按钮</Button>
          <Button type="error" shape="circle" loading>加载中的按钮</Button>
      
          <Divider>字体图标</Divider>
          <Icon type="ios-alert" size="24"></Icon>
          <Icon type="md-cart" size="24"></Icon>
          <Divider>栅格系统</Divider>
          <router-view/>
          <Page :total="30" show-elevator></Page>
        </Content>
      </Layout>
      <Footer>
        <p>Copy right © 2019 aowin.com All rights reserved</p>
      </Footer>
    </Layout>
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
h1{
  color:#fff;
}
</style>
