<template>
  <div>
    <div id="g97" class="white-column-flex-start-w750-g97">
      <div id="g96" class="column-flex-start-w750-g96">
        <div id="g64" class="row-flex-start-w750-h753-down-g64">
          <img id="i3" class="w750-h753-background-i3" src='https://gw.alicdn.com/tfs/TB1XYk7JuuSBuNjy1XcXXcYjFXa-750-753.png' />
          <div id="g63" class="column-flex-start-g63">
            <div id="g56" class="row-space-between-w750-g56">
              <div id="g54" class="column-flex-start-left-g54">
                <div id="g51" @click="goOriginDetail" class="row-flex-start-w237-h50-up-g51">
                  <img id="i40" class="w237-h50-background-i40" src='https://gw.alicdn.com/tfs/TB1N_8oJHGYBuNjy0FoXXciBFXa-237-50.png' />
                  <div id="g50" class="row-flex-start-g50">
                    <img id="i44" class="w32-h32-left-i44" src='https://gw.alicdn.com/tfs/TB10D8oJHGYBuNjy0FoXXciBFXa-32-32.png' />
                    <div id="t43" class="white-size24-right-t43">源石{{usreData.diamond||0}}</div>
                  </div>
                </div>
                <div id="g53" @click="goCalculateDetail" class="row-center-w236-h50-down-g53">
                  <img id="i41" class="w236-h50-background-i41" src='https://gw.alicdn.com/tfs/TB1fYL.JGmWBuNjy1XaXXXCbXXa-236-50.png' />
                  <div id="g52" class="row-flex-start-g52">
                    <img id="i45" class="w32-h32-left-i45" src='https://gw.alicdn.com/tfs/TB1trL.JGmWBuNjy1XaXXXCbXXa-32-32.png' />
                    <div id="t42" class="white-size24-right-t42">算力{{usreData.power||0}}</div>
                  </div>
                </div>
              </div>
              <div id="g55" class="row-center-w164-h70-right-g55" @click="goCheats">
                <img id="i35" class="w164-h70-background-i35" src='https://gw.alicdn.com/tfs/TB1V8EMJwmTBuNjy1XbXXaMrVXa-164-70.png' />
                <div id="t36" class="yellow-size24-t36">开采秘笈</div>
              </div>
            </div>
            <div id="g60" class="row-space-between-w750-g60">
              <div id="g101" class="row-flex-start-left-g101">
                <img id="i46" @click="goGetCalculate" class="w54-h54-left-i46" src='https://gw.alicdn.com/tfs/TB1d.XoJHGYBuNjy0FoXXciBFXa-54-54.png' />
                <img id="i47" @click="goShop" class="w60-h60-right-i47" src='https://gw.alicdn.com/tfs/TB114.6JAyWBuNjy0FpXXassXXa-60-60.png' /> </div>
              <div id="g59" class="column-flex-start-right-g59">
                <div id="g58" class="row-center-w157-h60-up-g58" @click="goSteal()">
                  <img id="i37" class="w157-h60-background-i37" src='https://gw.alicdn.com/tfs/TB1d4.6JAyWBuNjy0FpXXassXXa-157-60.png' />
                  <div id="t38" class="white-size26-t38">偷源石</div>
                </div>
                <div id="t34" class="white-size24-down-t34">源石剩余:{{diamondValue}}/10000万</div>
              </div>
            </div>
            <div id="g61" class="row-space-between-w750-g61">
              <div id="t48" @click="goGetCalculate" class="yellow-size24-left-t48">获取算力</div>
              <div id="t49" class="yellow-size24-right-t49" @click="goShop">兑换商品</div>
            </div>
          </div>

          <div class="d-pos">
            <div class="d-list" v-for="(item,index) in diamondlist">
              <div class="d-item-warp di1 an" v-if="index==0&&!item.isget">
                <img class="w76-h76-i24" @click="getOrigin(item)" src="http://lubanpsdupload.oss-cn-shanghai.aliyuncs.com/hongxuan-sketch/hongxuan-sketch-module1534385854359.png" alt="">
                <div id="t22" class="white-size26-down-t22">{{item.diamond||0}}</div>
              </div>
              <div class="d-item-warp di2 an" v-if="index==1&&!item.isget">
                <img class="w76-h76-i24" @click="getOrigin(item)" src="http://lubanpsdupload.oss-cn-shanghai.aliyuncs.com/hongxuan-sketch/hongxuan-sketch-module1534385854359.png" alt="">
                <div id="t22" class="white-size26-down-t22">{{item.diamond||0}}</div>
              </div>
              <div class="d-item-warp di3 an" v-if="index==2&&!item.isget">
                <img class="w76-h76-i24" @click="getOrigin(item)" src="http://lubanpsdupload.oss-cn-shanghai.aliyuncs.com/hongxuan-sketch/hongxuan-sketch-module1534385854359.png" alt="">
                <div id="t22" class="white-size26-down-t22">{{item.diamond||0}}</div>
              </div>
              <div class="d-item-warp di4 an" v-if="index==3&&!item.isget">
                <img class="w76-h76-i24" @click="getOrigin(item)" src="http://lubanpsdupload.oss-cn-shanghai.aliyuncs.com/hongxuan-sketch/hongxuan-sketch-module1534385854359.png" alt="">
                <div id="t22" class="white-size26-down-t22">{{item.diamond||0}}</div>
              </div>
              <div class="d-item-warp di5 an" v-if="index==4&&!item.isget">
                <img class="w76-h76-i24" @click="getOrigin(item)" src="http://lubanpsdupload.oss-cn-shanghai.aliyuncs.com/hongxuan-sketch/hongxuan-sketch-module1534385854359.png" alt="">
                <div id="t22" class="white-size26-down-t22">{{item.diamond||0}}</div>
              </div>
              <div class="d-item-warp di6 an" v-if="index==5&&!item.isget">
                <img class="w76-h76-i24" @click="getOrigin(item)" src="http://lubanpsdupload.oss-cn-shanghai.aliyuncs.com/hongxuan-sketch/hongxuan-sketch-module1534385854359.png" alt="">
                <div id="t22" class="white-size26-down-t22">{{item.diamond||0}}</div>
              </div>

            </div>
            <div class="d-an d-item-warp anbg wh22" v-if="diamondlist.length<6">
              <img id="i23" class="w300-h300-i23" src='http://lubanpsdupload.oss-cn-shanghai.aliyuncs.com/hongxuan-sketch/hongxuan-sketch-module1534385853552.png' />
              <div id="t22" class="white-size26-down-t22 do-text">采矿中...</div>
            </div>

          </div>

        </div>
        <div id="g95" class="row-flex-start-w750-h526-up-g95">
          <img id="i2" class="w322-h33-absolute-i2" src='https://gw.alicdn.com/tfs/TB1dlsMJwmTBuNjy1XbXXaMrVXa-322-33.png' />
          <div id="g94" class="row-flex-start-w750-h526-g94">
            <img id="i4" class="w750-h526-background-i4" src='https://gw.alicdn.com/tfs/TB1MrD.JGmWBuNjy1XaXXXCbXXa-750-526.png' />
            <div id="g93" class="column-flex-start-g93">
              <div id="g68" class="row-space-between-w750-g68">
                <div id="t9" class="dkgray-size24-left-t9">更新于每天凌晨0点</div>
                <div id="g98" class="row-flex-start-right-g98">
                  <div id="g65" class="row-center-w200-h60-left-g65" @click="changeRank(1)">

                    <div id="i5" class="w200-h60-background-i5" :class="{'active':ranktype==1}"></div>
                    <div id="t7" class="dkgray-size26-t7" :class="{'activetext':ranktype==1}">源石排行榜</div>
                  </div>
                  <div id="g66" class="row-center-w200-h60-right-g66" @click="changeRank(2)">
                    <!--                     <img id="i6" class="w200-h60-background-i6" src='https://gw.alicdn.com/tfs/TB12bD.JGmWBuNjy1XaXXXCbXXa-200-60.png' />
 -->
                    <div id="i6" class="w200-h60-background-i6" :class="{'active':ranktype==2}"></div>
                    <div id="t8" class="magenta-size26-t8" :class="{'activetext':ranktype==2}">算力排行榜</div>
                  </div>
                </div>
              </div>
              <div v-if="ranktype==1">
                <div id="g72" class="white-row-center-w750-g72">
                  <div id="g99" class="row-space-between-w226-left-g99">
                    <div id="t11" class="black-size24-left-t11">名次</div>
                    <div id="t12" class="black-size24-right-t12">昵称</div>
                  </div>
                  <div id="g100" class="row-space-between-w294-right-g100">
                    <div id="t13" class="black-size24-left-t13">今日所得源石</div>
                    <div id="t14" class="black-size24-right-t14">源石总量</div>
                  </div>
                </div>
                <div v-for="(item,index) in diamondranklist">
                  <div id="g75" class="row-flex-start-w750-g75">
                    <img id="i16" v-if="index==0" class="w50-h54-i16" src='https://gw.alicdn.com/tfs/TB1Grk7JuuSBuNjy1XcXXcYjFXa-50-54.png' />
                    <img id="i16" v-if="index==1" class="w50-h54-i16" src='https://gw.alicdn.com/tfs/TB1HlEMJwmTBuNjy1XbXXaMrVXa-55-55.png' />
                    <img id="i16" v-if="index==2" class="w50-h54-i16" src='https://gw.alicdn.com/tfs/TB17bH.JGmWBuNjy1XaXXXCbXXa-55-55.png' />
                    <div id="t30" v-if="index>=3" class="black-size24-t30">{{index}}</div>

                    <div id="t15" class="black-size24-t15">{{item.username}}</div>
                    <div id="t17" class="black-size24-t17">{{item.today_diamond||0}}</div>
                    <div id="t18" class="black-size24-t18">{{item.diamond}}</div>
                  </div>
                  <img id="i19" class="w750-h3-i19" src='https://gw.alicdn.com/tfs/TB1dYH.JGmWBuNjy1XaXXXCbXXa-750-3.png' />
                </div>
              </div>

              <div v-if="ranktype==2">
                <div id="g72" class="white-row-center-w750-g72">
                  <div id="g99" class="row-space-between-w226-left-g99">
                    <div id="t11" class="black-size24-left-t11">名次</div>
                    <div id="t12" class="black-size24-right-t12">昵称</div>
                  </div>
                  <div id="g100" class="row-space-between-w294-right-g100">
                    <div id="t13" class="black-size24-left-t13">今日所得算力</div>
                    <div id="t14" class="black-size24-right-t14">算力总量</div>
                  </div>
                </div>
                <div v-for="(item,index) in powerranklist">
                  <div id="g75" class="row-flex-start-w750-g75">
                    <!--                     <img id="i16" class="w50-h54-i16" src='https://gw.alicdn.com/tfs/TB1Grk7JuuSBuNjy1XcXXcYjFXa-50-54.png' /> 
 -->
                    <img id="i16" v-if="index==0" class="w50-h54-i16" src='https://gw.alicdn.com/tfs/TB1Grk7JuuSBuNjy1XcXXcYjFXa-50-54.png' />
                    <img id="i16" v-if="index==1" class="w50-h54-i16" src='https://gw.alicdn.com/tfs/TB1HlEMJwmTBuNjy1XbXXaMrVXa-55-55.png' />
                    <img id="i16" v-if="index==2" class="w50-h54-i16" src='https://gw.alicdn.com/tfs/TB17bH.JGmWBuNjy1XaXXXCbXXa-55-55.png' />
                    <div id="t30" v-if="index>=3" class="black-size24-t30">{{index}}</div>

                    <div id="t15" class="black-size24-t15">{{item.username}}</div>
                    <div id="t17" class="black-size24-t17">{{item.today_power||0}}</div>
                    <div id="t18" class="black-size24-t18">{{item.power}}</div>
                  </div>
                  <img id="i19" class="w750-h3-i19" src='https://gw.alicdn.com/tfs/TB1dYH.JGmWBuNjy1XaXXXCbXXa-750-3.png' />
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.an {
  -webkit-animation: pulse 1s linear infinite; /*鼠标hover时，i图标旋转,infinite表示动画无限循环*/
  -moz-animation: pulse 1s linear infinite; /*鼠标hover时，i图标旋转,infinite表示动画无限循环*/
  -o-animation: pulse 1s linear infinite; /*鼠标hover时，i图标旋转,infinite表示动画无限循环*/
  animation: pulse 1s linear infinite;
}
.anbg {
  -webkit-animation: pslideulse 4s linear infinite; /*鼠标hover时，i图标旋转,infinite表示动画无限循环*/
  -moz-animation: pslideulse 4s linear infinite; /*鼠标hover时，i图标旋转,infinite表示动画无限循环*/
  -o-animation: pslideulse 4s linear infinite; /*鼠标hover时，i图标旋转,infinite表示动画无限循环*/
  animation: slide 4s linear infinite;
}
@-webkit-keyframes slide {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  50% {
    -webkit-transform: translate3d(0, 100%, 0);
    -moz-transform: translate3d(0, 100%, 0);
    -o-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, -20%, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@-moz-keyframes slide {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  50% {
    -webkit-transform: translate3d(0, 100%, 0);
    -moz-transform: translate3d(0, 100%, 0);
    -o-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, -20%, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@-o-keyframes slide {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  50% {
    -webkit-transform: translate3d(0, 100%, 0);
    -moz-transform: translate3d(0, 100%, 0);
    -o-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, -20%, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slide {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  50% {
    -webkit-transform: translate3d(0, 100%, 0);
    -moz-transform: translate3d(0, 100%, 0);
    -o-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, -20%, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@-webkit-keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.do-text {
  margin-top: -80px;
}
.d-an {
  left: 0px;
  right: 0px;
  margin: auto;
  top: 240px;
}

.d-item-warp {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.di1 {
  left: 52px;
  top: 238px;
  animation-delay: 0.1s;
}
.di2 {
  left: 102px;
  top: 457px;
  animation-delay: 0.3s;
}
.di3 {
  left: 514px;
  top: 406px;
  animation-delay: 0.2s;
}
.di4 {
  left: 353px;
  top: 527px;
  animation-delay: 0.2s;
}
.di5 {
  left: 460px;
  top: 245px;
  animation-delay: 0.1s;
}
.di6 {
  left: 389px;
  top: 62px;
  animation-delay: 0.3s;
}
.wh22 {
  width: 300px;
}
.w300-h300-i23 {
  position: relative;
  width: 300px;
  height: 300px;
}

.w76-h76-i24 {
  position: relative;
  width: 76px;
  height: 76px;
}
.white-size26-down-t22 {
  position: relative;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #ffffff;
  line-height: 37px;
  font-weight: normal;
}

.white-column-flex-start-w750-g97 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  /*
    background-color: rgba(240, 240, 240, 1);
*/
  display: flex;
}

.column-flex-start-w750-g96 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-bottom: 71px;
  display: flex;
}

.row-flex-start-w750-h526-up-g95 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  height: 526px;
  align-self: flex-start;
  margin-top: -14px;
  display: flex;
}

.w322-h33-absolute-i2 {
  position: absolute;
  width: 322px;
  height: 33px;
  left: 0;
  top: 12px;
}

.row-flex-start-w750-h526-g94 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  height: 526px;
  align-self: flex-start;
  display: flex;
}

.w750-h526-background-i4 {
  position: absolute;
  width: 750px;
  height: 526px;
  left: 0;
  top: 0;
}

.column-flex-start-g93 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: flex-start;
  margin-top: 22px;
  display: flex;
}

.row-space-between-w750-g68 {
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  width: 750px;
  align-self: flex-start;
  display: flex;
}

.dkgray-size24-left-t9 {
  position: relative;
  align-self: flex-end;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #9b9b9b;
  line-height: 33px;
  font-weight: normal;
  margin-top: 27px;
  margin-left: 21px;
}

.row-flex-start-right-g98 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: flex-end;
  margin-right: 18px;
  display: flex;
}

.row-center-w200-h60-left-g65 {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 200px;
  height: 60px;
  align-self: flex-start;
  display: flex;
}

.w200-h60-background-i5 {
  position: absolute;
  width: 200px;
  height: 60px;
  left: 0;
  top: 0;
  border: 1px solid rgba(191, 191, 191, 1); /* no */
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  margin-left: -1px; /* no */
}

.dkgray-size26-t7 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #9b9b9b;
  line-height: 37px;
  font-weight: normal;
  margin-top: 0.5px;
}

.row-center-w200-h60-right-g66 {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 200px;
  height: 60px;
  align-self: flex-start;
  display: flex;
}

.w200-h60-background-i6 {
  position: absolute;
  width: 200px;
  height: 60px;
  left: 0;
  top: 0;
  border: 1px solid rgba(191, 191, 191, 1); /* no */
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}
.active {
  border: 1px solid #9013fe !important; /* no */
}
.activetext {
  color: #9013fe !important;
}
.magenta-size26-t8 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  /*   color: #9013fe;
 */

  color: #9b9b9b;
  line-height: 37px;
  font-weight: normal;
  margin-top: 0.5px;
}

.white-row-center-w750-g72 {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: flex-start;
  background-color: rgba(235, 235, 235, 1);
  margin-top: 17px;
  padding-top: 8.5px;
  padding-bottom: 8px;
  display: flex;
}

.row-space-between-w226-left-g99 {
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  width: 226px;
  align-self: center;
  margin-top: 0.5px;
  display: flex;
}

.black-size24-left-t11 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Light;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
}

