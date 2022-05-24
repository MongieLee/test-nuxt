<template>
  <div>
    <Menu/>
    <div style="border: 1px solid yellow; padding: 20px 40px">
      <div>首页</div>
    </div>
  </div>
</template>

<script>
import Menu from '../components/home/Menu.vue'
import Service from "@/services"

export default {
  name: 'IndexPage',
  components: {Menu},
  async asyncData(context) {
    const data = await Service.getTheme()
    console.log("是否客户端渲染", process.client)
    console.log("是否服务端渲染", process.server)
    console.log(data)
    context.store.commit("SET_THEME", data)
    return {
      data
    }
  },
  data() {
    return {
      b: 2,
    }
  },
}
</script>
