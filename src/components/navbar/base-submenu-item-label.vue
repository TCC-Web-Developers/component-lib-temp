<script setup>
import BaseLabel from "@/components/navbar/base-label.vue";
// import BaseLabel from "./base-label.vue";
</script>

<template>
  <BaseLabel class="submenu-item-label">
    <slot></slot>
  </BaseLabel>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/navbar.scss";
</style>