.black-size24-right-t12 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Light;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
}

.row-space-between-w294-right-g100 {
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  width: 294px;
  align-self: center;
  margin-top: 0.5px;
  margin-left: 123px;
  display: flex;
}

.black-size24-left-t13 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Light;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
}

.black-size24-right-t14 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Light;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
}

.row-flex-start-w750-g75 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 13px;
  margin-bottom: 11px;
  display: flex;
}

.w50-h54-i16 {
  position: relative;
  width: 50px;
  height: 54px;
  align-self: center;
  margin-left: 54px;
}

.black-size24-t15 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-top: 0.5px;
  margin-left: 69px;
  width: 200px;
}

.black-size24-t17 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-top: 0.5px;
  margin-left: 26px;
  width: 150px;
  text-align: center;
}

.black-size24-t18 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-top: 0.5px;
  margin-left: 26px;
  width: 150px;
  text-align: center;
}

.w750-h3-i19 {
  position: relative;
  width: 750px;
  height: 3px;
  align-self: flex-start;
}

.row-flex-start-w750-g78 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 11px;
  margin-bottom: 11px;
  display: flex;
}

.w55-h55-i28 {
  position: relative;
  width: 55px;
  height: 55px;
  align-self: center;

  margin-left: 52px;
}

.black-size24-t20 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-top: 1px; /* no */
  margin-left: 65px;
}

