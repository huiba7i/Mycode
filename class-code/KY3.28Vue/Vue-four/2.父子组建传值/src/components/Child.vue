<template>
  <div>
   <h3>Header in Child</h3> 
   <!-- 不能直接引用父组件中的数据 -->
   <!-- <p>{{message}}</p> -->
    <!-- 通过props接收父组件传递过来的数据 -->
    <p>{{pMsg}} -- {{pCount}}</p>

    <button @click="updateData">修改从父组件传递过来的数据</button>
  </div>
</template>

<script>
export default{
  // props中的名称与父组件中v-bind绑定的属性名称相同
  props: ['pMsg','pCount'], // props中的数据是只读的,不可修改
  methods: {
    updateData: function(){
      console.log(this.pCount);
      // this.pCount ++; // 不能修改
      // this.$emit('notice'); // 触发父组件定义的事件
      this.$emit('notice', 2); // 触发父组件定义的事件,传递参数1给父组件的事件处理函数
    }
  },
  beforeCreate() {
    console.log('Child初始化之前========');
    console.log('Child data: ', this.$data);
  },
  created() {
    console.log('Child初始化之后========');
    console.log('Child data: ', this.$data);
  },
  beforeMount() {
    console.log('Child挂载之前========');
    console.log("Child vm:",this);
  },
  mounted() {
    console.log('Child挂载之后========');
    console.log("Child vm:",this);
  },
  beforeUpdate() {
    console.log('Child更新数据之前========');
    console.log("Child vm:",this);
  },
  updated() {
    console.log('Child更新数据之后========');
    console.log("Child vm:",this);
  },
}
</script>