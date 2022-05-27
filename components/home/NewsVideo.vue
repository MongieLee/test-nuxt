<template>
  <card>
    <div slot="topic" style="background: none;color:#087cb3">
      新闻视频
    </div>
    <div slot="context" style="height: 100%;padding: 10px 16px">
      <div v-for="record in listData" class="news-item" :key="record.id">
        <div class="news-context">{{
            record.text
          }}
          珠海市妇幼与澳门城市大学深化合作 助力珠澳心理学课协同发展
        </div>
        <img style="width:120px" src="~assets/images/test.png" alt="新闻封面图"/>
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
  name: "NewsVideo",
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
.news-item {
  display: flex;
  align-items: center;
  border-bottom: 1px dashed #f0f0f0;

  &:hover {
    color: #79bade;
    cursor: pointer;
  }

  &:not(:first-child) {
    margin-top: 1em;
  }

  > img {

  }

  .news-context {
    white-space: nowrap; //段落中的文本不进行换行
    overflow: hidden; //超出宽度部分隐藏
    text-overflow: ellipsis; //当文本溢出时，要发生的事。有三个值：  clip -  修剪文本；ellipsis - 显示省略号来代表被修剪的文本；string - 使用给定的字符串来代表被修剪的文本
    width: 70%;
  }
}
</style>