.black-size24-t21 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-top: 1px;
  margin-left: 106px;
}

.black-size24-t22 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-top: 1px; /* no */
  margin-left: 107px;
}

.w750-h3-i23 {
  position: relative;
  width: 750px;
  height: 3px;
  align-self: flex-start;
}

.row-flex-start-w750-g81 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 10px;
  margin-bottom: 12px;
  display: flex;
}

.w55-h55-i39 {
  position: relative;
  width: 55px;
  height: 55px;
  align-self: center;

  margin-left: 51px;
}

.black-size24-t24 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-top: 2px;
  margin-left: 66px;
}

.black-size24-t25 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-top: 2px;
  margin-left: 106px;
}

.black-size24-t26 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-top: 2px;
  margin-left: 107px;
}

.w750-h3-i27 {
  position: relative;
  width: 750px;
  height: 3px;
  align-self: flex-start;
}

.row-center-w750-g91 {
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 23px;
  margin-bottom: 21px;
  display: flex;
}

.black-size24-t30 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  width: 50px;
  margin-left: 54px;
  text-align: center;
}

.black-size24-t29 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Light;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 86px;
}

.black-size24-t31 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Light;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 106px;
}

.black-size24-t32 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Light;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 107px;
}

.w743-h3-i33 {
  position: relative;
  width: 743px;
  height: 3px;
  align-self: flex-start;

  margin-right: 7px;
}

