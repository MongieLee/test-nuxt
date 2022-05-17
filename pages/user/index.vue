<template>
  <div>
      user index
      <a href="/">去首页</a>
      <br/>
      <router-link to="/">首页2</router-link>
      <button @click="toHome">按钮导航</button>
  </div>
</template>

<script>
  export default {
    methods:{
      toHome(){
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>