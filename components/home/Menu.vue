<template>
  <b-container fluid style="border:1px solid red;">
    <b-row>
      <b-col sm="6">
        菜单
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import dayjs from 'dayjs'

export default {
  data() {
    return {
      today: dayjs().format('YYYY年MM月DD日'),
      guideList: [
        { text: '设为首页', link: '' },
        { text: '加入收藏', link: '' },
        { text: '网站地图', link: '' },
      ],
    }
  },
}
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
    // left: 10%;
  }
}

@media screen and (max-width: 768px) {
  .header-bg-wrapper {
    height: 270px;
  }
  .fuyou-logo {
    top: 70%;
    width: 265px;
    // left: 10%;
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
</style>