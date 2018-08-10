
<template>

  <div id="g27" class="row-flex-start-w750-g27">
    <div id="g26" class="white-column-center-left-g26" @click="changeCheck">
      <img  v-if="checked" class="w22-h22-i19" src='https://gw.alicdn.com/tfs/TB1OyE5GKuSBuNjy1XcXXcYjFXa-48-48.png' />
      <img  v-if="!checked" class="w22-h22-i19" src='https://gw.alicdn.com/tfs/TB1uoQIGKuSBuNjy1XcXXcYjFXa-48-48.png' />

    </div>
    <div id="t6" class="black-size22-right-t6">登录表示同意《全民股东协议》</div>
  </div>
</template>
<style scoped>
  .row-flex-start-w750-g27 {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    width: 750px;
    align-self: center;
    margin-top: 28px;
    display: flex;
  }

  .white-column-center-left-g26 {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    align-self: flex-start;
    background-color: rgba(255, 255, 255, 1);
/*    border-color: rgba(151, 151, 151, 1);
    border-style: solid;
    border-width: 1px;*/
    margin-top: 3px;
    margin-bottom: 3px;
    margin-left: 50px;
    padding-top: 1px;
    padding-bottom: 1px;
    display: flex;
  }

  .w22-h22-i19 {
    position: relative;
    width: 22px;
    height: 22px;
    align-self: flex-start;

    margin-right: 1px;
    margin-left: 1px;
  }

  .black-size22-right-t6 {
    position: relative;
    align-self: flex-start;
    font-family: PingFangSC-Regular;
    font-size: 22px;
    color: #6c6c6c;
    line-height: 30px;
    font-weight: normal;
    margin-left: 13px;
  }
</style>
<script>
export default {
  props: ["checked"],
  data:function(){
    return{mychecked:this.checked}
  },
  methods: {
    changeCheck: function() {
      this.mychecked = !this.mychecked
      console.log(this.mychecked);
      this.$emit("protocolcheck",this.mychecked);
    }
  },
  created: function() {},

};
</script>
