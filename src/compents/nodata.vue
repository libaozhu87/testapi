<template>
  <div class="statusbar">
    <div class="bar">{{title}}</div>
  </div>
</template>
<style scoped>
.statusbar {
  width: 750px;
  margin-top: 30%;
}
.bar {
  width: 750px;
  font-size: 28px;
  color: #999999;
  text-align: center;
}
</style>
<script>
export default {
  props: ['title'],
  data: function() {
    return {};
  },
  methods: {},
  created: function() {}
};
</script>