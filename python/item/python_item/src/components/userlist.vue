<template>
  <div>
    <h2>用户管理中心</h2>
    <!-- 导航栏 -->
    <el-col :span="4">
      <el-menu id="nav">
        <el-menu-item index="1">
          <i class="el-icon-s-unfold"></i>
          <span>菜单管理</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-s-home"></i>
          <span>资源管理</span>
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-user-solid"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group id="usermanage">
            <el-menu-item index="3-1" @click="userShow(1)">
              <i class="el-icon-user"></i>
              <span>用户列表</span>
            </el-menu-item>
            <el-menu-item index="3-2" @click="queryShow">
              <i class="el-icon-search"></i>
              <span>用户查询</span>
            </el-menu-item>
            <el-menu-item index="3-3" @click="addShow">
              <i class="el-icon-zoom-in"></i>
              <span>添加用户</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="4">
          <i class="el-icon-more"></i>
          <span>其他管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <!-- 查询用户 -->
      <el-col :span="16" :offset="4" v-show="queryshow!=''" id="query">
        <h3 style="color:#78d">用户查询条件</h3>
        <el-form ref="from" label-width="80px" size="mini" :model="queryusers">
          <el-col :span="6" :offset="1">
            <el-form-item label="用户名：">
              <el-input placeholder="李四" v-model="queryusers.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="2">
            <el-form-item label="省份:">
              <el-input placeholder="**省" v-model="queryusers.province"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="2">
            <el-form-item label="城市:">
              <el-input placeholder="**市" v-model="queryusers.city"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="14" :offset="1">
            <el-form-item label="详细地址:">
              <el-input placeholder="**区**路**小区" v-model="queryusers.city"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6" :offset="2">
            <el-form-item label="邮编:">
              <el-input placeholder="331314" v-model="queryusers.zip"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24" :offset="1">
            <el-form-item label="出生日期:">
              <el-col :span="5">
                <el-date-picker
                  type="date"
                  placeholder="起始日期"
                  v-model="queryusers.startDay"
                  value-format="yyyy-MM-dd"
                  style="width:100%"
                ></el-date-picker>
              </el-col>
              <el-col :span="3">——</el-col>
              <el-col :span="5">
                <el-date-picker
                  type="date"
                  placeholder="结束时间"
                  v-model="queryusers.endDay"
                  value-format="yyyy-MM-dd"
                  style="width:100%"
                ></el-date-picker>
              </el-col>
              <el-col :span="5" :offset="3">
                <el-button type="primary" size="mini" @click="userShow(1)" round plai>查询</el-button>
                <el-button type="danger" size="mini" @click="Closequery" round plain>关闭查询</el-button>
              </el-col>
            </el-form-item>
          </el-col>
        </el-form>
      </el-col>

      <!-- 用户列表 -->
      <el-col :span="24" v-show="usershow!=''" id="mytable">
        <h3>用户列表</h3>
        <el-table :data="users" header-align="left">
          <el-table-column align="center" prop="id" label="ID" width="135"></el-table-column>
          <el-table-column align="center" prop="name" label="name" width="150"></el-table-column>
          <el-table-column align="center" prop="province" label="province" width="150"></el-table-column>
          <el-table-column align="center" prop="city" label="city" width="150"></el-table-column>
          <el-table-column align="center" prop="address" label="address" width="150"></el-table-column>
          <el-table-column align="center" prop="zip" label="zip" width="150"></el-table-column>
          <el-table-column align="center" prop="date" label="birthday" width="150"></el-table-column>
          <el-table-column align="center" label="operate" width="210">
            <template slot-scope="scope">
              <el-button type="info" @click="Revise(scope.$index,users)" plain>修改</el-button>
              <el-button type="danger" @click="Dltuser(scope.$index,users)" plain>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <br>
        <span>
          第
          <span v-text="nowpage"></span>页
        </span>
        <el-button size="mini" :disabled="nowpage==1">
          <i class="el-icon-d-arrow-left" @click="userShow(1)"></i>
        </el-button>
        <el-button size="mini" :disabled="nowpage==1" @click="prePage()">
          <i class="el-icon-arrow-left"></i>
        </el-button>
        <el-button size="mini" :disabled="nowpage == allpage">
          <i class="el-icon-arrow-right" @click="nextPage()"></i>
        </el-button>
        <el-button size="mini" :disabled="nowpage == allpage" @click="lastPage()">
          <i class="el-icon-d-arrow-right"></i>
        </el-button>
        <span>
          共
          <span v-text="allpage"></span>页
        </span>
      </el-col>

      <!-- 修改用户信息 -->
      <el-col :span="16" :offset="4" v-show="revisshow!=''" id="adduser">
        <i class="el-icon-circle-close" @click="Closerev"></i>
        <h3 style="color:#8A568F">修改用户信息</h3>
        <el-form ref="from" label-width="80px" size="small" :model="reviseuser">
          <el-col :span="6" :offset="1">
            <el-form-item label="用户名：">
              <el-input placeholder="张三" v-model="reviseuser.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="2">
            <el-form-item label="省份:">
              <el-input placeholder="**省" v-model="reviseuser.province"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="2">
            <el-form-item label="城市:">
              <el-input placeholder="**市" v-model="reviseuser.city"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="1">
            <el-form-item label="出生日期:">
              <el-col :span="24">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="reviseuser.date"
                  value-format="yyyy-MM-dd"
                  style="width:100%"
                ></el-date-picker>
              </el-col>
            </el-form-item>
          </el-col>

          <el-col :span="6" :offset="6">
            <el-form-item label="邮编:">
              <el-input placeholder="331314" v-model="reviseuser.zip"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="22" :offset="1">
            <el-form-item label="详细地址:">
              <el-input placeholder="**区**门**路**小区" v-model="reviseuser.address"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-button type="primary" size="small" @click="Keep" round plain>保 存</el-button>
          </el-col>
        </el-form>
      </el-col>

      <!-- 新增用户 -->
      <el-col :span="16" :offset="4" v-show="addshow!=''" id="adduser">
        <i class="el-icon-circle-close" @click="Closeadd"></i>
        <h3 style="color:#8A568F">添加新用户</h3>
        <el-form ref="from" label-width="80px" size="small" :model="adduser">
          <el-col :span="6" :offset="1">
            <el-form-item label="用户名：">
              <el-input placeholder="张三" v-model="adduser.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="2">
            <el-form-item label="省份:">
              <el-input placeholder="**省" v-model="adduser.province"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="2">
            <el-form-item label="城市:">
              <el-input placeholder="**市" v-model="adduser.city"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="1">
            <el-form-item label="出生日期:">
              <el-col :span="24">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="adduser.date"
                  value-format="yyyy-MM-dd"
                  style="width:100%"
                ></el-date-picker>
              </el-col>
            </el-form-item>
          </el-col>

          <el-col :span="6" :offset="6">
            <el-form-item label="邮编:">
              <el-input placeholder="331314" v-model="adduser.zip"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="22" :offset="1">
            <el-form-item label="详细地址:">
              <el-input placeholder="**区**门**路**小区" v-model="adduser.address"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-button type="warning" size="mini" @click="Clearadu" round plain>重 置</el-button>
            <el-button type="primary" size="mini" @click="AddUser" round plain>添 加</el-button>
          </el-col>
        </el-form>
      </el-col>
    </el-col>
  </div>
