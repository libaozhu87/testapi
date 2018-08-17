<template>
  <div>
    <div id="g33" class="white-column-flex-start-w750-g31">
      <statusbar></statusbar>
      <navbar title="好友" :showdetailtext=true></navbar>
      <bar @currentbarindex="changeBar" :menu="menu"></bar>

      <div v-if="currentBar==1">

        <div v-if="!master.length">
          <div id="g28" class="white-column-center-w650-g28">
            <input v-model="masterid" id="t11" class="ltgray-size24-t11" placeholder="输入好友的邀请码可拜师">
          </div>
          <div id="g30" @click="doMaster()" class="column-flex-start-w650-h70-g30">
            <img id="i12" class="w650-h70-background-i12" src='https://gw.alicdn.com/tfs/TB1c2LNJeuSBuNjy1XcXXcYjFXa-650-70.png' />
            <div id="t13" class="white-size30-t13">确定</div>
          </div>

        </div>

        <div v-if="master.length" class="white-column-flex-start-w750-g17">
          <div id="g12" class="white-row-space-between-w750-up-g12">
            <div id="t2" class="black-size22-t2">昵称</div>
            <div id="t3" class="black-size22-t3">星级</div>
            <div id="t4" class="black-size22-t4">算力</div>
          </div>

          <div v-for="item in master" id="g16" class="white-column-flex-start-down-g16" @click="goFriendInfo">
            <div id="g14" class="row-center-w750-up-g14">
              <div id="a18" class="column-center-background-a18">
                <div class="black-size24-t7">{{item.username}}</div>
              </div>
              <div class="black-size24-t8">{{item.starlevel}}</div>
              <div id="a19" class="column-center-background-a19">
                <div id="t6" class="black-size24-t6">{{item.power}}</div>
              </div>
            </div>
            <img class="w750-h1-down-i9" src='https://gw.alicdn.com/tfs/TB11FoMJf5TBuNjSspmXXaDRVXa-750-1.png' />
          </div>

        </div>

      </div>

      <div v-if="currentBar==2">
        <div class="white-column-flex-start-w750-g33" v-if="!apprentice.length">
          <div id="g27" class="white-column-flex-start-h460-g27">
            <div id="g19" class="row-center-w750-g19">
              <img id="i5" class="w248-h2-absolute-i5" src='https://gw.alicdn.com/tfs/TB1WRPYJeuSBuNjSsplXXbe8pXa-248-2.png' />
              <div class="dkgray-size26-t4">邀请徒弟</div>
              <img id="i7" class="w248-h2-absolute-i7" src='https://gw.alicdn.com/tfs/TB1eJvoJXGWBuNjy0FbXXb4sXXa-248-2.png' /> </div>
            <div id="g20" class="column-flex-start-w488-h74-g20">
              <div id="t6" class="black-size26-w488-t6">1.邀请用户注册全民股东，成为您的徒弟；
              </div>
              <div id="t8" class="black-size26-absolute-t8">2.邀请者，注册时间必须早于被邀请者；</div>
            </div>
            <div id="g23" class="row-center-w750-g23">
              <img id="i10" class="w248-h2-absolute-i10" src='https://gw.alicdn.com/tfs/TB1GhgOJf5TBuNjSspmXXaDRVXa-248-2.png' />
              <div id="t9" class="dkgray-size26-t9">徒弟贡献</div>
              <img id="i12" class="w248-h2-absolute-i12" src='https://gw.alicdn.com/tfs/TB1DoUNJkCWBuNjy0FaXXXUlXXa-248-2.png' /> </div>
            <div id="g24" class="column-flex-start-w593-h74-g24">
              <div id="t11" class="black-size26-w593-t11">1.徒弟收取钻石时，您获得收益分红（系统奖励）；
              </div>
              <div id="t13" class="black-size26-absolute-t13">2.徒弟获得收益A，您获得收益分红为20%A；</div>
            </div>
          </div>
        </div>
        <prenticeItem v-if="apprentice.length" :list="apprentice"></prenticeItem>
        <div class="flexd">
          <div id="g30" class="white-row-flex-start-w750-g30">
            <div id="t15" class="black-size26-t15">我的邀请码</div>
            <div id="t16" class="red-size26-t16">{{usreData.id||0}}</div>
            <img id="i17" @click="goInvite" class="w29-h29-i17" src='https://gw.alicdn.com/tfs/TB1P8TYJeuSBuNjSsplXXbe8pXa-29-29.png' />
          </div>
          <div id="g31" class="column-flex-start-w650-h70-g31" @click="goShare">
            <img id="i1" class="w650-h70-background-i1" src='https://gw.alicdn.com/tfs/TB1aub_Jf9TBuNjy0FcXXbeiFXa-650-70.png' />
            <div class="white-size30-t2">邀请徒弟</div>
          </div>
        </div>

      </div>

      <div v-if="currentBar==3">
        <div class="white-column-flex-start-w750-g33">

          <div id="g27" class="white-column-flex-start-h460-g27" v-if="!disciple.length">
            <div id="g19" class="row-center-w750-g19">
              <img id="i5" class="w248-h2-absolute-i5" src='https://gw.alicdn.com/tfs/TB1WRPYJeuSBuNjSsplXXbe8pXa-248-2.png' />
              <div class="dkgray-size26-t4">徒孙说明</div>
              <img id="i7" class="w248-h2-absolute-i7" src='https://gw.alicdn.com/tfs/TB1eJvoJXGWBuNjy0FbXXb4sXXa-248-2.png' /> </div>
            <div id="g20" class="column-flex-start-w488-h74-g20">
              <div id="t6" class="black-size26-w488-t6">1.您徒弟的徒弟，即为您的徒孙；</div>
            </div>
            <div id="g23" class="row-center-w750-g23">
              <img id="i10" class="w248-h2-absolute-i10" src='https://gw.alicdn.com/tfs/TB1GhgOJf5TBuNjSspmXXaDRVXa-248-2.png' />
              <div id="t9" class="dkgray-size26-t9">徒孙贡献</div>
              <img id="i12" class="w248-h2-absolute-i12" src='https://gw.alicdn.com/tfs/TB1DoUNJkCWBuNjy0FaXXXUlXXa-248-2.png' /> </div>
            <div id="g24" class="column-flex-start-w593-h74-g24">
              <div id="t11" class="black-size26-w593-t11">
                1.徒孙收取钻石时，您获得收益分红（系统奖励）；
              </div>
              <div id="t13" class="black-size26-absolute-t13">
                2.徒孙获得收益A，您获得收益分红为20%A；</div>
            </div>
          </div>
        </div>

        <prenticeItem v-if="disciple.length" :list="disciple"></prenticeItem>

      </div>

    </div>
  </div>
