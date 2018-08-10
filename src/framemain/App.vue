<template>
  <div id="wrap" class="flex-wrap flex-vertical">

    <div id="main" class="flex-con">
    </div>
    <div id="footer" class="border-t">
      <div id="g13" class="white-column-flex-start-w750-g13">

        <div id="g17" class="row-space-between-w750-g17">
          <div id="g14" @click="randomSwitchBtn(0)" class="column-flex-start-g14">
            <img v-if='active == 0' class="w36-h33-up-i3" src='https://gw.alicdn.com/tfs/TB15ffdGrSYBuNjSspiXXXNzpXa-69-66.png' />
            <div v-if='active == 0' class="ltgray-size24-down-t2-a">挖矿</div>
            <img v-if='active != 0' class="w36-h33-up-i3" src='https://gw.alicdn.com/tfs/TB1ZhD9GxGYBuNjy0FnXXX5lpXa-69-66.png' />
            <div v-if='active != 0' class="ltgray-size24-down-t2">挖矿</div>
          </div>
          <div id="g15" @click="randomSwitchBtn(1)" class="column-flex-start-g15">
            <img v-if='active == 1' class="w35-h35-up-i5" src='https://gw.alicdn.com/tfs/TB1gtGHGuOSBuNjy0FdXXbDnVXa-59-59.png' />
            <div v-if='active == 1' class="ltgray-size24-down-t4-a">应用</div>
            <img v-if='active != 1' class="w35-h35-up-i5" src='https://gw.alicdn.com/tfs/TB1IJsEXjfguuRjSspkXXXchpXa-59-59.png' />
            <div v-if='active != 1' class="ltgray-size24-down-t4">应用</div>
          </div>
          <div id="g16" @click="randomSwitchBtn(2)" class="column-flex-start-g16">
            <img v-if='active == 2' class="w37-h37-up-i7" src='https://gw.alicdn.com/tfs/TB1Ts97GuSSBuNjy0FlXXbBpVXa-50-58.png' />
            <div v-if='active == 2' class="magenta-size24-down-t6-a">我的</div>
            <img v-if='active != 2' class="w37-h37-up-i7" src='https://gw.alicdn.com/tfs/TB1auDhGxSYBuNjSspjXXX73VXa-50-58.png' />
            <div v-if='active != 2' class="magenta-size24-down-t6">我的</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<style scoped>
.flex-con {
  overflow: auto;
}
.border-t {
  border-color: rgba(213, 213, 213, 1);
  border-style: solid;
  border-top-width: 1px; /* no */
}
.white-column-flex-start-w750-g13 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
}

.row-space-between-w750-g17 {
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 13px;
  margin-bottom: 11px;
  display: flex;
}

.column-flex-start-g14 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  margin-top: 2px;
  margin-left: 100px;
  display: flex;
}

.w36-h33-up-i3 {
  position: relative;
  width: 36px;
  height: 33px;
  align-self: center;
  margin-right: 1.5px;
}

.ltgray-size24-down-t2 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #bdbdff;
  line-height: 33px;
  font-weight: normal;
  margin-top: 8px;
}
.ltgray-size24-down-t2-a {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #9013fe;
  line-height: 33px;
  font-weight: normal;
  margin-top: 8px;
}

.column-flex-start-g15 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  margin-top: 2px;
  display: flex;
}

.w35-h35-up-i5 {
  position: relative;
  width: 35px;
  height: 35px;
  align-self: center;

  margin-right: 1px;
}

.ltgray-size24-down-t4-a {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #9013fe;
  line-height: 33px;
  font-weight: normal;
  margin-top: 8px;
}

.ltgray-size24-down-t4 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #bdbdff;
  line-height: 33px;
  font-weight: normal;
  margin-top: 6px;
}

.column-flex-start-g16 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  margin-right: 99px;
  display: flex;
}

.w37-h37-up-i7 {
  position: relative;
  width: 37px;
  height: 37px;
  align-self: center;
}

.magenta-size24-down-t6-a {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #9013fe;
  line-height: 33px;
  font-weight: normal;
  margin-top: 6px;
}

.magenta-size24-down-t6 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #bdbdff;
  line-height: 33px;
  font-weight: normal;
  margin-top: 6px;
}
</style>

<script>
export default {
  data: function() {
    return {
      active: 0
    };
  },
  components: {},
  methods: {
    test: function() {
      //console.log("mainApp");
    },
    randomSwitchBtn: function(index) {
      index = parseInt(index);
      this.active = index;
      api.setFrameGroupIndex({
        name: "group",
        index: index
      });
    }
  },
  mounted: function() {},
  created: function() {}
};
</script>
