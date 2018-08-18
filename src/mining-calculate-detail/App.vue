
<template>
  <div>
    <div class="white-column-flex-start-w750-g127">
      <statusbar></statusbar>
      <navbar title="算力明细"></navbar>
      <div id="g69" class="row-flex-start-w750-h298-g69">
        <img id="i4" class="w750-h298-background-i4" src='https://gw.alicdn.com/tfs/TB1rNXsXzrguuRjy0FeXXXcbFXa-750-298.png' />
        <div id="g68" class="column-flex-start-w468-g68">
          <div id="g67" class="row-flex-start-up-g67">
            <img id="i6" class="w32-h32-left-i6" src='https://gw.alicdn.com/tfs/TB14SHEGuuSBuNjy1XcXXcYjFXa-32-32.png' />
            <div id="t5" class="white-size28-right-t5">算力总数</div>
          </div>
          <div id="t7" class="white-size70-down-t7">{{usreData.power||0}}</div>
        </div>
      </div>
      <div id="g77" class="row-center-w750-g77">
        <div id="g71" class="column-flex-start-g71" @click="changeBar(1)">
          <div id="t13" class="black-size26-up-t13">好友加成</div>
          <div id="t2" class="magenta-size26-down-t2">0</div>
        </div>
        <img id="i12" class="w1-h72-i12" src='https://gw.alicdn.com/tfs/TB11iv.Gx9YBuNjy0FfXXXIsVXa-1-72.png' />
        <div id="g73" class="column-flex-start-g73" @click="changeBar(2)">
          <div id="t14" class="black-size26-up-t14">任务奖励</div>
          <div id="t3" class="magenta-size26-down-t3">0</div>
        </div>
        <img id="i11" class="w1-h72-i11" src='https://gw.alicdn.com/tfs/TB1Bfa9GwmTBuNjy1XbXXaMrVXa-1-72.png' />
        <div id="g75" class="column-flex-start-g75" @click="changeBar(3)">
          <div id="t15" class="black-size26-up-t15">星级加成</div>
          <div id="t1" class="magenta-size26-down-t1">0</div>
        </div>
      </div>

      <div v-if="currentBar==1">
        <div id="g82" class="white-row-flex-end-w750-g82">
          <div id="t19" class="black-size22-t19">好友</div>
          <div id="t20" class="black-size22-t20">星级</div>
          <div id="t21" class="black-size22-t21">算力</div>
          <div id="t23" class="black-size22-t23">算力加成</div>
          <div id="t22" class="black-size22-t22">状态</div>
        </div>
        <div>
          <div id="g93" class="row-flex-start-w750-g93">
            <div id="t32" class="black-size24-t32">用户昵称七个字</div>
            <div id="t33" class="black-size24-t33">3</div>
            <div id="t29" class="black-size24-t29">79001</div>
            <div id="t30" class="black-size24-t30">300</div>
            <div id="t31" class="black-size24-t31">挖矿中</div>
          </div>
          <img id="i34" class="w690-h1-i34" src='https://gw.alicdn.com/tfs/TB1m5DwGuOSBuNjy0FdXXbDnVXa-690-1.png' />
        </div>

      </div>

      <div v-if="currentBar==2">
        <div id="g82" class="white-row-flex-end-w750-g82-1">
          <div id="t19" class="black-size22-t19-1">任务</div>
          <div id="t20" class="black-size22-t20-1">奖励</div>
        </div>
        <div>
          <div id="g93" class="row-flex-start-w750-g93">
            <div id="t32" class="black-size24-t32-1">输入邀请码</div>
            <div id="t33" class="black-size24-t33-1">500</div>
          </div>
          <img id="i34" class="w690-h1-i34" src='https://gw.alicdn.com/tfs/TB1m5DwGuOSBuNjy0FdXXbDnVXa-690-1.png' />
        </div>

      </div>

      <div v-if="currentBar==3">
        <div id="g82" class="white-row-flex-end-w750-g82-1">
          <div id="t19" class="black-size22-t19-1">星级</div>
          <div id="t20" class="black-size22-t20-1">加成</div>
          <!--           <div id="t21" class="black-size22-t21">算力</div>
          <div id="t23" class="black-size22-t23">算力加成</div>
          <div id="t22" class="black-size22-t22">状态</div> -->
        </div>
        <div>
          <div id="g93" class="row-flex-start-w750-g93">
            <div id="t32" class="black-size24-t32-1">1</div>
            <div id="t33" class="black-size24-t33-1">7900</div>
            <!--             <div id="t29" class="black-size24-t29">79001</div>
            <div id="t30" class="black-size24-t30">300</div>
            <div id="t31" class="black-size24-t31">挖矿中</div> -->
          </div>
          <img id="i34" class="w690-h1-i34" src='https://gw.alicdn.com/tfs/TB1m5DwGuOSBuNjy0FdXXbDnVXa-690-1.png' />
        </div>

      </div>

      <div id="g125" class="column-center-w651-h70-g125" @click="goget">
        <img id="i16" class="w651-h70-background-i16" src='https://gw.alicdn.com/tfs/TB1Sfa9GwmTBuNjy1XbXXaMrVXa-651-70.png' />
        <div id="t17" class="white-size30-t17">获取更多算力</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.white-column-flex-start-w750-g127 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 750px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
}