.row-flex-start-w750-h753-down-g64 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  width: 750px;
  height: 753px;
  align-self: flex-start;
  /*  margin-top: -1263px;*/
  /*
    margin-bottom: 510px;
*/
  display: flex;
}

.w750-h753-background-i3 {
  position: absolute;
  width: 750px;
  height: 753px;
  left: 0;
  top: 0;
}

.column-flex-start-g63 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: flex-end;
  margin-bottom: 4px;
  display: flex;
}

.row-space-between-w750-g56 {
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  display: flex;
}

.column-flex-start-left-g54 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: flex-start;
  display: flex;
}

.row-flex-start-w237-h50-up-g51 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 237px;
  height: 50px;
  align-self: flex-start;
  display: flex;
}

.w237-h50-background-i40 {
  position: absolute;
  width: 237px;
  height: 50px;
  left: 0;
  top: 0;
}

.row-flex-start-g50 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: center;
  margin-top: 0.5px;
  margin-left: 20px;
  display: flex;
}

.w32-h32-left-i44 {
  position: relative;
  width: 32px;
  height: 32px;
  align-self: flex-start;

  margin-bottom: 1px; /* no */
}

.white-size24-right-t43 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #ffffff;
  line-height: 33px;
  font-weight: normal;
  margin-left: 12px;
}

