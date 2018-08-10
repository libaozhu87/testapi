<template>
  <div>
    <div  class="white-column-flex-start-w750-g29">
      <statusbar></statusbar>
      <navbar title="好友贡献明细"></navbar>
      <div>
        <div id="g28" class="white-row-space-between-w750-g28" @click="changeList">
          <div id="t3" class="black-size26-left-t3">2018.03.20  好友贡献：1999源石</div>
          <div id="g44" class="row-flex-start-right-g44"> <div id="t5" class="magenta-size26-left-t5">领取</div>
            <img v-if="!flag" class="w30-h30-right-i6" src='https://gw.alicdn.com/tfs/TB1dlxDczrguuRjy0FeXXXcbFXa-30-30.png' />
            <img v-if="flag" class="w30-h30-right-i6" src='https://gw.alicdn.com/tfs/TB1OHUpJx9YBuNjy0FfXXXIsVXa-30-30.png' />
          </div>
        </div>
        <div  v-show="flag">
          <div id="g29" class="white-column-center-w750-g29">
            <div id="t12" class="black-size24-t12">20:21:17  您的徒弟AAAAAAA收取500源石，您获得100源石</div>
          </div>
        </div>

      </div>



<!--
      <div id="g36" class="white-row-space-between-w750-g36"> <div id="t8" class="dkgray-size26-left-t8">2018.03.20  好友贡献：1999源石</div>
        <div id="g45" class="row-flex-start-right-g45"> <div id="t9" class="dkgray-size26-left-t9">已领取</div>
          <img id="i10" class="w30-h30-right-i10" src='https://gw.alicdn.com/tfs/TB1OHUpJx9YBuNjy0FfXXXIsVXa-30-30.png' /> </div>
      </div>
      <div id="g39" class="white-row-space-between-w750-g39"> <div id="t19" class="dkgray-size26-left-t19">2018.03.20  好友贡献：1999源石</div>
        <div id="g46" class="row-flex-start-right-g46"> <div id="t18" class="dkgray-size26-left-t18">已领取</div>
          <img id="i20" class="w30-h30-right-i20" src='https://gw.alicdn.com/tfs/TB1ZbH0Jv9TBuNjy0FcXXbeiFXa-30-30.png' /> </div>
      </div>
-->

      

    </div>
  </div>
</template>





