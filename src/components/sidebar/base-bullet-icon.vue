<script setup>
const props = defineProps({
  bulletType: String,
});
</script>

<template>
  <i class="bi" :class="[`bi-${bulletType}`, `${bulletType}-bullet-icon`]"></i>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-item.scss";
</style>
