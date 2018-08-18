<template>
  <div>
    <div class="white-column-flex-start-w750-g29">
      <statusbar></statusbar>
      <navbar title="邀请徒弟"></navbar>

      <div id="g27" class="row-center-w750-h661-g27">
        <img id="i5" class="w750-h661-background-i5" src='https://gw.alicdn.com/tfs/TB1hBDWJx9YBuNjy0FfXXXIsVXa-750-661.png' />
        <div id="t8" class="white-size40-t8">全民股东</div>
      </div>
      <div id="g33" class="white-column-flex-start-h660-absolute-g33">
        <img id="i7" class="w310-h313-i7" src='https://gw.alicdn.com/tfs/TB1uX53JwmTBuNjy1XbXXaMrVXa-310-313.png' />
        <div id="t9" class="black-size24-t9">长按识别二维码，下载全民股东</div>
        <div id="g31" class="row-space-between-w582-g31">
          <div id="g46" class="row-flex-start-left-g46">
            <img id="i13" class="w90-h90-left-i13" src='https://gw.alicdn.com/tfs/TB1rlTWJx9YBuNjy0FfXXXIsVXa-90-90.png' />
            <div id="t14" class="black-size26-right-t14">邀请码：{{usreData.id}}</div>
          </div>
          <div id="g47" class="row-flex-start-right-g47" @click="copy">
            <img id="i15" class="w42-h42-left-i15" src='https://gw.alicdn.com/tfs/TB1q_mnJGmWBuNjy1XaXXXCbXXa-42-42.png' />
            <div id="t16" class="cyan-size26-right-t16">复制</div>
          </div>
        </div>
      </div>
      <div id="g37" class="row-space-between-w750-g37">
        <div id="g48" class="row-flex-start-left-g48">
          <div id="t10" class="black-size26-left-t10">星级:5</div>
          <div id="t11" class="black-size26-right-t11">可邀请25个(已邀20个)</div>
        </div>
        <div id="t12" class="dkgray-size22-right-t12">更高一级可邀请30个</div>
      </div>
      <div id="g43" class="white-column-center-w670-g43">
        <div id="g52" class="row-flex-start-g52">
          <div id="g49" class="column-flex-start-g49">
            <img id="i18" class="w87-h87-up-i18" src='https://gw.alicdn.com/tfs/TB1kl6WJx9YBuNjy0FfXXXIsVXa-87-87.png' />
            <div id="t21" class="black-size24-down-t21">朋友圈邀请</div>
          </div>
          <div id="g50" class="column-flex-start-g50">
            <img id="i19" class="w107-h107-up-i19" src='https://gw.alicdn.com/tfs/TB1OnOnJGmWBuNjy1XaXXXCbXXa-107-107.png' />
            <div id="t22" class="black-size24-down-t22">微信邀请</div>
          </div>
          <div id="g51" class="column-flex-start-g51">
            <img id="i20" class="w75-h88-up-i20" src='https://gw.alicdn.com/tfs/TB1z3tXczrguuRjy0FeXXXcbFXa-75-88.png' />
            <div id="t23" class="black-size24-down-t23">QQ邀请</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>





<style scoped>
.white-column-flex-start-w750-h1334-g45 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 750px;
  height: 1334px;
  background-color: rgba(247, 247, 249, 1);
  display: flex;
}

.white-row-center-w750-g26 {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: center;
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(213, 213, 213, 1);
  border-style: solid;
  border-width: 1px;
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

.w30-h30-absolute-i4 {
  position: absolute;
  width: 30px;
  height: 30px;
  right: 30px;
  top: 36px;
}

.row-center-w750-h661-g27 {
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 750px;
  height: 661px;
  align-self: center;
  margin-top: 1px;
  display: flex;
}

.w750-h661-background-i5 {
  position: absolute;
  width: 750px;
  height: 661px;
  left: 0;
  top: 0;
}

.white-size40-t8 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Semibold;
  font-size: 40px;
  color: #ffffff;
  line-height: 56px;
  font-weight: normal;
  margin-top: 91px;
}

