<template>
  <div class="card-container">
    <div class="topic">
      <slot name="topic"/>
      <span class="more-text" @click="onClickMore" v-if="showMore">+MORE&nbsp;></span>
    </div>
    <div class="context">
      <slot name="context"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    showMore: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClickMore(e) {
      if (this.showMore) {
        this.$emit("moreText:click", e);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.card-container {
  height: 100%;
  border: 1px solid #b9b9b9;
  display: flex;
  flex-direction: column;

  .topic {
    height: 46px;
    line-height: 46px;
    background: url("~assets/images/st2.png");
    display: flex;
    justify-content: space-between;
    padding-right: 8px;

    > div {
      color: white;
      font-size: 18px;
      padding-left: 16px;
      padding-right: 16px;
      background: url("~assets/images/st1.png");
    }

    .more-text {
      color: #0b698a;
      font-weight: 600;

      &:hover {
        cursor: pointer;
        color: #79bade;
      }
    }
  }

  .context {
    flex: 1;
  }
}
</style>