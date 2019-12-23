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
    </div>
    <div class="foot_play" @mouseenter="playerShow" @mouseleave="playerHide">
      <div ref="playdiv" class="playdiv">
        <div class="musicplay">
          <div class="showplay"></div>
          <div
            id="btn"
            class="onhoverbtn"
            @mousedown="downBtn"
            @mouseenter="hoverBtn"
            @mouseleave="onhoverBtn"
          ></div>
        </div>
        <audio id="audio" ref="audio" controls="controls">
          <source type="audio/mp3" />
        </audio>
      </div>
    </div>
    <el-backtop :right="195" :bottom="200" :visibility-height="1">
      <div class="toTop">
        <i class="el-icon-arrow-up"></i>
        <p>TOP</p>
      </div>
    </el-backtop>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      player: "",
      timeer: "",
      btntype: true
    };
  },
  mounted() {
    this.$refs.playdiv.style.bottom = "-56px";
    if (!this.player) {
    }
    // this.timeer =
    //   (() => {
    //     this.playerHide;
    //   },
    //   2000);
    console.log(this.$refs.playdiv.scrollTop);
  },
  updated() {},
  methods: {
    playerShow() {
      // this.player = 1;
      let that = this;
      let play = parseInt(this.$refs.playdiv.style.bottom);
      function showFun() {
        if (play >= 0) {
          that.$refs.playdiv.style.bottom = play + "px";
          clearInterval(Show);
        } else {
          play += 2;
          that.$refs.playdiv.style.bottom = play + "px";
        }
      }
      let Show = setInterval(showFun, 10);
    },
    playerHide() {
      // this.player = "";
      let that = this;
      if (this.btntype) {
        setTimeout(function() {
          let play = parseInt(that.$refs.playdiv.style.bottom);
          function showFun() {
            if (play <= -56) {
              that.$refs.playdiv.style.bottom = play + "px";
              clearInterval(Show);
            } else {
              play -= 2;
              that.$refs.playdiv.style.bottom = play + "px";
            }
          }
          let Show = setInterval(showFun, 7);
        }, 1000);
      }
    },
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
    },
    play() {
      this.$refs.audio.play();
    },
    downBtn() {
      if (this.btntype) {
        event.path[0].className = "hoverclickbtn";
        this.btntype = false;
        return;
      } else {
        event.path[0].className = "hoverbtn";
        this.btntype = true;
        return;
      }
    },
    hoverBtn() {
      if (this.btntype) {
        event.path[0].className = "hoverbtn";
      } else {
        event.path[0].className = "hoverclickbtn";
      }
    },
    onhoverBtn() {
      if (this.btntype) {
        event.path[0].className = "onhoverbtn";
      } else {
        event.path[0].className = "clickbtn";
      }
    }
  }
};
</script>

<style>
@import "assets/css/app.css";
</style>