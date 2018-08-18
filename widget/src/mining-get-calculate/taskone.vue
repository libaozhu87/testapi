
<template>
  <div>
    <div class="white-column-flex-start-w750-g146">
      <div id="g86" class="white-column-flex-start-g86">
        <div id="t17" class="black-size26-up-t17">完善资料</div>
        <img id="i16" class="w750-h2-down-i16" src='https://gw.alicdn.com/tfs/TB1t.jZGpOWBuNjy0FiXXXFxVXa-750-2.png' /> </div>
      <div id="g93" class="white-column-flex-start-g93">
        <div id="g91" class="row-space-between-w750-up-g91">
          <div id="g147" class="row-flex-start-left-g147">
            <img id="i25" class="w34-h34-left-i25" src='https://gw.alicdn.com/tfs/TB1weqcGGmWBuNjy1XaXXXCbXXa-34-34.png' />
            <div id="g87" class="column-flex-start-right-g87">
              <div id="t19" class="black-size28-up-t19">输入邀请码</div>
              <div id="t21" class="dkgray-size24-down-t21">＋20算力</div>
            </div>
          </div>
          <div id="g148" class="row-flex-start-right-g148">

            <div id="t24" v-if="!usreData.master" @click="gomaster" class="magenta-size24-left-t24">去完成</div>

            <!--  <div id="g97" class="row-flex-start-w110-h40-left-g97">
              <img id="i31" class="w110-h40-background-i31" src='https://gw.alicdn.com/tfs/TB1MtU2Gr9YBuNjy0FgXXcxcXXa-110-40.png' />
              <div id="t32" class="white-size24-t32">领取奖励</div>
            </div> -->
            <div class="magenta-size24-left-t24-1" v-if="usreData.master">已完成</div>

            <img id="i20" class="w30-h30-right-i20" src='https://gw.alicdn.com/tfs/TB1jKqcGGmWBuNjy1XaXXXCbXXa-30-30.png' /> </div>
        </div>
        <img id="i22" class="w690-h1-down-i22" src='https://gw.alicdn.com/tfs/TB1IUjZGpOWBuNjy0FiXXXFxVXa-690-1.png' /> </div>
      <div id="g101" class="white-column-flex-start-g101">
        <div id="g99" class="row-space-between-w750-up-g99">
          <div id="g149" class="row-flex-start-left-g149">
            <img id="i33" class="w40-h40-left-i33" src='https://gw.alicdn.com/tfs/TB1TDnAGAyWBuNjy0FpXXassXXa-40-40.png' />
            <div id="g95" class="column-flex-start-right-g95">
              <div id="t27" class="black-size28-up-t27">绑定手机号</div>
              <div id="t29" class="dkgray-size24-down-t29">＋20算力</div>
            </div>
          </div>
          <div id="g150" class="row-flex-start-right-g150">
            <!--    <div id="g97" class="row-flex-start-w110-h40-left-g97">
              <img id="i31" class="w110-h40-background-i31" src='https://gw.alicdn.com/tfs/TB1MtU2Gr9YBuNjy0FgXXcxcXXa-110-40.png' />
              <div id="t32" class="white-size24-t32">领取奖励</div>
            </div>  -->
            <div id="t24" v-if="!usreData.mobile" @click="gomobile" class="magenta-size24-left-t24">去完成</div>

            <!--  <div id="g97" class="row-flex-start-w110-h40-left-g97">
              <img id="i31" class="w110-h40-background-i31" src='https://gw.alicdn.com/tfs/TB1MtU2Gr9YBuNjy0FgXXcxcXXa-110-40.png' />
              <div id="t32" class="white-size24-t32">领取奖励</div>
            </div> -->
            <div class="magenta-size24-left-t24-1" v-if="usreData.mobile">已完成</div>

            <img id="i28" class="w30-h30-right-i28" src='https://gw.alicdn.com/tfs/TB10EjZGpOWBuNjy0FiXXXFxVXa-30-30.png' /> </div>
        </div>
        <img id="i30" class="w690-h1-down-i30" src='https://gw.alicdn.com/tfs/TB1InnAGAyWBuNjy0FpXXassXXa-690-1.png' /> </div>
      <div id="g108" class="white-column-flex-start-g108">
        <div id="g106" class="row-space-between-w750-up-g106">
          <div id="g151" class="row-flex-start-left-g151">
            <img id="i57" class="w47-h36-left-i57" src='https://gw.alicdn.com/tfs/TB1J9AaGx9YBuNjy0FfXXXIsVXa-47-36.png' />
            <div id="g102" class="column-flex-start-right-g102">
              <div id="t51" class="black-size28-up-t51">身份证号码认证</div>
              <div id="t53" class="dkgray-size24-down-t53">＋30算力</div>
            </div>
          </div>
          <div id="g152" class="row-flex-start-right-g152">
            <div id="t56" class="magenta-size24-left-t56">去完成</div>
            <img id="i52" class="w30-h30-right-i52" src='https://gw.alicdn.com/tfs/TB1zCAaGx9YBuNjy0FfXXXIsVXa-30-30.png' /> </div>
        </div>
        <img id="i54" class="w690-h1-down-i54" src='https://gw.alicdn.com/tfs/TB1un6NGrGYBuNjy0FoXXciBFXa-690-1.png' /> </div>
      <div id="g115" class="white-column-flex-start-g115">
        <div id="g113" class="row-space-between-w750-up-g113">
          <div id="g153" class="row-flex-start-left-g153">
            <img id="i66" class="w34-h34-left-i66" src='https://gw.alicdn.com/tfs/TB16kJuXzrguuRjy0FeXXXcbFXa-34-34.png' />
            <div id="g109" class="column-flex-start-right-g109">
              <div id="t60" class="black-size28-up-t60">身份证拍照认证</div>
              <div id="t62" class="dkgray-size24-down-t62">＋20算力</div>
            </div>
          </div>
          <div id="g154" class="row-flex-start-right-g154">
            <div id="t65" class="magenta-size24-left-t65">去完成</div>
            <img id="i61" class="w30-h30-right-i61" src='https://gw.alicdn.com/tfs/TB1SQJuXzrguuRjy0FeXXXcbFXa-30-30.png' /> </div>
        </div>
        <img id="i63" class="w690-h1-down-i63" src='https://gw.alicdn.com/tfs/TB1Jyk0GxGYBuNjy0FnXXX5lpXa-690-1.png' /> </div>
      <div id="g122" class="white-column-flex-start-g122">
        <div id="g120" class="row-space-between-w750-up-g120">
          <div id="g155" class="row-flex-start-left-g155">
            <img id="i74" class="w34-h34-left-i74" src='https://gw.alicdn.com/tfs/TB15qfYGuSSBuNjy0FlXXbBpVXa-34-34.png' />
            <div id="g116" class="column-flex-start-right-g116">
              <div id="t68" class="black-size28-up-t68">视频认证</div>
              <div id="t70" class="dkgray-size24-down-t70">＋20算力</div>
            </div>
          </div>
          <div id="g156" class="row-flex-start-right-g156">
            <div id="t73" class="magenta-size24-left-t73">去完成</div>
            <img id="i69" class="w30-h30-right-i69" src='https://gw.alicdn.com/tfs/TB1TOk0GxGYBuNjy0FnXXX5lpXa-30-30.png' /> </div>
        </div>
        <img id="i71" class="w690-h1-down-i71" src='https://gw.alicdn.com/tfs/TB1fkNuXzrguuRjy0FeXXXcbFXa-690-1.png' /> </div>
      <div id="g129" class="white-column-flex-start-g129">
        <div id="t36" class="black-size26-up-t36">邀请好友</div>
        <img id="i35" class="w750-h2-down-i35" src='https://gw.alicdn.com/tfs/TB13tU2Gr9YBuNjy0FgXXcxcXXa-750-2.png' /> </div>
      <div id="g135" class="white-column-flex-start-g135">
        <div id="g133" class="row-space-between-w750-up-g133">
          <div id="g157" class="row-flex-start-left-g157">
            <img id="i49" class="w40-h40-left-i49" src='https://gw.alicdn.com/tfs/TB1hD6NGrGYBuNjy0FoXXciBFXa-40-40.png' />
            <div id="g131" class="column-flex-start-right-g131">
              <div id="t38" class="black-size28-up-t38">好友完成手机绑定任务</div>
              <div id="g130" class="row-flex-start-down-g130">
                <div id="t40" class="dkgray-size24-left-t40">每个＋20算力</div>
                <div id="t41" class="yellow-size24-right-t41">已加成30算力</div>
              </div>
            </div>
          </div>
          <img id="i39" class="w30-h30-right-i39" src='https://gw.alicdn.com/tfs/TB17TnAGAyWBuNjy0FpXXassXXa-30-30.png' /> </div>
        <img id="i42" class="w690-h1-down-i42" src='https://gw.alicdn.com/tfs/TB1fdZ2Gr9YBuNjy0FgXXcxcXXa-690-1.png' /> </div>
      <div id="g142" class="white-column-flex-start-g142">
        <div id="g140" class="row-space-between-w750-up-g140">
          <div id="g158" class="row-flex-start-left-g158">
            <img id="i58" class="w47-h36-left-i58" src='https://gw.alicdn.com/tfs/TB1v5k0GxGYBuNjy0FnXXX5lpXa-47-36.png' />
            <div id="g138" class="column-flex-start-right-g138">
              <div id="t46" class="black-size28-up-t46">好友完成身份证号码认证</div>
              <div id="g137" class="row-flex-start-down-g137">
                <div id="t44" class="dkgray-size24-left-t44">每个＋20算力</div>
                <div id="t45" class="yellow-size24-right-t45">已加成30算力</div>
              </div>
            </div>
          </div>
          <img id="i47" class="w30-h30-right-i47" src='https://gw.alicdn.com/tfs/TB17D2NGrGYBuNjy0FoXXciBFXa-30-30.png' /> </div>
        <img id="i48" class="w690-h1-down-i48" src='https://gw.alicdn.com/tfs/TB1kmAaGx9YBuNjy0FfXXXIsVXa-690-1.png' /> </div>
      <div @click="goapp" id="g143" class="white-column-flex-start-w750-h116-g143">
        <img id="i13" class="w651-h70-absolute-i13" src='https://gw.alicdn.com/tfs/TB181mcGGmWBuNjy1XaXXXCbXXa-651-70.png' />
        <div id="t14" class="white-size30-t14">体验产品奖励算力</div>
      </div>

    </div>
  </div>
