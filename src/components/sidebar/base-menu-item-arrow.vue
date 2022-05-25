<script setup>
const props = defineProps({
  isShow: Boolean,
});
</script>

<template>
  <span v-show="isShow">
    <i
      class="bi bi-chevron-right d-flex justify-content-end menu-item-arrow"
    ></i>
  </span>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-item.scss";
</style>
