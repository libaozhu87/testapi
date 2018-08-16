<template>
  <div class="statusbar">
    <div class="bar"></div>
  </div>
</template>
<style scoped>
.statusbar {
  height: 40px;
  position: relative;
  background-color: #fff;
  z-index: 99;
  width: 750px;
}
.bar {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 99;
  height: 40px;
  width: 750px;

  background-color: #fff;
}
</style>
<script>
export default {
  data: function() {
    return {};
  },
  methods: {},
  created: function() {}
};
</script>