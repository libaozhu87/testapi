<template>
  <div class="alert-warp">
    <div class="alert-bg"></div>
    <div id="g21" class="white-column-center-w456-g21">
      <div id="g20" class="column-flex-start-w456-g20">
        <img id="i11" class="w59-h64-i11" src='https://gw.alicdn.com/tfs/TB1Ol3AJrSYBuNjSspfXXcZCpXa-59-64.png' /> <div id="t10" class="black-size30-t10">好友贡献</div>
        <img id="i9" class="w403-h1-i9" src='https://gw.alicdn.com/tfs/TB17hVlJNWYBuNjy1zkXXXGGpXa-403-1.png' />
        <div id="g14" class="column-flex-start-w288-h74-g14"> <div id="t5" class="magenta-size26-absolute-t5">910源石</div> <div id="t6" class="black-size26-w288-t6">昨日您的好友为你贡献：
        </div> </div> <div id="t8" class="black-size26-t8">此前未领取的好友贡献：</div> <div id="t7" class="magenta-size26-t7">5200源石</div> <div @click="goDetail" id="t4"  class="cyan-size26-t4">贡献明细</div>
        <div id="g18" class="column-center-w320-h60-g18">
          <img id="i2" class="w320-h60-background-i2" src='https://gw.alicdn.com/tfs/TB1JDUuJr1YBuNjSszeXXablFXa-320-60.png' /> <div id="t3" class="white-size26-t3">全部领取</div> </div>
      </div>
    </div>
  </div>
</template>

<style scoped> 
.alert-warp{
  position: fixed;
  left: 0px;
  top:0px;
  right: 0px;
  bottom: 0px;
  width: 750px;



}
.alert-bg{
  position: absolute;
  left: 0px;
  top:0px;
  right: 0px;
  bottom: 0px;
  z-index: 0;
  opacity: 0.2;
  width: 750px;
  background: #000000;

}
.white-column-center-w456-g21 {
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 456px;
  height: 567px;
  background-color: #fff;
  padding-top: 33px;
  padding-bottom: 35px;
  display: flex;
  position: absolute;
  left: 0px;
  top:0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  border-radius: 6px;
}

.column-flex-start-w456-g20 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  background-color: #fff;

  width: 456px;
  align-self: flex-start;
  display: flex;
}

.w59-h64-i11 {
  position: relative;
  width: 59px;
  height: 64px;
  align-self: center;
  
  margin-left: 0.5px;
}

.black-size30-t10 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Semibold;
  font-size: 30px;
  color: #3A3A3A;
  line-height: 42px;
  font-weight: normal;
  margin-top: 15px;
  margin-bottom: 20px;
  margin-left: 0.5px;
}

.w403-h1-i9 {
  position: relative;
  width: 403px;
  height: 1px;
  align-self: center;
  
  margin-left: 0.5px;
}

.column-flex-start-w288-h74-g14 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 288px;
  height: 74px;
  align-self: center;
  margin-top: 36px;
  display: flex;
}

.magenta-size26-absolute-t5 {
  position: absolute;
  left: 144.5px;
  bottom: 0;
  transform: translateX(-50%);
  font-family: PingFangSC-Semibold;
  font-size: 26px;
  color: #9013FE;
  line-height: 37px;
  font-weight: normal;
}

.black-size26-w288-t6 {
  position: relative;
  width: 288px;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #3A3A3A;
  line-height: 37px;
  text-align: left;
  font-weight: normal;
}

.black-size26-t8 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #3A3A3A;
  line-height: 37px;
  font-weight: normal;
  margin-top: 15px;
}

.magenta-size26-t7 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Semibold;
  font-size: 26px;
  color: #9013FE;
  line-height: 37px;
  font-weight: normal;
}

.cyan-size26-t4 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #4A90E2;
  line-height: 37px;
  text-decoration: underline;
  font-weight: normal;
  margin-top: 24px;
  margin-left: 0.5px;
}

.column-center-w320-h60-g18 {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 320px;
  height: 60px;
  align-self: center;
  margin-top: 37px;
  margin-right: 2px;
  display: flex;
}

.w320-h60-background-i2 {
  position: absolute;
  width: 320px;
  height: 60px;
  left: 0;
  top: 0;
  
}

.white-size26-t3 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Semibold;
  font-size: 26px;
  color: #FFFFFF;
  line-height: 37px;
  font-weight: normal;
  margin-left: 0.5px;
}
</style>

<script>
  import util from "../lib/util.js";

  export default {
  data: function(){
    return {}
  },
  components: {
  },
  methods: {
    goDetail:function(){
      util.goPage("./user-contribute-detail.html");
    }

  },
  created: function () {
  }
}
</script>
