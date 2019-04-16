<template>
  <div>
    <label>性别：</label>
    <input type="radio" name="sex" value="男" v-on:change="setSex">男
    <input type="radio" name="sex" value="女" v-on:change="setSex">女
  </div>
</template>

<script>
export default {
  data() {
    return {
      sex: "",
    };
  },
  methods: {
    //向父元素传递性别
    setSex: function(event) {
      this.sex = event.target.value;
      this.$emit("getSex", this.sex);
      console.log(`触发了子组件的方法`, this.sex, event.target.value);
    }
  }
};
</script>

<style scoped>
input {
  margin: 2px 0 0 5px;
}
</style>

