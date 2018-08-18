<template>
  <div class="body" style="background-color:#F0F0F0">
    <div id="g72" class="white-column-flex-start-w750-g72">
      <div id="g44" class="column-flex-start-w750-h450-g44">
        <div id="s1" class="white-w750-h349-absolute-s1"></div>
        <div id="g43" class="column-flex-start-w750-g43">
          <div id="g40" class="column-flex-start-w750-h378-g40">
            <img id="i2" class="w750-h316-absolute-i2" src='https://gw.alicdn.com/tfs/TB1k7UtGr9YBuNjy0FgXXcxcXXa-750-316.png' />
            <img id="i3" class="w750-h316-absolute-i3" src='https://gw.alicdn.com/tfs/TB15N_gGrGYBuNjy0FoXXciBFXa-750-316.png' />
            <div id="g39" class="column-flex-start-w750-g39">
              <div id="g38" class="row-space-between-w750-up-g38">
                <div id="t5" v-if="usreData" class="white-size26-left-t5">算力：{{usreData.power||0}}</div>
                <div id="t6" v-if="usreData" class="white-size26-right-t6"> 源石：{{usreData.diamond||0}}</div>
              </div>
              <img v-if="usreData" @click="goInfo()" class="w130-h130-down-i7" src='https://gw.alicdn.com/tfs/TB1gd2FGx9YBuNjy0FfXXXIsVXa-130-130.png' /> </div>
            <img v-if="!usreData" @click="goLogin()" class="w130-h130-down-i7" src='https://gw.alicdn.com/tfs/TB1dyboJXOWBuNjy0FiXXXFxVXa-260-260.png' /> </div>
        </div>
        <div id="g41" class="row-center-w750-g41">
          <div id="t37" v-if="usreData" class="magenta-size22-absolute-t37">星级：{{usreData.starlevel||1}}</div>
          <div v-if="usreData" class="black-size26-t4">{{usreData.nikename}}</div>
          <div v-if="!usreData" class="black-size26-t4">未登录</div>
        </div>
        <img id="i36" v-if="usreData" :style="{'width':starlevelWidth+'px'}" class="w533-h4-i36" src='https://gw.alicdn.com/tfs/TB17sM0Gv1TBuNjy0FjXXajyXXa-533-4.png' /> </div>
    </div>
    <div id="g52" class="column-flex-start-w750-h144-g52">
      <div id="s8" class="white-w750-h143-absolute-s8"></div>
      <div id="g51" class="row-flex-start-w750-g51">
        <div id="g45" class="column-flex-start-g45" @click="goGuide()">
          <img id="i10" class="w40-h40-up-i10" src='https://gw.alicdn.com/tfs/TB1TJ2FGx9YBuNjy0FfXXXIsVXa-40-40.png' />
          <div id="t13" class="black-size26-down-t13">新手指南</div>
        </div>
        <img id="i12" class="w1-h112-i12" src='https://gw.alicdn.com/tfs/TB1e06FGx9YBuNjy0FfXXXIsVXa-1-112.png' />
        <div id="g47" class="column-flex-start-g47">
          <img id="i9" class="w40-h40-up-i9" src='https://gw.alicdn.com/tfs/TB1Ca_rGpOWBuNjy0FiXXXFxVXa-40-40.png' />
          <div id="t14" class="black-size26-down-t14">意见反馈</div>
        </div>
        <img id="i11" class="w1-h112-i11" src='https://gw.alicdn.com/tfs/TB1_W_rGpOWBuNjy0FiXXXFxVXa-1-112.png' />
        <div id="g50" class="column-flex-start-g50" @click="goNews">
          <img id="i34" class="w40-h40-up-i34" src='https://gw.alicdn.com/tfs/TB1RKbFGx9YBuNjy0FfXXXIsVXa-40-40.png' />
          <div id="t15" class="black-size26-down-t15">消息</div>
        </div>
      </div>
    </div>
    <div id="g56" class="column-flex-start-w750-h101-g56" @click="goCash()">
      <div id="s16" class="white-w750-h100-absolute-s16"></div>
      <div id="g55" class="column-flex-start-w750-g55">
        <div id="g54" class="row-space-between-w750-up-g54">
          <div id="g73" class="row-flex-start-left-g73">
            <img id="i17" class="w30-h30-left-i17" src='https://gw.alicdn.com/tfs/TB1FUkrGxGYBuNjy0FnXXX5lpXa-30-30.png' />
            <div id="t28" class="black-size26-right-t28">交易</div>
          </div>
          <img id="i21" class="w10-h18-right-i21" src='https://gw.alicdn.com/tfs/TB1bgk0XjrguuRjy0FeXXXcbFXa-10-18.png' /> </div>
        <img id="i25" class="w750-h2-down-i25" src='https://gw.alicdn.com/tfs/TB16Mk0XjrguuRjy0FeXXXcbFXa-750-2.png' /> </div>
    </div>
    <div id="g60" class="white-column-flex-start-g60" @click="goFriend">
      <div id="g58" class="row-space-between-w750-up-g58">
        <div id="g74" class="row-flex-start-left-g74">
          <img id="i35" class="w30-h30-left-i35" src='https://gw.alicdn.com/tfs/TB17ga4Gv9TBuNjy0FcXXbeiFXa-30-30.png' />
          <div id="t29" class="black-size26-right-t29">好友</div>
        </div>
        <img id="i22" class="w10-h18-right-i22" src='https://gw.alicdn.com/tfs/TB1s77tGr9YBuNjy0FgXXcxcXXa-10-18.png' /> </div>
      <img id="i26" class="w750-h2-down-i26" src='https://gw.alicdn.com/tfs/TB1sJYpGuSSBuNjy0FlXXbBpVXa-750-2.png' />
    </div>
    <div id="g64" class="white-column-flex-start-g64" @click="goAbout">
      <div id="g62" class="row-space-between-w750-up-g62">
        <div id="g75" class="row-flex-start-left-g75">
          <img id="i32" class="w34-h34-left-i32" src='https://gw.alicdn.com/tfs/TB1vubFGx9YBuNjy0FfXXXIsVXa-34-34.png' />
          <div id="t30" class="black-size26-right-t30">关于全民股东</div>
        </div>
        <img id="i23" class="w10-h18-right-i23" src='https://gw.alicdn.com/tfs/TB1Kwk0XjrguuRjy0FeXXXcbFXa-10-18.png' /> </div>
      <img id="i27" class="w750-h2-down-i27" src='https://gw.alicdn.com/tfs/TB1f5W4GuOSBuNjy0FdXXbDnVXa-750-2.png' /> </div>
    <div id="g67" class="white-row-space-between-w750-g67" @click="goSet">
      <div id="g76" class="row-flex-start-left-g76">
        <img id="i33" class="w28-h27-left-i33" src='https://gw.alicdn.com/tfs/TB1EyW4GuOSBuNjy0FdXXbDnVXa-28-27.png' />
        <div id="t31" class="black-size26-right-t31">设置</div>
      </div>
      <img id="i24" class="w10-h18-right-i24" src='https://gw.alicdn.com/tfs/TB1RA7tGr9YBuNjy0FgXXcxcXXa-10-18.png' />
    </div>
    <img id="i27" class="w750-h2-down-i27" src='https://gw.alicdn.com/tfs/TB1f5W4GuOSBuNjy0FdXXbDnVXa-750-2.png' />

    <!--   <div id="g5" class="white-column-flex-start-w74-h77-g5" @click="doShowAlert()">
      <img id="i1" class="w59-h64-absolute-i1" src='https://gw.alicdn.com/tfs/TB1esXnczfguuRjSspkXXXchpXa-59-64.png' />
      <div id="t3" class="white-size20-t3">900</div>
    </div> -->
    <alertItem v-if="showAlert"></alertItem>
  </div>
