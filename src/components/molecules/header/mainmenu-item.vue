<script setup>
import BaseMainMenuItem from "@/components/header/base-mainmenu-item.vue";
import BaseLabel from "@/components/header/base-label.vue";

const props = defineProps({
  label: { type: String, default: "label" },
  isActive: { type: Boolean, default: false },
  hasSubmenu: { type: Boolean, default: false },
});
const emits = defineEmits(["handleClickItem"]);

const handleClickItem = () => {
  emits("handleClickItem");
};
</script>

<template>
  <BaseMainMenuItem
    @handleClickItem="handleClickItem"
    :class="[isActive ? 'main-menu-item-active' : '']"
  >
    <template #default>
      <BaseLabel>{{ label }}</BaseLabel>
    </template>
    <template v-if="hasSubmenu" #submenu>
      <slot name="main-menu-submenu"></slot>
    </template>
  </BaseMainMenuItem>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/navbar.scss";
</style>
