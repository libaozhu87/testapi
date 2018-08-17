<template>
  <div>
    <div id="g33" class="white-column-flex-start-w750-g33">
      <statusbar></statusbar>
      <navbar title="密码设置"></navbar>

      <div id="g32" class="white-column-flex-start-w750-h1233-down-g32">
        <div id="g20" class="white-column-center-w650-g20">
          <!--
          <div id="t14" class="ltgray-size24-t14">请输入手机号</div>
-->
          <input id="t14" v-model="phoneNum" placeholder="请输入手机号" class="ltgray-size24-t14" />
        </div>
        <div id="g23" class="row-center-w750-g23">
          <div id="g21" class="white-column-center-w436-left-g21">
            <input v-model="phoneVerify" placeholder="请输入短信验证码" class="ltgray-size26-t11" />
          </div>
          <div id="t16" class="dkgray-size28-right-t16" @click="sendVerify">{{verifyText}}</div>
        </div>
        <div id="g24" class="white-column-center-w650-g24">

          <input placeholder="请输入密码" type="password" v-model="phonePassword" class="ltgray-size26-t12" />
        </div>
        <div id="g25" class="white-column-center-w650-g25">
          <input id="t13" v-model="phonePasswordAgain" type="password" placeholder="请再次输入密码" class="ltgray-size26-t13" />
        </div>
        <div id="t17" class="dkgray-size20-t17">密码为6~20个字符，由英文字母、数字、符号构成，且区分大小写</div>
        <div id="g26" @click="changePassword" class="ltgray-column-flex-start-w651-g26" :class="{'bgcolor':phoneNum&&phonePassword&&phonePasswordAgain&&phoneVerify}">
          <div id="t6" class="white-size30-t6">完 成</div>
        </div>

      </div>
    </div>
  </div>
</template>
<style scoped>
.white-column-flex-start-w750-g33 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  background-color: #ffffff;
  display: flex;
}

.white-column-flex-start-w750-h1233-down-g32 {
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

.white-column-center-w650-g20 {
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 650px;
  align-self: center;
  background-color: rgba(244, 244, 244, 1);
  border-radius: 4px;
  margin-top: 52px;
  padding-top: 18px;
  padding-bottom: 19px;
  display: flex;
}

.ltgray-size24-t14 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #3a3a3a;
  line-height: 33px;
  width: 85%;
  border: 0px;

  margin-left: 35px;
}

.row-center-w750-g23 {
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 40px;
  display: flex;
}

.white-column-center-w436-left-g21 {
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

.ltgray-size26-t11 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #3a3a3a;
  line-height: 37px;
  width: 90%;
  font-weight: normal;
  border: 0px;

  margin-left: 35px;
}

.dkgray-size28-right-t16 {
  position: relative;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid #9013fe; /* no */
  color: #9013fe;
  border-style: solid;
  border-width: 1px; /* no */
  border-radius: 4px;
  font-family: PingFangSC-Regular;
  font-size: 28px;
  line-height: 40px;
  font-weight: normal;
  margin-left: 19px;
  text-align: center;
  width: 196px;
  padding-top: 15px;
  padding-bottom: 15px;
}

.white-column-center-w650-g24 {
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 650px;
  align-self: center;
  background-color: rgba(244, 244, 244, 1);
  border-radius: 4px;
  margin-top: 40px;
  padding-top: 17px;
  padding-bottom: 16px;
  display: flex;
}

.ltgray-size26-t12 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #3a3a3a;
  width: 90%;

  line-height: 37px;
  font-weight: normal;
  margin-left: 35px;
  border: 0px;
}

.white-column-center-w650-g25 {
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 650px;
  align-self: center;
  background-color: rgba(244, 244, 244, 1);
  border-radius: 4px;
  margin-top: 40px;
  padding-top: 17px;
  padding-bottom: 16px;
  display: flex;
}

.ltgray-size26-t13 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #3a3a3a;
  line-height: 37px;
  font-weight: normal;
  width: 90%;
  border: 0px;
  margin-left: 35px;
}

.dkgray-size20-t17 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 20px;
  color: #9b9b9b;
  line-height: 28px;
  font-weight: normal;
  margin-top: 28px;
  margin-left: 50px;
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
.ltgray-column-flex-start-w651-g26 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 651px;
  align-self: center;
  background-color: rgba(191, 191, 191, 1);
  border-radius: 4px;
  margin-top: 22px;
  margin-left: 0.5px;
  display: flex;
}

.white-size30-t6 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Medium;
  font-size: 30px;
  color: #ffffff;
  line-height: 42px;
  font-weight: bold;
  margin-top: 12px;
  margin-bottom: 16px;
}
</style>

<script>
import statusbar from '../compents/statusbar.vue';
import navbar from '../compents/navbar.vue';
import util from '../lib/util.js';
export default {
  data: function() {
    return {
      checked: true,
      loadnum: 59,
      isSendVerify: false,
      phoneNum: '',
      phonePassword: '',
      phonePasswordAgain: '',
      phoneVerify: '',
      verifyText: '获取验证码'
    };
  },
  components: { statusbar, navbar },
  methods: {
    changePassword: function() {
      if (
        this.phonePassword &&
        this.phonePassword &&
        this.phonePasswordAgain &&
        this.phoneVerify
      ) {
        if (this.phonePassword != this.phonePasswordAgain) {
          util.alert('两次输入的密码不一样');
          return;
        }
        util.ajax(
          'https://restful.yatou.com/user/changepassword/',
          {
            verifcode: this.phoneVerify,
            newpass: this.phonePassword,
            newpass1: this.phonePasswordAgain
          },
          function(res) {
            console.log(res);
            if (res.msg == '注册成功') {
              util.alert('设置成功');
            } else {
              util.alert(res.msg);
            }
          }
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
    }
  },
  created: function() {}
};
</script>
