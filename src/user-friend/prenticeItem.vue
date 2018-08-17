<template>
  <div>
    <div id="g51" class="white-column-flex-start-w750-g51">
      <div id="g28" class="row-center-w750-g28">
        <div id="t25" class="magenta-size26-t25">昨日贡献：0</div>
        <img id="i24" class="w38-h41-i24" src='https://gw.alicdn.com/tfs/TB1ngiUJwmTBuNjy1XbXXaMrVXa-38-41.png' />
        <div id="t26" class="magenta-size26-t26">0：总贡献</div>
      </div>
      <div id="g32" class="white-row-flex-start-w750-g32">
        <div id="t9" class="black-size22-t9">排名</div>
        <div id="t2" class="black-size22-t2">昵称</div>
        <div id="t3" class="black-size22-t3">昨天贡献</div>
        <div id="t4" class="black-size22-t4">总贡献</div>
      </div>
      <div v-for="(item,index) in list">
        <div id="g36" class="white-row-flex-start-w750-g36">
          <div id="t6" class="black-size24-t6">{{index}}</div>
          <div id="t8" class="black-size24-t8">{{item.username}}</div>
          <div id="t10" class="black-size24-t10">{{item.diamond}}</div>
          <div id="t7" class="black-size24-t7">{{item.power}}</div>
        </div>
        <!--         <img id="i11" class="w750-h2-i11" src='https://gw.alicdn.com/tfs/TB1fI1gJGmWBuNjy1XaXXXCbXXa-750-2.png' />
 --></div>

    </div>

  </div>
  </div>
</template>
<style scoped>
.white-column-flex-start-w750-g51 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  background-color: rgba(240, 240, 240, 1);
  display: flex;
}

.row-center-w750-g28 {
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 22px;
  display: flex;
}

.magenta-size26-t25 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #9013fe;
  line-height: 37px;
  font-weight: normal;
  margin-top: 2px;
  margin-bottom: 2px;
}

.w38-h41-i24 {
  position: relative;
  width: 38px;
  height: 41px;
  align-self: flex-start;
  resize: stretch;
  margin-left: 182px;
}

.magenta-size26-t26 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #9013fe;
  line-height: 37px;
  font-weight: normal;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-left: 201px;
}

.white-row-flex-start-w750-g32 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: flex-start;
  background-color: rgba(235, 235, 235, 1);
  margin-top: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
}

.black-size22-t9 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 22px;
  color: #3a3a3a;
  line-height: 30px;
  font-weight: normal;
  margin-left: 38px;
}

.black-size22-t2 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 22px;
  color: #3a3a3a;
  line-height: 30px;
  font-weight: normal;
  margin-left: 132px;
}

.black-size22-t3 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 22px;
  color: #3a3a3a;
  line-height: 30px;
  font-weight: normal;
  margin-left: 160px;
}

.black-size22-t4 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 22px;
  color: #3a3a3a;
  line-height: 30px;
  font-weight: normal;
  margin-left: 100px;
}

.white-row-flex-start-w750-g36 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  border-bottom: 1px solid #d5d5d5 /* no */;
  padding-top: 28px;
  padding-bottom: 28.5px;
  display: flex;
}

.black-size24-t6 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  width: 60px;
  margin-bottom: 0.5px;
  text-align: center;
  margin-left: 26px;
}

.black-size24-t8 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-bottom: 0.5px;
  margin-left: 50px;
  width: 220px;
  text-align: center;
}

.black-size24-t10 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-bottom: 0.5px;
  width: 150px;
  text-align: center;
  margin-left: 30px;
}

.black-size24-t7 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-bottom: 0.5px;
  text-align: center;
  width: 150px;
  margin-left: 30px;
}
.w750-h2-i11 {
  position: relative;
  width: 750px;
  height: 2px;
  align-self: flex-start;
  resize: stretch;
}

.white-row-flex-start-w750-g40 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 750px;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  margin-top: -1px;
  padding-top: 28px;
  padding-bottom: 28.5px;
  display: flex;
}

.black-size24-t13 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Light;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-bottom: 0.5px;
  margin-left: 56px;
}

.black-size24-t15 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-bottom: 0.5px;
  margin-left: 82px;
}

.black-size24-t16 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-bottom: 0.5px;
  margin-left: 111px;
}

.black-size24-t14 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-bottom: 0.5px;
  margin-left: 112px;
}

.column-flex-start-w750-g46 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: -1px;
  margin-bottom: 744px;
  display: flex;
}

.w750-h2-up-i17 {
  position: relative;
  width: 750px;
  height: 2px;
  align-self: flex-start;
  resize: stretch;
}

.column-flex-start-w750-h91-down-g45 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  height: 91px;
  align-self: flex-start;
  margin-top: -1px;
  display: flex;
}

.white-w750-h90-absolute-s18 {
  position: absolute;
  width: 750px;
  height: 90px;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 1);
}

.column-flex-start-w750-g44 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-top: 28px;
  display: flex;
}

.row-flex-start-w750-up-g43 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  margin-bottom: 28px;
  display: flex;
}

.black-size24-t19 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Light;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 56px;
}

.black-size24-t21 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 82px;
}

.black-size24-t22 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 111px;
}

.black-size24-t20 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: #3a3a3a;
  line-height: 33px;
  font-weight: normal;
  margin-left: 112px;
}

.w750-h2-down-i23 {
  position: relative;
  width: 750px;
  height: 2px;
  align-self: flex-start;
  resize: stretch;
}
</style>

<script>
export default {
  props: ['list'],
  data: function() {
    return {};
  },
  components: {},
  methods: {},
  created: function() {}
};
</script>