</template>

<style>
body {
  background: rgba(240, 240, 240, 1);
}
</style>
<style scoped>
.white-column-flex-start-w750-g31 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 750px;
  background-color: rgba(240, 240, 240, 1);
  display: flex;
}

.white-column-flex-start-g26 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: center;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
}

.row-center-w750-g23 {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 17px;
  display: flex;
}

.magenta-size26-t5 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;

  font-size: 26px;
  /*
    color: #9013FE;
*/
  color: #444444;
  line-height: 37px;
  font-weight: normal;
}
.choosebartext {
  color: #9013fe !important;
  font-family: PingFangSC-Semibold !important;
}

.w1-h47-i4 {
  position: relative;
  width: 1px;
  height: 47px;
  align-self: center;

  margin-left: 87px;
}

.black-size26-t7 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #444444;
  line-height: 37px;
  font-weight: normal;
  margin-left: 88px;
}

.w1-h47-i3 {
  position: relative;
  width: 1px;
  height: 47px;
  align-self: center;

  margin-left: 87px;
}

.black-size26-t8 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #3a3a3a;
  line-height: 37px;
  font-weight: normal;
  margin-left: 90px;
}

.choosebar1 {
  margin-left: 91px;
}
.choosebar2 {
  margin-left: 321px;
}
.choosebar3 {
  margin-left: 550px;
}
.magenta-w109-h2-s6 {
  transition: margin 0.3s;
  position: relative;

  width: 109px;
  height: 2px;
  align-self: flex-start;
  background-color: rgba(144, 19, 254, 1);
  margin-top: 13px;
  /*
    margin-right: 550px;
*/
  /*
    margin-left: 91px;
*/
}

