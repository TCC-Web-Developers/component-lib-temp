<script setup>
import BaseLink from "@/components/global/base-link.vue";
//menu types => item, section
const props = defineProps({
  href: String,
  type: String,
});
</script>

<template>
  <li class="menu-item">
    <BaseLink
      :href="href"
      class="d-flex align-items-center menu-item-link"
      data-bs-toggle="collapse"
    >
      <slot></slot>
    </BaseLink>
  </li>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-item.scss";
</style>
