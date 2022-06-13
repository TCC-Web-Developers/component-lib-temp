<script setup>
const props = defineProps({
  count: { type: Number, default: 0 },
});
</script>

<template>
  <button class="btn btn-primary btn-sm text-light align-self-center">
    {{ count }} new tasks
  </button>
</template>

<style lang="scss" scoped>
button {
  font-size: 12px;
  font-weight: var(--font-medium);
  padding: 7.15px 9.75px;
  margin-top: 6.5px;
  line-height: 1.35;
}
</style>
