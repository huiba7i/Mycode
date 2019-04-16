<template>
  <div>
    <el-form inline>
      <el-row>
        <el-col :span="10" :offset="7">
          <el-form-item label="用户:">
            <el-input
              prefix-icon="el-icon-search"
              placeholder="用户"
              v-model="user"
              clearable
              size="small"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10" :offset="7">
          <el-form-item label="密码：">
            <el-input
              type="password"
              prefix-icon="el-icon-warning"
              v-model="password"
              placeholder="密码"
              size="small"
              show-password
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-cascader :options="options" change-on-select></el-cascader>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      password: "",
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "HTMl",
          label: "HTMl",
          children: [
            {
              value: "options",
              label: "options",
              children:[
                {
                  value:"xuanxiangyi",
                  label:"选项一",
                },
                {
                  value:"xuanxianger",
                  label:"选项二",
                },
                {
                  value:"xuanxiangsan",
                  label:"选项三",
                }
              ],
            },
            {
              value:"animation",
              label:"animation",
              children:[
                {
                  value:"animationone",
                  label:"animationone",
                },
                {
                  value:"animationtwo",
                  label:"animationtwo",
                },
                {
                  value:"animationthree",
                  label:"animationthree",
                },
                {
                  value:"animationfour",
                  label:"animationfour",
                },
              ]
            },
            {
              value:"JS",
              label:"JS",
              children:[
                {
                  value:"Document",
                  label:"Document",
                },
                {
                  value:"Bom",
                  label:"Bom",
                },
                {
                  value:"Script",
                  label:"Script",
                }
              ]
            }
          ],
        },
        {
          value:"CSS",
          label:"CSS",
          children:[
            {
              value:"Style",
              label:"Style",
              children:[
                {
                  value:"Bg",
                  label:"Bg",
                },
                {
                  value:"Margin",
                  label:"Margin",
                }
              ]
            }, {
              value:"A",
              label:"A",
              children:[
                {
                  value:"P",
                  label:"P",
                },
                {
                  value:"H",
                  label:"H",
                }
              ]
            }

          ]
        }
      ]
    };
  }
};
</script>
