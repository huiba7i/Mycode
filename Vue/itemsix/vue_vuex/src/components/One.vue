<template>
  <div>
    <h2>ONE</h2>
    <p>count: {{$store.state.count}}</p>
    <p>总价格: {{$store.getters.totalPrice}}</p>

    <button @click="updateCount">修改count的值</button>
  </div>
</template>

<script>
export default {
  methods: {
    updateCount: function() {
      // this.$store.state.count ++;
      // store.commit(type, payload)来调用mutations中的回调函数
      // this.$store.commit('changeCount', 2)

      // 传递多个参数
      this.$store.commit({
        type: "changeCount",
        num: 2,
        str: "change"
      });
    }
  }
};
</script>