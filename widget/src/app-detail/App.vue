
<template>
  <div>
    <div class="white-column-flex-start-w750-g63">
      <statusbar></statusbar>
      <navbar title="应用详情"></navbar>
      <div id="g44" class="white-row-space-between-w750-g44">
        <div id="g64" class="row-flex-start-left-g64">
          <img id="i13" class="w80-h80-left-i13" :src="task.img" />
          <div id="g39" class="column-flex-start-right-g39">
            <div id="t5" class="black-size26-t5">{{task.taskname}}</div>
            <div id="t6" class="dkgray-size22-t6">{{task.weight}}</div>
            <div id="g37" class="row-flex-start-g37">
              <div id="t8" class="yellow-size22-left-t8">官方</div>
              <div id="t10" class="green-size22-right-t10">安全</div>
            </div>
          </div>
        </div>
        <div id="g65" class="row-flex-start-right-g65">
          <div id="t32" class="black-size24-t32">总奖励</div>
          <div id="t11" class="black-size24-t11">{{task.taskinfo}}</div>
          <img id="i12" class="w32-h32-i12" src='https://gw.alicdn.com/tfs/TB1EbXnGWmWBuNjy1XaXXXCbXXa-32-32.png' /> </div>
      </div>
      <div id="g54" class="white-column-flex-start-g54">
        <div id="t23" class="black-size26-t23">任务说明</div>
        <div id="g46" class="row-flex-start-w750-g46">
          <div id="s18" class="ltgray-w24-h24-left-s18"></div>
          <div id="t21" class="black-size24-right-t21">下载应用后安装并注册 800算力</div>
        </div>
        <div id="g47" class="row-flex-start-w750-g47">
          <img id="i15" class="w1-h76-left-i15" src='https://gw.alicdn.com/tfs/TB1bbdnGWmWBuNjy1XaXXXCbXXa-1-76.png' />
          <div id="t22" class="gray-size22-w636-right-t22">点击本页[下载并开始任务]按钮开始下载，然后安装并注册，再登录使用1分钟。</div>
        </div>
        <div id="g67" class="row-flex-start-w541-h109-g67">
          <div id="g66" class="column-flex-start-g66">
            <div id="g48" class="row-flex-start-up-g48">
              <div id="s17" class="ltgray-w24-h24-left-s17"></div>
              <div id="t19" class="black-size24-right-t19">次日再次使用 300算力</div>
            </div>
            <img id="i16" class="w1-h71-down-i16" src='https://gw.alicdn.com/tfs/TB1SJW6GKSSBuNjy0FlXXbBpVXa-1-71.png' /> </div>
          <div id="t20" class="gray-size22-absolute-t20">点击本页[点击去完成任务]打开应用并使用1分钟。</div>
        </div>
      </div>
      <div id="g62" class="white-column-flex-start-g62">
        <div id="t26" class="black-size26-t26">应用介绍</div>
        <div id="g57" class="row-flex-start-w750-g57">
          <img id="i27" class="w272-h381-i27" src='https://gw.alicdn.com/tfs/TB1dd16GKSSBuNjy0FlXXbBpVXa-272-381.png' />
          <img id="i30" class="w272-h381-i30" src='https://gw.alicdn.com/tfs/TB1ntEDGL1TBuNjy0FjXXajyXXa-272-381.png' />
          <img id="i31" class="w134-h381-i31" src='https://gw.alicdn.com/tfs/TB1g0uHGQyWBuNjy0FpXXassXXa-134-381.png' /> </div>
        <img id="i25" class="w745-h1-i25" src='https://gw.alicdn.com/tfs/TB1urdnGWmWBuNjy1XaXXXCbXXa-745-1.png' />
        <div id="g59" class="column-center-w651-h70-g59">
          <img id="i28" class="w651-h70-background-i28" src='https://gw.alicdn.com/tfs/TB1VtqHGQyWBuNjy0FpXXassXXa-651-70.png' />
          <div id="t29" class="white-size30-t29">下载并开始任务</div>
        </div>
      </div>

    </div>
  </div>
</template>
<style scoped>
.white-column-flex-start-w750-g63 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  background-color: rgba(240, 240, 240, 1);
  display: flex;
}

.white-row-center-w750-g34 {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(213, 213, 213, 1);
  border-style: solid;
  border-width: 1px; /* no */
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
  resize: stretch;
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

.white-row-space-between-w750-g44 {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(213, 213, 213, 1);
  border-style: solid;
  border-bottom-width: 1px; /* no */
  margin-top: 1px; /* no */
  padding-top: 31.5px;
  padding-bottom: 31px;
  display: flex;
}

.row-flex-start-left-g64 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: center;
  margin-top: 0.5px;
  margin-left: 30px;
  display: flex;
}

.w80-h80-left-i13 {
  position: relative;
  width: 80px;
  height: 80px;
  align-self: center;
  resize: stretch;
  margin-bottom: 0.5px;
}

.column-flex-start-right-g39 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: center;
  margin-left: 32px;
  display: flex;
}

.black-size26-t5 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #3a3a3a;
  line-height: 37px;
  font-weight: normal;
  margin-right: 26px;
}

.dkgray-size22-t6 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 22px;
  color: #b6b6b6;
  line-height: 30px;
  font-weight: normal;
  margin-right: 83px;
}

.row-flex-start-g37 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: flex-start;
  display: flex;
}

.yellow-size22-left-t8 {
  position: relative;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(245, 166, 35, 1);
  border-style: solid;
  border-width: 1px; /* no */
  border-radius: 4px;
  font-family: PingFangSC-Regular;
  font-size: 22px;
  color: #f5a623;
  line-height: 30px;
  font-weight: normal;
  padding-right: 7px;
  padding-left: 8px;
}

