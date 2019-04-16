<template>
  <div>
    <h2>TWO</h2>
    <p>count: {{$store.state.count}}</p>
    <p>总价格: {{$store.getters.totalPrice}}</p>
  </div>
</template>