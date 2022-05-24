<script setup>
import BaseLink from "@/components/global/base-link.vue";
const props = defineProps({
  href: String,
});
</script>

<template>
  <li class="menu-item-wrapper">
    <BaseLink :href="href" class="d-flex align-items-center menu-item">
      <slot></slot>
    </BaseLink>
  </li>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-item.scss";
</style>