</template>

<script>
import qs from "querystring";
export default {
  data() {
    return {
      users: [],
      queryusers: {
        name: "",
        province: "",
        city: "",
        address: "",
        zip: "",
        startDay: "",
        endDay: "",
        pageNum: ""
      },
      adduser: {
        name: "",
        province: "",
        city: "",
        address: "",
        zip: "",
        date: ""
      },
      reviseuser: {},
      id: "",
      nowpage: 1,
      allpage: 1,
      usershow: "",
      addshow: "",
      queryshow: "",
      revisshow: ""
    };
  },
  methods: {
    // 查询用户列表
    userShow(curr_page) {
      this.usershow = 1;
      this.queryusers.pageNum = curr_page;
      this.$axios
        .post(
          "http://127.0.0.1:8080/cgi-bin/list.py",
          qs.stringify(this.queryusers)
        )
        .then(resp => {
          let data = resp.data.replace(/'/g, '"');
          let datas = JSON.parse(data);
          this.users = datas.list;
          this.nowpage = datas.pageNum;
          this.queryusers.allpage = datas.total_page
          this.allpage = datas.total_page;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 上一页
    prePage() {
      this.userShow(this.nowpage - 1);
    },
    // 下一页
    nextPage() {
      this.userShow(this.nowpage + 1);
    },
    // 末页
    lastPage(){
       this.userShow(this.allpage);
    },
    addShow() {
      this.addshow = 1;
      this.revisshow = ""
    },
    queryShow() {
      this.queryshow = 1;
    },
    // 重置添加新用户信息
    Clearadu() {
      let adu = this.adduser;
      adu.name = "";
      adu.province = "";
      adu.city = "";
      adu.address = "";
      adu.zip = "";
      adu.date = "";
    },
    Closequery() {
      this.queryshow = "";
    },
    // 添加用户
    AddUser() {
      let adu = this.adduser;
      if (
        adu.name == "" ||
        adu.province == "" ||
        adu.city == "" ||
        adu.address == "" ||
        adu.zip == "" ||
        adu.date == ""
      ) {
        alert("将信息填写完整");
      } else if (!/^[a-zA-Z\d_\u4e00-\u9fa5]{2,10}$/.test(adu.name)) {
        alert("用户名格式不正确");
      } else if (!/^\d{6}$/.test(adu.zip)) {
        alert("邮编格式错误，只能是六位数字");
      } else {
        this.$axios
          .post("http://127.0.0.1:8080/cgi-bin/insert.py", qs.stringify(adu))
          .then(resp => {
            if (resp.data == "fail") {
              alert("添加失败，用户名重复");
            } else if (resp.data == "success") {
              alert("添加成功");
              this.Clearadu();
              this.userShow(this.allpage);
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    Closeadd() {
      this.addshow = "";
    },
    // 修改用户信息按钮
    Revise(index, data) {
      this.revisshow = 1;
      this.Closeadd();
      this.reviseuser = data[index];
      this.reviseuser.id = data[index].id;
    },
    // 修改用户信息框隐藏
    Closerev() {
      this.revisshow = "";
    },
    // 提交修改的用户信息
    Keep() {
      let recu = this.reviseuser;
      console.log(recu);
      if (
        recu.name == "" ||
        recu.province == "" ||
        recu.city == "" ||
        recu.address == "" ||
        recu.zip == "" ||
        recu.date == ""
      ) {
        alert("将信息填写完整");
      } else if (!/^[a-zA-Z\d_\u4e00-\u9fa5]{2,10}$/.test(recu.name)) {
        alert("用户名格式不正确");
      } else if (!/^\d{6}$/.test(recu.zip)) {
        alert("邮编格式错误，只能是六位数字");
      } else {
        this.$axios
          .post(
            "http://127.0.0.1:8080/cgi-bin/update.py",
            qs.stringify(this.reviseuser)
          )
          .then(resp => {
            if (resp.data == "fail") {
              alert("修改失败，存在相同的用户名");
            } else if (resp.data == "success") {
              alert("修改成功");
              this.Closerev();
            } else {
              alert("服务器响应失败");
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    // 删除用户信息
    Dltuser(index, user) {
      console.log(index, user[index]);
      let userid = {
        id: user[index].id
      };
      let l = confirm("确定删除该信息吗？");
      if (l == true) {
        this.$axios
          .post("http://127.0.0.1:8080/cgi-bin/delete.py", qs.stringify(userid))
          .then(resp => {
            if (resp.data == "success") {
              alert("删除成功");
              this.userShow(1);
            } else {
              alert("删除失败");
            }
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        return;
      }
    }
  }
};
</script>

<style scoped>
#nav {
  background: url("../img/timgt.jpg");
}
#usermanage {
  background: url("../img/timga.jpg");
}
h2 {
  background-color: #e2d7d7;
  margin: 0;
  color: rgb(139, 122, 122);
  padding: 10px 0;
}
#mytable {
  margin: 10px 0;
}
#query {
  margin-top: 10px;
  border: 1px solid #acd6e2;
  border-radius: 20%;
  background: url("../img/timgl.jpg") repeat;
}
#adduser {
  border: 1px solid rgb(231, 222, 222);
  padding-bottom: 10px;
  margin-top: 20px;
  background: url("../img/timgl.jpg");
}
.el-icon-circle-close {
  position: relative;
  right: -400px;
  top: 10px;
}
.el-icon-circle-close:hover {
  cursor: pointer;
  color: red;
}
</style>