.white-row-center-w750-g66 {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: center;
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(213, 213, 213, 1);
  border-style: solid;
  border-width: 1px; /* no */
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
}

.w52-h50-absolute-i10 {
  position: absolute;
  width: 52px;
  height: 50px;
  left: 13px;
  top: 25px;
  resize: stretch;
}

.black-size32-t9 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Medium;
  font-size: 32px;
  color: #4a4a4a;
  line-height: 45px;
  font-weight: bold;
  margin-top: 0.5px;
}

.row-flex-start-w750-h298-g69 {
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

.w750-h298-background-i4 {
  position: absolute;
  width: 750px;
  height: 298px;
  left: 0;
  top: 0;
  resize: stretch;
}

.column-flex-start-w468-g68 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 56px;
  margin-left: 32px;
  display: flex;
}

.row-flex-start-up-g67 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  display: flex;
}

.w32-h32-left-i6 {
  position: relative;
  width: 32px;
  height: 32px;
  align-self: center;
  resize: stretch;
  margin-top: 1px;
}

.white-size28-right-t5 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 28px;
  color: #ffffff;
  line-height: 40px;
  font-weight: normal;
  margin-left: 6px;
}

.white-size70-down-t7 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 70px;
  color: #ffffff;
  line-height: 98px;
  font-weight: normal;
  margin-top: 20px;
}

.row-center-w750-g77 {
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 24px;
  display: flex;
}

.column-flex-start-g71 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  display: flex;
}

.black-size26-up-t13 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #444444;
  line-height: 37px;
  font-weight: normal;
}

.magenta-size26-down-t2 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #9013fe;
  line-height: 37px;
  font-weight: normal;
  margin-top: 1px;
  margin-left: 0.5px;
}

.w1-h72-i12 {
  position: relative;
  width: 1px;
  height: 72px;
  align-self: flex-start;
  resize: stretch;
  margin-bottom: 3px;
  margin-left: 61px;
}

.column-flex-start-g73 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  margin-left: 64px;
  display: flex;
}

.black-size26-up-t14 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #444444;
  line-height: 37px;
  font-weight: normal;
}

.magenta-size26-down-t3 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #9013fe;
  line-height: 37px;
  font-weight: normal;
  margin-top: 1px;
  margin-right: 1px;
}

.w1-h72-i11 {
  position: relative;
  width: 1px;
  height: 72px;
  align-self: flex-start;
  resize: stretch;
  margin-bottom: 3px;
  margin-left: 59px;
}

.column-flex-start-g75 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  margin-top: 1px;
  margin-left: 62px;
  display: flex;
}

.black-size26-up-t15 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #444444;
  line-height: 37px;
  font-weight: normal;
}

.magenta-size26-down-t1 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #9013fe;
  line-height: 37px;
  font-weight: normal;
  margin-left: 0.5px;
}

.white-row-flex-end-w750-g82-1 {
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: center;
  background-color: rgba(235, 235, 235, 1);
  margin-top: 9px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
}

.white-row-flex-end-w750-g82 {
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: center;
  background-color: rgba(235, 235, 235, 1);
  margin-top: 9px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
}

.black-size22-t19-1 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 22px;
  color: #3a3a3a;
  margin-left: 60px;
  line-height: 30px;
  font-weight: normal;
  margin-right: 322px;
}

.black-size22-t19 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 22px;
  color: #3a3a3a;
  line-height: 30px;
  font-weight: normal;
  margin-right: 122px;
}

.black-size22-t20-1 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 22px;
  color: #3a3a3a;
  line-height: 30px;
  font-weight: normal;
  /*   margin-right: 76px;
 */
}

.black-size22-t20 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 22px;
  color: #3a3a3a;
  line-height: 30px;
  font-weight: normal;
  margin-right: 76px;
}

.black-size22-t21 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 22px;
  color: #3a3a3a;
  line-height: 30px;
  font-weight: normal;
  margin-right: 53px;
}

.black-size22-t23 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 22px;
  color: #3a3a3a;
  line-height: 30px;
  font-weight: normal;
  margin-right: 42px;
}

.black-size22-t22 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 22px;
  color: #3a3a3a;
  line-height: 30px;
  font-weight: normal;
  margin-right: 65px;
}

