
<template>
  <div>
    <div class="white-column-flex-start-w750-g134">
      <statusbar></statusbar>
      <navbar title="获取算力"></navbar>

      <bar @currentbarindex="changeBar" :menu="menu"></bar>

      <div v-if="currentBar==1">


          <div id="g78" class="white-row-center-w750-h300-g78">
            <img id="i63" class="w242-h242-absolute-i63" src='https://gw.alicdn.com/tfs/TB1AqPZGpOWBuNjy0FiXXXFxVXa-242-242.png' /> <div id="t64" class="black-size26-t64">每日签到领取大量算力</div> </div>
          <div id="g83" class="white-row-space-between-w761-g83">
            <div id="g81" class="column-flex-start-left-g81"> <div id="t66" class="black-size26-up-t66">好友加成</div> <div id="t67" class="gray-size24-down-t67">好友同时在挖矿，你获得算力加成</div> </div>
            <img id="i68" @click="goDes" class="w24-h24-right-i68" src='https://gw.alicdn.com/tfs/TB1d31bGGmWBuNjy1XaXXXCbXXa-24-24.png' /> </div>
          <div id="g88" class="white-row-flex-end-w750-g88"> <div id="t16" class="black-size22-t16">好友</div> <div id="t17" class="black-size22-t17">星级</div> <div id="t18" class="black-size22-t18">算力</div> <div id="t20" class="black-size22-t20">算力加成</div> <div id="t19" class="black-size22-t19">状态</div>
          </div>
          <div id="g94" class="white-column-flex-start-g94">
            <div id="g92" class="row-flex-start-w750-up-g92"> <div id="t25" class="black-size24-t25">用户昵称七个字</div> <div id="t26" class="black-size24-t26">3</div> <div id="t22" class="black-size24-t22">79001</div> <div id="t23" class="black-size24-t23">300</div> <div id="t24" class="black-size24-t24">挖矿中</div>        </div>
            <img id="i27" class="w690-h1-down-i27" src='https://gw.alicdn.com/tfs/TB1yXVuGL1TBuNjy0FjXXajyXXa-690-1.png' /> </div>

          <div id="g133" class="column-center-w651-h70-g133">
            <img id="i13" class="w651-h70-background-i13" src='https://gw.alicdn.com/tfs/TB1e9i_GwmTBuNjy1XbXXaMrVXa-651-70.png' /> <div id="t14" class="white-size30-t14">邀请好友</div> </div>

      </div>

      <div v-if="currentBar==2">
        <taskone></taskone>
      </div>
      <div v-if="currentBar==3">
        <task></task>

      </div>

      </div>
  </div>
