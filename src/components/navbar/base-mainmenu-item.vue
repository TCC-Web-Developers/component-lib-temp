<script setup>
const emits = defineEmits(["handleClickItem"]);

const handleClickItem = () => {
  emits("handleClickItem");
};
</script>

<template>
  <li class="d-flex align-items-center main-menu-item">
    <a @click="handleClickItem" href="#" class="main-menu-item-link">
      <slot></slot>
    </a>
    <slot name="submenu"></slot>
  </li>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/navbar.scss";
</style>
