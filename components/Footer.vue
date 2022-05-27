<template>
  <b-container class="footer-wrapper" fluid style="">
    <b-row>
      <b-col sm="12" md="12" lg="6">
        <div class="img-box" style="display: flex;flex-direction:column;justify-content:center;align-items: center">
          <img style="align-self: center" class="footer-logo" src="~assets/images/fuyou-logo.png" alt="fuyou-logo"/>
          <div class="qr-codes">
            <div class="code-base">
              <img src="~assets/images/wechat.jpg" alt="wechat"/>
              <p>微信公众号</p>
            </div>
            <div class="code-base">
              <img src="~assets/images/zfb.jpg" alt="zfb"/>
              <p>支付宝导诊服务号</p>
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="12" md="12" lg="6">

        <div class="font-wrapper">
          <div>南琴院区：南琴院区地处珠海市香洲区南屏南琴路3366号</div>
          <div>电话：0756-2310190/2310189</div>
          <div>柠溪院区：柠溪院区地处广东省珠海市香洲柠溪路543号</div>
          <div>电话：0756-2313115/2313124</div>
          <div>邮编：519001</div>
          <div>传真：0756-2313000</div>
          <div>网址：www.fuyou.cn</div>
          <div>电邮地址：zhfyybgs@zhuhai.gov.cn</div>
          <div>
            粤公网安备 粤ICP备19027824号工信部备案管理系统地址：<a target="_blank">beian.miit.gov.cn</a>
          </div>
          <div>版权所有 珠海市妇幼保健院建议使用Chrome浏览器最佳分辨率1920*1080</div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="less" scoped>
.font-wrapper {
  display: flex;
  flex-direction: column;
  padding: 8px 16px;


  > div {
    padding: 4px 0;
  }
}

.footer-logo {
  width: 76%;


}

.qr-codes {
  justify-content: space-around;
  display: flex;
  width: 60%;

  .code-base {
    img {
      width: 100%;
    }
  }

  p {
    width: 100%;
    background: #eeeeee;
    text-align: center;
    margin-bottom: 0;
  }
}


</style>
