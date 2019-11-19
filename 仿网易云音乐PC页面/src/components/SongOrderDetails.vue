<template>
  <div id="details"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    let that = this;
    console.log(this.$route.query.info);
  },
  methods: {}
};
</script>

<style scoped>
#details {
  width: 980px;
  min-height: 700px;
  height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
}
</style>