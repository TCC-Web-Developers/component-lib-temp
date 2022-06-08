<script setup>
import BaseSvgIcon from "@/components/global/base-svg-icon.vue";
const props = defineProps({
  icon: String,
});
</script>

<template>
  <BaseSvgIcon class="d-flex align-items-center menu-item-icon">
    <component :is="icon"></component>
  </BaseSvgIcon>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-item.scss";
</style>
