<template>
  <div>
    <Menu :menus="menus"/>
    <b-container class="main-context" fluid>
      <b-row gutter="10">
        <b-col md="3">
          <announcement :list-data="announcementList"/>
        </b-col>
        <b-col md="6">
          <women-news :list-data="announcementList"/>
        </b-col>
        <b-col md="3">
          <medical-service/>
        </b-col>
        <b-col md="3">
          <news-video :list-data="announcementList"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Menu from '../components/home/Menu.vue';
import HomeService from "~/services/home";
import request from '@/utils/request';
import Card from '@/components/home/Card';
import Announcement from "../components/home/Announcement";
import MedicalService from "../components/home/MedicalService";
import WomenNews from "../components/home/WomenNews";
import NewsVideo from "../components/home/NewsVideo";

export default {
  name: 'IndexPage',
  components: {Menu, Card, Announcement, MedicalService, WomenNews, NewsVideo},
  async asyncData(context) {
    const menus = await HomeService.getMenus();
    console.log(menus);
    // const data = await Service.getTheme()
    console.log("是否客户端渲染", process.client);
    console.log("是否服务端渲染", process.server);
    // console.log(data)
    // context.store.commit("SET_THEME", data)
    console.log(process.env.NODE_ENV);
    console.log(request);
    return {
      menus,
      announcementList: [
        {id: 1, text: '关于落实'},
        {id: 2, text: '关于落实1'},
        {id: 3, text: '关于落实2'},
        {id: 4, text: '关于落实3'},
      ]
    };
  },
  data() {
    return {
      b: 2,
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.main-context {
  padding: 40px 60px;
}

@media screen and(max-width: 576px) {
  .main-context {
    padding: 8px 16px;
  }
}
</style>
<style lang="less">
@import "./global";
</style>
