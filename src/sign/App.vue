<template>
  <div>
    <div class="white-column-flex-start-w750-g21">
      <statusbar></statusbar>
      <navbar title="本月签到"></navbar>

      <div id="g49" class="row-center-w750-h2192-down-g49">
        <img id="i4" class="w750-h2192-background-i4" src='http://lubanpsdupload.oss-cn-shanghai.aliyuncs.com/hongxuan-sketch/hongxuan-sketch-module1534322657912.png' />
        <div id="s5" class="black-w750-h1234-absolute-s5"></div>
        <div id="g48" class="column-flex-start-w691-h1070-g48">

          <div class="box-warp">
            <div v-for="item in list" id="g30" @click="gosgin(item)" class="white-column-flex-start-g30">
              <img id="i21" class="w40-h40-up-i21" src='http://lubanpsdupload.oss-cn-shanghai.aliyuncs.com/hongxuan-sketch/hongxuan-sketch-module1534322663538.png' />
              <div id="t22" class="yellow-size24-down-t22">＋100</div>
              <div v-if="item.sign" id="g6" class="black-column-flex-start-h138-g6">
                <img id="i4" class="w51-h37-i4" src='http://lubanpsdupload.oss-cn-shanghai.aliyuncs.com/hongxuan-sketch/hongxuan-sketch-module1534325109046.png' />
              </div>
            </div>

          </div>

        </div>
      </div>
      <div class="fixed">
        <div id="g38" class="row-flex-start-g38">

          <div id="g31" class="column-flex-start-g31">
            <img id="i9" class="w70-h76-up-i9" src='http://lubanpsdupload.oss-cn-shanghai.aliyuncs.com/hongxuan-sketch/hongxuan-sketch-module1534322660229.png' />
            <div id="t8" class="yellow-size22-down-t8">100</div>

          </div>

          <!--        <div id="g33" class="column-flex-start-g33">
            <div id="g32" class="row-flex-end-w92-h90-up-g32">
              <img id="i10" class="w85-h87-up-i12" src='http://lubanpsdupload.oss-cn-shanghai.aliyuncs.com/hongxuan-sketch/hongxuan-sketch-module1534322661177.png' />
            </div>
            <div id="t14" class="yellow-size22-down-t14">900</div>
          </div> -->
          <div id="g34" class="column-flex-start-g33">
            <img id="i12" class="w85-h87-up-i12" src='http://lubanpsdupload.oss-cn-shanghai.aliyuncs.com/hongxuan-sketch/hongxuan-sketch-module1534322661177.png' />
            <div id="t15" class="yellow-size22-down-t15">宝箱</div>
          </div>

          <div id="g34" class="column-flex-start-g34">
            <img id="i12" class="w85-h87-up-i12" src='http://lubanpsdupload.oss-cn-shanghai.aliyuncs.com/hongxuan-sketch/hongxuan-sketch-module1534322661177.png' />
            <div id="t15" class="yellow-size22-down-t15">宝箱</div>
          </div>
          <div id="g36" class="column-flex-start-g36">
            <img id="i13" class="w85-h87-up-i13" src='http://lubanpsdupload.oss-cn-shanghai.aliyuncs.com/hongxuan-sketch/hongxuan-sketch-module1534322661642.png' />
            <div id="t16" class="yellow-size22-down-t16">宝箱</div>
          </div>
        </div>
        <div id="g41" class="row-space-between-w488-g41">
          <img id="i17" class="w1-h12-i17" src='http://lubanpsdupload.oss-cn-shanghai.aliyuncs.com/hongxuan-sketch/hongxuan-sketch-module1534322662129.png' />
          <img id="i18" class="w1-h11-i18" src='http://lubanpsdupload.oss-cn-shanghai.aliyuncs.com/hongxuan-sketch/hongxuan-sketch-module1534322662596.png' />
          <img id="i19" class="w1-h11-i19" src='http://lubanpsdupload.oss-cn-shanghai.aliyuncs.com/hongxuan-sketch/hongxuan-sketch-module1534322663050.png' />
          <img id="i6" class="w1-h11-i6" src='http://lubanpsdupload.oss-cn-shanghai.aliyuncs.com/hongxuan-sketch/hongxuan-sketch-module1534322659725.png' /> </div>
        <div id="s7" class="yellow-w691-h2-absolute-s7"></div>
        <div id="g46" class="row-flex-start-g46">
          <div id="t23" class="yellow-size24-t23">2天</div>
          <div id="t24" class="yellow-size24-t24">5天</div>
          <div id="t25" class="yellow-size24-t25">10天</div>
          <div id="t26" class="yellow-size24-t26">15天</div>
        </div>

      </div>

    </div>
  </div>
</template>

<style>
body,
html {
  background-color: #191038 !important;
}
</style>

 
<style scoped>
.fixed {
  padding-left: 30px;
  position: relative;
  margin-top: 60px;
}

.black-column-flex-start-h138-g6 {
  position: absolute;
  top: 0px;
  left: 0px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 138px;
  align-self: flex-start;
  background-color: rgba(82, 82, 82, 0.5);
  padding-right: 43.5px;
  padding-left: 42px;
  display: flex;
}

.w51-h37-i4 {
  position: relative;
  width: 51px;
  height: 37px;
  align-self: center;
  resize: stretch;
  margin-top: 96px;
  margin-right: 1.5px;
}
.white-column-flex-start-w750-g50 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  background-color: rgba(240, 240, 240, 1);
  display: flex;
}

.white-row-center-w750-up-g28 {
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

.w52-h50-absolute-i3 {
  position: absolute;
  width: 52px;
  height: 50px;
  left: 13px;
  top: 25px;
}

.black-size32-t2 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Medium;
  font-size: 32px;
  color: #4a4a4a;
  line-height: 45px;
  font-weight: bold;
  margin-top: 0.5px;
}

