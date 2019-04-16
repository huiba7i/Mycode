<template>
  <div>
    <ul >
      <li v-for="user in users" :key="user">
        <!-- <img :src="users[0]" alt=""> -->
        <!-- <router-link to="userInfo/2">{{user.name}}</router-link> -->
        <router-link v-bind:to="'userInfo/'+user.user_id">{{user.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      users: [
        {user_id:1, name: 'zhs'},
        {user_id:2, name: 'lisi'},
        {user_id:3, name: 'wangwu'},
      ]
    }
  },
}
</script>