.row-flex-start-w750-g88 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 29px;
  display: flex;
}

.black-size24-t27 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 61px;
}

.black-size24-t28 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 75px;
}

.black-size24-t24 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 81px;
}

.black-size24-t25 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 67px;
}

.black-size24-t26 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 50px;
}

.row-flex-start-w750-g93 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 56px;
  margin-bottom: 27px;
  display: flex;
}

.black-size24-t32-1 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 60px;
  width: 300px;
}
.black-size24-t33-1 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 60px;
}

.black-size24-t32 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 61px;
}

.black-size24-t33 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 75px;
}

.black-size24-t29 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 81px;
}

.black-size24-t30 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 64px;
}

.black-size24-t31 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 50px;
}

.w690-h1-i34 {
  position: relative;
  width: 690px;
  height: 1px; /* no */
  align-self: center;
  resize: stretch;
  margin-left: 1px;
}

.row-flex-start-w750-g98 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 29px;
  margin-bottom: 27px;
  display: flex;
}

.black-size24-t38 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 61px;
}

.black-size24-t39 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 75px;
}

.black-size24-t35 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 81px;
}

.black-size24-t36 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 67px;
}

.black-size24-t37 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 50px;
}

.w690-h1-i40 {
  position: relative;
  width: 690px;
  height: 1px; /* no */
  align-self: center;
  resize: stretch;
  margin-left: 1px;
}

.row-flex-start-w750-g103 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 29px;
  margin-bottom: 27px;
  display: flex;
}

.black-size24-t44 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 61px;
}

.black-size24-t45 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 75px;
}

.black-size24-t41 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 81px;
}

.black-size24-t42 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 67px;
}

.black-size24-t43 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 50px;
}

.w690-h1-i46 {
  position: relative;
  width: 690px;
  height: 1px; /* no */
  align-self: center;
  resize: stretch;
  margin-left: 1px;
}

.row-flex-start-w750-g108 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 29px;
  margin-bottom: 27px;
  display: flex;
}

.black-size24-t50 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 61px;
}

.black-size24-t51 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 75px;
}

.black-size24-t47 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 86px;
}

.black-size24-t48 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 67px;
}

.black-size24-t49 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 55px;
}

.w690-h1-i52 {
  position: relative;
  width: 690px;
  height: 1px; /* no */
  align-self: center;
  resize: stretch;
  margin-left: 1px;
}

.row-flex-start-w750-g113 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 29px;
  margin-bottom: 27px;
  display: flex;
}

.black-size24-t56 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 61px;
}

.black-size24-t57 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 75px;
}

.black-size24-t53 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 81px;
}

.black-size24-t54 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 67px;
}

.black-size24-t55 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 50px;
}

.w690-h1-i58 {
  position: relative;
  width: 690px;
  height: 1px; /* no */
  align-self: center;
  resize: stretch;
  margin-left: 1px;
}

.row-center-w750-g118 {
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 29px;
  margin-bottom: 27px;
  display: flex;
}

.ltgray-size24-t62 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #cccccc;
  line-height: 33px;
  font-weight: normal;
}

.ltgray-size24-t63 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #cccccc;
  line-height: 33px;
  font-weight: normal;
  margin-left: 75px;
}

.ltgray-size24-t59 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #cccccc;
  line-height: 33px;
  font-weight: normal;
  margin-left: 81px;
}

.ltgray-size24-t60 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #cccccc;
  line-height: 33px;
  font-weight: normal;
  margin-left: 67px;
}

.ltgray-size24-t61 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #cccccc;
  line-height: 33px;
  font-weight: normal;
  margin-left: 62px;
}

.w690-h1-i64 {
  position: relative;
  width: 690px;
  height: 1px; /* no */
  align-self: center;
  resize: stretch;
  margin-left: 1px;
}

.column-center-w651-h70-g125 {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 750px;
  height: 70px;
  align-self: center;
  margin-top: 48px;

  bottom: 30px;
  margin-left: 0.5px;
  display: flex;
}

.w651-h70-background-i16 {
  position: absolute;
  width: 651px;
  height: 70px;
  left: 0;
  top: 0;
  right: 0;
  margin: auto;
  resize: stretch;
}

.white-size30-t17 {
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
      currentBar: 1,

      usreData: {}
    };
  },
  components: { statusbar, navbar },
  methods: {
    closeLogin: function() {
      api.closeWin();
    },
    changeBar: function(index) {
      this.currentBar = index;
      this.$emit('currentbarindex', this.currentBar);
    },
    goget: function() {
      util.goPage('./mining-get-calculate.html');
    },
    getdetail: function() {
      util.ajax(
        'https://restful.yatou.com/user/power/',
        {},
        function(res) {
          console.log(res);
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
