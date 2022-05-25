<script setup>
import BaseMenuItem from "@/components/sidebar/base-menu-item.vue";
import IconPlaceholder from "@/components/icons/icon-placeholder.vue";
import BaseMenuItemLabel from "@/components/sidebar/base-menu-item-label.vue";
import BaseMenuItemArrow from "@/components/sidebar/base-menu-item-arrow.vue";
import BaseMenuItemIcon from "@/components/sidebar/base-menu-item-icon.vue";

const props = defineProps(["isShow", "href"]);
</script>

<template>
  <BaseMenuItem :href="href">
    <BaseMenuItemIcon>
      <IconPlaceholder />
    </BaseMenuItemIcon>
    <BaseMenuItemLabel> Application </BaseMenuItemLabel>
    <BaseMenuItemArrow :isShow="isShow" />
  </BaseMenuItem>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-item.scss";
</style>
