<template>
  <div>
    <div id="g33" class="white-column-flex-start-w750-g9">
      <statusbar></statusbar>
      <navbar title="挖矿秘笈"></navbar>
      <div id="g8" class="white-column-flex-start-w750-h255-down-g8">
        <div id="t5" class="black-size26-t5">1.等待内容更新</div>
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

  .white-column-flex-start-w750-h255-down-g8 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    width: 750px;
    height: 255px;
    align-self: flex-start;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
  }

  .black-size26-t5 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 26px;
    color: #4A4A4A;
    line-height: 37px;
    font-weight: normal;
    margin-top: 52px;
    margin-left: 31px;
  }
</style>

<script>
import statusbar from "../compents/statusbar.vue";
import navbar from "../compents/navbar.vue";
import util from "../lib/util.js";
export default {
  data: function() {
    return {
    };
  },
  components: { statusbar, navbar },
  methods: {


  },
  created: function() {}
};
</script>
