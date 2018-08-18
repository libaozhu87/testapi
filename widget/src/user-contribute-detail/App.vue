<template>
  <div>
    <div class="white-column-flex-start-w750-g29">
      <statusbar></statusbar>
      <navbar title="好友贡献明细"></navbar>
      <div v-for="item in list">
        <div id="g28" class="white-row-space-between-w750-g28" @click="changeList(item)">
          <div id="t3" class="black-size26-left-t3">{{item.pushtime}} {{item.cname}}贡献：{{item.diamond}}源石</div>
          <div id="g44" class="row-flex-start-right-g44">
            <div id="t5" v-if="!item.isget" class="magenta-size26-left-t5">领取</div>

            <div id="t5" v-if="item.isget" class="magenta-size26-left-t5-1">已领取</div>
            <img v-if="!item.flag" class="w30-h30-right-i6" src='https://gw.alicdn.com/tfs/TB1dlxDczrguuRjy0FeXXXcbFXa-30-30.png' />
            <img v-if="item.flag" class="w30-h30-right-i6" src='https://gw.alicdn.com/tfs/TB1OHUpJx9YBuNjy0FfXXXIsVXa-30-30.png' />
          </div>
        </div>
        <div v-show="item.flag">
          <div id="g29" class="white-column-center-w750-g29">
            <div id="t12" class="black-size24-t12">20:21:17 您的徒弟AAAAAAA收取500源石，您获得100源石</div>
          </div>
        </div>

      </div>
      <div v-if="!list.length">
        <nodata title="没用好友贡献"></nodata>
      </div>
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
  color: #4a4a4a;
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
  color: #3a3a3a;
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
  border-width: 1px; /* no */
  border-radius: 8px;
  font-family: PingFangSC-Semibold;
  font-size: 26px;
  color: #9013fe;
  line-height: 37px;
  font-weight: normal;
  padding-top: 5px;
  padding-right: 22px;
  padding-bottom: 4px;
  padding-left: 23px;
}

.magenta-size26-left-t5-1 {
  position: relative;
  align-self: flex-end;
  font-family: PingFangSC-Semibold;
  font-size: 26px;
  color: #9b9b9b;
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
  color: #3a3a3a;
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
  border-width: 1px; /* no */
  margin-top: 1px; /* no */
  padding-top: 44px;
  padding-bottom: 43px;
  display: flex;
}

.black-size24-t14 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
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
  border-width: 1px; /* no */
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
  color: #3a3a3a;
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
  color: #9b9b9b;
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
  color: #9b9b9b;
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
  color: #9b9b9b;
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
  color: #9b9b9b;
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
import statusbar from '../compents/statusbar.vue';
import navbar from '../compents/navbar.vue';
import nodata from '../compents/nodata.vue';
import util from '../lib/util.js';

export default {
  data: function() {
    return {
      flag: false,
      list: []
    };
  },
  components: { statusbar, navbar, nodata },

  methods: {
    changeList: function(item) {
      item.flag = !item.flag;
      console.log(item);
    },
    getdetail: function() {
      var self = this;
      util.ajax(
        'https://restful.yatou.com/user/friendsdiamond/',
        {},
        function(res) {
          console.log(res);
          self.list = res;
          for (var i = 0; i < self.list.length; i++) {
            var item = self.list[i];
            //item.flag = false;
            //console.log(window.appVue);
            window.appVue.$set(item, 'flag', false);
            switch (item.types) {
              case 1:
                item.cname = '徒弟';
                //Vue.set(item, 'cname', '徒弟');
                break;
              case 2:
                item.cname = '徒孙';
                //Vue.set(item, 'cname', '徒孙');
                break;
            }
          }
          //console.log(self.list);
          //friendsdiamond
        },
        'GET'
      );
    }
  },
  created: function() {
    this.getdetail();
  }
};
</script>
