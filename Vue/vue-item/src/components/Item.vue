<template>
  <el-row>
    <el-col :span="3">
      <el-menu background-color="#f4f6f8" text-color="#69728F">
        <el-menu-item index="1" @click="getData">每日推荐</el-menu-item>
        <el-menu-item index="2">主题日报</el-menu-item>
      </el-menu>
    </el-col>

    <el-col :span="6">
      <el-row v-show="news!=''">
        <el-col :span="24">
          <p prop="date">{{news.date}}</p>
        </el-col>
      </el-row>
      <el-row class="left_nav" v-for="itemnav in news.stories" :key="itemnav.id">
        <el-menu>
          <el-menu-item @click="getMain(itemnav.id)">
            <el-col :span="7">
              <img :src="'./static/imgs/'+itemnav.images">
            </el-col>
            <el-col :span="17">
              <span>{{itemnav.title}}</span>
            </el-col>
          </el-menu-item>
        </el-menu>
      </el-row>
    </el-col>

    <el-col :span="15" v-show="mians!=''">
      <!-- 正文title -->
      <div class="titlediv">
        <img :src="'./static/imgs/'+mians.images" class="titleimg">
        <h2 v-html="mians.title" class="titletext"></h2>
      </div>

      <!-- 1,2正文内容 -->
      <div v-show="mians.question_title_src!=''">
        <div class="miancont">
          <!-- 中划线解决方法       ⬇   -->
          <h2 v-text="mians['question-title']"></h2>
          <img :src="'./static/imgs/'+mians.question_title_src">
          <span v-html="mians.author"></span>
          <span class="vxwen" v-text="mians.bio"></span>
        </div>
        <div v-html="mians.content" class="miancont"></div>
        <div class="miancont">
          <hr>
        </div>
        <div v-for="schema in mians.schema" class="miancont miancont_data">
          <div v-html="schema"></div>
        </div>
      </div>
      
      <!-- 3正文内容 -->
      <div v-for="mianscont in mians.questions" class="miancont">
        <div>
          <h2 v-text="mianscont['question-title']"></h2>
          <img :src="'./static/imgs/'+mianscont['question-title-src']" alt>
          <span v-text="mianscont.author"></span>,
          <span v-text="mianscont.bio" class="cstr"></span>
          <p v-html="mianscont.content"></p>
          <p v-show="mianscont['a']!=''" class="rigthstr">
            <a :href="mianscont['view-more']" v-text="mianscont['a']"></a>
          </p>
        </div>
      </div>

      <!-- 评论 -->
      <div class="miancont">
        <p @click="getDis(mians.id)" class="dis">查看知乎评论</p>
        <div v-show="miansDis!=''">
          <p>评论（{{dislength}}）</p>
          <div v-for="(miansDis,index) in miansDis" :key="miansDis.id" class="disP">
            <p>
              <img :src="'./static/imgs/'+miansDis.avatar" class="avatars">
              {{miansDis.author}}
            </p>
            <p class="cstr">{{times[index]}}天前</p>
            <p v-text="miansDis.content"></p>
            <hr class="cut">
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      news: [],
      mians: [],
      miansDis: [],
      dislength: ""
    };
  },
  methods: {
    getData() {
      this.$axios
        .get("../../static/data/news.json")
        .then(resp => {
          this.news = resp.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getMain(id) {
      this.$axios
        .get("/static/data/" + id + "-news.json")
        .then(resp => {
          this.mians = resp.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getDis(id) {
      this.$axios
        .get("/static/data/" + id + "-comment.json")
        .then(resp => {
          this.miansDis = resp.data.comments;
          this.dislength = resp.data.comments.length;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    times: function() {
      let t = [];
      for (let i = 0; i < this.dislength; i++) {
        t[i] = parseInt(this.miansDis[i].time / 1000 / 60 / 60 / 24);
      }
      return t;
    }
  },
  //事件监听
  watch: {
    mians: {
      handler(newVal, oldVal) {
        this.miansDis = [];
      },
    },
  }
};
</script>

<style scoped>
body {
  background-color: #f4f6f8;
}
.nav {
  background-color: #f4f6f8;
}
.is-active {
  border-right: 2px solid rgb(33, 182, 228);
}
main {
  padding: 0 20px;
}
.left_nav img {
  width: 85px;
  margin: 9px 0;
}
.left_nav span {
  font-size: 13px;
  position: relative;
  top: 42px;
  left: 10px;
}
.left_nav {
  text-align: left;
}
.left_nav .el-menu-item {
  white-space: normal;
  line-height: 14px;
}
.left_nav li {
  height: 103px;
}
.miancont {
  padding: 0 40px;
  text-align: left;
}
.vxwen {
  color: #cccccc;
}
.miancont_data {
  line-height: 25px;
  margin: 20px 0;
}
.titleimg {
  width: 70%;
  height: 400px;
}
.titlediv {
  position: relative;
  color: #ffffff;
}
.titletext {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%);
}
.dis {
  background-color: #cccccc;
  cursor: pointer;
  text-align: center;
  line-height: 25px;
}
.cut {
  border: 1px dashed #cccccc;
}
.disP p {
  font-size: 14px;
  margin: 7px 0;
}
.avatars {
  width: 3%;
}
.cstr {
  color: #cccccc;
}
.rigthstr {
  text-align: right;
}
.rigthstr a{
  text-decoration: none;
  color: rgb(45, 173, 233);
}
</style>
