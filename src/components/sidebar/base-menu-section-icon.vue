<script setup>
const props = defineProps({
  isSidebarOpen: Boolean,
  isSidebarHovering: Boolean,
});
</script>

<template>
  <span v-show="!isSidebarOpen && !isSidebarHovering" class="menu-section-icon">
    <i class="bi bi-three-dots"></i>
  </span>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-section.scss";
</style>
