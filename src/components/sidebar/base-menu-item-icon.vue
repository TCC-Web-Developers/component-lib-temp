<script setup>
import BaseSvgIcon from "@/components/global/base-svg-icon.vue";
</script>

<template>
  <BaseSvgIcon
    class="d-flex align-items-center menu-item-icon justify-content-start"
  >
    <slot></slot>
  </BaseSvgIcon>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-item.scss";
</style>
