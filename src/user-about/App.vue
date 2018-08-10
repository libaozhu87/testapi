<template>
  <div>
    <div  class="white-column-flex-start-w750-g25">
      <statusbar></statusbar>
      <navbar title="关于全民股东"></navbar>

      <bar @currentbarindex="changeBar" :menu="menu"></bar>

      <div id="g23" class="white-column-flex-start-w750-h750-g23"> <div id="t13" class="black-size26-t13">文字内容待提供</div> </div>




    </div>
  </div>
</template>





<style scoped>
  .white-column-flex-start-w750-g25 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    width: 750px;
    background-color: rgba(240, 240, 240, 1);
    display: flex;
  }


  .white-column-flex-start-w750-h750-g23 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    width: 750px;
    height: 750px;
    align-self: flex-start;
    background-color: rgba(255, 255, 255, 1);
    margin-bottom: 403px;
    display: flex;
  }

  .black-size26-t13 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 26px;
    color: #3A3A3A;
    line-height: 37px;
    font-weight: normal;
    margin-top: 46px;
    margin-left: 30px;
  }
</style>

<script>
  import statusbar from "../compents/statusbar.vue";
  import navbar from "../compents/navbar.vue";
  import bar from "../compents/bar.vue";

  export default {
    data: function() {
      return {
        currentBar:1,
        menu:["全民股东简介","股东利润分红","全民股东协议"]
      };
    },
    components: { statusbar, navbar,bar },

    methods: {
      changeBar:function(index){
        this.currentBar = index;
      }
    },
    created: function () {
    }
  }
</script>
