<script setup>
import { useSidebarStore } from "@/stores/sidebar.js";
const sidebar = useSidebarStore();
</script>

<template>
  <div
    class="navbar"
    :class="[`navbar-sidebar-${sidebar.isOpen ? 'open' : 'close'}`]"
  ></div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/navbar.scss";
</style>
