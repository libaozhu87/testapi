
<template>
  <div>
    <div class="white-column-flex-start-w750-g119">
      <statusbar></statusbar>
      <navbar title="应用"></navbar>


      <bar @currentbarindex="changeBar" :menu="menu"></bar>


      <div v-if="currentBar==1">
        <div @click="goAppDtail" id="g74" class="white-row-space-between-w750-g74">
          <div id="g120" class="row-flex-start-left-g120">
            <img id="i17" class="w80-h80-left-i17" src='https://gw.alicdn.com/tfs/TB1KskAGL1TBuNjy0FjXXajyXXa-80-80.png' />
            <div id="g70" class="column-flex-start-right-g70"> <div id="t14" class="black-size26-t14">嘟嘟影视</div> <div id="t15" class="dkgray-size22-t15">9.1M</div> <div id="t16" class="dkgray-size22-t16">免费观看VIP影视大片</div> </div>
          </div>
          <div id="g121" class="row-flex-start-right-g121"> <div id="t12" class="black-size24-left-t12">注册  ＋20000</div>
            <img id="i13" class="w32-h32-right-i13" src='https://gw.alicdn.com/tfs/TB11myDGL9TBuNjy0FcXXbeiFXa-32-32.png' /> </div>
        </div>
      </div>
      <div v-if="currentBar==2">
        <div   class="white-row-space-between-w750-g74">
          <div id="g120" class="row-flex-start-left-g120">
            <img id="i17" class="w80-h80-left-i17" src='https://gw.alicdn.com/tfs/TB1KskAGL1TBuNjy0FjXXajyXXa-80-80.png' />
            <div id="g70" class="column-flex-start-right-g70"> <div id="t14" class="black-size26-t14">游戏</div> <div id="t15" class="dkgray-size22-t15">9.1M</div> <div id="t16" class="dkgray-size22-t16">免费观看VIP影视大片</div> </div>
          </div>
          <div id="g121" class="row-flex-start-right-g121"> <div id="t12" class="black-size24-left-t12">注册  ＋20000</div>
            <img id="i13" class="w32-h32-right-i13" src='https://gw.alicdn.com/tfs/TB11myDGL9TBuNjy0FcXXbeiFXa-32-32.png' /> </div>
        </div>


      </div>
      <div v-if="currentBar==3">

        <div   class="white-row-space-between-w750-g74">
          <div  class="row-flex-start-left-g120">
            <img  class="w80-h80-left-i17" src='https://gw.alicdn.com/tfs/TB1KskAGL1TBuNjy0FjXXajyXXa-80-80.png' />
            <div  class="column-flex-start-right-g70"> <div id="t14" class="black-size26-t14">活动奖励</div> <div id="t15" class="dkgray-size22-t15">9.1M</div> <div id="t16" class="dkgray-size22-t16">免费观看VIP影视大片</div> </div>
          </div>
          <div  class="row-flex-start-right-g121"> <div id="t12" class="black-size24-left-t12">＋20000</div>
            <img  class="w32-h32-right-i13" src='https://gw.alicdn.com/tfs/TB11myDGL9TBuNjy0FcXXbeiFXa-32-32.png' /> </div>
        </div>
      </div>


      <div id="s60" class="white-w750-h160-s60"></div>
    </div>
  </div>
