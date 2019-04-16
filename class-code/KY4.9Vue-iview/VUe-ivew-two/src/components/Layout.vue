<template>
  <div>
    <Row>
      <Col span="12">12列</Col>
      <Col span="12">12列</Col>
    </Row>
    <Row :gutter="16" type="flex">
      <Col span="8" offset="4" :order="2"><div class="one">8列</div></Col>
      <Col span="12" :order="1"><div class="two">12列</div></Col>
    </Row>
  </div>
</template>

<style scoped>
.one{
  background-color: #ccc;
}
.two{
  background-color: aqua;
}
</style>
