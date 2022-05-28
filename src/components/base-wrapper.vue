<script setup>
const props = defineProps({
  isSidebarOpen: Boolean,
});
</script>

<template>
  <div
    class="wrapper"
    :class="[`wrapper-sidebar-${isSidebarOpen ? 'open' : 'close'}`]"
  >
    <slot name="navigation-bar"></slot>
    <slot name="main-content"></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/navbar-and-content-wrapper.scss";
</style>
