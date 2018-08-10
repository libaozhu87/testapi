<template>
  <div>
    <div id="g41" class="white-column-flex-start-w750-g41">

      <statusbar></statusbar>
      <navbar title="基本资料"></navbar>

      <div id="g40" class="white-column-flex-start-down-g40">
        <div id="g25" class="row-space-between-w688-g25">
          <img id="i2" class="w90-h90-left-i2" src='https://gw.alicdn.com/tfs/TB1ilDOGpOWBuNjy0FiXXXFxVXa-90-90.png' />
          <div id="g42" class="row-flex-start-right-g42">
            <div id="t21" class="dkgray-size26-left-t21">更改头像</div>
            <img id="i3" class="w10-h18-right-i3" src='https://gw.alicdn.com/tfs/TB1.qnxGuuSBuNjy1XcXXcYjFXa-10-18.png' /> </div>
        </div>
        <img id="i6" class="w750-h1-i6" src='https://gw.alicdn.com/tfs/TB147_3Gx9YBuNjy0FfXXXIsVXa-750-1.png' />
        <div id="g28" @click="goUserModifiedName" class="row-space-between-w693-g28">
          <div id="t19" class="black-size26-left-t19">用户名</div>
          <div id="g43" class="row-flex-start-right-g43">
            <div id="t14" class="dkgray-size26-left-t14">{{usreData.nikename}}</div>
            <img id="i4" class="w10-h18-right-i4" src='https://gw.alicdn.com/tfs/TB1z8DOGpOWBuNjy0FiXXXFxVXa-10-18.png' /> </div>
        </div>
        <img id="i8" class="w750-h1-i8" src='https://gw.alicdn.com/tfs/TB1.cURGr9YBuNjy0FgXXcxcXXa-750-1.png' />
        <div id="g31" class="row-space-between-w365-g31">
          <div id="t15" class="black-size26-left-t15">星级：{{usreData.starlevel}}</div>
          <div id="g30" class="ltgray-column-flex-start-right-g30">
            <img id="i17" :style="{'width':starlevelWidth+'px'}" class="w160-h4-i17" src='https://gw.alicdn.com/tfs/TB1bap5GGmWBuNjy1XaXXXCbXXa-160-4.png' /> </div>
        </div>
        <img id="i7" class="w744-h2-i7" src='https://gw.alicdn.com/tfs/TB1LLu1GwmTBuNjy1XbXXaMrVXa-744-2.png' />
        <div id="t10" class="black-size26-t10">全民股东ID：13599068878</div>
        <img id="i9" class="w750-h1-i9" src='https://gw.alicdn.com/tfs/TB1.fu1GwmTBuNjy1XbXXaMrVXa-750-1.png' />
        <div id="g38" class="row-space-between-w698-g38">
          <div id="t18" class="black-size26-left-t18">绑定手机</div>
          <div id="g44" class="row-flex-start-right-g44">
            <div id="t20" class="dkgray-size26-left-t20">{{usreData.mobile}}</div>
            <img id="i5" class="w10-h18-right-i5" src='https://gw.alicdn.com/tfs/TB1vfu1GwmTBuNjy1XbXXaMrVXa-10-18.png' /> </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.white-column-flex-start-w750-g41 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  background-color: rgba(240, 240, 240, 1);
  display: flex;
}

.white-column-flex-start-down-g40 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  /*   border-color: rgba(210, 210, 210, 1);
    border-style: solid;
    border-width: 1px;*/
  /*
    margin-bottom: 703px;
*/
  /*
    margin-left: -1px;
*/
  display: flex;
}

.row-space-between-w688-g25 {
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  width: 688px;
  align-self: flex-end;
  margin-top: 26px;
  margin-right: 26px;
  margin-bottom: 16px;
  margin-left: 38px;
  display: flex;
}

.w90-h90-left-i2 {
  position: relative;
  width: 90px;
  height: 90px;
  align-self: flex-start;
}

.row-flex-start-right-g42 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  margin-top: 23px;
  margin-bottom: 30px;
  display: flex;
}

.dkgray-size26-left-t21 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #9d9d9d;
  line-height: 37px;
  font-weight: normal;
}