.w750-h1-i9 {
  position: relative;
  width: 750px;
  height: 1px;
  align-self: flex-start;
}

.white-column-center-w650-g28 {
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 650px;
  align-self: center;
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(213, 213, 213, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  margin-top: 67px;
  padding-top: 18px;
  padding-bottom: 19px;

  display: flex;
}

.ltgray-size24-t11 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  width: 85%;

  font-size: 24px;
  color: #3a3a3a;
  line-height: 40px;
  margin-left: 35px;
}

.column-flex-start-w650-h70-g30 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  width: 650px;
  height: 70px;
  align-self: center;
  /*margin-top: 903px;*/
  bottom: 43px;
  display: flex;
}

.w650-h70-background-i12 {
  position: absolute;
  width: 650px;
  height: 70px;
  left: 0;
  top: 0;
}

.white-size30-t13 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Medium;
  font-size: 30px;
  color: #ffffff;
  line-height: 42px;
  font-weight: bold;
  margin-top: 12px;
  margin-left: 0.5px;
}

/*有师傅*/

.white-column-flex-start-w750-g17 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
}

.white-row-space-between-w750-up-g12 {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: flex-start;
  background-color: rgba(235, 235, 235, 1);
  padding-top: 10px;
  padding-bottom: 9px;
  display: flex;
}

.black-size22-t2 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 22px;
  color: #3a3a3a;
  line-height: 30px;
  font-weight: normal;
  margin-left: 123px;
}

.black-size22-t3 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 22px;
  color: #3a3a3a;
  line-height: 30px;
  font-weight: normal;
  margin-top: 1px;
}

.black-size22-t4 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 22px;
  color: #3a3a3a;
  line-height: 30px;
  font-weight: normal;
  margin-top: 1px;
  margin-right: 122px;
}

.white-column-flex-start-down-g16 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  margin-top: -1px;
  display: flex;
}

.row-center-w750-up-g14 {
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 29px;
  margin-bottom: 27px;
  display: flex;
}

.column-center-background-a18 {
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
}

.black-size24-t7 {
  position: relative;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-right: 520px;
  margin-left: 61px;
}

.black-size24-t8 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
}

.column-center-background-a19 {
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
}

.black-size24-t6 {
  position: relative;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-right: 110px;
  margin-left: 573px;
}

.w750-h1-down-i9 {
  position: relative;
  width: 750px;
  height: 1px;
  align-self: flex-start;
}

/*没徒弟*/

.white-column-flex-start-w750-g33 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 750px;
  background-color: rgba(240, 240, 240, 1);
  display: flex;
}

.white-column-flex-start-h460-g27 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  height: 460px;
  align-self: center;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
}

.row-center-w750-g19 {
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 48px;
  display: flex;
}

.w248-h2-absolute-i5 {
  position: absolute;
  width: 248px;
  height: 2px;
  left: 30px;
  top: 18px;
}

.dkgray-size26-t4 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #9b9b9b;
  line-height: 37px;
  font-weight: normal;
}

.w248-h2-absolute-i7 {
  position: absolute;
  width: 248px;
  height: 2px;
  right: 29px;
  top: 18px;
}

.column-flex-start-w488-h74-g20 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 488px;
  height: 74px;
  align-self: flex-start;
  margin-top: 38px;
  margin-right: 232px;
  margin-left: 30px;
  display: flex;
}

.black-size26-w488-t6 {
  position: relative;
  width: 488px;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #040001;
  line-height: 37px;
  text-align: left;
  font-weight: normal;
}

.black-size26-absolute-t8 {
  position: absolute;
  left: 0;
  bottom: 0;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #040001;
  line-height: 37px;
  font-weight: normal;
}

.row-center-w750-g23 {
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 56px;
  display: flex;
}

.w248-h2-absolute-i10 {
  position: absolute;
  width: 248px;
  height: 2px;
  left: 30px;
  top: 18px;
}

.dkgray-size26-t9 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #9b9b9b;
  line-height: 37px;
  font-weight: normal;
}

.w248-h2-absolute-i12 {
  position: absolute;
  width: 248px;
  height: 2px;
  right: 29px;
  top: 18px;
}

