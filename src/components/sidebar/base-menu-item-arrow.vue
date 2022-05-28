<script setup>
import { useSidebarStore } from "@/stores/sidebar.js";
const sidebar = useSidebarStore();
</script>

<template>
  <span
    v-show="sidebar.isOpen || sidebar.isHovering"
    class="menu-item-arrow d-flex justify-content-end"
  >
    <i class="bi bi-chevron-right"></i>
  </span>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-item.scss";
</style>