.w10-h18-right-i3 {
  position: relative;
  width: 10px;
  height: 18px;
  align-self: center;

  margin-bottom: 1.5px;
  margin-left: 40px;
}

.w750-h1-i6 {
  position: relative;
  width: 750px;
  height: 1px;
  align-self: flex-end;

  margin-right: 1px;
  margin-left: 1px;
}

.row-space-between-w693-g28 {
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  width: 693px;
  align-self: flex-end;
  margin-top: 31px;
  margin-right: 26px;
  margin-bottom: 27px;
  margin-left: 33px;
  display: flex;
}

.black-size26-left-t19 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Medium;
  font-size: 26px;
  color: #444444;
  line-height: 37px;
  font-weight: bold;
  margin-top: 1px;
}

.row-flex-start-right-g43 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  margin-bottom: 1px;
  display: flex;
}

.dkgray-size26-left-t14 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #9d9d9d;
  line-height: 37px;
  font-weight: normal;
}

.w10-h18-right-i4 {
  position: relative;
  width: 10px;
  height: 18px;
  align-self: center;

  margin-bottom: 1.5px;
  margin-left: 39px;
}

.w750-h1-i8 {
  position: relative;
  width: 750px;
  height: 1px;
  align-self: flex-end;
  margin-right: 1px;
  margin-left: 1px;
}

.row-space-between-w365-g31 {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 365px;
  align-self: flex-start;
  margin-top: 31px;
  margin-right: 354px;
  margin-bottom: 27px;
  margin-left: 33px;
  display: flex;
}

.black-size26-left-t15 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Medium;
  font-size: 26px;
  color: #444444;
  line-height: 37px;
  font-weight: bold;
}

.ltgray-column-flex-start-right-g30 {
  /*
    flex-direction: column;
*/
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 200px;
  align-self: center;
  background-color: rgba(216, 216, 216, 1);
  margin-bottom: 0.5px;
  display: flex;
}

.w160-h4-i17 {
  position: relative;
  /*
    width: 160px;
*/
  height: 4px;
  align-self: flex-start;

  margin-right: 40px;
}

.w744-h2-i7 {
  position: relative;
  width: 750px;
  height: 1px;
  align-self: flex-end;
}

.black-size26-t10 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Medium;
  font-size: 26px;
  color: #444444;
  line-height: 37px;
  font-weight: bold;
  margin-top: 32px;
  margin-right: 396px;
  margin-bottom: 27px;
  margin-left: 33px;
}

.w750-h1-i9 {
  position: relative;
  width: 750px;
  height: 1px;
  align-self: flex-end;

  margin-right: 1px;
  margin-left: 1px;
}

.row-space-between-w698-g38 {
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  width: 698px;
  align-self: flex-end;
  margin-top: 35px;
  margin-right: 21px;
  margin-bottom: 33px;
  margin-left: 33px;
  display: flex;
}

.black-size26-left-t18 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Medium;
  font-size: 26px;
  color: #444444;
  line-height: 37px;
  font-weight: bold;
  margin-bottom: 2px;
}

.row-flex-start-right-g44 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  margin-top: 2px;
  display: flex;
}

.dkgray-size26-left-t20 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #9d9d9d;
  line-height: 37px;
  font-weight: normal;
}

.w10-h18-right-i5 {
  position: relative;
  width: 10px;
  height: 18px;
  align-self: center;

  margin-bottom: 0.5px;
  margin-left: 38px;
}
</style>

<script>
import statusbar from "../compents/statusbar.vue";
import navbar from "../compents/navbar.vue";
import util from "../lib/util.js";

export default {
  data: function() {
    return {
      usreData: {},
      starlevelWidth: 0
    };
  },
  components: { statusbar, navbar },
  methods: {
    goUserModifiedName: function() {
      util.goPage("./user-modified-name.html");
    }
  },
  created: function() {
    var self = this;
    util.getUserInfo(function(data) {
      if (data) {
        self.usreData = data;
        var sw = $api.dom("#g30").offsetWidth;
        self.starlevelWidth = Math.floor(self.usreData.starlevel * sw / 100);
      }
    });
  }
};
</script>