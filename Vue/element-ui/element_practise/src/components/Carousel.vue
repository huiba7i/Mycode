<template>
  <div>
    <!-- 走马灯 -->
    <el-carousel indicator-position="outside" :interval="5500">
      <el-carousel-item v-for="item in imgUrl" :key="item.id">
        <img :src="item.url">
      </el-carousel-item>
    </el-carousel>

    <!-- slider滑块 -->
    <el-slider v-model="value" show-input></el-slider>
    <el-slider v-model="value" :show-tooltip="false"></el-slider>
    <el-slider v-model="value" :step="5"></el-slider>
    <el-slider v-model="value" vertical height="200px"></el-slider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: [
        { id: 0, url: require("../../src/img/work1.jpg") },
        { id: 1, url: require("../../src/img/work2.jpg") },
        { id: 2, url: require("../../src/img/work3.jpg") },
        { id: 3, url: require("../../src/img/work4.jpg") }
      ],
      value: 0
    };
  }
};
</script>

<style scoped>
</style>
