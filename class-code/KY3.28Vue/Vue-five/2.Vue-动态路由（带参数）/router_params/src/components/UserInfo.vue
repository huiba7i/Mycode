<template>
  <div>
    <h2>该用户的详细信息如下:</h2>
    <p>用户id: {{$route.params.id}}</p>
    <p>姓名: {{user.sex}}</p>
    <p>年龄: {{user.age}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    }
  },
  beforeMount() {
    console.log(this.$route);
    this.$axios.get(`/static/${this.$route.params.id}.json`).then((resp)=>{
      this.user = resp.data;
    }).catch((error)=>{
      console.log(error);
    })
    
  },
  mounted() {
  },
}
</script>