.row-center-w236-h50-down-g53 {
  flex-direction: row;
  /*   justify-content: center;
 */
  align-items: center;
  position: relative;
  width: 236px;
  height: 50px;
  align-self: flex-start;
  margin-top: 12px;
  margin-right: 1px;
  display: flex;
}

.w236-h50-background-i41 {
  position: absolute;
  width: 236px;
  height: 50px;
  left: 0;
  top: 0;
}

.row-flex-start-g52 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: center;
  margin-top: 0.5px;
  margin-left: 20px;
  display: flex;
}

.w32-h32-left-i45 {
  position: relative;
  width: 32px;
  height: 32px;
  align-self: flex-start;

  margin-bottom: 1px; /* no */
}

.white-size24-right-t42 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #ffffff;
  line-height: 33px;
  font-weight: normal;
  margin-left: 13px;
}

.row-center-w164-h70-right-g55 {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 164px;
  height: 70px;
  align-self: flex-start;
  margin-top: 1px;
  margin-bottom: 41px;
  display: flex;
}

.w164-h70-background-i35 {
  position: absolute;
  width: 164px;
  height: 70px;
  left: 0;
  top: 0;
}

.yellow-size24-t36 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #f8e71c;
  line-height: 33px;
  font-weight: normal;
  margin-top: 0.5px;
}

