<script setup>
import BaseMainMenuItem from "@/components/navbar/base-mainmenu-item.vue";
</script>

<template>
  <BaseMainMenuItem>
    <slot name="main-menu-label"></slot>
    <slot name="main-menu-submenu"></slot>
  </BaseMainMenuItem>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/navbar.scss";
</style>