</template>

<style scoped>
.body {
  width: 750px;
}
.white-column-flex-start-w750-g72 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  background-color: #ffffff;
  display: flex;
}
.column-flex-start-w750-h450-g44 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  height: 450px;
  align-self: flex-start;
  display: flex;
}

.white-w750-h349-absolute-s1 {
  position: absolute;
  width: 750px;
  height: 349px;
  left: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 1);
}

.column-flex-start-w750-g43 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  display: flex;
}

.column-flex-start-w750-h378-g40 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  height: 378px;
  align-self: flex-start;
  display: flex;
}

.w750-h316-absolute-i2 {
  position: absolute;
  width: 750px;
  height: 316px;
  left: 0;
  top: 0;
}

.w750-h316-absolute-i3 {
  position: absolute;
  width: 750px;
  height: 316px;
  left: 0;
  top: 0;
}

.column-flex-start-w750-g39 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 153px;
  display: flex;
}

.row-space-between-w750-up-g38 {
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: center;
  display: flex;
}

.white-size26-left-t5 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #ffffff;
  line-height: 37px;
  font-weight: normal;
  margin-bottom: 1px;
  margin-left: 91px;
}

.white-size26-right-t6 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #ffffff;
  line-height: 37px;
  font-weight: normal;
  margin-top: 1px;
  margin-right: 67px;
}