</template>
<style scoped>
.white-column-flex-start-w750-g146 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  background-color: rgba(240, 240, 240, 1);
  display: flex;
}

.white-row-center-w750-g76 {
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

.w52-h50-absolute-i4 {
  position: absolute;
  width: 52px;
  height: 50px;
  left: 13px;
  top: 25px;
}

.black-size32-t3 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Medium;
  font-size: 32px;
  color: #4a4a4a;
  line-height: 45px;
  font-weight: bold;
  margin-top: 0.5px;
}

.white-column-flex-start-g83 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 1px;
  display: flex;
}

.row-center-w750-g80 {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: flex-end;
  margin-top: 17px;
  display: flex;
}

.black-size26-t8 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #3a3a3a;
  line-height: 37px;
  font-weight: normal;
}

.w1-h47-i7 {
  position: relative;
  width: 1px;
  height: 47px;
  align-self: center;

  margin-left: 61px;
}

.black-size26-t10 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #3a3a3a;
  line-height: 37px;
  font-weight: normal;
  margin-left: 64px;
}

.w1-h47-i6 {
  position: relative;
  width: 1px;
  height: 47px;
  align-self: center;

  margin-left: 59px;
}

.magenta-size26-t11 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Semibold;
  font-size: 26px;
  color: #9013fe;
  line-height: 37px;
  font-weight: normal;
  margin-left: 62px;
}

