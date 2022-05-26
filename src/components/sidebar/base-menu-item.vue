<script setup>
import BaseLink from "@/components/global/base-link.vue";
//menu types => item, section
const props = defineProps({
  href: String,
  type: String,
  itemLevel: String,
});
</script>

<template>
  <li class="menu-item-wrapper">
    <BaseLink
      :href="href"
      class="d-flex align-items-center"
      :class="[`${type}`, `${itemLevel}-level-item`]"
    >
      <slot name="menu-item"></slot>
    </BaseLink>
    <slot name="submenu"></slot>
  </li>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-item.scss";
</style>
