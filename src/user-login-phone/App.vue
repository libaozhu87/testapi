
<template>
  <div>
    <div id="g37" class="white-column-flex-start-w750-g37">
      <statusbar></statusbar>
      <navbar title="快捷登陆"></navbar>
      <div id="g36" class="white-column-flex-start-w750-h1233-down-g36">
        <div id="g22" class="white-column-center-w650-g22">
          <!--
          <div id="t11" class="black-size26-t11">18598239234</div>
-->
          <input placeholder="请输入手机号" v-model="phoneNum" id="t11" class="black-size26-t11" />

        </div>
        <div id="g25" class="row-center-w750-g25">
          <div id="g23" class="white-column-center-w436-left-g23">
            <input placeholder="请输入短信验证码" v-model="phoneVerify" class="black-size26-t10" />
          </div>
          <div id="t13" class="magenta-size28-right-t13" @click="sendVerify">{{verifyText}}</div>
        </div>
        <div class="w650-h70-i5" @click="goLoginAjax" :class="{'bgcolor':phoneNum&&phoneVerify&&checked}">
          <!--          <img v-if="checked&&phoneNum&&phoneVerify" class="w650-h70-i5-img" src='https://gw.alicdn.com/tfs/TB15bDSGWmWBuNjy1XaXXXCbXXa-1300-140.png' />
          <img v-if="!checked||!phoneNum||!phoneVerify" class="w650-h70-i5-img" src='https://gw.alicdn.com/tfs/TB1AHDSGWmWBuNjy1XaXXXCbXXa-1302-140.png' />-->
          <div class="login-text">登 录</div>
        </div>

        <!--      <div id="g27" class="row-flex-start-w750-g27">
          <div id="g26" class="white-column-center-left-g26">
            <img id="i19" class="w22-h22-i19" src='https://gw.alicdn.com/tfs/TB1VcwRGf1TBuNjy0FjXXajyXXa-22-22.png' /> </div>
          <div id="t6" class="black-size22-right-t6">登录表示同意《全民股东协议》</div>
        </div>-->
        <protocol :checked="checked" @protocolcheck="onProtocolcheck"></protocol>
        <div id="t14" class="cyan-size26-t14" @click="goPage">账号密码登录</div>
        <div id="g33" class="row-center-w750-g33">
          <img id="i16" class="w166-h1-i16" src='https://gw.alicdn.com/tfs/TB1VHbjGXOWBuNjy0FiXXXFxVXa-166-1.png' />
          <div id="t15" class="ltgray-size26-t15">第三方快捷登录</div>
          <img id="i17" class="w166-h1-i17" src='https://gw.alicdn.com/tfs/TB1vZwRGf1TBuNjy0FjXXajyXXa-166-1.png' /> </div>

        <img id="i18" class="w102-h99-i18" src='https://gw.alicdn.com/tfs/TB1gbfjGXOWBuNjy0FiXXXFxVXa-102-99.png' />

      </div>
    </div>
  </div>
</template>

<style scoped>
.login-text {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Medium;
  font-size: 30px;
  color: #ffffff;
  line-height: 70px;
  text-align: center;
}
.white-column-flex-start-w750-g37 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  background-color: #ffffff;
  display: flex;
}
.white-row-center-w750-up-g21 {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(213, 213, 213, 1);
  border-style: solid;
  border-bottom-width: 1px; /* no */
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
}

.w52-h50-absolute-i3 {
  position: absolute;
  width: 52px;
  height: 50px;
  left: 13px;
  top: 25px;
}

.black-size32-t2 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Medium;
  font-size: 32px;
  color: #4a4a4a;
  line-height: 45px;
  font-weight: bold;
  margin-top: 0.5px;
}

.white-column-flex-start-w750-h1233-down-g36 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 750px;
  height: 1233px;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 1px; /* no */
  display: flex;
}

.white-column-center-w650-g22 {
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 650px;
  align-self: center;
  background-color: rgba(244, 244, 244, 1);
  border-radius: 4px;
  margin-top: 52px;
  padding-top: 17px;
  padding-bottom: 16px;
  display: flex;
}

.black-size26-t11 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  width: 90%;
  color: #3a3a3a;
  line-height: 37px;

  /*
  font-weight: bold;
*/
  margin-left: 35px;
  border: 0px;
}

