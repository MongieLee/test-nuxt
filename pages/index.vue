<template>
  <div>
    <Menu />
    <div style="border: 1px solid yellow; padding: 20px 40px">
      <div>首页</div>
    </div>
  </div>
</template>

<script>
import Menu from '../components/home/Menu.vue'
import a from "@/utils/request"
export default {
  name: 'IndexPage',
  components: { Menu },
  asyncData(context) {
    console.log(context)
    console.log(111)
    return { a: 1 }
  },
  data() {
    return {
      b: 2,
    }
  },
}
</script>