.row-space-between-w750-g60 {
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 444px;
  display: flex;
}

.row-flex-start-left-g101 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  align-self: flex-end;
  margin-top: 39px;
  margin-bottom: 10px;
  margin-left: 63px;
  display: flex;
}

.w54-h54-left-i46 {
  position: relative;
  width: 54px;
  height: 54px;
  align-self: flex-start;

  margin-top: 3px;
  margin-bottom: 3px;
}

.w60-h60-right-i47 {
  position: relative;
  width: 60px;
  height: 60px;
  align-self: flex-start;

  margin-left: 92px;
}

.column-flex-start-right-g59 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  align-self: flex-end;
  margin-right: 21px;
  display: flex;
}

.row-center-w157-h60-up-g58 {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 157px;
  height: 60px;
  align-self: flex-end;
  margin-left: 107px;
  display: flex;
}

.w157-h60-background-i37 {
  position: absolute;
  width: 157px;
  height: 60px;
  left: 0;
  top: 0;
}

.white-size26-t38 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #ffffff;
  line-height: 37px;
  font-weight: normal;
  margin-top: 1.5px;
}

.white-size24-down-t34 {
  position: relative;
  align-self: flex-end;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #ffffff;
  line-height: 33px;
  font-weight: normal;
  margin-top: 16px;
}

