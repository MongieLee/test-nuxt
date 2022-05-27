<template>
  <card show-more @moreText:click="click">
    <div slot="topic">
      通知公告
    </div>
    <div slot="context" style="height: 100%;padding: 10px 16px">
      <div v-for="record in listData" class="news-item" :key="record.id">
        <img src="~assets/images/arrow.png" alt="arrow"/>
        <div class="news-context">{{
            record.text
          }}
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
  name: "Announcement",
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
</style>