.w130-h130-down-i7 {
  position: relative;
  width: 130px;
  height: 130px;
  border-radius: 100%;
  align-self: center;
  margin-top: 86px;
}

.row-center-w750-g41 {
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 9px;
  margin-bottom: 9px;
  display: flex;
}

.magenta-size22-absolute-t37 {
  position: absolute;
  left: 18px;
  bottom: 0;
  font-family: PingFangSC-Regular;
  font-size: 22px;
  color: #9013fe;
  line-height: 30px;
  font-weight: normal;
}

.black-size26-t4 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #404040;
  line-height: 37px;
  font-weight: normal;
  margin-bottom: 13px;
}

.w533-h4-i36 {
  position: relative;
  width: 533px;
  height: 4px;
  align-self: flex-start;
}

.column-flex-start-w750-h144-g52 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  height: 144px;
  align-self: flex-start;
  margin-top: 18px;
  display: flex;
}

.white-w750-h143-absolute-s8 {
  position: absolute;
  width: 750px;
  height: 143px;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 1);
}

.row-flex-start-w750-g51 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 27px;
  display: flex;
}

.column-flex-start-g45 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  margin-top: 1px;
  margin-bottom: 21px;
  margin-left: 93px;
  display: flex;
}

.w40-h40-up-i10 {
  position: relative;
  width: 40px;
  height: 40px;
  align-self: center;

  margin-right: 0.5px;
}

.black-size26-down-t13 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #444444;
  line-height: 37px;
  font-weight: normal;
  margin-top: 18px;
}

.w1-h112-i12 {
  position: relative;
  width: 1px;
  height: 112px;
  align-self: center;

  margin-top: 1.5px;
  margin-left: 60px;
}

.column-flex-start-g47 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  margin-bottom: 21px;
  margin-left: 63px;
  display: flex;
}

.w40-h40-up-i9 {
  position: relative;
  width: 40px;
  height: 40px;
  align-self: center;

  margin-right: 0.5px;
}

.black-size26-down-t14 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #444444;
  line-height: 37px;
  font-weight: normal;
  margin-top: 19px;
}

.w1-h112-i11 {
  position: relative;
  width: 1px;
  height: 112px;
  align-self: center;

  margin-top: 2.5px;
  margin-left: 61px;
}

.column-flex-start-g50 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  margin-bottom: 20px;
  margin-left: 90px;
  display: flex;
}

.w40-h40-up-i34 {
  position: relative;
  width: 40px;
  height: 40px;
  align-self: center;

  margin-right: 0.5px;
}

.black-size26-down-t15 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #444444;
  line-height: 37px;
  font-weight: normal;
  margin-top: 20px;
}

.column-flex-start-w750-h101-g56 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  height: 101px;
  align-self: flex-start;
  margin-top: 18px;
  display: flex;
}

.white-w750-h100-absolute-s16 {
  position: absolute;
  width: 750px;
  height: 100px;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 1);
}

.column-flex-start-w750-g55 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 33px;
  display: flex;
}

.row-space-between-w750-up-g54 {
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-bottom: 29px;
  display: flex;
}

.row-flex-start-left-g73 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-end;
  margin-left: 30px;
  display: flex;
}

.w30-h30-left-i17 {
  position: relative;
  width: 30px;
  height: 30px;
  align-self: center;

  margin-top: 1.5px;
}

.black-size26-right-t28 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #444444;
  line-height: 37px;
  font-weight: normal;
  margin-left: 23px;
}

.w10-h18-right-i21 {
  position: relative;
  width: 10px;
  height: 18px;
  align-self: flex-end;

  margin-top: 16px;
  margin-right: 24px;
  margin-bottom: 3px;
}

.w750-h2-down-i25 {
  position: relative;
  width: 750px;
  height: 2px;
  align-self: flex-start;
}

.white-column-flex-start-g60 {
  flex-direction: column;
  width: 750px;

  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
}

.row-space-between-w750-up-g58 {
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 32px;
  margin-bottom: 29px;
  display: flex;
}

.row-flex-start-left-g74 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-end;
  margin-left: 31px;
  display: flex;
}

.w30-h30-left-i35 {
  position: relative;
  width: 30px;
  height: 30px;
  align-self: center;

  margin-top: 1.5px;
}

