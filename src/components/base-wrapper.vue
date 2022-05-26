<script setup>
import { useSidebarStore } from "@/stores/sidebar.js";
const sidebar = useSidebarStore();
</script>

<template>
  <div
    class="wrapper"
    :class="[`wrapper-sidebar-${sidebar.isOpen ? 'open' : 'close'}`]"
  >
    <slot name="navigation-bar"></slot>
    <slot name="main-content"></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/navbar-and-content-wrapper.scss";
</style>
