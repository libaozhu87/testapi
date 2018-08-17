<template>
  <div>
    <div class="white-column-flex-start-w750-g29">
      <statusbar></statusbar>
      <navbar title="商品兑换"></navbar>

      <div @click="goDetail" id="g18" v-for="item in list" class="white-column-flex-start-w750-h782-down-g18">
        <div id="s8" class="ltgray-w315-h257-s8"></div>
        <div id="t6" class="black-size28-t6">手机话费20元</div>
        <div id="g16" class="row-flex-start-w750-g16">
          <div id="t7" class="dkgray-size24-t7">价格：</div>
          <div id="t9" class="red-size28-t9">20</div>
          <img id="i10" class="w23-h25-i10" src='https://gw.alicdn.com/tfs/TB1LA5_cy6guuRjy1XdXXaAwpXa-23-25.png' />
        </div>
      </div>
      <div v-if="!list.length">
        <nodata title="暂时没有商品可以兑换"></nodata>
      </div>
    </div>
  </div>
</template>


<style scoped>
.white-column-flex-start-w750-h782-down-g18 {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 750px;
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);

  display: flex;
}

.ltgray-w315-h257-s8 {
  position: relative;
  width: 315px;
  height: 257px;
  align-self: flex-start;
  background-color: rgba(216, 216, 216, 1);
  border-color: rgba(151, 151, 151, 1);
  border-style: solid;
  border-width: 1px;
  margin-top: 30px;
  margin-left: 30px;
}

.black-size28-t6 {
  position: relative;
  align-self: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 28px;
  color: #3a3a3a;
  line-height: 40px;
  font-weight: normal;
  margin-top: 3px;
  margin-left: 31px;
}

.row-flex-start-w750-g16 {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  width: 750px;
  align-self: flex-start;
  display: flex;
}

.dkgray-size24-t7 {
  position: relative;
  align-self: flex-end;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #9b9b9b;
  line-height: 33px;
  font-weight: normal;
  margin-top: 7px;
  margin-left: 31px;
}

.red-size28-t9 {
  position: relative;
  align-self: flex-end;
  font-family: PingFangSC-Semibold;
  font-size: 28px;
  color: #c01e00;
  line-height: 40px;
  font-weight: normal;
}

.w23-h25-i10 {
  position: relative;
  width: 23px;
  height: 25px;
  align-self: center;

  margin-bottom: 0.5px;
  margin-left: 6px;
}
</style>



<script>
import statusbar from '../compents/statusbar.vue';
import navbar from '../compents/navbar.vue';
import nodata from '../compents/nodata.vue';
import util from '../lib/util.js';

export default {
  data: function() {
    return { list: [] };
  },
  components: { statusbar, navbar, nodata },

  methods: {
    goDetail: function() {
      util.goPage('./mining-shop-detail.html');
    },
    getshoplist: function() {
      var self = this;

      util.ajax(
        'https://restful.yatou.com/shop/',
        {},
        function(res) {
          self.list = res;
        },
        'GET'
      );
    }
  },
  created: function() {
    this.getshoplist();
  }
};
</script>
