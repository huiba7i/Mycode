<template>
  <div>
    <label>爱好</label>
    <input type="checkbox" v-model="likes" value="休闲">休闲
    <input type="checkbox" v-model="likes" value="娱乐">娱乐
    <input type="checkbox" v-model="likes" value="美食">美食

    
  </div>
</template>

<script>
export default{
  data() {
    return {
      likes: []
    }
  },
}
</script>