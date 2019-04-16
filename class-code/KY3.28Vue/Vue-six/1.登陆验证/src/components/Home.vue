<template>
  <div>
    <h3>{{account}}, 欢迎使用QQ邮箱!</h3>
  </div>
</template>

<script>
export default {
  data(){
    return {
      account: ''
    }
  },

  beforeMount() {
    this.account = localStorage.getItem('user')
  },
}
</script>