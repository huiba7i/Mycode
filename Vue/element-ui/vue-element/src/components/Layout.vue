<template>
  <div>
    <el-row>
      <el-col :span="24"><div class="bg">24栅格系统</div></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12"><div class="bg">12等分</div></el-col>
      <el-col :span="12"><div class="bg">12等分</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8"><div class="bg">8等分</div></el-col>
      <el-col :span="8"><div class="bg">8等分</div></el-col>
      <el-col :span="8"><div class="bg">8等分</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="2" class="bg">6列左侧间隔2列</el-col>
      <el-col :span="6" :offset="2" class="bg">6列左侧间隔2列</el-col>
      <el-col :span="6" :offset="2" class="bg">6列左侧间隔2列</el-col>
    </el-row>

  </div>
</template>

<style scoped>
.bg{
  background-color: #ccc;
  border-radius: 5px;
  margin: 5px 0;
}
</style>

<script>
export default {
  data(){
    return {

    }
  }
}
</script>