.white-column-flex-start-h660-absolute-g33 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  height: 660px;
  left: 375px;
  top: 325px;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 16px;
  padding-right: 44px;
  padding-left: 42px;
  display: flex;
}

.w310-h313-i7 {
  position: relative;
  width: 310px;
  height: 313px;
  align-self: center;

  margin-top: 93px;
}

.black-size24-t9 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-top: 30px;
}

.row-space-between-w582-g31 {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 582px;
  align-self: center;
  margin-top: 55px;
  margin-right: 2px;
  display: flex;
}

.row-flex-start-left-g46 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: center;
  display: flex;
}

.w90-h90-left-i13 {
  position: relative;
  width: 90px;
  height: 90px;
  align-self: center;
}

.black-size26-right-t14 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Semibold;
  font-size: 26px;
  color: #3a3a3a;
  line-height: 37px;
  font-weight: normal;
  margin-bottom: 0.5px;
  margin-left: 27px;
}

.row-flex-start-right-g47 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: center;
  margin-top: 1px;
  display: flex;
}

.w42-h42-left-i15 {
  position: relative;
  width: 42px;
  height: 42px;
  align-self: center;
}

.cyan-size26-right-t16 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #4a90e2;
  line-height: 37px;
  font-weight: normal;
  margin-bottom: 1.5px;
  margin-left: 8px;
}

.row-space-between-w750-g37 {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 247px;
  display: flex;
}

.row-flex-start-left-g48 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: center;
  margin-left: 39px;
  display: flex;
}

.black-size26-left-t10 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Semibold;
  font-size: 26px;
  color: #3a3a3a;
  line-height: 37px;
  font-weight: normal;
}

.black-size26-right-t11 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #3a3a3a;
  line-height: 37px;
  font-weight: normal;
  margin-left: 40px;
}

.dkgray-size22-right-t12 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 22px;
  color: #9b9b9b;
  line-height: 30px;
  font-weight: normal;
  margin-top: 0.5px;
  margin-right: 40px;
}

.white-column-center-w670-g43 {
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 670px;
  align-self: center;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 16px;
  margin-top: 20px;
  padding-top: 42px;
  padding-bottom: 41px;
  display: flex;
}

.row-flex-start-g52 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  align-self: flex-start;
  margin-left: 48px;
  display: flex;
}

.column-flex-start-g49 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-end;
  margin-top: 9px;
  display: flex;
}

.w87-h87-up-i18 {
  position: relative;
  width: 87px;
  height: 87px;
  align-self: center;

  margin-left: 0.5px;
}

.black-size24-down-t21 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-top: 24px;
}

.column-flex-start-g50 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-end;
  margin-left: 113px;
  display: flex;
}

.w107-h107-up-i19 {
  position: relative;
  width: 107px;
  height: 107px;
  align-self: center;
}

.black-size24-down-t22 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-top: 13px;
  margin-left: 0.5px;
}

.column-flex-start-g51 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-end;
  margin-top: 8px;
  margin-left: 134px;
  display: flex;
}

.w75-h88-up-i20 {
  position: relative;
  width: 75px;
  height: 88px;
  align-self: center;
}

.black-size24-down-t23 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-top: 24px;
}
</style>

<script>
import statusbar from '../compents/statusbar.vue';
import navbar from '../compents/navbar.vue';
import util from '../lib/util.js';

export default {
  data: function() {
    return {
      usreData: {}
    };
  },
  components: { statusbar, navbar },
  methods: {
    copy: function() {
      var clipBoard = api.require('clipBoard');
      clipBoard.set(
        {
          value: usreData.id
        },
        function(ret, err) {
          util.alert('复制成功');
          if (ret) {
            //alert(JSON.stringify(ret));
          } else {
            //alert(JSON.stringify(err));
          }
        }
      );
    }
  },
  created: function() {
    var self = this;

    util.getUserInfo(function(data) {
      if (data) {
        self.usreData = data;
      }
    });
  }
};
</script>