.magenta-w109-h2-s9 {
  position: relative;
  width: 109px;
  height: 2px;
  align-self: flex-end;
  background-color: rgba(144, 19, 254, 1);
  margin-top: 13px;
  margin-right: 92px;
  margin-left: 549px;
}

.w750-h1-i12 {
  position: relative;
  width: 750px;
  height: 1px;
  align-self: flex-end;
}

.white-column-flex-start-g86 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 17px;
  display: flex;
}

.black-size26-up-t17 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Semibold;
  font-size: 26px;
  color: #3a3a3a;
  line-height: 37px;
  font-weight: normal;
  margin-top: 22px;
  margin-right: 615px;
  margin-bottom: 19px;
  margin-left: 30px;
}

.w750-h2-down-i16 {
  position: relative;
  width: 750px;
  height: 2px;
  align-self: flex-start;
}

.white-column-flex-start-g93 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
}

.row-space-between-w750-up-g91 {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 18px;
  display: flex;
}

.row-flex-start-left-g147 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: center;
  margin-left: 30px;
  display: flex;
}

.w34-h34-left-i25 {
  position: relative;
  width: 34px;
  height: 34px;
  align-self: center;

  margin-top: 0.5px;
}

.column-flex-start-right-g87 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: center;
  margin-left: 24px;
  display: flex;
}

