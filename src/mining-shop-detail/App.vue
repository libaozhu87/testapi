<template>
  <div>
    <div  class="white-column-flex-start-w750-g29">
      <statusbar></statusbar>
      <navbar title="商品详情"></navbar>

      <div id="g36" class="white-column-flex-start-h1231-down-g36">
        <div id="s13" class="ltgray-w650-h650-s13"></div>
        <div id="g23" class="row-space-between-w750-g23"> <div id="t5" class="black-size32-left-t5">手机话费100元</div>
          <div id="g38" class="row-flex-start-right-g38"> <div id="t14" class="red-size40-left-t14">100</div>
            <img id="i15" class="w30-h33-right-i15" src='https://gw.alicdn.com/tfs/TB1IT7FJwmTBuNjy1XbXXaMrVXa-30-33.png' /> </div>
        </div>
        <img id="i11" class="w646-h1-i11" src='https://gw.alicdn.com/tfs/TB1lwo0JuuSBuNjy1XcXXcYjFXa-646-1.png' />
        <div id="g28" class="row-space-between-w750-g28"> <div id="t6" class="dkgray-size26-left-t6">库存：57件</div>
          <div id="g39" class="row-flex-start-right-g39"> <div id="t7" class="dkgray-size26-t7">源石</div> <div id="t8" class="dkgray-size26-t8">余额</div> <div id="t9" class="dkgray-size26-t9">：</div> <div id="t10" class="yellow-size26-t10">10000000</div> </div>
        </div>
        <img id="i12" class="w750-h2-i12" src='https://gw.alicdn.com/tfs/TB1rMo0JuuSBuNjy1XcXXcYjFXa-750-2.png' />
        <div id="g32" class="white-column-center-w650-g32"> <div id="t19" class="dkgray-size24-t19">请输入要充值的手机号码</div> </div>
        <div id="g33" class="column-flex-start-w650-h70-g33">
          <img id="i17" class="w650-h70-background-i17" src='https://gw.alicdn.com/tfs/TB1KMo0JuuSBuNjy1XcXXcYjFXa-650-70.png' /> <div id="t18" class="white-size30-t18">确定</div> </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

  .white-column-flex-start-h1231-down-g36 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    height: 1231px;
    align-self: flex-start;
    background-color: rgba(255, 255, 255, 1);
    margin-top: 1px;
    margin-bottom: 2px;
    display: flex;
  }

  .ltgray-w650-h650-s13 {
    position: relative;
    width: 650px;
    height: 650px;
    align-self: center;
    background-color: rgba(216, 216, 216, 1);
    border-color: rgba(151, 151, 151, 1);
    border-style: solid;
    border-width: 1px;
    margin-top: 53px;
  }

  .row-space-between-w750-g23 {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    width: 750px;
    align-self: center;
    margin-top: 23px;
    margin-bottom: 30px;
    display: flex;
  }

  .black-size32-left-t5 {
    position: relative;
    align-self: flex-end;
    font-family: PingFangSC-Medium;
    font-size: 32px;
    color: #4A4A4A;
    line-height: 45px;
    font-weight: bold;
    margin-top: 11px;
    margin-left: 50px;
  }

  .row-flex-start-right-g38 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    align-self: flex-end;
    margin-right: 50px;
    display: flex;
  }

  .red-size40-left-t14 {
    position: relative;
    align-self: center;
    font-family: PingFangSC-Semibold;
    font-size: 40px;
    color: #C01E00;
    line-height: 56px;
    font-weight: normal;
  }

  .w30-h33-right-i15 {
    position: relative;
    width: 30px;
    height: 33px;
    align-self: center;
    
    margin-top: 1.5px;
    margin-left: 18px;
  }

  .w646-h1-i11 {
    position: relative;
    width: 646px;
    height: 1px;
    align-self: center;
    
  }

  .row-space-between-w750-g28 {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    width: 750px;
    align-self: center;
    margin-top: 24px;
    margin-bottom: 22px;
    display: flex;
  }

  .dkgray-size26-left-t6 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Medium;
    font-size: 26px;
    color: #9B9B9B;
    line-height: 37px;
    font-weight: bold;
    margin-left: 50px;
  }

  .row-flex-start-right-g39 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    align-self: flex-start;
    margin-right: 50px;
    display: flex;
  }

  .dkgray-size26-t7 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Medium;
    font-size: 26px;
    color: #9B9B9B;
    line-height: 37px;
    font-weight: bold;
  }

  .dkgray-size26-t8 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 26px;
    color: #9B9B9B;
    line-height: 37px;
    font-weight: normal;
    margin-left: -1px;
  }

  .dkgray-size26-t9 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Medium;
    font-size: 26px;
    color: #9B9B9B;
    line-height: 37px;
    font-weight: bold;
    margin-left: -1px;
  }

  .yellow-size26-t10 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Medium;
    font-size: 26px;
    color: #F5A623;
    line-height: 37px;
    font-weight: bold;
  }

  .w750-h2-i12 {
    position: relative;
    width: 750px;
    height: 2px;
    align-self: center;
    
  }

  .white-column-center-w650-g32 {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    width: 650px;
    align-self: center;
    background-color: rgba(244, 244, 244, 1);
    border-color: rgba(213, 213, 213, 1);
    border-style: solid;
    border-width: 1px;
    border-radius: 4px;
    margin-top: 78px;
    padding-top: 18px;
    padding-bottom: 19px;
    display: flex;
  }

  .dkgray-size24-t19 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Medium;
    font-size: 24px;
    color: #B6B6B6;
    line-height: 33px;
    font-weight: bold;
    margin-left: 26px;
  }

  .column-flex-start-w650-h70-g33 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 650px;
    height: 70px;
    align-self: center;
    margin-top: 74px;
    display: flex;
  }

  .w650-h70-background-i17 {
    position: absolute;
    width: 650px;
    height: 70px;
    left: 0;
    top: 0;
    
  }

  .white-size30-t18 {
    position: relative;
    align-self: center;
    font-family: PingFangSC-Medium;
    font-size: 30px;
    color: #FFFFFF;
    line-height: 42px;
    font-weight: bold;
    margin-top: 12px;
    margin-left: 0.5px;
  }
</style>



<script>
  import statusbar from "../compents/statusbar.vue";
  import navbar from "../compents/navbar.vue";
  export default {
    data: {},
    components: { statusbar, navbar },

    methods: {},
    created: function () {
    }
  }
</script>
