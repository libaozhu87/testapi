<template>
  <div>
    <div id="g37" class="white-column-flex-start-w750-g37">
      <statusbar></statusbar>
      <navbar title="账号登陆"></navbar>
      <div id="g36" class="white-column-flex-start-w750-h1233-down-g36">
        <div id="g23" class="white-row-flex-start-w650-g23">
          <img id="i11" class="w26-h29-left-i11" src='https://gw.alicdn.com/tfs/TB1JnCLGeGSBuNjSspbXXciipXa-26-29.png' />
          <input id="t10" v-model="phoneNum" placeholder="请输入手机号" class="ltgray-size24-right-t10"/>
      <!--    <div id="t10" class="ltgray-size24-right-t10">请输入手机号</div>
          -->
        </div>
        <div id="g25" class="white-row-flex-start-w650-g25">
          <img id="i9" class="w26-h29-left-i9" src='https://gw.alicdn.com/tfs/TB1tCzJGbSYBuNjSspiXXXNzpXa-26-29.png' />
          <input  v-model="phonePassword" type="password" placeholder="请输入密码"  class="ltgray-size26-right-t8"/>
<!--
          <div id="t8" class="ltgray-size26-right-t8">请输入密码</div>
-->
        </div>

        <div class="w651-h72-i5" @click="goLoginAjax" :class="{'bgcolor':phoneNum&&phonePassword&&checked}">
<!--          <img v-if="checked&&phoneNum&&phonePassword" class="w650-h70-i5-img" src='https://gw.alicdn.com/tfs/TB15bDSGWmWBuNjy1XaXXXCbXXa-1300-140.png' />
          <img v-if="!checked||!phoneNum||!phonePassword" class="w650-h70-i5-img" src='https://gw.alicdn.com/tfs/TB1AHDSGWmWBuNjy1XaXXXCbXXa-1302-140.png' />-->
          <div class="login-text">登 录</div>
        </div>

<!--
        <img id="i5" class="w651-h72-i5" src='https://gw.alicdn.com/tfs/TB1HEChGhSYBuNjSsphXXbGvVXa-651-72.png' />
-->

       <!-- <div class="w650-h70-i5" @click="goLoginAjax">
          <img v-if="checked&&phoneNum&&phoneVerify" class="w650-h70-i5-img" src='https://gw.alicdn.com/tfs/TB15bDSGWmWBuNjy1XaXXXCbXXa-1300-140.png' />
          <img v-if="!checked||!phoneNum||!phoneVerify" class="w650-h70-i5-img" src='https://gw.alicdn.com/tfs/TB1AHDSGWmWBuNjy1XaXXXCbXXa-1302-140.png' />
          <div class="login-text">登 录</div>
        </div>-->


      <!--  <div id="g26" class="row-flex-start-w750-g26">
          <img id="i19" class="w24-h24-left-i19" src='https://gw.alicdn.com/tfs/TB17YY3GkOWBuNjSsppXXXPgpXa-24-24.png' />
          <div id="t18" class="black-size22-right-t18">登录表示同意《全民股东协议》</div>
        </div>-->
        <protocol :checked="checked" @protocolcheck="onProtocolcheck"></protocol>


        <div id="g30" class="row-space-between-w750-g30">
          <div id="t12" class="cyan-size26-left-t12" @click="goPage('./user-login-phone.html')">手机快捷登陆</div>
          <div id="t13" class="cyan-size26-right-t13" @click="goPage('./user-modified.html')">设置密码</div>
        </div>
        <div id="g33" class="row-center-w750-g33">
          <img id="i15" class="w166-h1-i15" src='https://gw.alicdn.com/tfs/TB1pTvNGhSYBuNjSspjXXX73VXa-166-1.png' />
          <div id="t14" class="ltgray-size26-t14">第三方快捷登录</div>
          <img id="i16" class="w166-h1-i16" src='https://gw.alicdn.com/tfs/TB1ODaHGf5TBuNjSspcXXbnGFXa-166-1.png' /> </div>
        <img id="i17" class="w102-h99-i17" src='https://gw.alicdn.com/tfs/TB1Sw5.GeuSBuNjSsplXXbe8pXa-102-99.png' /> </div>
    </div>
  </div>
</template>

