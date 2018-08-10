<template>
  <div>
    <div id="g18" class="white-column-flex-start-w750-g18">

      <statusbar></statusbar>
      <navbar title="用户名"></navbar>
      <div id="g14" class="white-column-flex-start-g14">

        <!--
        <div id="t6" class="ltgray-size26-up-t6">请输入您的用户名</div>
-->
        <input class="ltgray-size26-up-t6" placeholder="请输入您的用户名" />

        <img id="i5" class="w749-h1-down-i5" src='https://gw.alicdn.com/tfs/TB132QQGxGYBuNjy0FnXXX5lpXa-749-1.png' /> </div>
      <div id="t10" class="dkgray-size24-t10">取个既个性又响亮的昵称吧</div>
      <div id="g16" class="column-flex-start-w651-h72-g16">

        <img id="i8" class="w650-h70-absolute-i8" src='https://gw.alicdn.com/tfs/TB1JANlXzrguuRjy0FeXXXcbFXa-650-70.png' />
        <div id="t9" class="white-size30-t9">提交</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.white-column-flex-start-w750-g18 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 750px;
  background-color: rgba(240, 240, 240, 1);
  display: flex;
}

.white-column-flex-start-g14 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: center;
  width: 750px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
}

.ltgray-size26-up-t6 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #3a3a3a;
  line-height: 37px;
  margin-top: 47px;
  margin-right: 510px;
  margin-bottom: 45px;
  margin-left: 36px;
  width: 85%;
}

.w749-h1-down-i5 {
  position: relative;
  width: 750px;
  height: 1px;
  align-self: center;
}

.dkgray-size24-t10 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;

  font-size: 24px;
  color: #9b9b9b;
  line-height: 33px;
  margin-top: 22px;
}

.column-flex-start-w651-h72-g16 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 651px;
  height: 72px;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 956px;
  margin-left: 0.5px;
  display: flex;
}

.w650-h70-absolute-i8 {
  position: absolute;
  width: 650px;
  height: 70px;
  left: 0;
  top: 2px;
}

.white-size30-t9 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Medium;
  font-size: 30px;
  color: #ffffff;
  line-height: 42px;
  font-weight: bold;
  margin-top: 14px;
}
</style>

<script>
import statusbar from "../compents/statusbar.vue";
import navbar from "../compents/navbar.vue";
export default {
  data: {},
  components: { statusbar, navbar },

  methods: {},
  created: function() {}
};
</script>