.black-size28-up-t19 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 28px;
  color: #3a3a3a;
  line-height: 40px;
  font-weight: normal;
}

.dkgray-size24-down-t21 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #979797;
  line-height: 33px;
  font-weight: normal;
  margin-top: 8px;
  margin-right: 39px;
}

.row-flex-start-right-g148 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: center;
  margin-top: 0.5px;
  margin-right: 32px;
  display: flex;
}

.magenta-size24-left-t24-1 {
  position: relative;
  align-self: center;
  border-color: #d5d5d5;
  border-style: solid;
  border-width: 1px; /* no */
  border-radius: 4px;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #d5d5d5;
  line-height: 33px;
  font-weight: normal;
  padding-top: 3px;
  padding-right: 18px;
  padding-bottom: 4px;
  padding-left: 19px;
}

.magenta-size24-left-t24 {
  position: relative;
  align-self: center;
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(144, 19, 254, 1);
  border-style: solid;
  border-width: 1px; /* no */
  border-radius: 4px;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #9013fe;
  line-height: 33px;
  font-weight: normal;
  padding-top: 3px;
  padding-right: 18px;
  padding-bottom: 4px;
  padding-left: 19px;
}

.w30-h30-right-i20 {
  position: relative;
  width: 30px;
  height: 30px;
  align-self: center;

  margin-bottom: 1px;
  margin-left: 30px;
}

.w690-h1-down-i22 {
  position: relative;
  width: 690px;
  height: 1px;
  align-self: center;
}

.white-column-flex-start-g101 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 1px;
  display: flex;
}

.row-space-between-w750-up-g99 {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 18px;
  display: flex;
}

.row-flex-start-left-g149 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: center;
  margin-left: 26px;
  display: flex;
}

.w40-h40-left-i33 {
  position: relative;
  width: 40px;
  height: 40px;
  align-self: center;

  margin-bottom: 2.5px;
}

.column-flex-start-right-g95 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: center;
  margin-left: 22px;
  display: flex;
}

.black-size28-up-t27 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 28px;
  color: #3a3a3a;
  line-height: 40px;
  font-weight: normal;
}

.dkgray-size24-down-t29 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #979797;
  line-height: 33px;
  font-weight: normal;
  margin-top: 8px;
  margin-right: 39px;
}

.row-flex-start-right-g150 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: center;
  margin-top: 0.5px;
  margin-right: 32px;
  display: flex;
}

.row-flex-start-w110-h40-left-g97 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 110px;
  height: 40px;
  align-self: center;
  display: flex;
}

.w110-h40-background-i31 {
  position: absolute;
  width: 110px;
  height: 40px;
  left: 0;
  top: 0;
}

.white-size24-t32 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #ffffff;
  line-height: 33px;
  font-weight: normal;
  margin-bottom: 0.5px;
  margin-left: 8px;
}

.w30-h30-right-i28 {
  position: relative;
  width: 30px;
  height: 30px;
  align-self: center;

  margin-bottom: 1px;
  margin-left: 30px;
}

.w690-h1-down-i30 {
  position: relative;
  width: 690px;
  height: 1px;
  align-self: center;
}

.white-column-flex-start-g108 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
}

.row-space-between-w750-up-g106 {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 18px;
  display: flex;
}

.row-flex-start-left-g151 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: center;
  margin-left: 25px;
  display: flex;
}