<style scoped>


  .bgcolor{

    /*
      background-color: #9013fe !important;
    */
    background-image: linear-gradient(-140deg, #3023AE 0%, #C86DD7 100%) !important;;

  }

  .w650-h70-i5-img {
    position: absolute;
    width: 650px;
    height: 72px;
    top: 0px;
    left: 0px;
  }

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



.white-column-flex-start-w750-h1233-down-g36 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 750px;
  height: 1233px;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 1px;
  display: flex;
}

.white-row-flex-start-w650-g23 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 650px;
  align-self: center;
  background-color: rgba(244, 244, 244, 1);
  border-radius: 4px;
  margin-top: 52px;
  padding-top: 18px;
  padding-bottom: 18.5px;
  display: flex;
}

.w26-h29-left-i11 {
  position: relative;
  width: 26px;
  height: 29px;
  align-self: center;
  
  margin-top: 0.5px;
  margin-left: 18px;
}

.ltgray-size24-right-t10 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  width: 85%;
  margin-bottom: 0.5px;
  margin-left: 22px;
}

.white-row-flex-start-w650-g25 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 650px;
  align-self: center;
  background-color: rgba(244, 244, 244, 1);
  border-radius: 4px;
  margin-top: 39px;
  padding-top: 16.5px;
  padding-bottom: 15px;
  display: flex;
}

.w26-h29-left-i9 {
  position: relative;
  width: 26px;
  height: 29px;
  align-self: center;
  
  margin-top: 0.5px;
  margin-left: 18px;
}

.ltgray-size26-right-t8 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #3a3a3a;
  width: 85%;
  line-height: 37px;
  font-weight: normal;
  margin-top: 1.5px;
  margin-left: 22px;
}

  .bgcolor{

    /*
      background-color: #9013fe !important;
    */
    background-image: linear-gradient(-140deg, #3023AE 0%, #C86DD7 100%) !important;;

  }
.w651-h72-i5 {
  position: relative;
  width: 651px;
  height: 72px;
  align-self: center;
  
  margin-top: 39px;
  background-color: rgba(191, 191, 191, 1);
  border-radius: 4px;

  margin-left: 0.5px;
}

.row-flex-start-w750-g26 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 25px;
  display: flex;
}

.w24-h24-left-i19 {
  position: relative;
  width: 24px;
  height: 24px;
  align-self: flex-start;
  
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 50px;
}

.black-size22-right-t18 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 22px;
  color: #6c6c6c;
  line-height: 30px;
  font-weight: normal;
  margin-left: 13px;
}

.row-space-between-w750-g30 {
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 44px;
  display: flex;
}

.cyan-size26-left-t12 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #4a90e2;
  line-height: 37px;
  div-decoration: underline;
  font-weight: normal;
  margin-left: 49px;
}

.cyan-size26-right-t13 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #4a90e2;
  line-height: 37px;
  div-decoration: underline;
  font-weight: normal;
  margin-right: 52px;
}

.row-center-w750-g33 {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 45px;
  display: flex;
}

.w166-h1-i15 {
  position: relative;
  width: 166px;
  height: 1px;
  align-self: center;
  
}

.ltgray-size26-t14 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #c7c7c7;
  line-height: 37px;
  font-weight: normal;
  margin-left: 17px;
}

.w166-h1-i16 {
  position: relative;
  width: 166px;
  height: 1px;
  align-self: center;
  
  margin-top: 1px;
  margin-left: 7px;
}

.w102-h99-i17 {
  position: relative;
  width: 102px;
  height: 99px;
  align-self: flex-end;
  
  margin-top: 17px;
  margin-right: 318px;
}
</style>

<script>
import statusbar from "../compents/statusbar.vue";
import navbar from "../compents/navbar.vue";
import protocol from "../compents/protocol.vue";
import util from "../lib/util.js";

export default {
  data: function() {
    return {
      checked: true,
      phoneNum:"",
      phonePassword:""
    };
  },
  components: { statusbar, navbar ,protocol},
  methods: {
    onProtocolcheck: function(msg) {
      this.checked = msg;
    },
    goPage: function(url) {
      util.goPage(url);
/*
      "./user-login-phone.html"
*/
    },
    goLoginAjax: function() {
      if (this.checked && this.phoneNum && this.phonePassword) {
        util.ajax(
            "https://restful.yatou.com/user/login_pass/",
            {
              mobile: this.phoneNum,
              password: this.phonePassword
            },
            function(res) {
              console.log(res);
              util.alert(res.msg);
            }
        );
      }
    }
  },
  created: function() {}
};
</script>