.row-center-w750-h2192-down-g49 {
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  display: flex;
}

.w750-h2192-background-i4 {
  position: absolute;
  width: 750px;
  height: 2192px;
  left: 0;
  top: 0;
}

.black-w750-h1234-absolute-s5 {
  position: absolute;
  width: 750px;
  height: 1234px;
  left: 0;
  top: 0;
  background-color: rgba(36, 9, 59, 0.6087919776119403);
}

.column-flex-start-w691-h1070-g48 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 702px;
  align-self: flex-start;
  margin-top: 81px;
  display: flex;
}

.box-warp {
  display: flex;
  flex-wrap: wrap;
}

.white-column-flex-start-g30 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 138px;
  align-self: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(151, 151, 151, 1);
  border-style: solid;
  border-width: 1px; /* no */
  margin-left: -1px; /* no */
  margin-bottom: -1px; /* no */
  display: flex;
}

.w40-h40-up-i21 {
  position: relative;
  width: 40px;
  height: 40px;
  align-self: center;

  margin-top: 28px;
}

.yellow-size24-down-t22 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #f5a623;
  line-height: 33px;
  font-weight: normal;
  margin-top: 15px;
  margin-right: 43px;
  margin-bottom: 22px;
  margin-left: 32px;
}

.row-flex-start-g38 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  align-self: flex-start;

  margin-left: 58px;
  display: flex;
}

.column-flex-start-g31 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-end;
  margin-top: 13px;
  display: flex;
}

.w70-h76-up-i9 {
  position: relative;
  width: 70px;
  height: 76px;
  align-self: center;
}

.yellow-size22-down-t8 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 22px;
  color: #f5a623;
  line-height: 30px;
  font-weight: normal;
  margin-top: 15px;
}

.column-flex-start-g33 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: flex-end;
  /*   margin-top: 20px;
 */
  margin-left: 82px;
  display: flex;
}

.row-flex-end-w92-h90-up-g32 {
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  width: 92px;
  height: 90px;
  align-self: flex-start;
  display: flex;
}

.w78-h90-absolute-i10 {
  position: absolute;
  width: 78px;
  height: 90px;
  left: 0;
  top: 0;
}

.black-w26-h30-s11 {
  position: relative;
  width: 26px;
  height: 30px;
  align-self: flex-end;
  background-color: rgba(25, 16, 56, 1);
  margin-bottom: 11px;
}

.yellow-size22-down-t14 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 22px;
  color: #f5a623;
  line-height: 30px;
  font-weight: normal;
  margin-top: -6px;
  margin-right: 33px;
  margin-left: 19px;
}

.column-flex-start-g34 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-end;
  margin-left: 72px;
  display: flex;
}

.w85-h87-up-i12 {
  position: relative;
  width: 85px;
  height: 87px;
  align-self: center;
}

.yellow-size22-down-t15 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 22px;
  color: #f5a623;
  line-height: 30px;
  font-weight: normal;
  margin-top: 17px;
  margin-right: 2px;
}

.column-flex-start-g36 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-end;
  margin-top: 2px;
  margin-left: 79px;
  display: flex;
}

.w85-h87-up-i13 {
  position: relative;
  width: 85px;
  height: 87px;
  align-self: center;
}

.yellow-size22-down-t16 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 22px;
  color: #f5a623;
  line-height: 30px;
  font-weight: normal;
  margin-top: 15px;
  margin-right: 1px;
}

.row-space-between-w488-g41 {
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  width: 488px;
  align-self: flex-start;
  margin-top: 3px;
  margin-left: 92px;
  display: flex;
}

.w1-h12-i17 {
  position: relative;
  width: 1px;
  height: 12px;
  align-self: flex-start;
}

.w1-h11-i18 {
  position: relative;
  width: 1px;
  height: 11px;
  align-self: flex-start;

  margin-top: 1px;
}

.w1-h11-i19 {
  position: relative;
  width: 1px;
  height: 11px;
  align-self: flex-start;

  margin-top: 1px;
}

.w1-h11-i6 {
  position: relative;
  width: 1px;
  height: 11px;
  align-self: flex-start;

  margin-top: 1px;
}

.yellow-w691-h2-absolute-s7 {
  position: absolute;
  width: 691px;
  height: 2px;
  left: 30px;
  bottom: 56px;
  background-color: rgba(245, 166, 35, 0.5);
}

.row-flex-start-g46 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: flex-start;
  margin-top: 23px;
  margin-left: 74px;
  display: flex;
}

.yellow-size24-t23 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #f5a623;
  line-height: 33px;
  font-weight: normal;
}

.yellow-size24-t24 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #f5a623;
  line-height: 33px;
  font-weight: normal;
  margin-left: 116px;
}

.yellow-size24-t25 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #f5a623;
  line-height: 33px;
  font-weight: normal;
  margin-left: 127px;
}

.yellow-size24-t26 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #f5a623;
  line-height: 33px;
  font-weight: normal;
  margin-left: 111px;
}
</style>
<script>
import statusbar from '../compents/statusbar.vue';
import navbar from '../compents/navbar.vue';
import util from '../lib/util.js';

export default {
  data: function() {
    return {
      list: [
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false },
        { sign: false }
      ]
    };
  },
  components: { statusbar, navbar },

  methods: {
    gosgin: function(item) {
      //item.sign = true;
      var self = this;
      util.ajax(
        'https://restful.yatou.com/user/checkin',
        {},
        function(res) {
          if (res.msg == '签到成功') {
            item.sign = true;
            util.alert(res.msg);
          } else {
            util.alert(res.msg);
          }
        },
        'GET'
      );
    }
  },
  created: function() {}
};
</script>
