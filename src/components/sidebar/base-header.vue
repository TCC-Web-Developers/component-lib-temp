<script setup>
const props = defineProps({
  isSidebarOpen: Boolean,
});
</script>

<template>
  <div
    class="sidebar-header d-flex align-items-center px-menu-item"
    :class="[`justify-content-${isSidebarOpen ? 'between' : 'center'}`]"
  >
    <slot name="header-logo"></slot>
    <slot name="header-menu-btn"></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/sidebar-header.scss";
</style>
