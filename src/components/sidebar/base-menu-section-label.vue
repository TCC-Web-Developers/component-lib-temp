<script setup>
const props = defineProps({
  isSidebarOpen: Boolean,
  isSidebarHovering: Boolean,
});
</script>

<template>
  <div v-show="isSidebarOpen || isSidebarHovering" class="menu-section-label">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-item.scss";
</style>
