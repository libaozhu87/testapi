
<template>
  <div>
    <div class="white-column-flex-start-w750-g9">
      <statusbar></statusbar>
      <navbar title="好友加成说明"></navbar>
      <div id="g8" class="white-column-center-down-g8">
        <div id="t5" class="black-size26-w681-t5">
        <p>1.好友同时在挖矿，你获得算力加成；</p>
        <p>2.好友等级越高，加成越多；</p>
        <p>3.好友挖矿满24小时未收取，会停止挖矿，不再提供算力加成；</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .white-column-flex-start-w750-g9 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    width: 750px;
    background-color: rgba(240, 240, 240, 1);
    display: flex;
  }

  .white-row-center-w750-up-g7 {
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

  .w52-h50-absolute-i4 {
    position: absolute;
    width: 52px;
    height: 50px;
    left: 13px;
    top: 25px;

  }

  .black-size32-t3 {
    position: relative;
    align-self: center;
    font-family: PingFangSC-Medium;
    font-size: 32px;
    color: #4A4A4A;
    line-height: 45px;
    font-weight: bold;
    margin-top: 0.5px;
  }

  .white-column-center-down-g8 {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    align-self: flex-start;
    background-color: rgba(255, 255, 255, 1);
    margin-top: 1px;
    margin-bottom: 1003px;
    padding-top: 42px;
    padding-bottom: 40px;
    display: flex;
  }

  .black-size26-w681-t5 {
    position: relative;
    width: 681px;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 26px;
    color: #3A3A3A;
    line-height: 37px;
    text-align: left;
    font-weight: normal;
    margin-right: 38px;
    margin-left: 31px;
  }
</style>


<script>
  import statusbar from "../compents/statusbar.vue";
  import navbar from "../compents/navbar.vue";
  export default {
    data: function(){
      return {index:1}
    },
    components: { statusbar, navbar},
    methods: {
      closeLogin: function() {
        api.closeWin();
      }
    },
    created: function() {}
  };
</script>
