<script setup>
import { useSidebarStore } from "@/stores/sidebar.js";
const sidebar = useSidebarStore();
</script>

<template>
  <span
    v-if="sidebar.isOpen"
    class="d-flex align-items-center font-poppins menu-item-label"
  >
    <slot></slot>
  </span>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-item.scss";
</style>
