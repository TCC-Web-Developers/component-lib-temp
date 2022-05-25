<script setup>
import { useSidebarStore } from "@/stores/sidebar.js";
const sidebar = useSidebarStore();
</script>

<template>
  <span v-show="!sidebar.isOpen" class="menu-section-icon">
    <i class="bi bi-three-dots"></i>
  </span>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-section.scss";
</style>
