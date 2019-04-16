<template>
  <div>
    <ul>
      <li v-for="user in users">
        <router-link :to="'userInfo/'+user.user_id">{{user.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { user_id: 1, name: "zhs" },
        { user_id: 2, name: "lis" },
        { user_id: 3, name: "waw" }
      ]
    };
  }
};
</script>
