<template>
  <div id="app">
    <!-- 导航栏 -->
    <el-row id="nav">
      <el-col class="nav" :span="13" :offset="3">
        <img height="30px" src="/static/img/wangyiyun.png" alt />
        <span class="wyy">网易云音乐</span>
        <ul class="nav_class">
          <li @click="selectNav" id="elect">发现音乐</li>
          <li @click="selectNav">我的音乐</li>
          <li @click="selectNav">朋友</li>
          <li @click="selectNav">商城</li>
          <li @click="selectNav">音乐人</li>
          <li @click="selectNav">下载客户端</li>
        </ul>
        <div class="hot">HOT</div>
      </el-col>
      <el-col class="nav_r" :span="6">
        <input type="seach" class="seach" placeholder="音乐/视频/电台/用户" />
        <span class="creat">创作者中心</span>
        <el-dropdown size="small" placement="bottom">
          <span class="land">
            登陆
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu class="land_drop">
            <el-dropdown-item>
              <img src="/static/img/dianhua.png" alt />手机号登陆
            </el-dropdown-item>
            <el-dropdown-item>
              <img src="/static/img/weixin.png" alt />微信登陆
            </el-dropdown-item>
            <el-dropdown-item>
              <img src="/static/img/qq.png" alt />QQ号登陆
            </el-dropdown-item>
            <el-dropdown-item>
              <img src="/static/img/weibo.png" alt />新浪微博登陆
            </el-dropdown-item>
            <el-dropdown-item>
              <img src="/static/img/yi (1).png" alt />网易邮箱账号登陆
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <!-- 推荐选项 -->
    <el-row class="recommend_bg">
      <el-col :span="10" :offset="6">
        <ul id="recommend" ref="recommend">
          <li id="rec_elect" @click="select">推荐</li>
          <li @click="select">排行榜</li>
          <li @click="select">歌单</li>
          <li @click="select">主播电台</li>
          <li @click="select">歌手</li>
          <li @click="select">新碟上架</li>
        </ul>
      </el-col>
    </el-row>
    <router-view />
    <div class="footer">
      <div class="copr">
        <div class="tiaokuan">
          <ul>
            <li>服务条款</li>
            <span>|</span>
            <li>隐私政策</li>
            <span>|</span>
            <li>版权投诉指引</li>
            <span>|</span>
            <li>意见反馈</li>
          </ul>
          <p>网易公司版权所有©1997-2019杭州乐读科技有限公司运营：浙网文[2018]3506-263号</p>
          <p>违法和不良信息举报电话：0571-89853516 举报邮箱：ncm5990@163.com</p>
        </div>
        <div>
          <ul class="jiaru">
            <li>
              <img src="/static/img/yonghurenzhengjianquan.png" alt />
              <p>用户认证</p>
            </li>
            <li>
              <img src="/static/img/yinleren_.png" alt />
              <p>独立音乐人</p>
            </li>
            <li>
              <img src="/static/img/zanshang.png" alt />
              <p>赞赏</p>
            </li>
            <li>
              <img src="/static/img/shipin (1).png" alt />
              <p>视频奖励</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="footerplay" @mouseenter="playerShow" @mouseleave="playerHide"></div>
    </div>
    <div class="player" @mouseenter="playerShow" @mouseleave="playerHide">
      <audio src></audio>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      timeer: ""
    };
  },
  methods: {
    playerShow() {},
    playerHide() {},
    selectNav(event) {
      for (let i = 0; i < event.path[1].childNodes.length; i += 2) {
        event.path[1].childNodes[i].id = "";
      }
      event.path[0].id = `elect`;
    },
    select(event) {
      for (let i = 0; i < event.path[1].childNodes.length; i += 2) {
        event.path[1].childNodes[i].id = "";
      }
      event.path[0].id = `rec_elect`;
    }
  },
  mounted() {
    // this.timeer =
    //   (() => {
    //     this.playerHide;
    //   },
    //   2000);
  },
  beforeMount() {}
};
</script>

<style>
body {
  margin: 0;
  background-color: #F5F5F5
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 1380px;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
/* 导航栏样式 */
#nav {
  height: 55px;
  background: #242424;
  color: white;
}
#nav,
#recommend,
.nav,
.nav_class {
  display: flex;
  align-items: center;
}
.wyy {
  margin: 0 15px 0 10px;
  font-size: 1.2em;
  letter-spacing: 3px;
}
.wyy:hover {
  cursor: pointer;
}
.nav_class li {
  color: #cccccc;
  padding: 18px;
}
.nav_class li:hover {
  color: white;
  background: #000000;
}
.nav_class li:hover {
  cursor: pointer;
}
/* 导航栏选项选中状态样式 */
#elect {
  color: white;
  background: #000000;
  background-image: url("/static/img/zelvxuanzefeiyongdaosanjiaoxingfandui (1).png");
  background-repeat: no-repeat;
  background-size: 13px;
  background-position: 50% 48px;
}
#nav .hot {
  width: 30px;
  background: red;
  border-radius: 6px;
  font-size: 8px;
  position: relative;
  top: -10px;
  left: -5px;
}
.seach {
  width: 160px;
  height: 32px;
  text-indent: 2.3em;
  border-radius: 15px;
  border: 0;
  background-image: url("/static/img/soushuo.png");
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: 6px 6px;
}
.nav_r {
  font-size: 13px;
  color: #cccccc;
}
.creat {
  padding: 5px;
  border: 1px solid #cccccc;
  border-radius: 15px;
  margin: 0 15px 0 10px;
}
.creat:hover {
  border: 1px solid white;
  color: white;
  cursor: pointer;
}
/* 登陆下拉框 */
.el-dropdown {
  font-size: 13px;
}
.land:hover {
  cursor: pointer;
  text-decoration: underline;
}
.land_drop {
  background: #242424;
  border: 0;
}
.el-dropdown-menu__item:not(.is-disabled) {
  border-bottom: 1px solid #000000;
  border-radius: 8px;
  line-height: 33px;
}
.el-dropdown-menu__item:not(.is-disabled):hover {
  background: #383838;
  color: white;
}
.land_drop img {
  width: 20px;
  position: relative;
  left: -5px;
  top: 6px;
}
/* 推荐选项样式 */
.recommend_bg {
  background: #c20c0c;
}
#recommend {
  height: 30px;
  color: white;
  font-size: 12px;
}
#recommend li {
  padding: 3px 10px;
  border-radius: 9px;
  margin: 20px;
}
#recommend li:hover {
  background: #9b0909;
  cursor: pointer;
}
/* 推荐选中样式 */
#rec_elect {
  background: #9b0909;
  cursor: pointer;
}

/* 底部 */
.footer {
  height: 148px;
  background: #f2f2f2;
}
.copr {
  width: 990px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-flow: row nowrap;
}
.tiaokuan {
  width: 500px;
  font-size: 13px;
  text-align: left;
}
.tiaokuan ul {
  width: 300px;
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  color: #817e7e;
  position: relative;
  top: 10px;
}
.tiaokuan ul li:hover {
  cursor: pointer;
  text-decoration: underline;
}
.tiaokuan p {
  margin: 10px 0;
  position: relative;
  top: 10px;
}
.jiaru {
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  position: relative;
  top: 20px;
  left: 140px;
}
.jiaru li {
  margin-right: 30px;
}
.jiaru img:hover {
  cursor: pointer;
}
.jiaru p {
  margin: 0;
  font-size: 12px;
  color: #acaaaa;
}
.footerplay {
  height: 3px;
  box-shadow: 0 -4px 7px #646464;
  border-bottom: 2px solid black;
}
.player {
  height: 50px;
}
</style>
