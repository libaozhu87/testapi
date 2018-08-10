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
  .bar{
    position: absolute;
    top:0px;
    left: 0px;
    z-index: 99;
    background-color: #fff;

  }
</style>
<script>
export default {
  methods: {},
  created: function() {}
};
</script>