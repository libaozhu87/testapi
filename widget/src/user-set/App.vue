<template>
  <div>
    <div class="white-column-flex-start-w750-g21">
      <statusbar></statusbar>
      <navbar title="设置"></navbar>

      <div id="g15" class="white-row-space-between-w750-g15" @click="clear">
        <div id="t4" class="black-size32-left-t4">清除缓存</div>
        <img id="i3" class="w40-h40-right-i3" src='https://gw.alicdn.com/tfs/TB1QmTuJuOSBuNjy0FdXXbDnVXa-40-40.png' /> </div>
      <div id="g17" class="white-row-space-between-w750-g17" @click="check">
        <div id="t7" class="black-size32-left-t7">版本更新</div>
        <img id="i6" class="w40-h40-right-i6" src='https://gw.alicdn.com/tfs/TB1XwpdJH9YBuNjy0FgXXcxcXXa-40-40.png' /> </div>
      <div id="g20" class="column-flex-start-w650-h70-g20" @click="loginout">
        <img id="i8" class="w650-h70-background-i8" src='https://gw.alicdn.com/tfs/TB1YESWJpGWBuNjy0FbXXb4sXXa-650-70.png' />
        <div id="t9" class="white-size30-t9">退出登录</div>
      </div>

    </div>
  </div>
</template>


<style>
body {
  background-color: rgba(240, 240, 240, 1) !important;
}
</style>

<style scoped>
.white-column-flex-start-w750-g21 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 750px;
  background-color: rgba(240, 240, 240, 1);
  display: flex;
}
.white-row-space-between-w750-g15 {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: center;
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(213, 213, 213, 1);
  border-style: solid;
  border-bottom-width: 1px; /* no */
  margin-top: 14px;
  padding-top: 36px;
  padding-bottom: 37.5px;
  display: flex;
}

.black-size32-left-t4 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Medium;
  font-size: 32px;
  color: #4a4a4a;
  line-height: 45px;
  font-weight: bold;
  margin-bottom: 1.5px;
  margin-left: 30px;
}

.w40-h40-right-i3 {
  position: relative;
  width: 40px;
  height: 40px;
  align-self: center;

  margin-right: 17px;
}

.white-row-space-between-w750-g17 {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: center;
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(213, 213, 213, 1);
  border-style: solid;
  border-bottom-width: 1px; /* no */
  padding-top: 36px;
  padding-bottom: 37.5px;
  display: flex;
}

.black-size32-left-t7 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Medium;
  font-size: 32px;
  color: #4a4a4a;
  line-height: 45px;
  font-weight: bold;
  margin-bottom: 1.5px;
  margin-left: 30px;
}

.w40-h40-right-i6 {
  position: relative;
  width: 40px;
  height: 40px;
  align-self: center;

  margin-right: 17px;
}

.column-flex-start-w650-h70-g20 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 650px;
  height: 70px;
  align-self: center;
  /*
    margin-top: 867px;
*/
  position: fixed;
  overflow: auto;
  bottom: 43px;
  display: flex;
  left: 0px;
  right: 0px;
  margin: auto;
}

.w650-h70-background-i8 {
  position: absolute;
  width: 650px;
  height: 70px;
  left: 0;
  top: 0;
}

.white-size30-t9 {
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
</style>

<script>
import statusbar from '../compents/statusbar.vue';
import navbar from '../compents/navbar.vue';
import util from '../lib/util.js';

export default {
  data: function() {},
  components: { statusbar, navbar },
  methods: {
    clear: function() {
      api.clearCache(function() {
        api.toast({
          msg: '清除完成'
        });
      });
    },
    check: function() {
      //util.alert('已经是最新版本了');
      api.toast({
        msg: '已经是最新版本了'
      });
    },
    loginout: function() {
      util.loginout();

      /*       util.ajax(
        'https://restful.yatou.com/user/logout/',
        {},
        function(res) {
          util.loginout(data);
        },
        'GET'
      ); */
    }
  },
  created: function() {}
};
</script>
