<template>
  <card>
    <main slot="topic" style="padding-left: 20px">
      医疗服务
    </main>
    <div slot="context" class="icon-box">
      <div>
        <img src="~assets/images/挂号预约.png" alt="icon"/>
        <div>挂号预约</div>
      </div>
      <div>
        <img src="~assets/images/专家导诊.png" alt="icon"/>
        <div>专家导诊</div>
      </div>
      <div>
        <img src="~assets/images/专家介绍.png" alt="icon"/>
        <div>专家介绍</div>
      </div>
      <div>
        <img src="~assets/images/院长信箱.png" alt="icon"/>
        <div>院长信箱</div>
      </div>
      <div>
        <img src="~assets/images/帮助向导.png" alt="icon"/>
        <div>帮助向导</div>
      </div>
      <div>
        <img src="~assets/images/就诊流程.png" alt="icon"/>
        <div>就诊流程</div>
      </div>
      <div>
        <img src="~assets/images/表格下载.png" alt="icon"/>
        <div>表格下载</div>
      </div>
      <div>
        <img src="~assets/images/院内分布.png" alt="icon"/>
        <div>院内分布</div>
      </div>
      <div>
        <img src="~assets/images/交通位置.png" alt="icon"/>
        <div>交通位置</div>
      </div>
    </div>
  </card>
</template>

<script>
import Card from '~/components/home/Card';

export default {
  name: "MedicalService",
  components: {Card}
};
</script>

<style lang="less" scoped>

.icon-box {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;

  > div {
    padding: 6px;
    width: 33.3333%;

    img {
      width: 34px;
      margin-bottom: 6px;

      &:hover {
        cursor: pointer;
      }
    }

    div {
      font-size: 12px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>