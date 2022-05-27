<template>
  <b-container fluid>
    <b-row style="margin-top: 6px">
      <b-col sm="6">
        <span class="time">您好，今天是{{ today }}</span>
      </b-col>
      <b-col class="guide" sm="6">
        <nuxt-link v-for="guide in guideList" :key="guide.link" :to="guide.link">{{ guide.text }}</nuxt-link>
      </b-col>
    </b-row>
    <div class="header-bg-wrapper">
      <img class="fuyou-logo" src="~assets/images/logo-guang.png" alt="fuyou-logo"/>
      <div style="padding: 80px 50px 0 0">
        <div style="display:flex;justify-content: flex-end;">
          <div class="flcc">
            <div class="icon-box">
              <img src="~assets/images/wx.png" alt="gzh"/>
              <span>公众号</span>
            </div>
            <div class="icon-box">
              <img src="~assets/images/sp.png" alt="sph"/>
              <span>视频号</span>
            </div>
            <div class="icon-box">
              <img src="~assets/images/dyh.png" alt="dyh"/>
              <span>抖音号</span>
            </div>
            <div class="icon-box">
              <img src="~assets/images/dyh.png" alt="dyh"/>
              <span>公众号</span>
            </div>
          </div>
        </div>
        <div class="campus flsb">
          <nuxt-link class="south" to="/">南琴院区(南院)</nuxt-link>
          <nuxt-link class="north" to="/">柠溪院区(北院)</nuxt-link>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import dayjs from 'dayjs';

export default {
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
  width: 600px;
}

@media screen and (max-width: 576px) {
  .guide {
    text-align: left;
    margin-left: 20px;
  }
}

.header-bg-wrapper {
  display: flex;
  justify-content: flex-end;
  height: 391px;
  position: relative;
  background-image: url('~assets/images/header-bg.png');
  background-size: cover;
  background-position: center center;
}

@media screen and (max-width: 1220px) {
  .header-bg-wrapper {
    height: 340px;
  }

  .fuyou-logo {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .header-bg-wrapper {
    height: 270px;
  }
}

@media screen and (max-width: 576px) {
  .header-bg-wrapper {
    height: 200px;
  }
}

.campus {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  > a {
    border-radius: 8px;
    color: black;
    font-weight: bold;
    font-size: 26px;
    padding: 10px 30px;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, .25);
  }

  .south {
    background: #24bce6;
    background: url("~assets/images/s-1.png");
  }

  .north {
    margin-left: 40px;
    background: #f1a2b8;
    background: url("~assets/images/s-2.png");
  }
}

.icon-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flcc {
  > .icon-box:not(:first-child) {
    margin-left: 1em;
  }
}
</style>