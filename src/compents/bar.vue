<template>
  <div>

    <div id="g26" class="white-column-flex-start-g26">
      <div class="row-center-w750-g23">
        <div id="t5" @click="changeBar(1)" class="magenta-size26-t5 flex1 t-c" :class="{'choosebartext':currentBar==1}">{{menu[0]}}</div>
        <img id="i4" class="w1-h47-i4" src='https://gw.alicdn.com/tfs/TB1rfHNJeuSBuNjy1XcXXcYjFXa-1-47.png' />
        <div id="t7" @click="changeBar(2)" class="black-size26-t7 flex1 t-c" :class="{'choosebartext':currentBar==2}">{{menu[1]}}</div>
        <img id="i3" class="w1-h47-i3" src='https://gw.alicdn.com/tfs/TB1HhTKJkyWBuNjy0FpXXassXXa-1-47.png' />
        <div id="t8" @click="changeBar(3)" class="black-size26-t8 flex1 t-c" :class="{'choosebartext':currentBar==3}">{{menu[2]}}</div>
      </div>
      <div id="s6" class="magenta-w109-h2-s6" :class="{'choosebar1':currentBar==1,'choosebar2':currentBar==2,'choosebar3':currentBar==3}"></div>
      <img id="i9" class="w750-h1-i9" src='https://gw.alicdn.com/tfs/TB1I5T6JbGYBuNjy0FoXXciBFXa-750-1.png' />
    </div>
  </div>
</template>

<style>
body {
  background: rgba(240, 240, 240, 1);
}
</style>
<style scoped>
.white-column-flex-start-g26 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: center;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
}

.row-center-w750-g23 {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 16px;
  display: flex;
}

.magenta-size26-t5 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;

  font-size: 26px;
  margin-left: -1px;
  color: #444444;
  line-height: 37px;
  font-weight: normal;
}
.choosebartext {
  color: #9013fe !important;
  font-family: PingFangSC-Semibold !important;
}

.w1-h47-i4 {
  position: relative;
  width: 1px; /* no */
  height: 47px;
  align-self: center;

  /*
    margin-left: 87px;
*/
}

.black-size26-t7 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #444444;
  line-height: 37px;
  font-weight: normal;
  /*
    margin-left: 88px;
*/
}

.w1-h47-i3 {
  position: relative;
  width: 1px; /* no */
  height: 47px;
  align-self: center;

  /*
    margin-left: 87px;
*/
}
.flex1 {
  flex: 1;
}
.t-c {
  text-align: center;
}

.black-size26-t8 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #3a3a3a;
  line-height: 37px;
  margin-right: -1px;
  font-weight: normal;
}
.choosebar1 {
  margin-left: 70px;
}
.choosebar2 {
  margin-left: 321px;
}
.choosebar3 {
  margin-left: 570px;
}
.magenta-w109-h2-s6 {
  transition: margin 0.3s;
  position: relative;

  width: 109px;
  height: 2px;
  align-self: flex-start;
  background-color: rgba(144, 19, 254, 1);
  margin-top: 13px;
}

.w750-h1-i9 {
  position: relative;
  width: 750px;
  height: 1px; /* no */
  align-self: flex-start;
}
</style>


<script>
import util from "../lib/util.js";
export default {
  props: ["menu"],
  data: function() {
    return {
      currentBar: 1
    };
  },
  components: {},
  methods: {
    changeBar: function(index) {
      this.currentBar = index;
      this.$emit("currentbarindex", this.currentBar);
    }
  },
  created: function() {}
};
</script>
