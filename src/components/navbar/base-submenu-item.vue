<script setup>
const props = defineProps({
  href: String,
});
const emits = defineEmits(["handleMouseOver", "handleMouseLeave"]);

const handleMouseOver = () => {
  emits("handleMouseOver");
};

const handleMouseLeave = () => {
  emits("handleMouseLeave");
};
</script>

<template>
  <li
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
    class="menu-item menu-submenu-item"
  >
    <a :href="href" class="menu-link d-flex align-items-center">
      <slot></slot>
    </a>
    <slot name="subnav"></slot>
  </li>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/navbar/menu-item.scss";
</style>
