<template>
  <b-container fluid>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav style="" class="custom-navbar">
          <template v-for="menu in menus">
            <b-nav-item-dropdown :text="menu.MenuName" :key="menu.Id" v-if="menu.Childs.length">
              <b-dropdown-item v-for="child in menu.Childs" :key="child.Id" href="#">
                <!--                <nuxt-link to="/">{{ menu.MenuName }}</nuxt-link>-->
                {{ menu.MenuName }}
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item v-else href="#" :key="menu.Id">
              <!--              <nuxt-link to="/">{{ menu.MenuName }}</nuxt-link>-->
              {{ menu.MenuName }}
            </b-nav-item>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
import dayjs from 'dayjs';

export default {
  props: {
    menus: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      today: dayjs().format('YYYY年MM月DD日'),
      guideList: [
        {text: '设为首页', link: ''},
        {text: '加入收藏', link: ''},
        {text: '网站地图', link: ''},
      ],
    };
  },

};
</script>

<style lang="less" scoped>
.time {
  margin-left: 20px;
}

.guide {
  text-align: right;
  color: inherit;

  a {
    &:hover {
      color: #dd1e3e;
      cursor: pointer;
      text-decoration: none;
    }

    &:not(:last-child) {
      margin-right: 10px;
    }

    &:last-child {
      margin-right: 20px;
    }
  }
}

.fuyou-logo {
  position: absolute;
  top: 50%;
  left: 3%;
  transform: translateY(-50%);
  width: 300px;
}

@media screen and (max-width: 576px) {
  .guide {
    text-align: left;
    margin-left: 20px;
  }
}

.header-bg-wrapper {
  height: 391px;
  position: relative;
  background-image: url('~assets/images/header-bg.png');
  background-size: cover;
  background-position: center center;
}


@media screen and (max-width: 992px) {
  .header-bg-wrapper {
    height: 340px;
  }

  .fuyou-logo {
    top: 70%;
  }
}

@media screen and (max-width: 768px) {
  .header-bg-wrapper {
    height: 270px;
  }

  .fuyou-logo {
    top: 70%;
    width: 265px;
  }
}

@media screen and (max-width: 576px) {
  .header-bg-wrapper {
    height: 200px;
  }

  .fuyou-logo {
    top: 70%;
    width: 180px;
    // left: 10%;
  }
}

.custom-navbar {
  justify-content: space-between;
  width: 100%;
  background: url("~assets/images/setiao.png");
  background-repeat: no-repeat;
  background-size: cover;

  .nav-item {
    padding: 0 10px;
  }
}

@media screen and (min-width: 992px) {
  .custom-navbar {
    padding: 0 100px;
  }
}

.navbar {
  padding: 0;
}

@media screen and(max-width: 992px) {
  .navbar {
    background: #17a2b8 !important;
  }

  .custom-navbar {
    background: #17a2b8;
  }
}

// 菜单链接
::v-deep .nav-link {
  color: white !important;

  &:hover {
    color: #7dbbdf !important;
  }
}
</style>