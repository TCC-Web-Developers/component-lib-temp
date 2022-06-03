<script setup>
const props = defineProps({
  isActive: Boolean,
});
</script>

<template>
  <span class="menu-item-arrow d-flex justify-content-end">
    <i class="bi bi-chevron-right" :class="[isActive ? 'active' : '']"></i>
  </span>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-item.scss";
</style>