.row-center-w750-g25 {
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 40px;
  display: flex;
}

.white-column-center-w436-left-g23 {
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 436px;
  align-self: flex-start;
  background-color: rgba(244, 244, 244, 1);
  border-radius: 4px;
  padding-top: 17px;
  padding-bottom: 16px;
  display: flex;
}
.black-size26-t10 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #3a3a3a;
  width: 90%;
  line-height: 37px;
  font-weight: normal;
  margin-left: 31px;
  border: 0px;
}

.bgcolor {
  /*
    background-color: #9013fe !important;
  */
  background-image: linear-gradient(
    -140deg,
    #3023ae 0%,
    #c86dd7 100%
  ) !important;
}

.magenta-size28-right-t13 {
  position: relative;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 4px;
  width: 196px;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 28px;
  border: 1px solid #9013fe; /* no */
  color: #9013fe;
  line-height: 40px;
  font-weight: normal;
  margin-left: 19px;
  padding-top: 15px;
  /*  padding-left: 15px;
  padding-right: 15px;*/
  padding-bottom: 15px;
}

.w650-h70-i5-img {
  position: absolute;
  width: 650px;
  height: 70px;
  top: 0px;
  left: 0px;
}
.w650-h70-i5 {
  position: relative;
  width: 650px;
  height: 70px;
  align-self: center;
  margin-top: 40px;
  background-color: rgba(191, 191, 191, 1);
  border-radius: 4px;
}

.cyan-size26-t14 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #4a90e2;
  line-height: 37px;
  decoration: underline;
  font-weight: normal;
  margin-top: 29px;
  margin-left: 0.5px;
}

.row-center-w750-g33 {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 46px;
  display: flex;
}

.w166-h1-i16 {
  position: relative;
  width: 166px;
  height: 1px; /* no */
  align-self: center;
}

.ltgray-size26-t15 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #c7c7c7;
  line-height: 37px;
  font-weight: normal;
  margin-left: 17px;
}

.w166-h1-i17 {
  position: relative;
  width: 166px;
  height: 1px; /* no */
  align-self: center;

  margin-top: 1px; /* no */
  margin-left: 7px;
}

.w102-h99-i18 {
  position: relative;
  width: 102px;
  height: 99px;
  align-self: flex-end;

  margin-top: 17px;
  margin-right: 318px;
}
</style>
<script>
import statusbar from '../compents/statusbar.vue';
import navbar from '../compents/navbar.vue';
import protocol from '../compents/protocol.vue';
import util from '../lib/util.js';

export default {
  data: function() {
    return {
      checked: true,
      loadnum: 59,
      isSendVerify: false,
      phoneNum: '',
      phoneVerify: '',
      verifyText: '获取验证码'
    };
  },
  components: { statusbar, navbar, protocol },
  methods: {
    goLoginAjax: function() {
      if (this.checked && this.phoneNum && this.phoneVerify) {
        util.ajax(
          'https://restful.yatou.com/user/login_mobile/',
          {
            mobile: this.phoneNum,
            verifcode: this.phoneVerify
          },
          function(res) {
            //console.log(res);
            var data = res.data;
            util.login(data);
          },
          null,
          true
        );
      }
    },
    loadTime: function() {
      var self = this;
      var loadnum = self.loadnum;
      self.verifyText = '重新发送(60)';
      var setID = setInterval(function() {
        self.verifyText = '重新发送(' + loadnum-- + ')';
        if (loadnum <= 0) {
          self.isSendVerify = false;
          clearInterval(setID);
          self.verifyText = '获取验证码';
        }
      }, 1000);
    },
    doSendVerify: function() {
      util.ajax(
        'https://restful.yatou.com/user/sendcode/',
        {
          mobile: this.phoneNum
        },
        function(res) {
          console.log(res);
        },
        null,
        true
      );
    },
    sendVerify: function() {
      if (!this.phoneNum) {
        util.alert('需要输入手机号');
        return;
      }
      if (!this.isSendVerify) {
        this.isSendVerify = true;
        this.doSendVerify();
        this.loadTime();
      }
    },
    goPage: function() {
      util.goPage('./user-login-password.html');
    },

    onProtocolcheck: function(msg) {
      this.checked = msg;
    }
  },
  created: function() {}
};
</script>
