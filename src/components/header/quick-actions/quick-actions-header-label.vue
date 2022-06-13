<script setup>
const props = defineProps({
  label: { type: String, default: "Label" },
});
</script>

<template>
  <span class="quick-actions-label align-self-center mb-1">{{ label }}</span>
</template>

<style lang="scss" scoped>
span {
  text-transform: capitalize;
  font-size: calc(1rem + 0.12vw);
  font-weight: var(--font-medium);
}
</style>
