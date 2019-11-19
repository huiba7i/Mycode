<template>
  <div id="homepage">
    <!-- 首页轮播图 -->
    <el-row id="main_head">
      <el-col :span="20" :offset="2">
        <el-carousel trigger="click" @change="reviseBg">
          <el-carousel-item v-for="imgurl in imgUrl" :key="imgurl.url">
            <div class="main_head" :background="imgurl.bg">
              <img class="lbImg" :src="imgurl.url" alt />
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <img class="download" src="/static/img/20190705044859 (2).png" alt />
      <span @click="goDetails()">777</span>
    </el-row>
    <!-- 首页主内容 -->
    <el-row id="main_content">
      <div class="content_left">
        <div>
          <!-- 热门推荐 -->
          <div class="content_left_head">
            <img src="/static/img/rementuijian (1).png" alt />
            <h3>热门推荐</h3>
            <ul>
              <li v-for="hotContent in hot" :key="hotContent">{{hotContent}}</li>
            </ul>
            <span class="more">
              更多
              <i class="el-icon-right"></i>
            </span>
          </div>
          <div class="hot_main">
            <div class="hot_main_data" v-for="hotmain in hotMain" :key="hotmain.title">
              <img :src="hotmain.url" :title="hotmain.title" />
              <div class="quantity">
                <div class="paly_quantity">
                  <i class="el-icon-headset"></i>
                  <span>{{hotmain.quantity}}</span>
                  <i class="el-icon-video-play" @click="playMusic(0)"></i>
                </div>
              </div>
              <span class="diantai" v-show="hotmain.type">{{hotmain.type}}</span>
              <span class="hot_main_title">{{hotmain.title}}</span>
            </div>
          </div>
          <!-- 新碟上架 -->
          <div class="new">
            <div class="content_left_head">
              <img src="/static/img/rementuijian (1).png" alt />
              <h3>新碟上架</h3>
              <span class="more">
                更多
                <i class="el-icon-right"></i>
              </span>
            </div>
            <div class="new_main">
              <el-carousel trigger="click" :autoplay="false">
                <el-carousel-item v-for="newproduct in newProduct" :key="newproduct.index">
                  <div id="newproduct" v-for="n in newproduct">
                    <div class="newDj" v-for="data in n">
                      <img
                        class="newdimg"
                        :src="data.url"
                        @mouseenter="djPlayshow"
                        @mouseleave="djPlayhide"
                      />
                      <img class="side" src="/static/img/20190706132633.png" alt />
                      <p class="musicname">{{data.special}}</p>
                      <p class="musicname">{{data.author}}</p>
                      <i
                        class="el-icon-video-play"
                        ref="play"
                        @click="playMusic(1)"
                        @mouseenter="djPlayshow"
                        @mouseleave="djPlayhide"
                      ></i>
                    </div>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <!-- 榜单 -->
          <div class="listall">
            <div class="content_left_head">
              <img src="/static/img/rementuijian (1).png" alt />
              <h3>榜单</h3>
              <span class="more">
                更多
                <i class="el-icon-right"></i>
              </span>
            </div>
            <div class="list">
              <dl class="listclass" v-for="(list,key,index) in List" :key="list.index">
                <dt>
                  <div class="rise">
                    <img :src="`${listurl+(index+1)+'.PNG'}`" />
                    <b>{{key}}</b>
                    <i class="el-icon-video-play" @click="playMusic(2)"></i>
                    <i class="el-icon-folder-add"></i>
                  </div>
                </dt>
                <dd>
                  <ul>
                    <li
                      class="songrise"
                      @mouseenter="playShow"
                      @mouseleave="playHide"
                      v-for="(song,index) in list"
                    >
                      <span class="index">{{index+1}}</span>
                      <span class="song">{{song}}</span>
                      <div class="play" v-show="showplay">
                        <i class="el-icon-video-play" @click="playMusic(3)"></i>
                        <i class="el-icon-plus"></i>
                        <i class="el-icon-folder-add"></i>
                      </div>
                    </li>
                    <div class="all">查看全部></div>
                  </ul>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div class="content_right">
        <div class="login">
          <span>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</span>
          <el-button type="danger" size="small">用户登录</el-button>
        </div>
        <div class="singer">
          <div class="ruzhu">
            <span>入驻歌手</span>
            <span class="all">查看全部></span>
          </div>
          <div class="singer_details" v-for="singer in singerdata">
            <div>
              <img :src="singer.url" />
            </div>
            <div class="singer_data">
              <p>{{singer.name}}</p>
              <p>{{singer.type | singerType}}</p>
            </div>
          </div>
          <el-button type="info" plain>申请成为音乐人</el-button>
        </div>
        <div>
          <div class="anchor">
            <div class="hotanc">
              <span>热门主播</span>
            </div>
            <div class="anchor_data" v-for="anchor in anchordata">
              <div class="anchor_data">
                <div>
                  <img :src="anchor.url" />
                </div>
                <div class="suggest">
                  <p class="anchorname">
                    {{anchor.name}}
                    <img class="renzheng" src="/static/img/renzheng3-copy-copy.png" />
                  </p>
                  <p>{{anchor.type | sanchorType}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
// 修改过 "node_modules\_element-ui@2.10.1@element-ui\lib\theme-chalk\index.css" 该文件的数据
export default {
  data() {
    return {
      imgUrl: [],
      hot: [],
      hotMain: [],
      newProduct: [],
      List: [],
      listurl: "/static/img/",
      showplay: "",
      singerdata: [],
      anchordata: []
    };
  },

  filters: {
    // ellipsis(value) {
    //   if (!value) return "";
    //   if (value.length > 15) {
    //     return value.slice(0, 15) + "...";
    //   }
    //   return value;
    // },
    // ellipsisTWo(value) {
    //   if (!value) return "";
    //   if (value.length > 20) {
    //     return value.slice(0, 20) + "...";
    //   }
    //   return value;
    // },
    singerType(value) {
      if (!value) return "";
      if (value.length > 10) {
        return value.slice(0, 10) + "...";
      }
      return value;
    },
    sanchorType(value) {
      if (!value) return "";
      if (value.length > 14) {
        return value.slice(0, 14) + "...";
      }
      return value;
    }
  },

  // 获得首页滚动图图片地址
  beforeMount() {
    this.$axios
      .get(`/static/data/navImgUrl.json`)
      .then(resp => {
        this.imgUrl = resp.data;
      })
      .catch(error => {
        console.log(error);
      });
    // 热门推荐
    this.$axios
      .get(`/static/data/hot.json`)
      .then(resp => {
        this.hot = resp.data;
      })
      .catch(error => {
        console.log(error);
      });
    //   热门推荐详细内容
    this.$axios
      .get(`/static/data/mainimg.json`)
      .then(resp => {
        this.hotMain = resp.data;
      })
      .catch(error => {
        console.log(error);
      });
    //   新碟上架
    this.$axios
      .get(`/static/data/new_product.json`)
      .then(resp => {
        this.newProduct = resp.data;
      })
      .catch(error => {
        console.log(error);
      });
    //   榜单
    this.$axios
      .get(`/static/data/List.json`)
      .then(resp => {
        this.List = resp.data;
      })
      .catch(error => {
        console.log(error);
      });
    // 入驻歌手
    this.$axios
      .get(`/static/data/singer.json`)
      .then(resp => {
        this.singerdata = resp.data;
      })
      .catch(error => {
        console.log(error);
      });
    // 热门主播
    this.$axios
      .get(`/static/data/anchor.json`)
      .then(resp => {
        this.anchordata = resp.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  mounted() {},
  methods: {
    goDetails() {
      this.$router.push({ path: "/details", query: { info: "info" } });
    },
    // 改变轮播图周围背景
    reviseBg(event) {
      main_head.style.backgroundColor = this.imgUrl[event].bg;
    },
    playShow(event) {
      event.path[0].lastChild.style.display = "block";
      event.path[0].children[1].className = "hoversong";
    },
    playHide(event) {
      event.path[0].lastChild.style.display = "none";
      event.path[0].children[1].className = "song";
    },
    djPlayshow(event) {
      event.path[1].lastChild.style.display = "block";
    },
    djPlayhide() {
      event.path[1].lastChild.style.display = "none";
    },
    playMusic(index) {
      switch (index) {
        case 0:
          document.querySelector("source").src =
            "/static/musics/许嵩 - 拆东墙.mp3";
          break;
        case 1:
          document.querySelector("source").src =
            "/static/musics/毛不易 - 春边.mp3";
          break;
        case 2:
          document.querySelector("source").src =
            "/static/musics/朴树 - 平凡之路 (Live版).mp3";
          break;
        default:
          document.querySelector("source").src =
            "/static/musics/赵雷 - 理想.mp3";
          break;
      }
      document.querySelector("#audio").load();
      document.querySelector("#audio").play();
    }
  }
};
</script>

<style>
@import "../../src/assets/css/homepage1.css";
</style>
