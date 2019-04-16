<template>
  <div>
    <label>兴趣：</label>
    <input type="checkbox" v-model="likes" value="学习 " v-on:change="setLike">学习
    <input type="checkbox" v-model="likes" value="吃饭 " v-on:change="setLike">吃饭
    <input type="checkbox" v-model="likes" value="睡觉 " v-on:change="setLike">睡觉
    <input type="checkbox" v-model="likes" value="游戏 " v-on:change="setLike">游戏
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: [],
    };
  },
  methods: {
    setLike: function() {
      // if (event.target.checked == true) {
        // this.likes = event.target.value;
        this.$emit("getLike", this.likes);
      // }
    }
  }
};
</script>
<style scoped>
input {
  margin: 2px 0 0 5px;
}
</style>