.black-size26-right-t29 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #444444;
  line-height: 37px;
  font-weight: normal;
  margin-left: 22px;
}

.w10-h18-right-i22 {
  position: relative;
  width: 10px;
  height: 18px;
  align-self: flex-end;

  margin-top: 13px;
  margin-right: 24px;
  margin-bottom: 6px;
}

.w750-h2-down-i26 {
  position: relative;
  width: 750px;
  height: 2px;
  align-self: flex-start;
}

.white-column-flex-start-g64 {
  flex-direction: column;
  justify-content: flex-start;
  width: 750px;

  align-items: flex-start;
  position: relative;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
}

.row-space-between-w750-up-g62 {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 32px;
  margin-bottom: 29px;
  display: flex;
}

.row-flex-start-left-g75 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: center;
  margin-left: 28px;
  display: flex;
}

.w34-h34-left-i32 {
  position: relative;
  width: 34px;
  height: 34px;
  align-self: flex-start;

  margin-top: 2px;
  margin-bottom: 1px;
}

.black-size26-right-t30 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #444444;
  line-height: 37px;
  font-weight: normal;
  margin-left: 21px;
}

.w10-h18-right-i23 {
  position: relative;
  width: 10px;
  height: 18px;
  align-self: center;
  margin-top: 1.5px;
  margin-right: 23px;
}

.w750-h2-down-i27 {
  position: relative;
  width: 750px;
  height: 2px;
  align-self: flex-start;
}

.white-row-space-between-w750-g67 {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 303px;
  padding-top: 31.5px;
  padding-bottom: 31px;
  display: flex;
}

.row-flex-start-left-g76 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: center;
  margin-top: 0.5px;
  margin-left: 33px;
  display: flex;
}

.w28-h27-left-i33 {
  position: relative;
  width: 28px;
  height: 27px;
  align-self: center;

  margin-bottom: 1px;
}

.black-size26-right-t31 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #444444;
  line-height: 37px;
  font-weight: normal;
  margin-left: 22px;
}

.w10-h18-right-i24 {
  position: relative;
  width: 10px;
  height: 18px;
  align-self: center;
  margin-top: 1px;
  margin-right: 22px;
}

/*悬浮*/

.white-column-flex-start-w74-h77-g5 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  position: fixed;
  bottom: 168px;
  right: 24px;
  width: 74px;
  height: 77px;
  background-color: transparent;
  display: flex;
  z-index: 33;
}

.w59-h64-absolute-i1 {
  position: absolute;
  width: 59px;
  height: 64px;
  left: 0;
  top: 0;
}

.white-size20-t3 {
  position: relative;
  align-self: flex-end;
  background-color: rgba(192, 30, 0, 1);
  border-radius: 100px;
  font-family: PingFangSC-Regular;
  font-size: 20px;
  color: #ffffff;
  line-height: 22px;
  font-weight: normal;
  margin-top: 49px;
  padding-right: 2px;
  padding-left: 3px;
}
</style>

<script>
import util from '../lib/util.js';
import alertItem from './alertItem.vue';
export default {
  data: function() {
    return {
      usreData: null,
      starlevelWidth: 0,
      showAlert: false
    };
  },
  components: { alertItem },
  methods: {
    doShowAlert: function() {
      this.showAlert = !this.showAlert;
    },
    goCash: function() {
      util.goPage('./user-cash.html');
    },

    goAbout: function() {
      util.goPage('./user-about.html');
    },
    goInfo: function() {
      util.goPage('./user-info.html');
    },
    goSet: function() {
      util.goPage('./user-set.html');
    },
    goFriend: function() {
      util.goPage('./user-friend.html');
    },
    goLogin: function() {
      util.goPage('./user-login-phone.html');
    },
    goGuide: function() {
      util.goPage('./user-guide.html');
    },
    goNews: function() {
      util.goPage('./user-news.html');
    },
    initcc: function() {
      var self = this;
      console.log('myrefresh111');

      util.getUserInfo(function(data) {
        if (data) {
          self.usreData = data;
          var sw = $api.dom('#g72').offsetWidth;
          self.starlevelWidth = Math.floor(self.usreData.starlevel * sw / 100);
        }
      });
    },
    initcreated: function() {
      var self = this;
      self.initcc();
      util.addEvent('myrefresh', function() {
        self.initcc();
      });
      util.addEvent('myclear', function() {
        self.usreData = null;
      });
      //console.log('myrefresh');
    }
  },
  created: function() {
    this.initcreated();
  }
};
</script>
