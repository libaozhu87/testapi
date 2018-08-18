<template>
  <div id="g7" class="white-column-flex-start-w750-g7">
    <div id="g6" class="column-flex-start-w750-g6">
      <div id="t2" class="black-size30-up-t2">邀请好友，可偷取好友钻石</div>
      <div id="g5" class="column-flex-start-w650-h70-down-g5" @click="gofriend">
        <img id="i3" class="w650-h70-background-i3" src='http://lubanpsdupload.oss-cn-shanghai.aliyuncs.com/hongxuan-sketch/hongxuan-sketch-module1534414669448.png' />
        <div id="t4" class="white-size30-t4">邀请好友</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.white-column-flex-start-w750-g7 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  background-color: rgba(240, 240, 240, 1);
  display: flex;
}

.column-flex-start-w750-g6 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 212px;
  margin-bottom: 43px;
  display: flex;
}

.black-size30-up-t2 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Medium;
  font-size: 30px;
  color: #3a3a3a;
  line-height: 42px;
  font-weight: bold;
}

.column-flex-start-w650-h70-down-g5 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 650px;
  height: 70px;
  align-self: center;
  margin-top: 247px;
  display: flex;
}

.w650-h70-background-i3 {
  position: absolute;
  width: 650px;
  height: 70px;
  left: 0;
  top: 0;
  resize: stretch;
}

.white-size30-t4 {
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
import util from '../lib/util.js';

export default {
  data: function() {
    return {};
  },
  methods: {
    gofriend: function() {
      util.goPage('./user-friend.html');
    }
  },
  created: function() {}
};
</script>