.green-size22-right-t10 {
  position: relative;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(126, 211, 33, 1);
  border-style: solid;
  border-width: 1px; /* no */
  border-radius: 4px;
  font-family: PingFangSC-Regular;
  font-size: 22px;
  color: #7ed321;
  line-height: 30px;
  font-weight: normal;
  margin-left: 11px;
  padding-right: 7px;
  padding-left: 8px;
}

.row-flex-start-right-g65 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: center;
  margin-right: 32px;
  display: flex;
}

.black-size24-t32 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-bottom: 1px; /* no */
}

.black-size24-t11 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-top: 1px; /* no */
  margin-left: 7px;
}

.w32-h32-i12 {
  position: relative;
  width: 32px;
  height: 32px;
  align-self: flex-start;
  resize: stretch;
  margin-top: 1px; /* no */
  margin-bottom: 1px; /* no */
  margin-left: 20px;
}

.white-column-flex-start-g54 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 18px;
  display: flex;
}

.black-size26-t23 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Semibold;
  font-size: 26px;
  color: #4c4c4c;
  line-height: 37px;
  font-weight: normal;
  margin-top: 22px;
  margin-left: 28px;
}

.row-flex-start-w750-g46 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 37px;
  display: flex;
}

.ltgray-w24-h24-left-s18 {
  position: relative;
  width: 24px;
  height: 24px;
  align-self: center;
  background-color: rgba(213, 213, 213, 1);
  border-radius: 24px;
  margin-bottom: 1.5px;
  margin-left: 30px;
}

.black-size24-right-t21 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 28px;
}

.row-flex-start-w750-g47 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 5px;
  display: flex;
}

.w1-h76-left-i15 {
  position: relative;
  width: 1px; /* no */
  height: 76px;
  align-self: flex-start;
  resize: stretch;
  margin-left: 42px;
}

.gray-size22-w636-right-t22 {
  position: relative;
  width: 636px;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 22px;
  color: #808080;
  line-height: 30px;
  div-align: left;
  font-weight: normal;
  margin-top: 3px;
  margin-bottom: 13px;
  margin-left: 39px;
}

.row-flex-start-w541-h109-g67 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 541px;
  height: 109px;
  align-self: flex-start;
  margin-top: 5px;
  margin-right: 179px;
  margin-bottom: 19px;
  margin-left: 30px;
  display: flex;
}

.column-flex-start-g66 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: flex-start;
  display: flex;
}

.row-flex-start-up-g48 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  display: flex;
}

.ltgray-w24-h24-left-s17 {
  position: relative;
  width: 24px;
  height: 24px;
  align-self: center;
  background-color: rgba(213, 213, 213, 1);
  border-radius: 24px;
  margin-bottom: 1.5px;
}

.black-size24-right-t19 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 28px;
}

.w1-h71-down-i16 {
  position: relative;
  width: 1px; /* no */
  height: 71px;
  align-self: flex-start;
  resize: stretch;
  margin-top: 5px;
  margin-right: 291px;
  margin-left: 12px;
}

.gray-size22-absolute-t20 {
  position: absolute;
  right: 0;
  top: 56px;
  transform: translateY(-50%);
  font-family: PingFangSC-Regular;
  font-size: 22px;
  color: #808080;
  line-height: 30px;
  font-weight: normal;
}

.white-column-flex-start-g62 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 21px;
  margin-bottom: -10px;
  display: flex;
}

.black-size26-t26 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Semibold;
  font-size: 26px;
  color: #3a3a3a;
  line-height: 37px;
  font-weight: normal;
  margin-top: 24px;
  margin-left: 30px;
}

.row-flex-start-w750-g57 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 28px;
  margin-bottom: 89px;
  display: flex;
}

.w272-h381-i27 {
  position: relative;
  width: 272px;
  height: 381px;
  align-self: flex-start;
  resize: stretch;
  margin-left: 30px;
}

.w272-h381-i30 {
  position: relative;
  width: 272px;
  height: 381px;
  align-self: flex-start;
  resize: stretch;
  margin-left: 20px;
}

.w134-h381-i31 {
  position: relative;
  width: 134px;
  height: 381px;
  align-self: flex-start;
  resize: stretch;
  margin-left: 22px;
}

.w745-h1-i25 {
  position: relative;
  width: 745px;
  height: 1px; /* no */
  align-self: center;
  resize: stretch;
  margin-left: 1.5px;
}

.column-center-w651-h70-g59 {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 651px;
  height: 70px;
  align-self: center;
  margin-top: 31px;
  margin-bottom: 40px;
  margin-left: 0.5px;
  display: flex;
}

.w651-h70-background-i28 {
  position: absolute;
  width: 651px;
  height: 70px;
  left: 0;
  top: 0;
  resize: stretch;
}

.white-size30-t29 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Medium;
  font-size: 30px;
  color: #ffffff;
  line-height: 42px;
  font-weight: bold;
  margin-left: 0.5px;
}
</style>



<script>
import statusbar from '../compents/statusbar.vue';
import navbar from '../compents/navbar.vue';
import util from '../lib/util.js';

//;

export default {
  data: function() {
    return {
      task: {}
    };
  },
  components: { statusbar, navbar },
  methods: {
    closeLogin: function() {
      api.closeWin();
    }
  },
  created: function() {
    var qs = util.getQueryString();
    var id = qs['id'];
    console.log(id);
    var self = this;
    util.ajax(
      'https://restful.yatou.com/task/' + id,
      {},
      function(res) {
        self.task = res;
        //console.log('task');
        //console.log(res);
      },
      'GET'
    );
  }
};
</script>