</template>
<style scoped>
  .white-column-flex-start-w750-g119 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    width: 750px;
    background-color: rgba(240, 240, 240, 1);
    display: flex;
  }

  .white-row-center-w750-g62 {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 750px;
    align-self: flex-start;
    background-color: rgba(255, 255, 255, 1);
    border-color: rgba(213, 213, 213, 1);
    border-style: solid;
    border-width: 1px;
    padding-top: 25px;
    padding-bottom: 25px;
    display: flex;
  }

  .w52-h50-absolute-i10 {
    position: absolute;
    width: 52px;
    height: 50px;
    left: 13px;
    top: 25px;
    
  }

  .black-size32-t9 {
    position: relative;
    align-self: center;
    font-family: PingFangSC-Medium;
    font-size: 32px;
    color: #4A4A4A;
    line-height: 45px;
    font-weight: bold;
    margin-top: 0.5px;
  }

  .white-column-flex-start-w750-g68 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    width: 750px;
    align-self: flex-start;
    background-color: rgba(255, 255, 255, 1);
    margin-top: 1px;
    display: flex;
  }

  .row-flex-start-w750-up-g66 {
    flex-direction: row;
    justify-content: flex-start;
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
    font-family: PingFangSC-Semibold;
    font-size: 26px;
    color: #9013FE;
    line-height: 37px;
    font-weight: normal;
    margin-left: 119px;
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
    color: #444444;
    line-height: 37px;
    font-weight: normal;
    margin-left: 62px;
  }

  .magenta-w109-h2-down-s6 {
    position: relative;
    width: 109px;
    height: 2px;
    align-self: flex-start;
    background-color: rgba(144, 19, 254, 1);
    margin-top: 13px;
    margin-bottom: 1px;
    margin-left: 91px;
  }

  .white-row-space-between-w750-g74 {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 750px;
    align-self: flex-start;
    background-color: rgba(255, 255, 255, 1);
    border-color: rgba(213, 213, 213, 1);
    border-style: solid;
    border-bottom-width: 1px;
    padding-top: 25px;
    padding-bottom: 25.5px;
    display: flex;
  }

  .row-flex-start-left-g120 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    align-self: center;
    margin-bottom: 0.5px;
    margin-left: 30px;
    display: flex;
  }

  .w80-h80-left-i17 {
    position: relative;
    width: 80px;
    height: 80px;
    align-self: center;
    
    margin-top: 0.5px;
  }

  .column-flex-start-right-g70 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    align-self: center;
    margin-left: 28px;
    display: flex;
  }

  .black-size26-t14 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 26px;
    color: #3A3A3A;
    line-height: 37px;
    font-weight: normal;
    margin-right: 106px;
  }

  .dkgray-size22-t15 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 22px;
    color: #B6B6B6;
    line-height: 30px;
    font-weight: normal;
    margin-top: 5px;
    margin-right: 163px;
  }

  .dkgray-size22-t16 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 22px;
    color: #B6B6B6;
    line-height: 30px;
    font-weight: normal;
    margin-top: 7px;
  }

  .row-flex-start-right-g121 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    align-self: center;
    margin-top: 0.5px;
    margin-right: 32px;
    display: flex;
  }

  .black-size24-left-t12 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #3A3A3A;
    line-height: 33px;
    font-weight: normal;
  }

  .w32-h32-right-i13 {
    position: relative;
    width: 32px;
    height: 32px;
    align-self: flex-start;
    
    margin-bottom: 1px;
    margin-left: 10px;
  }

  .white-row-space-between-w750-g81 {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 750px;
    align-self: flex-start;
    background-color: rgba(255, 255, 255, 1);
    border-color: rgba(213, 213, 213, 1);
    border-style: solid;
    border-width: 1px;
    margin-top: 1px;
    padding-top: 25px;
    padding-bottom: 25.5px;
    display: flex;
  }

  .row-flex-start-left-g122 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    align-self: center;
    margin-bottom: 0.5px;
    margin-left: 30px;
    display: flex;
  }

  .w80-h80-left-i24 {
    position: relative;
    width: 80px;
    height: 80px;
    align-self: center;
    
    margin-top: 0.5px;
  }

  .column-flex-start-right-g77 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    align-self: center;
    margin-left: 28px;
    display: flex;
  }

  .black-size26-t21 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 26px;
    color: #3A3A3A;
    line-height: 37px;
    font-weight: normal;
    margin-right: 106px;
  }

  .dkgray-size22-t22 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 22px;
    color: #B6B6B6;
    line-height: 30px;
    font-weight: normal;
    margin-top: 5px;
    margin-right: 163px;
  }

  .dkgray-size22-t23 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 22px;
    color: #B6B6B6;
    line-height: 30px;
    font-weight: normal;
    margin-top: 7px;
  }

  .row-flex-start-right-g123 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    align-self: center;
    margin-top: 0.5px;
    margin-right: 32px;
    display: flex;
  }

  .black-size24-left-t19 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #3A3A3A;
    line-height: 33px;
    font-weight: normal;
  }

  .w32-h32-right-i20 {
    position: relative;
    width: 32px;
    height: 32px;
    align-self: flex-start;
    
    margin-bottom: 1px;
    margin-left: 10px;
  }

  .white-row-space-between-w750-g87 {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 750px;
    align-self: flex-start;
    background-color: rgba(255, 255, 255, 1);
    border-color: rgba(213, 213, 213, 1);
    border-style: solid;
    border-width: 1px;
    margin-top: 1px;
    padding-top: 25px;
    padding-bottom: 25.5px;
    display: flex;
  }

  .row-flex-start-left-g124 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    align-self: center;
    margin-bottom: 0.5px;
    margin-left: 30px;
    display: flex;
  }

  .w80-h80-left-i31 {
    position: relative;
    width: 80px;
    height: 80px;
    align-self: center;
    
    margin-top: 0.5px;
  }

  .column-flex-start-right-g83 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    align-self: center;
    margin-left: 28px;
    display: flex;
  }

  .black-size26-t28 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 26px;
    color: #3A3A3A;
    line-height: 37px;
    font-weight: normal;
    margin-right: 106px;
  }

  .dkgray-size22-t29 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 22px;
    color: #B6B6B6;
    line-height: 30px;
    font-weight: normal;
    margin-top: 5px;
    margin-right: 163px;
  }

  .dkgray-size22-t30 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 22px;
    color: #B6B6B6;
    line-height: 30px;
    font-weight: normal;
    margin-top: 7px;
  }

  .row-flex-start-right-g125 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    align-self: center;
    margin-top: 0.5px;
    margin-right: 32px;
    display: flex;
  }

  .black-size24-left-t26 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #3A3A3A;
    line-height: 33px;
    font-weight: normal;
  }

  .w32-h32-right-i27 {
    position: relative;
    width: 32px;
    height: 32px;
    align-self: flex-start;
    
    margin-bottom: 1px;
    margin-left: 10px;
  }

  .white-row-space-between-w750-g93 {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 750px;
    align-self: flex-start;
    background-color: rgba(255, 255, 255, 1);
    border-color: rgba(213, 213, 213, 1);
    border-style: solid;
    border-width: 1px;
    margin-top: 1px;
    padding-top: 25px;
    padding-bottom: 25.5px;
    display: flex;
  }

  .row-flex-start-left-g126 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    align-self: center;
    margin-bottom: 0.5px;
    margin-left: 30px;
    display: flex;
  }

  .w80-h80-left-i38 {
    position: relative;
    width: 80px;
    height: 80px;
    align-self: center;
    
    margin-top: 0.5px;
  }

  .column-flex-start-right-g89 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    align-self: center;
    margin-left: 28px;
    display: flex;
  }

  .black-size26-t35 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 26px;
    color: #3A3A3A;
    line-height: 37px;
    font-weight: normal;
    margin-right: 106px;
  }

  .dkgray-size22-t36 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 22px;
    color: #B6B6B6;
    line-height: 30px;
    font-weight: normal;
    margin-top: 5px;
    margin-right: 163px;
  }

  .dkgray-size22-t37 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 22px;
    color: #B6B6B6;
    line-height: 30px;
    font-weight: normal;
    margin-top: 7px;
  }

  .row-flex-start-right-g127 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    align-self: center;
    margin-top: 0.5px;
    margin-right: 32px;
    display: flex;
  }

  .black-size24-left-t33 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #3A3A3A;
    line-height: 33px;
    font-weight: normal;
  }

  .w32-h32-right-i34 {
    position: relative;
    width: 32px;
    height: 32px;
    align-self: flex-start;
    
    margin-bottom: 1px;
    margin-left: 10px;
  }

  .white-row-space-between-w750-g99 {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 750px;
    align-self: flex-start;
    background-color: rgba(255, 255, 255, 1);
    border-color: rgba(213, 213, 213, 1);
    border-style: solid;
    border-width: 1px;
    margin-top: 1px;
    padding-top: 25px;
    padding-bottom: 25.5px;
    display: flex;
  }

  .row-flex-start-left-g128 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    align-self: center;
    margin-bottom: 0.5px;
    margin-left: 30px;
    display: flex;
  }

  .w80-h80-left-i45 {
    position: relative;
    width: 80px;
    height: 80px;
    align-self: center;
    
    margin-top: 0.5px;
  }

  .column-flex-start-right-g95 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    align-self: center;
    margin-left: 28px;
    display: flex;
  }

  .black-size26-t42 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 26px;
    color: #3A3A3A;
    line-height: 37px;
    font-weight: normal;
    margin-right: 106px;
  }

  .dkgray-size22-t43 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 22px;
    color: #B6B6B6;
    line-height: 30px;
    font-weight: normal;
    margin-top: 5px;
    margin-right: 163px;
  }

  .dkgray-size22-t44 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 22px;
    color: #B6B6B6;
    line-height: 30px;
    font-weight: normal;
    margin-top: 7px;
  }

  .row-flex-start-right-g129 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    align-self: center;
    margin-top: 0.5px;
    margin-right: 32px;
    display: flex;
  }

  .black-size24-left-t40 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #3A3A3A;
    line-height: 33px;
    font-weight: normal;
  }

  .w32-h32-right-i41 {
    position: relative;
    width: 32px;
    height: 32px;
    align-self: flex-start;
    
    margin-bottom: 1px;
    margin-left: 10px;
  }

  .white-row-space-between-w750-g105 {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 750px;
    align-self: flex-start;
    background-color: rgba(255, 255, 255, 1);
    border-color: rgba(213, 213, 213, 1);
    border-style: solid;
    border-width: 1px;
    margin-top: 1px;
    padding-top: 25px;
    padding-bottom: 25.5px;
    display: flex;
  }

  .row-flex-start-left-g130 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    align-self: center;
    margin-bottom: 0.5px;
    margin-left: 30px;
    display: flex;
  }

  .w80-h80-left-i52 {
    position: relative;
    width: 80px;
    height: 80px;
    align-self: center;
    
    margin-top: 0.5px;
  }

  .column-flex-start-right-g101 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    align-self: center;
    margin-left: 28px;
    display: flex;
  }

  .black-size26-t49 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 26px;
    color: #3A3A3A;
    line-height: 37px;
    font-weight: normal;
    margin-right: 106px;
  }

  .dkgray-size22-t50 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 22px;
    color: #B6B6B6;
    line-height: 30px;
    font-weight: normal;
    margin-top: 5px;
    margin-right: 163px;
  }

  .dkgray-size22-t51 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 22px;
    color: #B6B6B6;
    line-height: 30px;
    font-weight: normal;
    margin-top: 7px;
  }

  .row-flex-start-right-g131 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    align-self: center;
    margin-top: 0.5px;
    margin-right: 32px;
    display: flex;
  }

  .black-size24-left-t47 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #3A3A3A;
    line-height: 33px;
    font-weight: normal;
  }

  .w32-h32-right-i48 {
    position: relative;
    width: 32px;
    height: 32px;
    align-self: flex-start;
    
    margin-bottom: 1px;
    margin-left: 10px;
  }

  .white-row-space-between-w750-g111 {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 750px;
    align-self: flex-start;
    background-color: rgba(255, 255, 255, 1);
    border-color: rgba(213, 213, 213, 1);
    border-style: solid;
    border-width: 1px;
    margin-top: 1px;
    padding-top: 25px;
    padding-bottom: 25.5px;
    display: flex;
  }

  .row-flex-start-left-g132 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    align-self: center;
    margin-bottom: 0.5px;
    margin-left: 30px;
    display: flex;
  }

  .w80-h80-left-i59 {
    position: relative;
    width: 80px;
    height: 80px;
    align-self: center;
    
    margin-top: 0.5px;
  }

  .column-flex-start-right-g107 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    align-self: center;
    margin-left: 28px;
    display: flex;
  }

  .black-size26-t56 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 26px;
    color: #3A3A3A;
    line-height: 37px;
    font-weight: normal;
    margin-right: 106px;
  }

  .dkgray-size22-t57 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 22px;
    color: #B6B6B6;
    line-height: 30px;
    font-weight: normal;
    margin-top: 5px;
    margin-right: 163px;
  }

  .dkgray-size22-t58 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 22px;
    color: #B6B6B6;
    line-height: 30px;
    font-weight: normal;
    margin-top: 7px;
  }

  .row-flex-start-right-g133 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    align-self: center;
    margin-top: 0.5px;
    margin-right: 32px;
    display: flex;
  }

  .black-size24-left-t54 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #3A3A3A;
    line-height: 33px;
    font-weight: normal;
  }

  .w32-h32-right-i55 {
    position: relative;
    width: 32px;
    height: 32px;
    align-self: flex-start;
    
    margin-bottom: 1px;
    margin-left: 10px;
  }

  .white-w750-h160-s60 {
    position: relative;
    width: 750px;
    height: 160px;
    background-color: transparent;
  }
</style>
<script>
  import statusbar from "../compents/statusbar.vue";
  import navbar from "../compents/navbar.vue";
  import bar from "../compents/bar.vue";
  import util from "../lib/util.js";


  export default {
    data: function() {
      return {
        currentBar:1,
        menu:["应用","游戏","活跃奖励"]
      };
    },
    components: { statusbar, navbar,bar },
    methods: {
      closeLogin: function() {
        api.closeWin();
      },
      changeBar:function(index){
        this.currentBar = index;
      },
      goAppDtail:function(){
        util.goPage("./app-detail.html");
      }
    },
    created: function() {}
  };
</script>
