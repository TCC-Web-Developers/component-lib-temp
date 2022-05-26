<script setup>
import BaseMenuItem from "@/components/sidebar/base-menu-item.vue";
import IconPlaceholder from "@/components/icons/icon-placeholder.vue";
import BaseMenuItemLabel from "@/components/sidebar/base-menu-item-label.vue";
import BaseMenuItemArrow from "@/components/sidebar/base-menu-item-arrow.vue";
import BaseMenuItemIcon from "@/components/sidebar/base-menu-item-icon.vue";
import BaseBulletIcon from "@/components/sidebar/base-bullet-icon.vue";
const props = defineProps({
  href: String,
  label: String,
  type: String,
  bulletType: { type: String, default: "" },
  isCollapsible: Boolean,
  itemLevel: { type: String, default: "default" },
});
</script>

<template>
  <BaseMenuItem :href="href" :type="type" :itemLevel="itemLevel">
    <template #menu-item>
      <BaseMenuItemIcon v-if="type === 'menu-item'">
        <IconPlaceholder />
      </BaseMenuItemIcon>
      <BaseBulletIcon
        v-if="type === 'submenu-item' || type === 'link-item'"
        :bulletType="bulletType"
      />
      <BaseMenuItemLabel> {{ label }} </BaseMenuItemLabel>
      <BaseMenuItemArrow :isShow="isCollapsible" />
    </template>
    <template #submenu>
      <ul :class="['submenu-items']">
        <slot></slot>
      </ul>
    </template>
  </BaseMenuItem>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-item.scss";

.submenu-items {
  overflow: hidden;
  transition: 0.2s max-height linear;
  list-style: none;
  padding: 0;
}
</style>
