<template>
  <div>
    <template>
      <Header/>
      <nuxt/>
      <Footer/>
    </template>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer'

export default {
  components: {Header, Footer},
}
</script>

<style lang="less">
* {
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, segoe ui, Roboto, Helvetica, Arial, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol;
}
</style>