.w47-h36-left-i57 {
  position: relative;
  width: 47px;
  height: 36px;
  align-self: center;

  margin-top: 1.5px;
}

.column-flex-start-right-g102 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: center;
  margin-left: 16px;
  display: flex;
}

.black-size28-up-t51 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 28px;
  color: #3a3a3a;
  line-height: 40px;
  font-weight: normal;
}

.dkgray-size24-down-t53 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #979797;
  line-height: 33px;
  font-weight: normal;
  margin-top: 8px;
  margin-right: 95px;
}

.row-flex-start-right-g152 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: center;
  margin-top: 0.5px;
  margin-right: 32px;
  display: flex;
}

.magenta-size24-left-t56 {
  position: relative;
  align-self: center;
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(144, 19, 254, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #9013fe;
  line-height: 33px;
  font-weight: normal;
  padding-top: 3px;
  padding-right: 18px;
  padding-bottom: 4px;
  padding-left: 19px;
}

.w30-h30-right-i52 {
  position: relative;
  width: 30px;
  height: 30px;
  align-self: center;

  margin-bottom: 1px;
  margin-left: 30px;
}

.w690-h1-down-i54 {
  position: relative;
  width: 690px;
  height: 1px;
  align-self: center;
}

.white-column-flex-start-g115 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
}

.row-space-between-w750-up-g113 {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 18px;
  display: flex;
}

.row-flex-start-left-g153 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: center;
  margin-left: 30px;
  display: flex;
}

.w34-h34-left-i66 {
  position: relative;
  width: 34px;
  height: 34px;
  align-self: center;

  margin-top: 0.5px;
}

.column-flex-start-right-g109 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: center;
  margin-left: 24px;
  display: flex;
}

.black-size28-up-t60 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 28px;
  color: #3a3a3a;
  line-height: 40px;
  font-weight: normal;
}

.dkgray-size24-down-t62 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #979797;
  line-height: 33px;
  font-weight: normal;
  margin-top: 8px;
  margin-right: 95px;
}

.row-flex-start-right-g154 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: center;
  margin-top: 0.5px;
  margin-right: 32px;
  display: flex;
}

.magenta-size24-left-t65 {
  position: relative;
  align-self: center;
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(144, 19, 254, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #9013fe;
  line-height: 33px;
  font-weight: normal;
  padding-top: 3px;
  padding-right: 18px;
  padding-bottom: 4px;
  padding-left: 19px;
}

.w30-h30-right-i61 {
  position: relative;
  width: 30px;
  height: 30px;
  align-self: center;

  margin-bottom: 1px;
  margin-left: 30px;
}

.w690-h1-down-i63 {
  position: relative;
  width: 690px;
  height: 1px;
  align-self: center;
}

.white-column-flex-start-g122 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
}

.row-space-between-w750-up-g120 {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 18px;
  display: flex;
}

.row-flex-start-left-g155 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: center;
  margin-left: 30px;
  display: flex;
}

.w34-h34-left-i74 {
  position: relative;
  width: 34px;
  height: 34px;
  align-self: center;

  margin-top: 0.5px;
}

.column-flex-start-right-g116 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: center;
  margin-left: 24px;
  display: flex;
}

.black-size28-up-t68 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 28px;
  color: #3a3a3a;
  line-height: 40px;
  font-weight: normal;
}

.dkgray-size24-down-t70 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #979797;
  line-height: 33px;
  font-weight: normal;
  margin-top: 8px;
  margin-right: 11px;
}

.row-flex-start-right-g156 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: center;
  margin-top: 0.5px;
  margin-right: 32px;
  display: flex;
}

.magenta-size24-left-t73 {
  position: relative;
  align-self: center;
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(144, 19, 254, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #9013fe;
  line-height: 33px;
  font-weight: normal;
  padding-top: 3px;
  padding-right: 18px;
  padding-bottom: 4px;
  padding-left: 19px;
}

.w30-h30-right-i69 {
  position: relative;
  width: 30px;
  height: 30px;
  align-self: center;

  margin-bottom: 1px;
  margin-left: 30px;
}

.w690-h1-down-i71 {
  position: relative;
  width: 690px;
  height: 1px;
  align-self: center;
}

.white-column-flex-start-g129 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 18px;
  display: flex;
}