.column-flex-start-w593-h74-g24 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 593px;
  height: 74px;
  align-self: flex-start;
  margin-top: 38px;
  margin-right: 127px;
  margin-left: 30px;
  display: flex;
}

.black-size26-w593-t11 {
  position: relative;
  width: 593px;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #040001;
  line-height: 37px;
  text-align: left;
  font-weight: normal;
}

.black-size26-absolute-t13 {
  position: absolute;
  left: 0;
  bottom: 0;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #040001;
  line-height: 37px;
  font-weight: normal;
}

/*有徒弟*/

/*-----------*/

.flexd {
  position: fixed;
  bottom: 43px;
}

.white-row-flex-start-w750-g30 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: center;
  background-color: rgba(255, 253, 230, 1);
  /*
    margin-top: 505px;
*/
  padding-top: 6.5px;
  padding-bottom: 6px;
  display: flex;
}

.black-size26-t15 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Medium;
  font-size: 26px;
  color: #040001;
  line-height: 37px;
  font-weight: bold;
  margin-top: 0.5px;
  margin-left: 31px;
}

.red-size26-t16 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Medium;
  font-size: 26px;
  color: #c01e00;
  line-height: 37px;
  font-weight: bold;
  margin-top: 0.5px;
}

.w29-h29-i17 {
  position: relative;
  width: 29px;
  height: 29px;
  align-self: center;

  margin-top: 0.5px;
  margin-left: 14px;
}

.column-flex-start-w650-h70-g31 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 750px;
  height: 70px;
  align-self: center;
  margin-top: 24px;
  /*
    margin-bottom: 43px;
*/
  display: flex;
}

.w650-h70-background-i1 {
  position: absolute;
  width: 650px;
  height: 70px;
  left: 0px;
  top: 0px;
  right: 0px;
  margin: auto;
}

.white-size30-t2 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Medium;
  font-size: 30px;
  color: #ffffff;
  line-height: 42px;
  /*
    font-weight: bold;
*/
  margin-top: 12px;
  margin-left: 0.5px;
}
</style>


<script>
import statusbar from '../compents/statusbar.vue';
import navbar from '../compents/navbar.vue';
import prenticeItem from './prenticeItem.vue';
import util from '../lib/util.js';
import bar from '../compents/bar.vue';
export default {
  data: function() {
    return {
      currentBar: 1,
      master: [],
      usreData: {},
      apprentice: [],
      disciple: [],
      masterid: '',
      menu: ['师傅', '徒弟', '徒孙']
    };
  },
  components: { statusbar, navbar, prenticeItem, bar },
  methods: {
    changeBar: function(index) {
      this.currentBar = index;
    },
    doMaster: function() {
      var self = this;
      if (!self.masterid) {
        util.alert('需要输入邀请码');
        return;
      }
      util.ajax(
        'https://restful.yatou.com/user/tomaster/',
        { masterid: self.masterid },
        function(res) {
          //self.master = res;
          console.log(res);
          util.alert(res.msg);
          self.getmaster();
        }
      );
    },
    goInvite: function() {
      util.goPage('./user-invite-info.html');
    },
    goShare: function() {
      util.goPage('./user-share.html');
    },
    goFriendInfo: function() {
      util.goPage('./user-friend-info.html');
    },
    getmaster: function() {
      var self = this;
      util.ajax(
        'https://restful.yatou.com/user/master/',
        {},
        function(res) {
          self.master = res;
          console.log('master');
          console.log(res);
        },
        'GET'
      );
    },
    getapprentice: function() {
      var self = this;
      util.ajax(
        'https://restful.yatou.com/user/apprentice/',
        {},
        function(res) {
          self.apprentice = res || [];
          console.log('apprentice');
          console.log(res);
        },
        'GET'
      );
    },
    getdisciple: function() {
      var self = this;
      util.ajax(
        'https://restful.yatou.com/user/disciple/',
        {},
        function(res) {
          self.disciple = res || [];
          console.log('disciple');

          console.log(res);
        },
        'GET'
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
    this.getmaster();
    this.getapprentice();
    this.getdisciple();
  }
};
</script>
