
<template>

  <div class="pr">
    <div id="g18" class="white-row-center-w750-up-g18">
      <img id="i3" @click="closeLogin" class="w52-h50-absolute-i3" src='https://gw.alicdn.com/tfs/TB196KOGXGWBuNjy0FbXXb4sXXa-52-50.png' />
      <div id="t2" class="black-size32-t2">{{title}}</div>
      <div v-if="showdetailtext" id="a32" class="column-center-background-a32">
        <div id="t16" class="cyan-size26-t16" @click="goDetail">贡献明细</div>
      </div>
    </div>
    <div class="wh"></div>

  </div>

</template>
<style scoped>
.pr {
  position: relative;
}
.column-center-background-a32 {
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  right: 0px;
  display: flex;
}
.cyan-size26-t16 {
  position: relative;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #4a90e2;
  line-height: 37px;
  text-decoration: underline;
  font-weight: normal;
  margin-right: 30px;
}

.white-row-center-w750-up-g18 {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 750px;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(213, 213, 213, 1);
  border-style: solid;
  border-bottom-width: 1px;
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  z-index: 99;
}

.wh {
  width: 750px;
  height: 96px;
  background: #ffffff;
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
  line-height: 44px;
  font-weight: bold;
  margin-top: 0.5px;
}
</style>
<script>
export default {
  props: ['title', 'showdetailtext'],
  data: function() {
    return {};
  },
  methods: {
    closeLogin: function() {
      //api.closeWin();
    }
  },
  created: function() {}
};
</script>