<style scoped>
  .white-column-flex-start-w750-g43 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    width: 750px;
    background-color: rgba(240, 240, 240, 1);
    display: flex;
  }

  .white-row-center-w750-g24 {
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

  .w52-h50-absolute-i22 {
    position: absolute;
    width: 52px;
    height: 50px;
    left: 13px;
    top: 25px;

  }

  .black-size32-t21 {
    position: relative;
    align-self: center;
    font-family: PingFangSC-Medium;
    font-size: 32px;
    color: #4A4A4A;
    line-height: 45px;
    font-weight: bold;
    margin-top: 0.5px;
  }

  .white-row-space-between-w750-g28 {
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
    padding-top: 37px;
    padding-bottom: 37px;
    display: flex;
  }

  .black-size26-left-t3 {
    position: relative;
    align-self: center;
    font-family: PingFangSC-Semibold;
    font-size: 26px;
    color: #3A3A3A;
    line-height: 37px;
    font-weight: normal;
    margin-top: 0.5px;
    margin-left: 31px;
  }

  .row-flex-start-right-g44 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    position: relative;
    align-self: center;
    margin-right: 31px;
    display: flex;
  }

  .magenta-size26-left-t5 {
    position: relative;
    align-self: flex-end;
    border-color: rgba(144, 19, 254, 1);
    border-style: solid;
    border-width: 1px;
    border-radius: 8px;
    font-family: PingFangSC-Semibold;
    font-size: 26px;
    color: #9013FE;
    line-height: 37px;
    font-weight: normal;
    padding-top: 5px;
    padding-right: 22px;
    padding-bottom: 4px;
    padding-left: 23px;
  }

  .w30-h30-right-i6 {
    position: relative;
    width: 30px;
    height: 30px;
    align-self: flex-end;

    margin-top: 11px;
    margin-bottom: 5px;
    margin-left: 16px;
  }

  .white-column-center-w750-g29 {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    width: 750px;
    align-self: flex-start;
    background-color: rgba(255, 254, 247, 1);
    border-color: rgba(213, 213, 213, 1);
    border-style: solid;
    border-bottom-width: 1px;
    padding-top: 44px;
    padding-bottom: 43px;
    display: flex;
  }

  .black-size24-t12 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #3A3A3A;
    line-height: 33px;
    font-weight: normal;
    margin-left: 32px;
  }

  .white-column-center-w750-g32 {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    width: 750px;
    align-self: flex-start;
    background-color: rgba(255, 254, 247, 1);
    border-color: rgba(213, 213, 213, 1);
    border-style: solid;
    border-width: 1px;
    margin-top: 1px;
    padding-top: 44px;
    padding-bottom: 43px;
    display: flex;
  }

  .black-size24-t14 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #3A3A3A;
    line-height: 33px;
    font-weight: normal;
    margin-left: 32px;
  }

  .white-column-center-w750-g33 {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    width: 750px;
    align-self: flex-start;
    background-color: rgba(255, 254, 247, 1);
    border-color: rgba(213, 213, 213, 1);
    border-style: solid;
    border-width: 1px;
    margin-top: 1px;
    padding-top: 44px;
    padding-bottom: 43px;
    display: flex;
  }

  .black-size24-t16 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #3A3A3A;
    line-height: 33px;
    font-weight: normal;
    margin-left: 32px;
  }

  .white-row-space-between-w750-g36 {
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
    padding-top: 41.5px;
    padding-bottom: 41px;
    display: flex;
  }

  .dkgray-size26-left-t8 {
    position: relative;
    align-self: center;
    font-family: PingFangSC-Semibold;
    font-size: 26px;
    color: #9B9B9B;
    line-height: 37px;
    font-weight: normal;
    margin-top: 0.5px;
    margin-left: 31px;
  }

  .row-flex-start-right-g45 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    align-self: center;
    margin-top: 0.5px;
    margin-right: 31px;
    display: flex;
  }

  .dkgray-size26-left-t9 {
    position: relative;
    align-self: center;
    font-family: PingFangSC-Semibold;
    font-size: 26px;
    color: #9B9B9B;
    line-height: 37px;
    font-weight: normal;
  }

  .w30-h30-right-i10 {
    position: relative;
    width: 30px;
    height: 30px;
    align-self: center;

    margin-top: 2.5px;
    margin-left: 17px;
  }

  .white-row-space-between-w750-g39 {
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
    margin-bottom: 511px;
    padding-top: 41.5px;
    padding-bottom: 41px;
    display: flex;
  }

  .dkgray-size26-left-t19 {
    position: relative;
    align-self: center;
    font-family: PingFangSC-Semibold;
    font-size: 26px;
    color: #9B9B9B;
    line-height: 37px;
    font-weight: normal;
    margin-top: 0.5px;
    margin-left: 31px;
  }

  .row-flex-start-right-g46 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    align-self: center;
    margin-top: 0.5px;
    margin-right: 31px;
    display: flex;
  }

  .dkgray-size26-left-t18 {
    position: relative;
    align-self: center;
    font-family: PingFangSC-Semibold;
    font-size: 26px;
    color: #9B9B9B;
    line-height: 37px;
    font-weight: normal;
  }

  .w30-h30-right-i20 {
    position: relative;
    width: 30px;
    height: 30px;
    align-self: center;

    margin-top: 2.5px;
    margin-left: 17px;
  }
</style>

<script>
  import statusbar from "../compents/statusbar.vue";
  import navbar from "../compents/navbar.vue";
  export default {
    data: function(){
      return {
        flag:false
      }

    },
    components: { statusbar, navbar },

    methods: {
      changeList:function(){
        this.flag = !this.flag;
      }
    },
    created: function () {
    }
  }
</script>
