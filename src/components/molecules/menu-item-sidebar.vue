<script setup>
import BaseMenuItem from "@/components/sidebar/base-menu-item.vue";
import IconPlaceholder from "@/components/icons/icon-placeholder.vue";
import BaseMenuItemLabel from "@/components/sidebar/base-menu-item-label.vue";
import BaseMenuItemArrow from "@/components/sidebar/base-menu-item-arrow.vue";
import BaseMenuItemIcon from "@/components/sidebar/base-menu-item-icon.vue";
</script>

<template>
  <BaseMenuItem :href="'#'">
    <BaseMenuItemIcon>
      <IconPlaceholder />
    </BaseMenuItemIcon>
    <BaseMenuItemLabel style="flex-grow: 1"> Applications </BaseMenuItemLabel>
    <BaseMenuItemArrow style="flex: 0 0 20px" />
  </BaseMenuItem>
</template>

<style lang="scss" scoped></style>