.row-space-between-w750-g61 {
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: -4px;
  display: flex;
}

.yellow-size24-left-t48 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #f8e71c;
  line-height: 33px;
  font-weight: normal;
  margin-left: 43px;
}

.yellow-size24-right-t49 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #f8e71c;
  line-height: 33px;
  font-weight: normal;
  margin-right: 464px;
}
</style>
<script>
import util from '../lib/util.js';
export default {
  data: function() {
    return {
      usreData: {},
      ranktype: 1,
      powerranklist: [],
      diamondranklist: [],
      diamondValue: 0,
      diamondlist: []
    };
  },
  components: {},
  methods: {
    closeLogin: function() {
      api.closeWin();
    },
    changeRank: function(index) {
      this.ranktype = index;
      //this.ranktype = index;
    },
    goCheats: function() {
      util.goPage('./mining-cheats.html');
    },
    goShop: function() {
      util.goPage('./mining-shop.html');
    },
    goCalculateDetail: function() {
      util.goPage('./mining-calculate-detail.html');
    },
    goSteal: function() {
      util.goPage('./mining-steal.html');
    },
    goOriginDetail: function() {
      util.goPage('./mining-origin-detail.html');
    },
    goGetCalculate: function() {
      util.goPage('./mining-get-calculate.html');
    },
    getpowerrank: function() {
      var self = this;
      util.ajax(
        'https://restful.yatou.com/user/powerrank/',
        {},
        function(res) {
          console.log(res);
          self.powerranklist = res;
        },
        'GET'
      );
    },
    getdiamondrank: function() {
      var self = this;
      util.ajax(
        'https://restful.yatou.com/user/diamondrank/',
        {},
        function(res) {
          console.log(res);
          self.diamondranklist = res;
        },
        'GET'
      );
    },

    getOrigin: function(item) {
      var self = this;
      console.log('ssxxx');
      util.ajax(
        'https://restful.yatou.com/user/getdiamond/',
        {
          gid: item.id
        },
        function(res) {
          item.isget = true;
          util.alert(res.msg);
        }
      );
    },
    getdiamondlist: function() {
      var self = this;
      util.ajax(
        'https://restful.yatou.com/user/getdiamond/',
        {},
        function(res) {
          console.log('getdiamondlist');
          console.log(res);
          self.diamondlist = res;
        },
        'GET'
      );
    },

    getdiamondValue: function() {
      var self = this;
      util.ajax(
        'https://restful.yatou.com/user/diamondcount/',
        {},
        function(res) {
          console.log(res);
          self.diamondValue = res;
        },
        'GET'
      );
    },
    initcc: function() {
      var self = this;
      util.getUserInfo(function(data) {
        if (data) {
          self.usreData = data;
        }
      });

      self.getpowerrank();
      self.getdiamondrank();
      self.getdiamondValue();
      self.getdiamondlist();
    },
    initcreated: function() {
      var self = this;
      self.initcc();
      util.addEvent('myrefresh', function() {
        self.initcc();
      });
      util.addEvent('myclear', function() {
        self.usreData = {};
      });
    }
  },
  created: function() {
    this.initcreated();
  }
};
</script>
