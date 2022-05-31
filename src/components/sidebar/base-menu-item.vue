<script setup>
import BaseLink from "@/components/global/base-link.vue";
//menu types => item, section
const props = defineProps({
  href: String,
  type: String,
  itemLevel: String,
  currentRoute: String,
});
const emit = defineEmits(["handleToggleItem"]);

const handleToggleItem = () => {
  emit("handleToggleItem");
};
</script>

<template>
  <li class="menu-item-wrapper">
    <BaseLink
      @click="handleToggleItem"
      :href="href"
      class="d-flex align-items-center"
      data-active="false"
      :class="[
        `${type}`,
        `${itemLevel}-level-item`,
        currentRoute === href ? 'active' : '',
      ]"
    >
      <slot name="menu-item"></slot>
    </BaseLink>
    <slot name="submenu"></slot>
  </li>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-item.scss";
</style>