.black-size26-up-t36 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Semibold;
  font-size: 26px;
  color: #3a3a3a;
  line-height: 37px;
  font-weight: normal;
  margin-top: 22px;
  margin-right: 615px;
  margin-bottom: 19px;
  margin-left: 30px;
}

.w750-h2-down-i35 {
  position: relative;
  width: 750px;
  height: 2px;
  align-self: flex-start;
}

.white-column-flex-start-g135 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
}

.row-space-between-w750-up-g133 {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 18px;
  display: flex;
}

.row-flex-start-left-g157 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: center;
  margin-left: 27px;
  display: flex;
}

.w40-h40-left-i49 {
  position: relative;
  width: 40px;
  height: 40px;
  align-self: flex-start;

  margin-top: 17px;
  margin-bottom: 24px;
}

.column-flex-start-right-g131 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: flex-start;
  margin-left: 21px;
  display: flex;
}

.black-size28-up-t38 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 28px;
  color: #3a3a3a;
  line-height: 40px;
  font-weight: normal;
  margin-right: 37px;
}

.row-flex-start-down-g130 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: flex-start;
  margin-top: 8px;
  display: flex;
}

.dkgray-size24-left-t40 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #979797;
  line-height: 33px;
  font-weight: normal;
}

.yellow-size24-right-t41 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #f5a623;
  line-height: 33px;
  font-weight: normal;
  margin-left: 19px;
}

.w30-h30-right-i39 {
  position: relative;
  width: 30px;
  height: 30px;
  align-self: center;

  margin-right: 32px;
  margin-bottom: 0.5px;
}

.w690-h1-down-i42 {
  position: relative;
  width: 690px;
  height: 1px;
  align-self: center;
}

.white-column-flex-start-g142 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 1px;
  display: flex;
}

.row-space-between-w750-up-g140 {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 17px;
  display: flex;
}

.row-flex-start-left-g158 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  align-self: center;
  margin-left: 26px;
  display: flex;
}

.w47-h36-left-i58 {
  position: relative;
  width: 47px;
  height: 36px;
  align-self: center;

  margin-bottom: 1px;
}

.column-flex-start-right-g138 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: center;
  margin-left: 15px;
  display: flex;
}

.black-size28-up-t46 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 28px;
  color: #3a3a3a;
  line-height: 40px;
  font-weight: normal;
  margin-right: 9px;
}

.row-flex-start-down-g137 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: flex-start;
  margin-top: 9px;
  display: flex;
}

.dkgray-size24-left-t44 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #979797;
  line-height: 33px;
  font-weight: normal;
}

.yellow-size24-right-t45 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #f5a623;
  line-height: 33px;
  font-weight: normal;
  margin-left: 19px;
}

.w30-h30-right-i47 {
  position: relative;
  width: 30px;
  height: 30px;
  align-self: center;

  margin-right: 32px;
  margin-bottom: 1px;
}

.w690-h1-down-i48 {
  position: relative;
  width: 690px;
  height: 1px;
  align-self: center;
}

.white-column-flex-start-w750-h116-g143 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  width: 750px;
  height: 116px;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  margin-left: -4px;
  display: flex;
}

.w651-h70-absolute-i13 {
  position: absolute;
  width: 651px;
  height: 70px;
  right: 45px;
  top: 16px;
}

.white-size30-t14 {
  position: relative;
  align-self: flex-end;
  font-family: PingFangSC-Medium;
  font-size: 30px;
  color: #ffffff;
  line-height: 42px;
  font-weight: bold;
  margin-top: 30px;
  margin-right: 249px;
}
</style>

<script>
import util from '../lib/util.js';

export default {
  data: function() {
    return {
      usreData: {}
    };
  },
  components: {},
  methods: {
    closeLogin: function() {
      api.closeWin();
    },
    gomaster: function() {
      util.goPage('./user-friend.html');
    },
    gomobile: function() {},
    goapp: function() {
      util.goPage('./frame1.html');
    }
  },

  created: function() {
    var self = this;
    util.getUserInfo(function(data) {
      if (data) {
        self.usreData = data;
      }
    });
  }
};
</script>
