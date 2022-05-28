<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import BaseMenuItem from "@/components/sidebar/base-menu-item.vue";
import IconPlaceholder from "@/components/icons/icon-placeholder.vue";
import BaseMenuItemLabel from "@/components/sidebar/base-menu-item-label.vue";
import BaseMenuItemArrow from "@/components/sidebar/base-menu-item-arrow.vue";
import BaseMenuItemIcon from "@/components/sidebar/base-menu-item-icon.vue";
import BaseBulletIcon from "@/components/sidebar/base-bullet-icon.vue";
//STATE
import { useSidebarStore } from "@/stores/sidebar.js";
//
import Collapse from "@/utils/Collapse.js";

const sidebar = useSidebarStore();
const route = useRoute();
const itemsRef = ref(null);
const props = defineProps({
  href: String,
  itemsLength: Number,
  label: String,
  type: {
    type: String,
    validator(value) {
      return ["menu-item", "submenu-item", "link-item"].includes(value);
    },
  },
  bulletType: { type: String, default: "" },
  itemLevel: { type: String, default: "root" },
  isCollapsible: { type: Boolean, default: false },
  isLink: { type: Boolean, default: false },
  parentTag: String,
});

const handleToggleItem = () => {
  if (!props.isCollapsible) return;
  const submenu = new Collapse(itemsRef.value, 40, props.itemsLength);
  submenu.activate();
};
</script>

<template>
  <BaseMenuItem
    @handleToggleItem="handleToggleItem"
    v-show="(sidebar.isOpen || sidebar.isHovering) | (itemLevel === 'root')"
    :href="isLink ? href : 'javascript:;'"
    :type="type"
    :itemLevel="itemLevel"
  >
    <template #menu-item>
      <BaseMenuItemIcon v-if="type === 'menu-item'">
        <IconPlaceholder />
      </BaseMenuItemIcon>
      <BaseBulletIcon
        v-if="type === 'submenu-item' || type === 'link-item'"
        :bulletType="bulletType"
      />
      <BaseMenuItemLabel> {{ label }} </BaseMenuItemLabel>
      <BaseMenuItemArrow v-if="!isLink" />
    </template>
    <template v-if="isCollapsible" #submenu>
      <ul
        ref="itemsRef"
        class="submenu"
        :class="[`${itemLevel}-submenu`]"
        data-status="hidden"
        :data-level="itemLevel"
        :data-label="label"
        :data-tag="parentTag"
      >
        <slot></slot>
      </ul>
    </template>
  </BaseMenuItem>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-item.scss";

.submenu {
  transition: 0.3s max-height linear;
  list-style: none;
  padding: 0;

  &.root-submenu,
  &.first-submenu,
  &.second-submenu,
  &.third-submenu {
    max-height: 0px;
    overflow: hidden;
  }
}
</style>
