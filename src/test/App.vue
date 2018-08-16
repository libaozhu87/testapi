<template>
  <div>
    <div class="white-column-flex-start-w750-g21">
      <statusbar></statusbar>
      <navbar title="test"></navbar>
      <div id="t9" class="white-size30-t9">test</div>

    </div>
  </div>
</template>

<style scoped>
.white-size30-t9 {
  position: relative;
  align-self: center;
  font-family: PingFangSC-Medium;
  font-size: 30px;
  color: red;
  line-height: 42px;
  font-weight: bold;
  margin-top: 12px;
  margin-left: 0.5px;
}
</style>

<script>
import statusbar from '../../compents/statusbar.vue';
import navbar from '../../compents/navbar.vue';
export default {
  data: function() {
    return {};
  },
  components: { statusbar, navbar },
  methods: {},
  created: function() {}
};
</script>
