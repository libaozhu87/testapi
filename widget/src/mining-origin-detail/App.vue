
<template>
  <div>
    <div class="white-column-flex-start-w750-g57">
      <statusbar></statusbar>
      <navbar title="源石明细"></navbar>
      <div id="g34" class="row-flex-start-w750-h298-g34">
        <img id="i1" class="w750-h298-background-i1" src='https://gw.alicdn.com/tfs/TB16wvSGuSSBuNjy0FlXXbBpVXa-750-298.png' />
        <div id="g33" class="column-flex-start-w522-g33">
          <div id="g32" class="row-flex-start-up-g32">
            <img id="i4" class="w30-h32-left-i4" src='https://gw.alicdn.com/tfs/TB1O_7UGxGYBuNjy0FnXXX5lpXa-30-32.png' />
            <div id="t2" class="white-size28-right-t2">源石总数</div>
          </div>
          <div id="t3" class="white-size70-down-t3">{{list[0].disciple_diamon||0}}</div>
        </div>
      </div>
      <div class="listwarp">
        <div v-for="item in list[2]">
          <div id="g37" class="row-space-between-w750-g37">
            <div id="g36" class="column-flex-start-left-g36">
              <div id="t26" class="black-size28-up-t26">{{item.taskname||'挖矿所得'}}</div>
              <div id="t27" class="dkgray-size24-down-t27">{{item.complatetime}}</div>
            </div>
            <div id="t25" class="red-size32-right-t25">{{item.detail}}</div>
          </div>
          <img id="i24" class="w690-h1-i24" src='https://gw.alicdn.com/tfs/TB10gzSGuSSBuNjy0FlXXbBpVXa-690-1.png' />
        </div>
      </div>
      <div id="g56" class="column-center-w651-h70-g56">
        <img id="i28" class="w651-h70-background-i28" src='https://gw.alicdn.com/tfs/TB1XK6UGpOWBuNjy0FiXXXFxVXa-651-70.png' />
        <div id="t29" class="white-size30-t29">提现</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.listwarp {
  padding-bottom: 200px;
}
.white-column-flex-start-w750-g57 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 750px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
}

.white-row-center-w750-g31 {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: center;
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(213, 213, 213, 1);
  border-style: solid;
  border-width: 1px;
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
}

.w52-h50-absolute-i7 {
  position: absolute;
  width: 52px;
  height: 50px;
  left: 13px;
  top: 25px;
  resize: stretch;
}

.black-size32-t6 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Medium;
  font-size: 32px;
  color: #4a4a4a;
  line-height: 45px;
  font-weight: bold;
  margin-top: 0.5px;
}

.row-flex-start-w750-h298-g34 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  height: 298px;
  align-self: center;
  margin-top: 1px;
  display: flex;
}

.w750-h298-background-i1 {
  position: absolute;
  width: 750px;
  height: 298px;
  left: 0;
  top: 0;
  resize: stretch;
}

.column-flex-start-w522-g33 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 56px;
  margin-left: 30px;
  display: flex;
}

.row-flex-start-up-g32 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  display: flex;
}

.w30-h32-left-i4 {
  position: relative;
  width: 30px;
  height: 32px;
  align-self: center;
  resize: stretch;
  margin-top: 1px;
}

.white-size28-right-t2 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 28px;
  color: #ffffff;
  line-height: 40px;
  font-weight: normal;
  margin-left: 10px;
}

.white-size70-down-t3 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 70px;
  color: #ffffff;
  line-height: 98px;
  font-weight: normal;
  margin-top: 20px;
}

.row-space-between-w750-g37 {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 36px;
  margin-bottom: 31px;
  display: flex;
}

.column-flex-start-left-g36 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: center;
  margin-left: 30px;
  display: flex;
}

.black-size28-up-t26 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 28px;
  color: #3a3a3a;
  line-height: 40px;
  font-weight: normal;
  margin-right: 68px;
}

.dkgray-size24-down-t27 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #979797;
  line-height: 33px;
  font-weight: normal;
  margin-top: 12px;
}

.red-size32-right-t25 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Medium;
  font-size: 32px;
  color: #c01e00;
  line-height: 45px;
  font-weight: bold;
  margin-right: 32px;
}

.w690-h1-i24 {
  position: relative;
  width: 690px;
  height: 1px; /* no */
  align-self: center;
  resize: stretch;
}

/* s s s s */
.column-center-w651-h70-g56 {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 750px;
  height: 70px;
  align-self: center;

  bottom: 30px;
  display: flex;
}

.w651-h70-background-i28 {
  position: absolute;
  width: 651px;
  height: 70px;
  left: 0;
  top: 0;
  right: 0px;
  margin: auto;
}

.white-size30-t29 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Medium;
  font-size: 30px;
  color: #ffffff;
  line-height: 42px;
  font-weight: bold;
}
</style>

<script>
import statusbar from '../compents/statusbar.vue';
import navbar from '../compents/navbar.vue';
import util from '../lib/util.js';

export default {
  data: function() {
    return {
      usreData: {},
      list: [{}]
    };
  },
  components: { statusbar, navbar },
  methods: {
    closeLogin: function() {
      api.closeWin();
    },
    getdetail: function() {
      var self = this;
      util.ajax(
        'https://restful.yatou.com/user/diamond/',
        {},
        function(res) {
          //console.log(res);
          self.list = res;
        },
        'GET'
      );
    }
  },
  created: function() {
    var self = this;
    util.getUserInfo(function(data) {
      if (data) {
        self.usreData = data;
      }
    });
    this.getdetail();
  }
};
</script>
