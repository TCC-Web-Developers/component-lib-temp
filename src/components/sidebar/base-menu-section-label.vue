<script setup>
import { useSidebarStore } from "@/stores/sidebar.js";
const sidebar = useSidebarStore();
</script>

<template>
  <div v-show="sidebar.isOpen || sidebar.isHovering" class="menu-section-label">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-item.scss";
</style>
