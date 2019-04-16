<template>
  <div class="container">
    <table class="table table-bordered text-center">
      <thead>
        <tr>
          <th class="text-center">姓名</th>
          <th class="text-center">ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{user.name}}</td>
          <td><router-link :to="'userInfo/'+user.id">{{user.id}}</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      users: []
    };
  },

  beforeCreate() {
    this.$axios.get("/sys/user/all").then(resp => {
      this.users = resp.data;
      console.log(resp.data[0]);
    }).catch((error)=>{
      console.log(error);
    });
  },
  methods: {}
};
</script>