</template>
<style scoped>
  .white-column-flex-start-w750-g134 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 750px;
    background-color: rgba(240, 240, 240, 1);
    display: flex;
  }



  .white-row-center-w750-h300-g78 {
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    width: 750px;
    height: 300px;
    align-self: center;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
  }

  .w242-h242-absolute-i63 {
    position: absolute;
    width: 242px;
    height: 242px;
    left: 255px;
    top: 8px;
    
  }

  .black-size26-t64 {
    position: relative;
    align-self: flex-end;
    font-family: PingFangSC-Semibold;
    font-size: 26px;
    color: #3A3A3A;
    line-height: 37px;
    font-weight: normal;
    margin-bottom: 47px;
  }

  .white-row-flex-end-w750-g88 {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    width: 750px;
    align-self: center;
    background-color: rgba(235, 235, 235, 1);
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
  }

  .black-size22-t16 {
    position: relative;
    align-self: center;
    font-family: PingFangSC-Light;
    font-size: 22px;
    color: #3A3A3A;
    line-height: 30px;
    font-weight: normal;
    margin-right: 122px;
  }

  .black-size22-t17 {
    position: relative;
    align-self: center;
    font-family: PingFangSC-Light;
    font-size: 22px;
    color: #3A3A3A;
    line-height: 30px;
    font-weight: normal;
    margin-right: 76px;
  }

  .black-size22-t18 {
    position: relative;
    align-self: center;
    font-family: PingFangSC-Light;
    font-size: 22px;
    color: #3A3A3A;
    line-height: 30px;
    font-weight: normal;
    margin-right: 53px;
  }

  .black-size22-t20 {
    position: relative;
    align-self: center;
    font-family: PingFangSC-Light;
    font-size: 22px;
    color: #3A3A3A;
    line-height: 30px;
    font-weight: normal;
    margin-right: 42px;
  }

  .black-size22-t19 {
    position: relative;
    align-self: center;
    font-family: PingFangSC-Light;
    font-size: 22px;
    color: #3A3A3A;
    line-height: 30px;
    font-weight: normal;
    margin-right: 65px;
  }

  .white-row-space-between-w761-g83 {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 750px;
    align-self: flex-end;
    background-color: rgba(255, 255, 255, 1);
    border-color: rgba(213, 213, 213, 1);
    border-style: solid;
    border-bottom-width: 1px;
    margin-top: 20px;
    padding-top: 13px;
    padding-bottom: 14px;
    display: flex;
  }

  .column-flex-start-left-g81 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    align-self: center;
    margin-bottom: 1px;
    margin-left: 30px;
    display: flex;
  }

  .black-size26-up-t66 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Medium;
    font-size: 26px;
    color: #3A3A3A;
    line-height: 37px;
    font-weight: bold;
    margin-right: 256px;
    margin-left: 1px;
  }

  .gray-size24-down-t67 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #8D8D8D;
    line-height: 33px;
    font-weight: normal;
    margin-top: 2px;
  }

  .w24-h24-right-i68 {
    position: relative;
    width: 24px;
    height: 24px;
    align-self: center;
    
    margin-right: 44px;
  }

  .white-column-flex-start-g94 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    align-self: center;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
  }

  .row-flex-start-w750-up-g92 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    width: 750px;
    align-self: center;
    margin-top: 29px;
    margin-bottom: 27px;
    display: flex;
  }

  .black-size24-t25 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #3A3A3A;
    line-height: 33px;
    font-weight: normal;
    margin-left: 61px;
  }

  .black-size24-t26 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #3A3A3A;
    line-height: 33px;
    font-weight: normal;
    margin-left: 75px;
  }

  .black-size24-t22 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #3A3A3A;
    line-height: 33px;
    font-weight: normal;
    margin-left: 81px;
  }

  .black-size24-t23 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #3A3A3A;
    line-height: 33px;
    font-weight: normal;
    margin-left: 64px;
  }

  .black-size24-t24 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #3A3A3A;
    line-height: 33px;
    font-weight: normal;
    margin-left: 50px;
  }

  .w690-h1-down-i27 {
    position: relative;
    width: 690px;
    height: 1px;
    align-self: center;
    
    margin-left: 1px;
  }


  .column-center-w651-h70-g133 {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 750px;

    height: 70px;
    align-self: center;
    bottom: 30px;
    position: fixed;
    display: flex;

  }

  .w651-h70-background-i13 {
    position: absolute;
    width: 651px;
    height: 70px;
    margin: auto;
    
  }

  .white-size30-t14 {
    position: relative;
    align-self: center;
    font-family: PingFangSC-Medium;
    font-size: 30px;
    color: #FFFFFF;
    line-height: 42px;
    font-weight: bold;
  }
</style>



<script>
  import statusbar from "../compents/statusbar.vue";
  import navbar from "../compents/navbar.vue";
  import bar from "../compents/bar.vue";
  import task from "./task.vue";
  import taskone from "./taskone.vue";
  import util from "../lib/util.js";
  export default {
    data: function() {
      return {
        currentBar:1,
        menu:["算力加成","算力任务","提升星级"]
      };
    },
    components: { statusbar, navbar,bar ,task,taskone},
    methods: {
      goDes:function(){
        util.goPage("./mining-friend-des.html");


      },
      closeLogin: function() {
        api.closeWin();
      },
      changeBar:function(index){
        this.currentBar = index;
      }
    },
    created: function() {}
  };
</script>
