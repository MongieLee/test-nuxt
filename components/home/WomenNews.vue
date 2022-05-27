<template>
  <card show-more @moreText:click="click">
    <div slot="topic">
      妇儿新闻
    </div>
    <div slot="context" class="xxx" style="padding: 10px;height: 100%">
      <div style="height: 100%;display: flex;flex-direction: column">
        <b-carousel style="flex:1;text-shadow: 0px 0px 2px #000" controls indicators>
          <b-carousel-slide caption="First Slide" img-src="https://picsum.photos/1024/480/?image=10"></b-carousel-slide>
          <b-carousel-slide caption="Second Slide"
                            img-src="https://picsum.photos/1024/480/?image=12"></b-carousel-slide>
          <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
        </b-carousel>
        <div style="background: #cccccc;font-weight: bold;padding-left: 10px">test text</div>
      </div>
      <div class="news-list">
        <div v-for="record in listData" class="news-item" :key="record.id">
          <img src="~assets/images/arrow.png" alt="arrow"/>
          <div class="news-context">
            {{ record.text }}
          </div>
        </div>
      </div>
    </div>
  </card>
</template>

<script>
import Card from '~/components/home/Card';

export default {
  props: {
    listData: {
      type: Array,
      required: true
    }
  },
  name: "WomenNews",
  components: {Card},
  methods: {
    click(e) {
      console.log(e);
      console.log(123);
    }
  }
};
</script>

<style lang="less" scoped>

.xxx {
  display: flex;

  > div {
    flex: 1
  }

  .news-list {
    padding: 8px;
  }

  .news-item {
    display: flex;
    align-items: center;

    &:hover {
      color: #79bade;
      cursor: pointer;
    }

    &:not(:first-child) {
      margin-top: 1em;
    }

    > img {
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }

    .news-context {
      white-space: nowrap; //段落中的文本不进行换行
      overflow: hidden; //超出宽度部分隐藏
      text-overflow: ellipsis; //当文本溢出时，要发生的事。有三个值：  clip -  修剪文本；ellipsis - 显示省略号来代表被修剪的文本；string - 使用给定的字符串来代表被修剪的文本
      width: 70%;
    }
  }
}

::v-deep .carousel-inner {
  height: 100%;

  .carousel-item {
    height: 100%;

    img {
      height: 100%;
    }
  }
}
</style>