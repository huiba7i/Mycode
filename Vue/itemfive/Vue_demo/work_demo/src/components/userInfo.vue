<template>
  <div>
      <h4>该用户详细信息</h4>
      <p>用户id:{{$route.params.id}}</p>
      <p>name:{{userdata.name}}</p>
      <p>address:{{userdata.address}}</p>
      <p>city:{{userdata.city}}</p>
      <p>province:{{userdata.province}}</p>
      <p>date:{{userdata.date}}</p>
      <p>zip:{{userdata.zip}}</p>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      userdata: []
    };
  },
  beforeMount() {
    this.$axios.get(`/sys/user/select?id=${this.$route.params.id}`).then(resp => {
        console.log(resp.data[0]);
        this.userdata = resp.data;
    }).catch((error)=>{
        console.log(error);
    });
  },
};
</script>
