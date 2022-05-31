<script setup>
import BaseMainMenuItem from "@/components/navbar/base-mainmenu-item.vue";

const emits = defineEmits(["handleClickItem"]);

const handleClickItem = () => {
  emits("handleClickItem");
};
</script>

<template>
  <BaseMainMenuItem @handleClickItem="handleClickItem">
    <template #default>
      <slot name="main-menu-label"></slot>
    </template>
    <template #submenu>
      <slot name="main-menu-submenu"></slot>
    </template>
  </BaseMainMenuItem>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/navbar.scss";
</style>
